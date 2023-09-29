const mongoose = require("mongoose")

exports.connectDatabase = async ()=>{
    // connecting to database
    // jaba samma database sanga connect hudina wait garna
 await mongoose.connect("mongodb+srv://muna:hello12@cluster0.ouaxdyr.mongodb.net/?retryWrites=true&w=majority")
  
    console.log("Database connected successfully")

}