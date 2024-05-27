const express = require("express");
const app = express();
const rootRouter = require("./routes/index");
const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");
app.use(express.json());
app.use("/api/v1", rootRouter);
// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjU0NThiZTQ2ZGM4NzgwMWIzYzU4MTQiLCJpYXQiOjE3MTY4MDM3NzV9.5G5Kh52Szo4bjFBdtk7Evy9pVwZmvcvI4-Z2bNtEHR0";
// console.log(jwt.verify(token, JWT_SECRET));
app.listen(3000, () => {
  console.log("Hi therw");
});
