const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const BLOG = require('../models/blog');
const USER = require('../models/user');

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

router.post('/createpost', upload.single("file"), async (req, res) => {
    const { title, summary, postContent } = req.body
    try {
        const blog = await BLOG.create({
            title,
            summary,
            postContent,
            coverImageUrl: `/uploads/${req.file.filename}`,
            createdBy: req.user
        })

        console.log("Post Data", blog)
        res.json({ files: req.file });

    } catch (error) {
        console.log("blog post error", error.message)

    }





})

module.exports = router;