use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct EmailProps {
    pub id: String,
    pub email: String,
    pub content: String,
}

#[derive(Serialize, Deserialize)]
pub struct EmailRequest {
    pub email: String,
    pub content: String,
}

#[derive(Serialize, Deserialize)]
pub struct SearchRequest {
    pub email: String,
}