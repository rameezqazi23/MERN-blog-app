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


router.get('/full-post/:id', async (req, res) => {

    const blog = await BLOG.findById(req.params.id)
        .populate("createdBy", ["fullName", "email", "profileImageUrl"])
    res.json(blog)
    console.log("blog==>", blog)
})


router.put('/full-post', upload.single("coverImageUrl"), (req, res) => {

    const { token } = req.cookies
    jwt.verify(token, secretKey, {}, async (error, data) => {
        if (error) throw error;

        const { id, title, summary, postContent } = req.body;
        const postDoc = await BLOG.findById(id)
        const isAuthor = JSON.stringify(postDoc.createdBy) === JSON.stringify(data._id)
        // res.json({ data, postDoc, isAuthor })
        if (!isAuthor) {
            res.status(400).json("Invalid Author")
            throw "Invalid Author"
        }
        await postDoc.updateOne({ title, summary, postContent })
        res.json(postDoc)
    })
})

module.exports = router;