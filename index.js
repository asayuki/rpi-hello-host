'use strict';

const http = require('http');
const os = require('os');

http.createServer((request, response) => {
  response.writeHead(200,
    {
      'Content-Type': 'text/plain'
    }
  );
  response.end(os.hostname());
}).listen(8000);
