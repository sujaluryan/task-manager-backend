# 🚀 Task Manager Web Application (MERN Stack)

A full-stack Task Management Web Application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project allows admins to manage tasks and users to track their progress with real-time updates.

---

## 🌐 Live Demo

* 🔗 Frontend: https://task-manager-frontend-theta-weld.vercel.app
* 🔗 Backend API: https://task-manager-backend-icy9.onrender.com

---

## 📌 Features

### 👤 Authentication

* JWT-based login & registration
* Role-based access (Admin / User)

### 🧑‍💼 Admin Features

* Create and assign tasks
* View all users
* Manage projects
* Track overall task analytics

### 👨‍💻 User Features

* View assigned tasks
* Update task status
* Track progress via dashboard

### 📊 Dashboard

* Total tasks
* Completed tasks
* Pending tasks
* Overdue tasks

### 🔔 Real-Time Notifications

* Implemented using Socket.io

### ☁️ Cloud Uploads

* File uploads using Cloudinary

---

## 🛠️ Tech Stack

### Frontend

* React.js (Vite)
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* Socket.io

### Deployment

* Frontend: Vercel
* Backend: Render

---

## 📁 Project Structure

```
task-manager/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
```

---

## ⚙️ Environment Variables

### Backend (.env)

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

## 🚀 Installation & Setup

### 1️⃣ Clone Repository

```
git clone https://github.com/your-username/task-manager-backend.git
cd task-manager-backend
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
npm run dev
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

## 🔗 API Endpoints (Sample)

| Method | Endpoint           | Description    |
| ------ | ------------------ | -------------- |
| POST   | /api/auth/register | Register user  |
| POST   | /api/auth/login    | Login          |
| GET    | /api/tasks         | Get tasks      |
| POST   | /api/tasks         | Create task    |
| GET    | /api/dashboard     | Dashboard data |

---

## 🧠 Key Highlights

* Role-based authorization system
* RESTful API architecture
* Real-time updates using WebSockets
* Scalable folder structure
* Fully deployed production app

---

## 📸 Screenshots (Optional)

*Add your screenshots here*

---

## 🙌 Author

**Sujal Suryan**

* GitHub: https://github.com/sujaluryan

---

## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!
