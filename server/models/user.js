const mongoose = require('mongoose');
const { createHmac, randomBytes } = require('crypto');
const { hash } = require('bcryptjs');

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
    salt: {
        type: String,
        unique: true,
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


// UserSchema.pre("save", function (next) {
//     const user = this
//     if (!user.isModified("password")) return

//     const salt = randomBytes(16).toString('hex')

//     const hashedPassword = createHmac('sha256', salt)
//         .update(user.password)
//         .digest('hex')

//     this.salt = salt;
//     this.password = hashedPassword;
//     next();

// })

// UserSchema.static("matchPassword", async function (email, password) {
//     const user = await USER.findOne({ email })

//     if (!user) {
//         throw new Error("No user found with this email!")
//     }

//     const salt = user.salt;
//     const hashedPassword = user.password;

//     const userProvidedHash = createHmac('sha256', salt)
//         .update(password)
//         .digest('hex')

//     if (hashedPassword !== userProvidedHash) {
//         throw new Error("Incorrect Password!")

//     }
    



// })


const USER = mongoose.model("user", UserSchema);

module.exports = USER;