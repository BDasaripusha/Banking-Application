Here's a clean, step-by-step document of the work you've completed so far for your **Online Banking Portal** project.

# 🏦 Online Banking Portal – Development Steps Followed

## 📌 Project Objective

Develop a full-stack **Online Banking Portal** using **React.js**, **Node.js**, **Express.js**, and **MongoDB**, where users can register, log in, and perform basic banking operations such as deposits, withdrawals, money transfers, and transaction history.

---

# Step 1: Install Required Software

Installed the following software:

* Visual Studio Code
* Node.js (LTS Version)
* Git
* MongoDB Community Edition
* Postman
* Google Chrome

Verified Node.js installation:

```bash
node -v
npm -v
```

---

# Step 2: Create Project Folder

Created the project directory:

```bash
mkdir online-banking
cd online-banking
```

---

# Step 3: Create Frontend and Backend Folders

Created separate folders for frontend and backend.

```bash
mkdir client
mkdir server
```

Project Structure:

```text
online-banking/
│
├── client/
└── server/
```

---

# Step 4: Create React Application

Moved into the client folder.

```bash
cd client
```

Created the React application.

```bash
npx create-react-app .
```

Started the React development server.

```bash
npm start
```

Verified the application at:

```
http://localhost:3000
```

---

# Step 5: Initialize Backend

Moved to the server folder.

```bash
cd ../server
```

Initialized the Node.js project.

```bash
npm init -y
```

---

# Step 6: Install Backend Dependencies

Installed required packages.

```bash
npm install express
npm install mongoose
npm install cors
npm install dotenv
npm install bcryptjs
npm install jsonwebtoken
```

Installed Nodemon for development.

```bash
npm install --save-dev nodemon
```

---

# Step 7: Create Backend Folder Structure

Created the backend directories.

```text
server/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── .env
├── server.js
└── package.json
```

---

# Step 8: Create Express Server

Created **server.js**.

Implemented:

* Express application
* CORS configuration
* JSON request parsing
* Default route
* Server listener

Started the server.

```bash
node server.js
```

Verified the backend by opening:

```
http://localhost:8000
```

---

# Step 9: Configure MongoDB Connection

Created the configuration file.

```text
config/database.js
```

Created the environment configuration.

```text
.env
```

Configured:

```env
PORT=8000
MONGO_URI=mongodb://127.0.0.1:27017/onlineBanking
```

Updated `server.js` to:

* Load environment variables
* Connect to MongoDB
* Start the Express server

---

# Step 10: Troubleshooting

Resolved the following issues during setup:

### Invalid package.json

* Corrected JSON formatting issues.

### HTTP 403 Error

* Accessed the application using the correct Express server port.

### Port 5000 Conflict

* Identified that macOS Control Center was using port 5000.
* Changed the application port to **8000**.

### Missing Module

* Created the missing `config/database.js` file.

### MongoDB Connection Error

* Installed Homebrew.
* Configured MongoDB Community Edition.
* Began configuring the MongoDB service.

---

# Current Project Structure

```text
online-banking/
│
├── client/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── server/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── node_modules/
│   ├── .env
│   ├── package.json
│   └── server.js
│
└── README.md
```

---

# Current Progress

✅ Development environment prepared

✅ React application created

✅ Node.js backend initialized

✅ Express server configured

✅ Required dependencies installed

✅ MongoDB configuration created

✅ Environment variables configured

✅ Backend successfully running on port **8000**

---

# Next Steps

* Connect MongoDB successfully.
* Create the User model.
* Develop the Register API.
* Develop the Login API.
* Implement JWT authentication.
* Connect the React frontend to the backend.
* Build the Dashboard.
* Add Deposit, Withdraw, Transfer, and Transaction History features.

This document accurately reflects the steps you've completed so far and is suitable for adding to your GitHub repository under a `docs` folder or adapting into your `README.md` as the project setup section.
