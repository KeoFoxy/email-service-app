use actix_web::{web, HttpResponse, Responder};
use lettre::{AsyncSmtpTransport, AsyncTransport, Message, Tokio1Executor, Transport};
use lettre::transport::smtp::authentication::Credentials;
use lettre::transport::smtp::client::{Tls, TlsParameters};
use std::env;
use crate::models::{EmailProps, EmailRequest};
use crate::email_utils::{save_email, read_emails};

pub async fn send_email(req: web::Json<EmailRequest>) -> impl Responder {
    let email = Message::builder()
        .from(env::var("SMTP_USERNAME").unwrap().parse().unwrap())
        .to(req.email.parse().unwrap())
        .subject("New message")
        .body(req.content.clone())
        .unwrap();

    let creds = Credentials::new(
        env::var("SMTP_USERNAME").unwrap(),
        env::var("SMTP_PASSWORD").unwrap(),
    );

    let tls = TlsParameters::builder("smtp.gmail.com".to_owned())
        .dangerous_accept_invalid_certs(true)
        .build()
        .unwrap();

    let mailer = AsyncSmtpTransport::<Tokio1Executor>::relay("smtp.gmail.com")
        .unwrap()
        .port(465)
        .tls(Tls::Wrapper(tls))
        .credentials(creds)
        .build();

    match mailer.send(email).await {
        Ok(_) => {
            println!("Email sent successfully");
            HttpResponse::Ok().json("Email sent successfully")
        }
        Err(e) => {
            println!("Could not send email! {:?}", e);
            HttpResponse::InternalServerError().json(format!("Failed to send email: {}", e))
        }
    }
}

pub async fn get_emails() -> impl Responder {
    let emails = read_emails();
    HttpResponse::Ok().json(emails)
}
