//for better organization we use model - controller architecture
const MCQ = require("../models/mcqschema.js");
const mongoose = require("mongoose");
let Score_user;

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
  const questionIdToSelectedOption = {};
  associativeArray.selectedAnswers.forEach((answer) => {
    questionIdToSelectedOption[answer.questionid] = answer.correct_option;
  });

  console.log(questionIdToSelectedOption);
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
    for (const questionId in questionIdToSelectedOption) {
      if (questionIdToSelectedOption.hasOwnProperty(questionId)) {
        if (mcqAssociativeArray[questionId] === questionIdToSelectedOption[questionId]) {
          cnt++;
        }
      }
    }
    console.log(Score_user)
    res.status(200).json({ Score: cnt });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//getting score
const getScore = async (req, res) => {
  try {
    console.log(Score_user)
    res.status(200).json({ Score: Score_user });
  } catch (error) {
    console.error('Error fetching score:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



module.exports = {
  getMcqs,
  createMcq,
  correctMCQ,
  getScore
};
