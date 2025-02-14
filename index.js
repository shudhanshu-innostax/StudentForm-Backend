const express = require('express')
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config();

const PORT = process.env.PORT || 3001;

app.get('/',(req,res) => {
    res.send('Hello World');
})

app.listen(PORT,(err) => {
    if(err){
        console.log(`Error in running nodejs server ${err}`);
    }else{
        connectDB()
        console.log(`Server is up and running on PORT: ${PORT}`);
    }
})