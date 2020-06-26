const http = require('http');
const hostname = 'localhost';
const port = 8080;


const server = http.createServer((req, res) => {
    const startTime = Date.now();
    setTimeout(function() {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`Task N${req.url.slice(1)} time ${Date.now() - startTime}`);
    }, 100);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});