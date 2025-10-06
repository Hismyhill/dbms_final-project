# Library Management System API

This is a simple CRUD (Create, Read, Update, Delete) API for a Library Management System, built with Node.js, Express, and MySQL.

---

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MySQL](https://www.mysql.com/downloads/)
- A code editor like [VS Code](https://code.visualstudio.com/)
- An API client like [Postman](https://www.postman.com/downloads/)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-github-repo-url>
cd library-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up the Database

1.  Make sure your MySQL server is running.
2.  Use the `library_db.sql` file from Part 1 to create and populate your database.

### 4. Configure Environment Variables

1.  Create a file named `.env` in the root of the project.
2.  Copy the contents of `.env.example` (or just add the following) into it and update the values with your MySQL credentials.

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=library_db
```

### 5. Run the Application

```bash
npm start
```

The server will start on `http://localhost:3000`.

---

## 📖 API Endpoints

### Books

- `GET /api/books`: Get all books.
- `GET /api/books/:id`: Get a single book by its ID.
- `POST /api/books`: Create a new book.

### Members

- `GET /api/members`: Get all members.
- `GET /api/members/:id`: Get a single member by its ID.
- `POST /api/members`: Create a new member.
