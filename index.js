const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())
// your code goes here
app.get("/",(req,res)=>{
    res.send("Hello World!")
})

app.post("/add",(req,res)=>{
    console.log(req.body)
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if(isNaN(num1)|| isNaN(num2)){
        res.json({
            status:"error",
            message:"num value should be numeric"
        })
    }else{
        res.json({
            status:"success",
            message:"adds the 2 number",
            sum:num1+num2
        })
    }
})

app.post("/sub",(req,res)=>{
    console.log(req.body)
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if(isNaN(num1)|| isNaN(num2)){
        res.json({
            status:"error",
            message:"num value should be numeric"
        })
    }else{
        res.json({
            status:"success",
            message:"subtracts the 2 number",
            sum:num1-num2
        })
    }
})

app.post("/multiply",(req,res)=>{
    console.log(req.body)
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if(isNaN(num1)|| isNaN(num2)){
        res.json({
            status:"error",
            message:"num value should be numeric"
        })
    }else{
        res.json({
            status:"success",
            message:"multiply the 2 number",
            sum:num1*num2
        })
    }
})

app.post("/divide",(req,res)=>{
    console.log(req.body)
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if(isNaN(num1)|| isNaN(num2)){
        res.json({
            status:"error",
            message:"num value should be numeric"
        })
    }else{
        res.json({
            status:"success",
            message:"divide the 2 number",
            sum:num1/num2
        })
    }
})


app.listen(3000, () => console.log(`App listening on port ${3000}!`))

module.exports = app;