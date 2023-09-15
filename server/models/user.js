const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        require: true,

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profileImageUrl: {
        type: String,
        default: '/public/images/avatar.png'
    }


}, { timestamps: true })

const USER = mongoose.model("user", UserSchema);

module.exports = USER;