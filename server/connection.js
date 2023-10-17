const mongoose = require("mongoose");

const connectToMongoDb = async (url) => {
    mongoose.set('strictQuery', true)

    await mongoose.connect(url)

}

module.exports = {
    connectToMongoDb
};