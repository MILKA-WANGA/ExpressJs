const express=require('express');
const app=express();
//create a port if not exist
app.get("/",(req,res)=>{
  res.send("<h1>Hello ExpressJs</h1>");
})
const port=process.env.PORT || 500;
app.listen(port,()=>console.log(`Server listening at port ${port}`));