const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/book_route");
const cors = require("cors");
require('dotenv').config();
//  Rkh60h9mUYo9NWEx password.

// middleware section
// Now we dont need because i create router.
// app.use("/", (req, resp, next) => {
//   resp.send("This is Starting Application");
// });
app.use(express.json()); // it convert all the data to the json very !IMPORTANT and it intialize at the top (rule)
app.use(cors());
app.use("/api/books", router); // localhost:5000/books all the things handle in our (router). now to check run on postman localhost:5000/books.

mongoose
  .connect(
    process.env.MONGO_URL )
  .then(() => console.log("connected DataBase"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));

// 54:00 now Backend is complete
// you have to also install cors to block the security
