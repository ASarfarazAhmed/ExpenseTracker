
const mongoose = require('mongoose')

const express = require('express')
const bodyParser = require('body-parser')

const app  = express()

async function connectToDb(){
try{    
    await mongoose.connect('mongodb+srv://asarfarazahmed:Mongongo_16@cluster0.1gf8pwe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log('DB Connection Established....')
    const port = 8000
    app.listen(port, function() {
        console.log(`Listening on port ${port} ...`)
    })
    
}catch(error)
connectToDb()