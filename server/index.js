const express = require("express");
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const { connectToMongoDb } = require("./connection");
const userRoute = require('./routes/user');
const blogRoute = require('./routes/blog');
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const cookieParser = require('cookie-parser')
// const USER = require("./models/user");



//Middlewares
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve('./public')));

const PORT = 8000;
dotenv.config();

const secretKey = process.env.SECRET_KEY;


connectToMongoDb(process.env.MONGODB_URL)
    .then(() => console.log("MongoDB Successfully Connected!"))
    .catch((err) => console.log("MongoDB connection error", err))




//Routes

// app.get("/", (req, res) => {
//     return res.json({
//         user: req.user
//     })
// })

app.use("/", userRoute);
app.use("/", blogRoute);




app.listen(PORT, () => console.log("Server running on PORT: ", PORT))