const http = require('http');

function handleRequest(req, res) {
  let statusCode = req.statusCode = 201;
    console.log(statusCode);
    // res.setHeader('Content-Type', 'text/html');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1><center>Welcome to Your World</center></h1>');
    res.write('<p>Server Created on port 4444.</p>');
  res.end();


}
const server = http.createServer(handleRequest);

server.listen(4444, () => {
    console.log('Server running at http://localhost:4444');
})