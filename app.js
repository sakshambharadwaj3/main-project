const express = require("express");
const mongoose=require("mongoose");
const app =express();
app.use(express.json());

const port = process.env.PORT ||5400;

require("./conn/conn");
require('./model/schema');

const middleware = (req,res,next)=>{
  console.log("middleware is there");
  next(); 
}

app.use(require('./router/auth'));


app.listen(port,(err)=>{
   if(err)console.log("connection has not been setup");
   else console.log(`connection is set up at ${port}`); 
});
