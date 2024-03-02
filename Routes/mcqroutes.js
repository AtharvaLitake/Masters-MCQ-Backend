const express=require('express')
const {createMcq,getMcqs,correctMCQ}=require('../Controllers/mcqcontroller.js')
//require express router
//becoz we dont have access to app
const router = express.Router()
//get all mcqs
router.get('/',getMcqs)

//post a new workout
router.post('/', createMcq)

router.post('/score',correctMCQ )

module.exports=router