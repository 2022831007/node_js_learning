const http = require('http');

// create server
const server = http.createServer((req, res) => {

    // log request
    console.log(req.url);

    // header
    res.setHeader('Content-Type', 'text/html');

    // routing
    if (req.url === '/') {
        res.statusCode = 200;
        res.end('<h1>Home Page</h1>');
    } 
    else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('<h1>About Page</h1>');
    } 
    else {
        res.statusCode = 404;
        res.end('<h1>404 Not Found</h1>');
    }
});

// listen server
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});