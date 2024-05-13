const http = require('node:http')


const port = process.argv[2] || 3000
const server = http.createServer((req, res)=>{
    let body = ""
    let title = ""
    let url = `http://localhost:${server.address().port}`
    //res.statusCode = 404;
    if(req.url === "/"){
        title = "Home Page"
        body = '<h1>Rafael</h1>'
        body +=`<p>esta em http://localhost${req.url}</p>`
        body +=`<a href="/node">ir a node</a>`
    }
    else if(req.url === "/node"){
        title = "Node"
        body = '<h1>Rafael</h1>'
        body +=`<a href="/">Home page</a>`
    }else{
        title = "error-404"
        body = '<h1>page not founded</h1>'
        body +=`<a href="/">Home page</a>`
    }
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
    res.end()
})

server.listen(port, ()=>{
    console.log(`server listening on http://localhost:${server.address().port}`)
})
