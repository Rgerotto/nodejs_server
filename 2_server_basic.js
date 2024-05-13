const http = require('node:http')


const port = process.argv[2] || 3000
const server = http.createServer((req, res)=>{
    //res.statusCode = 404;
    if(res.statusCode === 200){
        res.writeHead(200, {'content-type': 'text/plain'})
        res.end('todo bien')
    }
    else if(res.statusCode === 404){
        res.writeHead(404, {'content-type': 'text/plain'})
        res.end('server not founded')
    }
})

server.listen(port, ()=>{
    console.log(`server listening on http://localhost:${server.address().port}`)
})