//setup of express app
const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors = require('cors');

//load env variables
require("dotenv").config();

//express router implementation
const mcqRoutes = require("./Routes/mcqroutes.js");

//middleware
app.use(express.json());
app.use(cors())
app.use((req, res, next) => {
  //logging the request
  console.log(req.path, req.method);
  next();
});

app.use("/api/mcqs", mcqRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //it takes some time hence we have to use .then method
    console.log("Db connected successfully");
    //listen -->only when database is connected
    //process is a global object
    app.listen(process.env.PORT, () => {
      console.log("Server Running");
    });
  })
  .catch((error) => {
    console.log(error);
  });