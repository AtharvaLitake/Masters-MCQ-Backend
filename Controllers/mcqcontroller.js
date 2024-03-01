//for better organization we use model - controller architecture
const MCQ=require('../models/mcqschema.js')
const mongoose=require('mongoose')

//get all mcqs
const getMcqs= async(req,res)=>{
    const mcqs=await MCQ.find({}).sort({createdAt:-1})
    res.status(200).json(mcqs)
}

//create new mcq
const createMcq=async (req,res)=>{
    const {questionid,question,option1,option2,option3,option4,correct_option}=req.body
    //add mcq to db
    try{
        const mcq=await MCQ.create({questionid,question,option1,option2,option3,option4,correct_option})
        res.status(200).json(mcq)
    }
    catch(error)
    {
        res.status(400).json({error:error.message})
    }
}

module.exports ={
    getMcqs,
    createMcq,
}