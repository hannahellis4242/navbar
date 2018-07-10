var express = require('express');
var router = express.Router();
var pageData = require('../pageData');

/* GET home page. */
router.get('/', function(req, res, next) {
var data = new pageData.pageData('About');
    res.render('index', data.data);
})

module.exports = router;
