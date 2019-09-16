const express = require('express');
const app = express()
const port = 3000
const wiki = require('./wiki.js');

// npm install morgan
const logger = require('morgan');
// by invoking app.use, we can have middleware morgan log events on the server.
app.use(logger('dev'));

// Also, custom middleware function:
const a_middleware_function = function(req,res,next) {
  console.log('Cows say moo');
  if(req.url === '/somethingbroke') {
    res.status(500).send('Something broke!');
  }
  next(); // Calling the next() function lets Express call the next
  // middleware function in the chain
}
// Use the custom middleware for all routes.
app.use(a_middleware_function);
// Use the custom middleware for specific route
app.use('/someroute', a_middleware_function);
// You can also make it added for a specific action in a route, like GET.
app.get('/', a_middleware_function);
// This makes static files in the folder public accessible by filename.
// e.g. http://localhost:3000/images/dog.jpg
app.use(express.static('public'));

// routing in express
app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.use('/wiki', wiki);

// this part of the code starts the server and listens on port 3000
app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
