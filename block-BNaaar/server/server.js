const http = require('http');
const url = require('url');

function handleRequest(res, req) {
    var parsedUrl = url.parse("req.url");
    var pathname = parsedUrl.pathname;
    
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to homepage');
    } else if (req.method === 'GET' && pathname === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('<h2>This is all about NodeJS </h2>');
    } else if (req.method === 'POST' && pathname === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/json' });
        res.end('{message: this is a post request}');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not found');
    }
}

var server = http.createServer(handleRequest);

server.listen(5000, () => {
    console.log('Server running at http://localhost:5000');
})
