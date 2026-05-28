# Smart Access Management System

A Role-Based Access Control (RBAC) system built using Angular, Node.js, and MongoDB with secure authentication, role-based authorization, and admin user management.

## Features
- JWT Authentication
- Role-Based Login (Admin / General User)
- Secure password encryption using bcrypt
- Admin user management (Add/Delete users)
- Access records dashboard
- Async loading simulation
- REST APIs using Express.js

## Tech Stack
Frontend: Angular 12+, HTML5, CSS3  
Backend: Node.js, Express.js  
Database: MongoDB (Atlas / Local)  
Security: JWT, bcrypt  

## Project Setup

### Frontend
cd frontend
npm install
ng serve

### Backend
cd backend
npm install
npx ts-node src/app.ts

## URLs
Frontend: http://localhost:4200  
Backend: http://localhost:5000  

## Environment Variables (.env)
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_secret_key  

## Database Setup
Local MongoDB:
mongodb://localhost:27017/smart-access

MongoDB Atlas:
mongodb+srv://<username>:<password>@cluster0.mongodb.net/smart-access

## API Testing (Postman)

POST http://localhost:5000/api/auth/login

Request Body:
{
  "userId": "admin1",
  "password": "admin456",
  "role": "Admin"
}

Response:
{
  "success": true,
  "token": "JWT_TOKEN",
  "user": {
    "userId": "admin1",
    "role": "Admin"
  }
}

## Demo Credentials

Admin:
userId: admin1  
password: admin456  

User:
userId: user1  
password: user123  

## Notes
- JWT used for secure authentication
- Role-based access implemented (Admin/User)
- Async API delay simulation added
- Clean modular Angular architecture
- RESTful API backend with Express.js
