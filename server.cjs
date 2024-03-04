const express = require('express')

// geeksforgeeks.org -> home page url
//localhost:8000

const app = express()
app.get('/', function(request, response){
    response.send('hello nodejs')

})

app.get ('/java', function(request, response){
    response.send('Java')
})


app.listen(8000)