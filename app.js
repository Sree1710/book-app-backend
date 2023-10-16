const Express=require('express')
const bodyParser=require('body-parser')
const Cors=require('cors')
const mongoose=require('mongoose')
const bookModel = require('./bookModel')

var app=Express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(Cors())

mongoose.connect("mongodb+srv://sreelekshmisl1710:Dharithri@cluster0.y83cozw.mongodb.net/bookDB?retryWrites=true&w=majority",{useNewUrlParser:true})

app.post("/addb",async(request,response)=>{
    let data =request.body
    const book=new bookModel(data)
    let result=await book.save()
    if (result.bookid!="") {
        response.json({"status":"success"})
    } else {
        alert("Something went wrong")
    }
})

app.get("/viewb",async(request,response)=>{
    let data=await bookModel.find()
    response.json(data)
})

app.post("/searchb",async(request,response)=>{
    let data=request.body
    let result=await bookModel.find(data)
    response.json(result)
})



app.listen(3001,()=>{
    console.log("Server is running")
})