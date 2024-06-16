# Email Service - ALICE

## Frontend

* **React**
* **TypeScript**
* **Material UI**
* **Vite**

### Requirements

* [Node.js](https://nodejs.org/en) | `brew install node`

How to run UI   

```sh
npm install
npm run dev
```

Go to - http://localhost:8081/   

---

## Backend

* **Rust**
* **Actix**
* **serde_json**
* **lettre**

### Requirements

* [Rust](https://www.rust-lang.org/) | `brew install rust`  

Backend local server - http://localhost:8080/  

#### Do not forget to setup ENV

1. Copy .env.template and remove .template extension
2. Fill the blanks in env file


---
#### API


**Email Data Structure**

```ts
interface EmailProps {
  id: string;
  email: string;
  content: string;
}
```

**POST**
```HTTP
http://localhost:8080/send-email
```

**Body**
```json
{
    "ud": "124", // Email ID
    "email": "yaemikothebestfoxgirl@gmail.com", // Email receiver
    "content": "I want banana" // Email content
}
```

---


**GET**

```HTTP
http://localhost:8080/get-emails
```

**Result** returns Array of EmailProps   
```json
[
    {
        "id": "bb0bc384-874a-4bf7-a79f-0f50a1ccc1fc",
        "email": "yaemikothebestfoxgirl@gmail.com",
        "content": "Hello, this is a test message. Please do not reply"
    },
    {
        "id": "2e0a9095-968f-4a52-8f0b-b45038194b24",
        "email": "yaemikothebestfoxgirl@gmail.com",
        "content": "hahahehe"
    },
    {
        "id": "cb224f3a-088d-4807-a665-899c809b2d70",
        "email": "raiden@gmail.com",
        "content": "qiqi :("
    },
    {
        "id": "00b5c82a-a69c-4432-b597-e234cedee02b",
        "email": "yaemikothebestfoxgirl@gmail.com",
        "content": "Send from client"
    },
    {
        "id": "c785189b-4b09-4e75-ae5d-141dd605e7ba",
        "email": "somebody@gmail.com",
        "content": "Some content"
    }
]
```