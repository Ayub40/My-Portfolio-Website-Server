# My Portfolio Website

[Live Demo](https://my-portfolio-website-client.vercel.app/)

---

## Project Overview

"My Portfolio Website" is a modern, responsive personal portfolio built with **NextJS, TypeScript, Prisma, and ExpressJS**.  
It allows the portfolio owner to manage blogs, projects, and other content through a private dashboard while providing public visitors with information about skills, projects, and blogs.  

Key features include:

- Secure **Authentication & Authorization** for the owner
- Dynamic **Dashboard** for content management
- Public **About Me** section with personal info, experience, and skills
- **Project Showcase** with live links and descriptions
- **Blog Management**: Create, read, update, and delete blogs (Owner only)
- Fully responsive and polished **UI/UX**

---

## Features

### Public Pages
Accessible to all visitors without login:

1. **Blog Management**
   - View all blogs and individual blog pages
   - Uses ISR (Incremental Static Regeneration) for fast updates without full rebuild
2. **About Me Section**
   - Displays personal information, work experience, and skills
   - Fetches static content using SSG (Static Site Generation)
3. **Projects Showcase**
   - Personal projects with thumbnail, description, live site link, and features
   - ISR used for dynamic updates

### Private Pages (Owner Only)
Accessible only after secure login:

1. **Authentication & Authorization**
   - JWT-based authentication
   - Passwords hashed securely with bcrypt
   - Admin seeded during backend setup
2. **Dashboard**
   - Manage blogs, projects, and other content dynamically

---

## Technology Stack

### Frontend
- Framework: **NextJS**
- Language: **TypeScript**
- Styling: **Tailwind CSS**  
- Libraries: 
  - `next-auth` for authentication
  - `react-hot-toast` for notifications
  - `lucide-react`, `react-icons`, `radix-ui` for UI components
  - `react-hook-form` + `zod` for form handling and validation

### Backend
- Runtime: **Node.js / ExpressJS**
- Database: **Postgres + Prisma** or **MongoDB + Mongoose**
- Authentication: **JWT + bcrypt**
- Libraries:
  - `express`, `cors`, `compression`, `jsonwebtoken`
  - `ts-node-dev` for development
  - `prisma` for ORM
- TypeScript for type safety

---

### Project Setup Instructions

## Setup Instructions

### 💻 Frontend Setup
### Frontend
1. Clone the repository:
   ```bash
   git clone <frontend-repo-url>
   cd my-portfolio-website-client





These commands are for setting up the client-side of the application.

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

3.  **Open in browser:**
    *(This is the URL you will open once the server is running)*
    ```
    http://localhost:3000
    ```

## ⚙️ Backend Setup

These commands are for setting up the server-side, including the database.

1.  **Clone the repository:**
    ```bash
    git clone <backend-repo-url>
    cd next-blog
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set environment variables in a `.env` file:**
    *Create a new file named `.env` in the `next-blog` folder and add these lines.*
    ```
    DATABASE_URL="your-database-url"
    JWT_SECRET="your-secret-key"
    ```

4.  **Run database migrations and seed admin:**
    ```bash
    npx prisma migrate dev
    npm run seed
    ```

5.  **Start development server:**
    ```bash
    npm run dev
    ```
