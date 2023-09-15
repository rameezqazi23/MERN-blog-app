const express = require('express');
const router = express.Router();

const USER = require('../models/user');

router.post("/signup", async (req, res) => {
    const { fullName, email, password } = req.body;
    const userDoc = await USER.create({
        fullName,
        email,
        password
    })

    return res.json("UserData ", userDoc)


})


module.exports = router;
