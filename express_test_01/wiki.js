// wiki.js - Wiki route module

var express = require('express');

// By using a router object, we can export routes.
var router = express.Router();

router.get('/', function(req, res) {
  res.send('Wiki home page');
});

router.get('/about', function(req, res) {
  res.send('About this wiki');
});

// The routes above now can be exported so others can use this as a module.
module.exports = router;
