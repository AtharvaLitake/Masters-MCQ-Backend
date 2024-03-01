const mongoose=require('mongoose')
//for creating schema
const Schema=mongoose.Schema

const mcqSchema=new Schema({
    questionid:
    {
        type:Number,
        required:true
    },
    question:{
        type:String,
        required:true
    },
    option1:{
        type:String,
        required:true
    },
    option2:{
        type:String,
        required:true
    },
    option3:{
        type:String,
        required:true
    },
    option4:{
        type:String,
        required:true
    },
    correct_option:{
        type:String,
        required:true
    },
},{timestamps:true})
//timestamp property tells when the property was added
//creation of model-->workout collection created
module.exports=mongoose.model('MCQ',mcqSchema)