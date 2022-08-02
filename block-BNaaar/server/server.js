var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(res, req) {
  if (req.method === 'GET' && req.url === '/') {
    res.setHeader('Content-type', 'text/plain');
    res.end('Welcome to homePage');
  } else if(req.method === 'GET' && req.url === '/about'){
    res.setHeader('Content-type', 'text/html');
    res.end('<h2> This is all about NodeJs </h2>');
  } else if(req.method === 'POST' && req.url === '/about'){
    res.setHeader('Content-type', 'application/json');
    res.end('{message: this is a post request}');
  }
}
server.listen(5000, () => {
  console.log('Server listening on port 5k');
});
