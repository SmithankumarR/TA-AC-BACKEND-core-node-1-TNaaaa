var http = require('http');
var fs = require('fs');
var url = require('url');

function hR_1(req, res) {
    console.log(req, res);
    res.end('basic server');
}
var server = http.createServer(hR_1);
server.listen(5000, () => {
    console.log('Server listening on port 5000');
});

// question 2
function hR_2(req, res) {
    res.end('My first server in NodeJS');
}
var server_2 = http.createServer(hR_2);
server_2.listen(5100, () => {
    console.log('Server listening on port 5100');
});

// question 3
function hR_3(req, res) {
    const headers = req.headers;
    console.log(headers)
    res.end(headers['user-agent']);
}
var server_3 = http.createServer(hR_3);
server_3.listen(5555, () => {
    console.log('Server listening on port 5555');
});
// question 4
function hR_4(req, res) {
    console.log(req.method, req.url);
    res.end(`These are request method and request url ${req.method}
    ,${req.url}`);
}
var server_4 = http.createServer(hR_4);
server_4.listen(5566, () => {
    console.log('Server listening on port 5566');
});
// question 5
function hR_5(req, res) {
    res.end(JSON.stringify(req.headers));
}
var server_5 = http.createServer(hR_5);
server_5.listen(7000, () => {
    console.log('Server listening on port 7000');
});
// question 6
function hR_6(req, res) {
    req.statusCode = '202';
    res.end(req.statusCode);
}
var server_6 = http.createServer(hR_6);
server_6.listen(3333, () => {
    console.log('Server listening on port 3333');
});
// question 7
function hR_7(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h3>Welcome to altcampus</h3>`);
}
var server_7 = http.createServer(hR_7);
server_7.listen(8000, () => {
    console.log('Server listening on port 8000');
});
// question 8
function hR_8(req, res) {
    res.writeHead(201, { 'Content-Type': 'text/html' });
    res.end(`<h3>Welcome to altcampus</h3>`);
}
var server_8 = http.createServer(hR_8);
server_8.listen(8001, () => {
    console.log('Server listening on port 8001');
});
// question 9
function hR_9(req, res) {
    res.writeHead(202, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({success: true, message: 'Welcome to Nodejs'}));
}
var server_9 = http.createServer(hR_9);
server_9.listen(8888, () => {
    console.log('Server listening on port 8888');
});
// question 10
function hR_10(req, res) {
    if (req.method === 'POST') {
        console.log(req.method);
         res.writeHead(202, { 'Content-Type': 'text/html' });
    }
    res.end(`<h2>posted for first time</h2>`);
}
var server_10 = http.createServer(hR_10);
server_10.listen(5050, () => {
    console.log('Server listening on port 5050');
});

// question 11
function hR_11(req, res) {
    
    if (req.method === 'GET' && req.url === '/') {
        res.setHeader('Content-Type', 'text/plain');
        res.end('I Am Smithan Kumar R')
    } else if (req.method === 'GET' && req.url === '/about') {
        res.setHeader('Content-Type', 'text/html');
        res.end('<h2>I Am Smithan Kumar R</h2>')
    } else {
        req.statusCode = 404;
        res.end(`Page not found ${req.statusCode}`)
    }
}
var server_11 = http.createServer(hR_11);
server_11.listen(2345, () => {
    console.log('Server listening on port 2345');
});
// question 12
function hR_12(req, res) {
    
    if (req.method === 'GET' && req.url === '/users') {
       fs.createReadStream('./users.html').pipe(res);
    } else if (req.method === 'POST' && req.url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.end('<h2>Posted for the second time.</h2>')
    } else {
        req.statusCode = 404;
        res.end(`Page not found ${req.statusCode}`)
    }
}
var server_12 = http.createServer(hR_12);
server_12.listen(2400, () => {
    console.log('Server listening on port 2400');
});
// question 13
function hR_13(req, res) {
    let parsedUrl = url.parse(req.url,true);
    let pathName = parsedUrl.pathname;
    console.log(pathName , req.url);
    if (req.method === 'GET' && pathName === '/users') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(parsedUrl.query));
    } else if (req.method === 'POST' && req.url === '/users') {
        fs.createReadStream('./users.html').pipe(res);
    } else {
        req.statusCode = 404;
        res.end(`Page not found ${req.statusCode}`)
    }
}
var server_13 = http.createServer(hR_13);
server_13.listen(14600, () => {
    console.log('Server listening on port 14600');
});