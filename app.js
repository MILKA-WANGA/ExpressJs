const express=require('express');
const app=express();
//import middleware
const logger=require('./Middleware/logger.js')

//import members model
const member=require('./Members')
//import path
const path=require('path');
//create a port if not exist
// app.get("/",(req,res)=>{
//   res.sendFile(path.join(__dirname,'public','index.html'));
// })
//Create a middleware

//init middleware
//app.use(logger);

//Create an api to get all members
app.get('/api/members',(req,res)=>
{
    res.json(member);
});
//Get a single member
app.get('/api/members:id',(req,res)=>{
res.json(member.filter(member=>member.id===parseInt(req.params.id)))
});
//Create a static folder
app.use(express.static(path.join(__dirname,'public')))
const port=process.env.PORT || 500;
app.listen(port,()=>console.log(`Server listening at port ${port}`));