mod handlers;
mod models;
mod email_utils;

use actix_web::{web, App, HttpServer};
use actix_cors::Cors;
use dotenv::dotenv;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();

    HttpServer::new(|| {
        let cors = Cors::default()
            .allow_any_origin()
            .allow_any_method()
            .allow_any_header()
            .supports_credentials();

        App::new()
            .wrap(cors)
            .route("/send-email", web::post().to(handlers::send_email))
            .route("/get-emails", web::get().to(handlers::get_emails))
    })
        .bind("0.0.0.0:8080")?
        .run()
        .await
}
