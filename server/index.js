const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { connectToMongoDb } = require("./connection");
const userRoute = require('./routes/user');
// const USER = require("./models/user");



//Middlewares
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const PORT = 8000;


connectToMongoDb('mongodb://127.0.0.1:27017/mern-blog')
    .then(() => console.log("MongoDB Successfully Connected!"))
    .catch((err) => console.log("MongoDB connection error", err))


// app.post("/signup", async (req, res) => {
//     const { fullName, email, password } = req.body;
//     const userDoc = await USER.create({
//         fullName,
//         email,
//         password
//     })

//     res.json("UserData ", userDoc)

// })

//Routes
app.use("/", userRoute);

// app.get('/signup', (req, res) => {
//     res.send("Test Ok")
// })

app.listen(PORT, () => console.log("Server running on PORT: ", PORT))