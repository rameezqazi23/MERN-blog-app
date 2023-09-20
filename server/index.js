const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { connectToMongoDb } = require("./connection");
const userRoute = require('./routes/user');
const blogRoute = require('./routes/blog');
const jwt = require("jsonwebtoken");

const cookieParser = require('cookie-parser')
// const USER = require("./models/user");



//Middlewares
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


const PORT = 8000;
const secretKey = "x636tg6x#$%#$%5ghvahgjh^^^%";



connectToMongoDb('mongodb://127.0.0.1:27017/mern-blog')
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