const express = require('express');
const router = express.Router();

const USER = require('../models/user');

router.post("/signup", async (req, res) => {
    const { fullName, email, password } = req.body;

    try {
        const userDoc = await USER.create({
            fullName,
            email,
            password
        })
        res.json(userDoc)

    } catch (error) {
        console.log("User creation error ", error.message)
        res.status(400).json(error.message)

    }



})


module.exports = router;
