use crate::models::EmailProps;
use std::fs::{OpenOptions, File};
use std::io::{Read, Write};

pub fn save_email(new_email: EmailProps) {
    let file_path = "emails.json";
    let mut emails = read_emails();

    emails.push(new_email);

    let serialized_emails = serde_json::to_string(&emails).unwrap();
    let mut file = OpenOptions::new().write(true).create(true).truncate(true).open(file_path).unwrap();
    file.write_all(serialized_emails.as_bytes()).unwrap();
}

pub fn read_emails() -> Vec<EmailProps> {
    let file_path = "emails.json";
    let mut file = OpenOptions::new().read(true).create(true).open(file_path).unwrap();
    let mut data = String::new();
    file.read_to_string(&mut data).unwrap();
    if data.is_empty() {
        Vec::new()
    } else {
        serde_json::from_str(&data).unwrap()
    }
}
