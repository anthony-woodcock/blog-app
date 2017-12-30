var express = require('express')
var app = express()
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

// APP CONFIG
mongoose.connect("mongodb://localhost/restful_blog_app")
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))

//MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
})
var Blog = mongoose.model("Blog", blogSchema)

//RESFUL ROUTES

app.listen(3000, function(){
    console.log("Server is running on 3000")
})