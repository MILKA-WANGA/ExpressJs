
const express=require('express')
const route=express.Router();
//import members model
const member=require('./Member');
//Create an api to get all members
route.get('/api/members',(req,res)=>
{
    res.json(member);
});


//Get a single member
router.get('/api/members:id',(req,res)=>{
    
//Check if member exists
const found=member.some(member=>member.id===parseInt(req.params.id))
if(found){
    res.json(member.filter(member=>member.id===parseInt(req.params.id)))
}
else{
    res.status('400').json({msg:`member not found with id .${(req.params.id)}`})
}

});