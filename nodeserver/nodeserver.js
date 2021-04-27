const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    //console.log(req.url);
    if(req.url == '/') {
        res.end('Hello from dashboard');
    } else if(req.url == '/about') {
        res.end('Hello from about');
    } else if(req.url == '/contact') {
        res.end('Hello from contact');
    }  else if(req.url == '/api') {
        fs.readFile('./api/index.json', 'utf-8', (err, data) => {
            const jsonResponse = JSON.parse(data);
            res.end(jsonResponse[0].name);
            res.end(data);
        });
    } else {
        res.writeHead(404, {'Content-type': 'text/html'});
        res.end('404 Page not found');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listing to the port 8000');
});