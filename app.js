const express=require('express');
const app=express();
//import middleware
const logger=require('./Middleware/logger.js')


//import path
const path=require('path');
//create a port if not exist
// app.get("/",(req,res)=>{
//   res.sendFile(path.join(__dirname,'public','index.html'));
// })
//Create a middleware

//init middleware
//app.use(logger);


//Create a static folder
app.use(express.static(path.join(__dirname,'public')))
const port=process.env.PORT || 500;
app.listen(port,()=>console.log(`Server listening at port ${port}`));