# Contact Saver App – Backend

This is the **backend API** for the [Contact Saver App](https://github.com/Ravina106/contact-saver-app-frontend), built using:

- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**

It provides REST API endpoints to create and retrieve contact records.

---

## Features

- Add new contacts (Name, Email, Phone)
- Fetch all saved contacts
- MongoDB connection with Mongoose
- `.env` configuration for secure credentials
- Structured codebase using controllers, routes, and models

---

## Tech Stack

| Tech        | Purpose                          |
|-------------|----------------------------------|
| Node.js     | Backend runtime                  |
| Express.js  | HTTP server and routing          |
| MongoDB     | NoSQL database                   |
| Mongoose    | ODM to interact with MongoDB     |
| dotenv      | Environment variable management  |
| CORS        | Enable frontend communication    |

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Ravina106/contact-saver-app-backend.git
cd contact-saver-app-backend

### 2. Install dependencies
npm install

### 3. Create .env file
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/contactsdb?retryWrites=true&w=majority

### 4. Start the server
npm start
