const express = require('express');
const router = express.Router();
const multer = require('multer');
const jwt = require("jsonwebtoken");
const path = require('path');
const BLOG = require('../models/blog');
const USER = require('../models/user');

const secretKey = "x636tg6x#$%#$%5ghvahgjh^^^%";


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, path.resolve('./public/uploads'))
    },
    filename: function (req, file, cb) {
        const fileName = `${Date.now()}-${file.originalname}`
        return cb(null, fileName)
    }
})

const upload = multer({ storage: storage })


router.get("/createpost", async (req, res) => {
    const postData = await BLOG.find()
        .populate("createdBy", ['fullName', 'email'])
        .sort({ createdAt: -1 })
    res.json(postData)

})


router.post('/createpost', upload.single("coverImageUrl"), async (req, res) => {
    const { title, summary, postContent } = req.body
    const { token } = req.cookies;
    jwt.verify(token, secretKey, {}, async (err, user) => {
        if (err) throw err;
        // res.json(data)

        try {
            const blog = await BLOG.create({
                title,
                summary,
                postContent,
                coverImageUrl: `/uploads/${req.file.filename}`,
                createdBy: user._id
            })

            console.log("Post Data", blog)
            res.json({ files: req.file });

        } catch (error) {
            console.log("blog post error", error.message)

        }
    })






})

module.exports = router;