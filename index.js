const express = require('express')
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config();
const FormRouter = require('./routes/form.route')
const cors = require('cors');

const PORT = process.env.PORT || 3001;

// middleware for parsing data from body and form
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.get('/',(req,res) => {
    res.send('Hello World');
})

app.use('/api/form',FormRouter)

app.listen(PORT,(err) => {
    if(err){
        console.log(`Error in running nodejs server ${err}`);
    }else{
        connectDB()
        console.log(`Server is up and running on PORT: ${PORT}`);
    }
})