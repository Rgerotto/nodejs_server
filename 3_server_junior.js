const http = require('node:http')


const port = process.argv[2] || 0
const server = http.createServer((req, res)=>{
    let body = ""
    let title = ""
    //res.statusCode = 404;
    if(res.statusCode === 200){
        title = "Todo ok"
        body = '<h1>Rafael</h1>'
        body +=`<p>${req.url}</p>`
    }
    else if(res.statusCode === 404){
        title = "error - 404"
        body = 'pagina no encontrada∂ßç'
    }
    res.writeHead(200, {'content-type': 'text/html'})
    res.write(body)
    res.end()
})

server.listen(port, ()=>{
    console.log(`server listening on http://localhost:${server.address().port}`)
})

function working(req,res){
    res.writeHead(200, {'content-type': 'text/html'})
    res.write(`<html>
    <head>
    <meta charset="utf-8">
    <title>${title}</title>
    </head>
    <body>
    ${body}
    </body>
    </html>`)
    res.write(`${req.url}`)
    res.end()
}

function notWorking(req,res){
    res.writeHead(404, {'content-type': 'text/plain'})
    res.end('server not founded')
}