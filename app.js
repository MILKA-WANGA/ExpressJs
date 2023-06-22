const express=require('express');
const app=express();
//import path
const path=require('path');
//create a port if not exist
app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,'public','index.html'));
})
const port=process.env.PORT || 500;
app.listen(port,()=>console.log(`Server listening at port ${port}`));