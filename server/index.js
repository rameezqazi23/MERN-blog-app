const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { connectToMongoDb } = require("./connection");
const userRoute = require('./routes/user');



//Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


const PORT = 8000;


connectToMongoDb('mongodb://127.0.0.1:27017/mern-blog')
    .then(() => console.log("MongoDB Successfully Connected!"))
    .catch((err) => console.log("MongoDB connection error", err))



//Routes
app.use("/", userRoute);

app.listen(PORT, () => console.log("Server running on PORT: ", PORT))