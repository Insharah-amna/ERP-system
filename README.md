# University ERP System

A role-based university management system with separate dashboards for **students**, **teachers**, and **admins**. Built as a full stack university project (Jan - Mar 2025).

<img width="1917" height="835" alt="image" src="https://github.com/user-attachments/assets/8c0fd26d-fc2e-4d01-b5ed-f8984318354c" />
<img width="1919" height="831" alt="image" src="https://github.com/user-attachments/assets/d8790fd0-83dc-4721-b163-2e80342da55d" />
<img width="1895" height="838" alt="image" src="https://github.com/user-attachments/assets/fbb9d8f2-9d5c-4f6e-878a-fabf8cba627f" />
<img width="1897" height="837" alt="image" src="https://github.com/user-attachments/assets/0396519b-9d9b-49e2-8d95-6b6d09eb419a" />

## Features

**Students**
- Browse available courses and enroll in them
- View and manage their profile

**Teachers**
- View the courses they teach and enrolled students
- Manage their profile

**Admins**
- Manage users (students and teachers)
- Create and manage courses
- Oversee enrollments across the system

**General**
- Authentication and role-based access control (each role only sees its own dashboard and routes)
- Applied JWT auth, email verification, password hashing

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React, Next.js, Tailwind CSS |
| Backend | Nest.js (Express) |
| Database | PostgreSQL |
| Auth | JWT |

## Architecture

The backend is split into 5 modules:

| Module | Responsibility |
|--------|----------------|
| `auth` | Login, registration, token handling, role guards |
| `courses` | Course creation and management |
| `enrollment` | Student-course enrollment |
| `profiles` | User profile data |
| `admin` | Admin-only management operations |

The database has **7 PostgreSQL tables**: `users`, `students`, `teachers`, `courses`, `departments`, `enrollments`, `course-assignments`.

## Getting Started

### Prerequisites
- Node.js (v16 or later)
- PostgreSQL (v9.6 or later)
- npm

### 1. Clone the repository
```bash
git clone https://github.com/Insharah-amna/ERP-system.git
cd ERP-system
```

### 2. Set up the backend
```bash
cd backend            
npm install
npm run start:dev
```

### 3. Set up the frontend
```bash
cd frontend           
npm install
npm run dev
```

The app runs at `http://localhost:3000`.

## Project Structure
```
[repo-name]/
├── backend/
│   └── src/
│       ├── auth/
│       ├── courses/
│       ├── enrollment/
│       ├── profiles/
│       └── admin/
└── frontend/
    └── app/
        ├── about/
        ├── admin/
        ├── auth/
        ├── contact/
        └── student/
```

## What I Learned
- Designing role-based access control across frontend and backend
- Modelling relational data (users, courses, enrollments) in PostgreSQL
- Structuring a backend into modules with Nest.js
- Adding email verification

## Author

**Insharah Amna Shakir**
[LinkedIn](https://www.linkedin.com/in/insharah-amna-shakir) · [GitHub](https://github.com/Insharah-amna) · insharahamna7@gmail.com
