# 🛒 Product Store – MERN Stack App

A simple **Product Store web application** built using the **MERN stack** with **Chakra UI** for the frontend.  
This is my **first proper full-stack project**, created to understand how frontend, backend, and database work together in a real-world app.

---

## 🚀 Features

- 📦 View all products
- ➕ Add new products
- ✏️ Update existing products
- 🗑️ Delete products
- 🎨 Clean & responsive UI using Chakra UI
- 🌐 RESTful API with Express & MongoDB

---

## 🧱 Tech Stack

### Frontend
- React.js
- Chakra UI
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📁 Project Structure

```bash
product-store/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── main.jsx
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/product-store.git
cd product-store
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run the backend server:

```bash
npm run dev
```

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| POST | `/api/products` | Create a product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

---

## 🎯 What I Learned

- How frontend and backend communicate using REST APIs
- Managing state and UI with React & Chakra UI
- CRUD operations with MongoDB
- Proper project structure for full-stack apps
- Debugging backend errors and handling responses

---

## 🌱 Future Improvements

- User authentication (Login / Signup)
- Image upload using Cloudinary
- Product categories & search
- Deployment (Vercel + Render)

---

## 🧠 Motivation

This project marks my transition from tutorial-based learning to building real full-stack applications.
More features and improvements will be added as I continue learning 🚀

---

## 🙌 Acknowledgements

- MongoDB Documentation
- Express & React Docs
- Chakra UI Community

---

## 🧑‍💻 Author

**Sehajdeep Singh**  
Learning backend & full-stack development step by step.

---

## ⭐ Support

If you like this project, feel free to star the repo!
