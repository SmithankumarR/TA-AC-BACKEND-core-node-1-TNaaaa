var http = require('http');
var fs = require('fs');

function handleRequest(req,res){
    if(req.method === "GET" && req.ul === '/'){
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to index page');
        
    } else if(req.method === "GET" && req.url === '/about'){
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./about.html').pipe(res);
    } else if(req.method === "POST" && req.url === '/about'){
        res.setHeader('Content-Type', 'text/html');
        fs.readFile('./about.html', 'utf8', (err,content) => {
            if(err) console.log(err);
            res(content);
        })
    } else {
        res.setHeader('Content-Type', 'text/plain');
        res.end("Page not found");
    }

}

var server = http.createServer(handleRequest);
server.listen(5555, () => {
    console.log('server listening on port 5555');
})