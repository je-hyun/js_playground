// This module is needed for server request/response.
var http = require('http');
// If the module is in the same folder, we use ./
var dt = require('./myfirstmodule');
// This built-in module helps split query strings into readable parts.
var url = require('url');
// npm install upper-case
// ^ That command installs from node package manager, upper-case
var uc = require('upper-case');

// Create a server object:
http.createServer(function(req,res) { // Note request and response arguments
  // writeHead creates the header of the response.
  // response.writeHead(statusCode[, statusMessage][, headers])
  // 200 is "OK" success code.
  res.writeHead(200, {'Content-Type': 'text/html'});
  // response to the client (this is what the webpage displays)
  res.write(uc("The date and time are currently: " + dt.myDateTime()));
  // Let's write the request url to the page normally.
  res.write(`<br/>The request url is: \"${req.url}\"<br/>`);

  // Let's now query the url using the 'url' module.
  // So for example, localhost:8080/?year=2019&month=September
  let q = url.parse(req.url, true);
  let txt = q.query.year + " " + q.query.month;

  console.log(q.query);
  // response.end() is always called at the end of each response.
  res.end(txt);
}).listen(8080); // Server object listens on port 8080
