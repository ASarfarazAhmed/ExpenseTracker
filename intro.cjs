const http = require('http')

console.log("helloWorld")
http.createServer(function(request, response){
    response.writeHead(200,{'Content-Type': 'text/plain'})
    response.write("Welcome Node")
    response.end()





}).listen(8000)




