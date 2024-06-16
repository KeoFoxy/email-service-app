use crate::models::EmailProps;
use std::fs::{self, OpenOptions};
use std::io;
use std::io::{BufReader, Write};
use uuid::Uuid;

pub fn save_email(email: EmailProps) -> io::Result<()> {
    let dir_path = "storage";
    let file_path = "storage/emails.json";

    if !fs::metadata(dir_path).is_ok() {
        fs::create_dir_all(dir_path)?;
    }

    let file = OpenOptions::new()
        .read(true)
        .write(true)
        .create(true)
        .open(file_path)?;

    let mut emails: Vec<EmailProps> = if file.metadata()?.len() == 0 {
        vec![]
    } else {
        let reader = BufReader::new(&file);
        serde_json::from_reader(reader)?
    };

    emails.push(email);

    let mut file = OpenOptions::new()
        .write(true)
        .truncate(true)
        .open(file_path)?;
    file.write_all(serde_json::to_string_pretty(&emails)?.as_bytes())?;

    Ok(())
}

pub fn read_emails() -> io::Result<Vec<EmailProps>> {
    let file_path = "storage/emails.json";

    let file = OpenOptions::new().read(true).open(file_path)?;

    let reader = BufReader::new(file);
    let mut emails: Vec<EmailProps> = serde_json::from_reader(reader)?;

    for email in &mut emails {
        if email.id.is_empty() {
            email.id = Uuid::new_v4().to_string();
        }
    }

    Ok(emails)
}
