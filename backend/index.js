const express = require("express")
const app = express();
const port = 5005;

app.get('/',(req,res)=>{
    res.send(`Server is running on port no. ${port}`)
})

app.listen(port,()=>{
    try{
        console.log(`server is fine ${port}`)
    }
    catch(err){
        console.log(`Error:${err}`)
    }
})