# **E-Shop Application Documentation**

## **1. Project Overview**
The E-Shop application is a **full-stack e-commerce platform** built using modern web technologies. It provides **user authentication, product browsing, shopping cart, and order management** functionalities.

---

## **2. Tech Stack**
- **Frontend:** React.js (Vite), Redux Toolkit, Material-UI
- **Backend:** Node.js (Express.js), MongoDB Atlas
- **Authentication:** JWT (JSON Web Tokens)
- **Deployment:** Render (Frontend & Backend)

---

## **3. Project Structure**
```
## **3. Project Structure**
```
/eshop/

│── eshop/ (Frontend - React.js)
│   ├── src/
│   │   ├── components/       # Reusable UI Components
│   │   ├── pages/            # Application Pages
│   │   ├── redux/            # Redux Toolkit State Management
│   │   ├── App.js            # Main App Component
│   │   ├── main.jsx          # React Root File
│   ├──.gitignore
│   ├──README.md
│   ├──eslint.config.js
│   ├──index.html
│   ├──package-lock.json
│   ├──package.json
│   ├──vite.config.js

│── server/ (Backend - Express.js)
│   ├── controllers/          # Business Logic Handlers
│   ├── models/               # MongoDB Schemas
│   ├── routes/               # API Endpoints
│   ├── middleware/           # Auth Middleware
│   ├── config/               # Database Configuration
│   ├── server.js             # Main Backend File
│── .env                      # Environment Variables
│── package.json              # Dependencies
```

```

---

## **4. Setup & Installation**

### **🔹 Prerequisites**
- Node.js (LTS version)
- MongoDB Atlas Account
- Render Account

### **🔹 Clone the Repository**
```sh
# Clone the project
git clone https://github.com/your-repo/e-shop.git
cd e-shop
```

### **🔹 Install Dependencies**
```sh
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd eshop
npm install
```

### **🔹 Setup Environment Variables (.env)**
Create a `.env` file in the **server/** directory and add:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
```

### **🔹 Run the Application**
```sh
# Start backend
cd server
npm run dev

# Start frontend
cd eshop
npm run dev
```

---

## **5. API Endpoints**
### **🔹 Authentication**
| Method | Endpoint         | Description          |
|--------|-----------------|----------------------|
| POST   | /api/auth/register | Register a new user |
| POST   | /api/auth/login    | Login user & get JWT |
| POST   | /api/auth/forgot-password    | Forgot password  |
| POST   | /api/auth/reset-password/:token    | Reset password |

### **🔹 Products**
| Method | Endpoint         | Description          |
|--------|-----------------|----------------------|
| GET    | /api/products    | Fetch all products |
| GET    | /api/products/:id    | Fetch product by id |

### **🔹 Orders**
| Method | Endpoint        | Description                 |
|--------|----------------|-----------------------------|
| POST   | /api/orders     | Place an order             |
| GET    | /api/orders     | Fetch orders by `userId`   |

---

## **6. Frontend Functionality**
### **🔹 Pages & Components**
- **HomePage:** Displays products with category filters & search.
- **ItemDetailsPage:** Shows product details & add-to-cart button.
- **CartPage:** Allows item increment, decrement, and checkout.
- **OrderSummaryPage:** Displays order details & checkout confirmation.
- **OrdersPage:** Lists user orders with order history.
- **Header Component:** Contains navigation, cart, and order history icons.

---

## **7. Deployment Guide**
### **🔹 Deploy Backend on Render**
1. Create a **new Web Service** on Render.
2. Connect to GitHub repo & select the `server` directory.
3. Set the environment variables (`MONGO_URI`, `JWT_SECRET`, etc.).
4. Deploy & get the backend API URL.

### **🔹 Deploy Frontend on Render**
1. Create a **new Static Site** on Render.
2. Connect to GitHub repo & select the `client` directory.
3. Set the build command:
   ```sh
   npm install && npm run build
   ```
4. Set the publish directory:
   ```sh
dist
   ```
5. Deploy & get the frontend URL.

---

## **8. Future Enhancements**
- ✅ Implement Light/Dark mode toggle.
- ✅ Improve UI animations with Framer Motion.
- ✅ Add payment integration for orders.
- ✅ Optimize database queries for scalability.

---

## **9. Conclusion**
This documentation provides an overview of the **E-Shop application**, including **setup, API endpoints, frontend functionality, and deployment steps**. The project is successfully deployed, and future enhancements can be implemented based on business needs.

📌 **For questions or further improvements, feel free to reach out!** 🚀

