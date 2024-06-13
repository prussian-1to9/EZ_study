//const http = require('http'); // Import Node.js core module
import { createServer } from 'http'; // can instead use ES6 import syntax

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello node.js');
    res.end();
}); // Create an HTTP server

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
