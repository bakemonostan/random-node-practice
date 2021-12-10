const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our Home page');
  }
  if (req.url === '/about') {
    res.end('Welcome to the about page');
  }
  res.end(
    `<h1>Error!</h1>
      <p>This is not the page you're looking for</p>`
  );
});

server.listen(5000);
