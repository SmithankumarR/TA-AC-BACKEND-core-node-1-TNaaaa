var http = require('http');
var url = require('url');
var fs = require('fs');


function handleRequest(req, res) {
    let parsedurl = url.parse(req.url);
    let pathname = parsedurl.pathname;
    if (req.method === 'GET' && pathname === '/') {
        fs.createReadStream('index.html').pipe(res);
    } else if (req.method === 'GET' && pathname === '/about') {
        fs.createReadStream('about.html').pipe(res);
    } else if (req.url.split('.').pop() === 'css') {
        // set header for css file
        res.setHeader('Content-Type', 'text/css');
        // read css file and send it in response
        fs.readFile('./finalProject/assets/stylesheet/' + req.url, (err, content) => {
            if (err) return console.log(err);
            res.end(content)
        })
    }
    else {
        res.setHeader('Content-Type', 'text/plain');
        res.end('page not found');
    }
}

var server = http.createServer(handleRequest);

server.listen(4555, () => {
    console.log('listening on port 4555');
})