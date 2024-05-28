
![image](https://github.com/sasank-555/payment-app/assets/157773996/c216f3b3-5931-438f-88dc-55f362f98edb)
![image](https://github.com/sasank-555/payment-app/assets/157773996/03e3f9a8-2fde-4370-8dcd-19663ef49d61)
![image](https://github.com/sasank-555/payment-app/assets/157773996/d866c1b1-c674-4051-b490-b639c4056c23)
![image](https://github.com/sasank-555/payment-app/assets/157773996/2ec14266-fc66-47aa-aea5-2926a4b59e53)


# 🌟 PayTM Clone 🌟

This project is part of the 100xDevs Cohort. It includes a backend built with MongoDB, Express, and Zod for validation, and a frontend built with React, Tailwind CSS, and NextUI.

## Key Feature
-Persistent Login (using local storage)

## Backend

### Technologies Used
- MongoDB
- Express
- Zod

### Setup
1. Install dependencies: `express`, `mongoose`, `zod`, `cors`, 
2. Create necessary folders and files: `models`, `routes`, `controllers`, `middlewares`.
3. Configure MongoDB connection and routes in `server.js`.
4. Define Mongoose models, controllers, and routes.
5. Create a `.env` file with your MongoDB URI.
6. Start the server using Nodemon.

## Frontend

### Technologies Used
- React
- Tailwind CSS
- NextUI

### Setup
1. Initialize a React project.
2. Install dependencies: `axios`, `@nextui-org/react`, `react-router-dom`.
3. Set up Tailwind CSS.
4. Create necessary folders and files: `components`, `pages`.
5. Implement components like `Send` for sending money, using state and `axios` for API calls.

## Project Structure

### Backend
```
backend/
├── controllers/
├── middlewares
├── models/
├── routes/
├── .env
└── index.js
```

### Frontend
```
frontend/
├── src/
│   ├── components/
│   ├── pages/
│   └── App.js
└── tailwind.config.js
```

## Running the Project

1. **Backend:** Run `node index.js`.
2. **Frontend:** Start the React app with `npm run dev` in the `frontend` directory.

