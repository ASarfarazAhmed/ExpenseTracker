const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const { Expense } = require('./schema.js')

const app = express()
app.use(bodyParser.json())
app.use(cors)

async function connectToDb() {
    try {
        await mongoose.connect('mongodb+srv://asarfarazahmed:Mongongo_16@cluster0.1gf8pwe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log('DB connection established')
        const x = process.env.PORT || 8000
        const port = 8000
        app.listen(port, function() {
            console.log(`Listening on port ${port}...`)
        })
    } catch(error) {
        console.log(error)
        console.log('Couldn\'t establish connection :(')
    }
}
connectToDb()

app.post('/add-expense', async function(request, response) {
    try {
        await Expense.create({
            "amount" : request.body.amount,
            "category" : request.body.category,
            "date" : request.body.date
        })
        response.status(201).json({
            "status" : "success",
            "message" : "entry created"
        })
    } catch(error) {
        response.status(500).json({
            "status" : "failure",
            "message" : "entry not created",
            "error" : error
        })
    }
})