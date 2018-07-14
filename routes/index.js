var express = require('express');
var router = express.Router();
var config = require('../config/config');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', naming: config.greeting + ' ' + config.name });
});

module.exports = router;
