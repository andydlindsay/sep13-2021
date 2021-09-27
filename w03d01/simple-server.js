const http = require('http');

const server = http.createServer((request, response) => {
  console.log('url:', request.url);
  console.log('method:', request.method);

  if (request.method === 'GET' && request.url === '/home') {
    response.write('you are on the home page!!');
  } else if (request.method === 'GET' && request.url === '/about') {
    response.write('info about us!');
  } else {
    response.write('page not found');
  }

  // response.write('hello there!!');
  response.end();
});

server.listen(3000);
