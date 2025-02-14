const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(MONGODB_URI);
    console.log("Mongodb connected successfully");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
