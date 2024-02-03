const express = require("express")
const cors = require("cors")
const app = express() // Creating an instance of express
const axios = require("axios")
app.use(cors())    // Using cors middleware


app.get("/api",(req,res)=>{
    axios.get("https://raw.githubusercontent.com/shubhamy-metricoidtech/mern-developer-mockjson/main/STUDENTS_MOCK_DATA.json")
    .then((response)=>{
        console.log(response.data)
        res.send(response.data)

    })
    .catch((error)=>{
        console.log(error)
    })
})



app.listen(8000,()=>{
    console.log("Running on port 8000")
 
})
app.get("/",(req,res)=>{
    res.send("Server is running")
})

