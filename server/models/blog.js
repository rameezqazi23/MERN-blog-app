const { Schema, model, default: mongoose } = require("mongoose");

const BlogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    postContent: {
        type: String,
        reqruied: true
    },
    coverImageUrl: {
        type: String,
        required: true
    },
    likeCount: {
        type: Number,
        default: 0
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "user",
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }
}, { timestamps: true })

const BLOG = mongoose.model("blog", BlogSchema)

module.exports = BLOG;