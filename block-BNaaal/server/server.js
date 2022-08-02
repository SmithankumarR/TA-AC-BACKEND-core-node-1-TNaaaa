function handleRequest(req,res){
    res.end("Created Frist local server")
}
var http = require('http');

const server = http.createServer(handleRequest);

server.listen(4000, () => {
    console.log('Server running at http://localhost:4000');
})