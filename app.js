const app = require("express")();
// const mongoose = require("mongoose");
const { connectDatabase } = require("./database/database");


//Database conction function
connectDatabase()



// GET API
app.get("/",(req,res)=>{
    res.json({
        status : 200,
        massege : "success"
    })
})

app.listen(2000,()=>{
    console.log("Nodejs has started at port 2000")
})