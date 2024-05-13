const http = require('node:http');
//console.log(http.STATUS_CODES)


let numRequest = 1;
const server = http.createServer((request, response) => {
/*     console.log(`request ${numRequest++}`)
    response.writeHead(200, {'content-type': 'text/plain'})
    response.end('Hola Mundo') */
/* 
    response.writeHead(200, {'content-Type': 'application/json'})
    response.end(JSON.stringify({mensage: 'Hola Mundo'})) */

    //console.log('test',request.method)
    //console.log("url:", request.url)
    //console.log(request.headers)
    console.log(response.statusCode)
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({mensage: 'hola mundo'}))
})

server.listen(3000, ()=>{
    
    console.log("Server working at http://localhost:3000")
})