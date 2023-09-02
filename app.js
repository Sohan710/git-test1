// app.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Everyone! This is a class of ITCS 5166 NBAD\nThe Server is running at http://0.0.0.0:8081/');
});

server.listen(8081, '0.0.0.0', () => {
  console.log('Server running at http://0.0.0.0:8081/');
});