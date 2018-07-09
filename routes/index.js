var express = require('express');
var router = express.Router();
var pageData = require('pageData');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', pageData('Home').data);
});

module.exports = router;