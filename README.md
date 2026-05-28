# Smart Access Management System

## Overview
Role-Based Access Control system built using Angular + Node.js + MongoDB.

## Features
- JWT Authentication
- Role-Based Login (Admin / General User)
- Secure password encryption using bcrypt
- Admin user management (Add/Delete users)
- Access records dashboard
- Async loading simulation
- REST APIs using Express.js

## Tech Stack
Frontend: Angular 12+, TypeScript, HTML, CSS  
Backend: Node.js, Express.js, MongoDB  
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

## API Example

POST /api/auth/login

## Demo Credentials
Admin:
userId: admin1  
password: admin456  

User:
userId: user1  
password: user123  
