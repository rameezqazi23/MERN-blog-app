const express = require("express");
const app = express();


const PORT = 8000;

app.get('/', (req, res) => {
    res.send("My new Server")
})

app.listen(PORT, () => console.log("Server running on PORT: ", PORT))