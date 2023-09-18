const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const USER = require('../models/user');

const salt = bcrypt.genSaltSync(10);
const secretKey = "x636tg6x#$%#$%5ghvahgjh^^^%";

router.post("/signup", async (req, res) => {
    const { fullName, email, password } = req.body;

    try {
        const userDoc = await USER.create({
            fullName,
            email,
            salt: salt,
            password: bcrypt.hashSync(password, salt)
        })
        res.json(userDoc)

    } catch (error) {
        console.log("User creation error ", error.message)
        res.status(400).json(error.message)

    }



})


//SignIn
router.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    const user = await USER.findOne({ email })
    const checkPassword = bcrypt.compareSync(password, user.password);

    if (checkPassword) {
        const payload = {
            _id: user._id,
            email: user.email,
            profileImageUrl: user.profileImageUrl,
            fullName: user.fullName
        }
        jwt.sign(payload, secretKey, {}, (err, token) => {
            if (err) throw err;

            res.cookie("usertoken", token).json("ok")

        })


    }
})


module.exports = router;
