const http = require('http');

function handleRequest(req, res) {
    const headers = req.headers;
    console.log(req.method, req.url, headers);
    res.end("Leaning about Http server Methods")
}

const server = http.createServer(handleRequest);
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
})