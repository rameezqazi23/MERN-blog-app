const jwt = require("jsonwebtoken");
const USER = require("../models/user");
const secretKey = "x636tg6x#$%#$%5ghvahgjh^^^%";


const createTokenForUser = async() => {
    // const { _id, email, profileImageUrl, fullName } = user;
    const user = await USER.findOne({ email })

    const payload = {
        _id: user._id,
        email: user.email,
        profileImageUrl: user.profileImageUrl,
        fullName: user.fullName
    }

    jwt.sign(payload, secretKey, {}, (err, token) => {
        if (err) throw err;
        res.json(token)
    })


}

module.exports = {
    createTokenForUser
}