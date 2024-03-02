//for better organization we use model - controller architecture
const MCQ = require("../models/mcqschema.js");
const mongoose = require("mongoose");

//get all mcqs
const getMcqs = async (req, res) => {
  const projection = {
    questionid: 1,
    question: 1,
    option1: 1,
    option2: 1,
    option3: 1,
    option4: 1,
  };
  const mcqs = await MCQ.find({}, projection).sort({ createdAt: 1 });
  res.status(200).json(mcqs);
};

//create new mcq
const createMcq = async (req, res) => {
  const {
    questionid,
    question,
    option1,
    option2,
    option3,
    option4,
    correct_option,
  } = req.body;
  //add mcq to db
  try {
    const mcq = await MCQ.create({
      questionid,
      question,
      option1,
      option2,
      option3,
      option4,
      correct_option,
    });
    res.status(200).json(mcq);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//correct mcq and display the score mcq
const correctMCQ = async (req, res) => {
  const associativeArray = req.body;
  //add mcq to db
  try {
    var cnt = 0;
    const projection = {
      questionid: 1,
      correct_option: 1,
    };
    const mcqs = await MCQ.find({}, projection).sort({ createdAt: 1 });
    const mcqAssociativeArray = {};
    mcqs.forEach((mcq) => {
      mcqAssociativeArray[mcq.questionid] = mcq.correct_option;
    });
    for (const questionId in associativeArray) {
      if (associativeArray.hasOwnProperty(questionId)) {
        if (mcqAssociativeArray[questionId] === associativeArray[questionId]) {
          cnt++;
        }
      }
    }
    res.status(200).json({ Score: cnt });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getMcqs,
  createMcq,
  correctMCQ,
};
