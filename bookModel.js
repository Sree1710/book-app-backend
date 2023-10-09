const mongoose=require('mongoose')
const bookModel=mongoose.model("books",mongoose.Schema(
    {
        bookId:{type:String,required:true},
        bookName:String,
        bookImage:String,
        author:String,
        publisher:String,
        publishYear:String,
        genre:String,
        stock:String
    }
))
module.exports=bookModel