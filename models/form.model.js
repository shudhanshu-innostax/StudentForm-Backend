const mongoose = require('mongoose')

const FormSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    department:{
        type:String,
        required:true
    }
},{timestamps:true})

const Form = mongoose.model('Form',FormSchema);
module.exports = Form;