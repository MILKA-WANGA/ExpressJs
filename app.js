const express=require('express');
const app=express();
//create a port if not exist
const port=process.env.PORT || 500;
app.listen(port,()=>console.log(`Server listening at port.${{port}}`));