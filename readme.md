# 📚 Book Catalog API

A secure RESTful API built with **Node.js**, **Express**, and **MongoDB Atlas** for managing a collection of books.  
Users can register, log in, and perform CRUD operations on books — all routes are protected using JWT authentication.

---

## 🚀 Features

✅ User registration and login with hashed passwords  
✅ JWT token generation on login  
✅ Secure route protection (middleware)  
✅ Full CRUD for books (Create, Read, Update, Delete)  
✅ MongoDB Atlas connection via Mongoose  
✅ Environment variable configuration using dotenv

---

## ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/book-catalog.git
cd book-catalog
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Set Up Environment Variables

Create a `.env` file in the root directory and add:

```
PORT=5000
MONGO_URI=your-mongodb-atlas-uri
JWT_SECRET=your-jwt-secret
```

### 4️⃣ Start the Server

```bash
npm run dev
```

✅ Expected console output:

```
✅ MongoDB Connected
🚀 Server running on port 4000
```

---

## 🔐 Authentication Flow

| Action                           | Token       | Description                                                |
| -------------------------------- | ----------- | ---------------------------------------------------------- |
| Register (`/api/users/register`) | ❌ No       | Creates a user, hashes password, but doesn’t issue a token |
| Login (`/api/users/login`)       | ✅ Yes      | Authenticates user and returns a signed JWT                |
| Book CRUD Routes                 | ✅ Required | Must include valid token in header                         |

---

## 🧭 API Endpoints

| Method | Endpoint              | Protected | Description                 |
| ------ | --------------------- | --------- | --------------------------- |
| POST   | `/api/users/register` | ❌        | Register new user           |
| POST   | `/api/users/login`    | ❌        | Login user and return token |
| GET    | `/api/books`          | ✅        | Get all books               |
| POST   | `/api/books`          | ✅        | Create a book               |
| GET    | `/api/books/:id`      | ✅        | Get single book             |
| PUT    | `/api/books/:id`      | ✅        | Update book                 |
| DELETE | `/api/books/:id`      | ✅        | Delete book                 |
