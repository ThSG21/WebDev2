# Social Posts Web App

## Overview
This project is a web-based social posting application built using React and a REST API backend.  
Users can create accounts, log in, and share posts in a simple and interactive interface.

---

## Features
- User registration and login system  
- Create and delete posts  
- Real-time UI updates after actions  
- Protected access to posts page  
- Responsive layout using Bootstrap  

---

## How the System Works

### 1. User Authentication
Users can create an account and log in using a username and password.  
Once authenticated, user data is stored in local storage to maintain the session.

### 2. Navigation & Routing
The app uses client-side routing to manage pages:
- Login page  
- Account creation page  
- Posts page (restricted to logged-in users)  

Unauthorized users are redirected to the login page.

### 3. Posts System
After logging in, users can:
- Create posts by submitting text content  
- View all existing posts  
- Delete posts  

Posts are fetched from the backend and displayed dynamically.

### 4. API Communication
The frontend communicates with a backend server running on `localhost:3000`:
- Fetch posts (GET)  
- Create posts (POST)  
- Delete posts (DELETE)  
- Handle user authentication (POST)  

All data is exchanged in JSON format.

---

## Technologies Used
- React  
- React Router  
- React Bootstrap  
- JavaScript (ES6)  
- HTML/CSS  
- Node.js (backend)  
- Express (API)

---

## Author
Diego Dominguez
