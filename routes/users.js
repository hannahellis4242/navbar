var express = require('express');
var router = express.Router();
var pageData = require('pageData');

/* GET users listing. */
router.get('/', function(req, res, next) {
 // res.send('respond with a resource');
  res.render('index', pageData('Users').data);
});

module.exports = router;
