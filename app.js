const express=require('express');
const app=express();
//import path
const path=require('path');
//create a port if not exist
// app.get("/",(req,res)=>{
//   res.sendFile(path.join(__dirname,'public','index.html'));
// })
//Create an array
const members=[
    {
        id:1,
         name:"Milka",
         status:"Active"
    },
    {
         id:2,
         name:"Wanga",
         status:"Active"
    },
    {
         id:3,
         name:"Synthia",
         status:"Active"
    },
];
//Create an api
app.get('/api/members',(req,res)=>
{
    res.json(members);
})
//Create a static folder
app.use(express.static(path.join(__dirname,'public')))
const port=process.env.PORT || 500;
app.listen(port,()=>console.log(`Server listening at port ${port}`));