const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const connectToMongoDb = require("./connection");


//Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


const PORT = 8000;


connectToMongoDb('mongodb://localhost:27017/mern-blog')
    .then(() => console.log("MongoDB Successfully Connected!"))
    .catch(() => console.log("MongoDB connection error"))

app.post('/signup', (req, res) => {
    const { fullName, email, password } = req.body
    res.json({ UserInfo: { fullName, email, password } })
})

app.listen(PORT, () => console.log("Server running on PORT: ", PORT))