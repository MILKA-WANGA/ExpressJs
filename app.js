const express=require('express');
const app=express();
//import moment module for date
const moment = require('moment')
//import members model
const member=require('./Members')
//import path
const path=require('path');
//create a port if not exist
// app.get("/",(req,res)=>{
//   res.sendFile(path.join(__dirname,'public','index.html'));
// })
//Create a middleware
const logger=(req,res,next)=>{
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}.${moment()}.format`);
    next();
}
//init middleware
app.use(logger);

//Create an api
app.get('/api/members',(req,res)=>
{
    res.json(member);
})
//Create a static folder
app.use(express.static(path.join(__dirname,'public')))
const port=process.env.PORT || 500;
app.listen(port,()=>console.log(`Server listening at port ${port}`));