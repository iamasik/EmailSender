# EmailSender (Express + Nodemailer)

A simple Express.js app to send emails via Gmail with both a web interface and an API endpoint usable by 3rd-party platforms. Built with MVC architecture.

## Features
- Clean web UI for sending emails, including upload for HTML template files
- REST API endpoint for sending emails programmatically
- MVC project structure
- Automatic reload (dev mode) using nodemon

---

## Getting Started

### 1. Install dependencies:
```bash
npm install
```

### 2. Run in development mode (auto-reload):
```bash
npm run dev
```

Or in production mode:
```bash
npm start
```

App will listen by default on [http://localhost:3000](http://localhost:3000)

---

## Web Interface Usage
Just open `http://localhost:3000` in your browser. Fill out the fields or upload your HTML template and send your email instantly.

---

## API Endpoint Usage

You can send emails from other software or platforms via HTTP POST to:
```
POST http://localhost:3000/api/send
```
Content-Type: `application/json`

### Expected JSON Payload
```
{
  "sender": "youremail@gmail.com",
  "appPassword": "YOUR_GOOGLE_APP_PASSWORD",
  "receiver": "receiver@example.com",
  "subject": "Subject text",
  "html": "<h1>Hello world</h1><p>This is the email body</p>"
}
```

### Example with curl
```bash
curl -X POST http://localhost:3000/api/send \
  -H "Content-Type: application/json" \
  -d '{
    "sender": "youremail@gmail.com",
    "appPassword": "YOUR_APP_PASSWORD",
    "receiver": "their@email.com",
    "subject": "Test Email",
    "html": "<strong>This is an API test email</strong>"
  }'
```

### Example with httpie
```bash
http POST http://localhost:3000/api/send \
  sender="youremail@gmail.com" \
  appPassword="YOUR_APP_PASSWORD" \
  receiver="their@email.com" \
  subject="Test Email" \
  html="<strong>This is an API test email</strong>"
```

---

## Responses
**Success:**
```
{
  "success": true,
  "message": "Email sent successfully!"
}
```
**Failure:**
```
{
  "success": false,
  "error": "Detailed error message."
}
```

---
## Project Structure (MVC)

- `app.js` — App entry, routing & bootstrapping
- `/controllers/` — Handles logic & API endpoints
- `/views/` — EJS templates for pages
- `/models/` — Business/data logic (stub for extensibility)
- `/public/` — Static files (CSS, JS, assets)

---

## Requirements
- Node.js 14+
- Gmail with App Password enabled ([Guide](https://support.google.com/accounts/answer/185833?hl=en))

---

## Security Note
Never share or hardcode your Gmail or App Password in public code or with untrusted parties.
