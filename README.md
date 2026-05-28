# Smart Access Management 

A modern Role-Based Access Management System 

##  Features

- JWT Authentication
- Role-Based Login (Admin / General User)
- Secure Password Encryption using bcrypt
- Angular SPA Architecture
- Responsive Premium UI
- Dashboard with Access Records
- Admin Controls (Add User / Delete User)
- Async Loader Simulation
- MongoDB Database Integration
- REST API using Express.js

---

##  Tech Stack

Frontend:
- Angular 12+
- TypeScript
- HTML5
- CSS3

Backend:
- Node.js
- Express.js
- MongoDB
- JWT
- bcrypt

APIs:
Postman API

---

##  Project Modules

### Authentication
- Login
- Signup/Register
- JWT Token Generation

### Dashboard
- User Details
- Access Records Table
- Role-Based Access

### Admin Panel
- Add User
- Delete User

---


### Frontend

```bash
cd frontend
npx ng serve
Frontend runs on:
http://localhost:4200

### Backend
cd backend
npx ts-node src/app.ts
http://localhost:5000


📂 GitHub Repository
https://github.com/pavithrarmp19/smart-access-management


Postman
POST
http://localhost:5000/api/auth/login

{
    "userId": "admin1",
    "password": "admin456",
    "role": "Admin"
}
Json : 200 OK

{
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhZG1pbjEiLCJyb2xlIjoiQWRtaW4iLCJpYXQiOjE3Nzk5NDkxODksImV4cCI6MTc3OTk1Mjc4OX0.z8SlqoRxpeGNwcJ_oxqGPZ6_up-Yrh22eavx9gEjc-Y",
    "user": {
        "_id": "6a16492f414ab3ee9763e2ca",
        "userId": "admin1",
        "password": "$2b$10$B8a0.wvNsa1zG7k.Xf9P1eof53DPuFY0SlLuDAw/93g6fuupxuHbu",
        "role": "Admin",
        "__v": 0
    }
}



