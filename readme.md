# 🛍️ MERN Product Store

A full-stack **Product Store** application built with the MERN stack. This project provides a complete CRUD-based product management system with a React frontend, Node.js backend, and MongoDB database.

## 🚀 Features

- ⚛️ React.js frontend
- 🟢 Node.js backend
- 🚂 Fastify REST API
- 🍃 MongoDB with Mongoose
- 🎨 Responsive UI
- 📦 Create products
- 👀 View products
- ✏️ Update products
- 🗑️ Delete products
- 🔄 RESTful API architecture
- 🐻 Zustand for state management
- 🛡️ Error handling
- 🔐 Environment variable configuration
- 📱 Responsive design

---

## 🛠️ Tech Stack

### Frontend

- React.js
- React Router
- Chakra UI
- Zustand
- Axios

### Backend

- Node.js
- Fastify
- MongoDB
- Mongoose
- dotenv

---

## 📁 Project Structure

```text
product-store/
│
├── client/                         # React frontend
│   ├── src/
│   │   ├── components/             # Reusable UI components
│   │   ├── pages/                  # Application pages
│   │   ├── store/                  # Zustand state management
│   │   └── ...
│   │
│   └── package.json
│
├── server/                         # Node.js backend
│   ├── src/
│   │   ├── config/                 # Application configuration
│   │   ├── controller/             # Request handling & business logic
│   │   ├── db/                     # Database connection
│   │   ├── model/                  # Mongoose models
│   │   ├── route/                  # API routes
│   │   └── app.js                  # Fastify application setup
│   │
│   ├── .env                        # Environment variables
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   └── server.js                   # Server entry point
│
└── README.md
```

---

## 🔄 Backend Architecture

The backend follows a simple layered architecture:

```text
Client
  │
  ▼
Route
  │
  ▼
Controller
  │
  ▼
Model
  │
  ▼
MongoDB
```

### Route

Defines the API endpoints and connects them to the appropriate controllers.

### Controller

Contains the application logic for creating, fetching, updating, and deleting products.

### Model

Defines the MongoDB document structure using Mongoose.

### Database

Handles the connection between the backend and MongoDB.

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api` | Get all products |
| `POST` | `/api` | Create a new product |
| `PUT` | `/api/:id` | Update a product |
| `DELETE` | `/api/:id` | Delete a product |

---

## ⚙️ Environment Variables

Create a `.env` file inside the `server` directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Example:

```text
server/
├── .env
├── package.json
└── src/
```

> Do not commit your `.env` file to GitHub. Add it to `.gitignore`.

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/SehajdeepSinghNibber/Product-Store
```

### 2. Navigate into the project

```bash
cd product-store
```

### 3. Install server dependencies

```bash
cd server
npm install
```

### 4. Install client dependencies

Open another terminal:

```bash
cd client
npm install
```

---

## ▶️ Run the Application

### Start the Backend

From the `server` directory:

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:8000
```

### Start the Frontend

From the `client` directory:

```bash
npm run dev
```

The frontend will normally run on:

```text
http://localhost:5173
```

---

## 🏗️ Build for Production

Build the frontend:

```bash
cd client
npm run build
```

Then start the production server according to the scripts configured in the `server/package.json`.

---

## 🧪 CRUD Operations

The application supports the complete CRUD workflow.

### Create

Users can add a new product by providing:

```text
Name
Price
Image
```

### Read

The application fetches products from the backend API and displays them in the React interface.

### Update

Existing products can be modified using their unique MongoDB ID.

### Delete

Products can be removed from the database using their unique ID.

---

## 🗃️ Database

This project uses **MongoDB** as its database and **Mongoose** as the ODM.

A product document follows a structure similar to:

```js
{
  name: "Product Name",
  price: 99.99,
  image: "image-url"
}
```

MongoDB stores each product with a unique `_id`.

---

## 🌐 API Flow

For example, when fetching products:

```text
React Client
     │
     │ GET /api/products
     ▼
   Route
     │
     ▼
 Controller
     │
     ▼
  Product Model
     │
     ▼
   MongoDB
     │
     ▼
 Controller
     │
     ▼
 JSON Response
     │
     ▼
 React Client
```

The response contains the products returned from the database.

---

## 📚 What I Learned

While building this project, I worked with:

- MERN stack development
- REST API development
- Fastify routing
- MVC-style backend structure
- MongoDB and Mongoose
- CRUD operations
- React component architecture
- React Router
- Zustand state management
- API integration
- Axios
- Environment variables
- Error handling
- Responsive UI development
- Frontend and backend communication

---

## 🚀 Future Improvements

Some features that can be added in the future:

- 🔐 User authentication
- 👤 User accounts
- 🛒 Shopping cart
- 💳 Payment integration
- ❤️ Wishlist
- 🔎 Product search
- 🏷️ Product categories
- 📊 Admin dashboard
- ⭐ Product reviews and ratings
- 📸 Cloud image uploads
- ☁️ Deployment

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature/new-feature
```

3. Make your changes
4. Commit your changes

```bash
git commit -m "Add new feature"
```

5. Push the branch

```bash
git push origin feature/new-feature
```

6. Open a Pull Request

---

## ⭐ Support

If you found this project useful, consider giving the repository a ⭐ on GitHub.

---

## 👨‍💻 Author

**Sehajdeep Singh**

Built with ❤️ using the **MERN Stack** 🚀
