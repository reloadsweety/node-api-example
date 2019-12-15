const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  req.route('/api/users');
  res.end('<html><h1>Hello World with Node.js!!!!</h1></html>');
});

http.createServer;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
