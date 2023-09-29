const mongoose = require("mongoose")

const Schema = mongoose.Schema
const blogSchema = new Schema({ // schema is rule and regulation like int , string
    title : {
        type : String,
        unique : true
    },
    subTitle: {
        type : String
    },
    description : {
        type : String
    }
},{
    timestamps : true
})

// Alternative
// module.exports = mongoose.model("Blog",blogSchema) yasari pani garda huncha tala ko 2line jasari const garara garda nichuncha.

const Blog = mongoose.model("Blog",blogSchema)
module.exports = Blog;