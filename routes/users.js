var express = require('express');
var router = express.Router();
var pageData = require('../pageData');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var data = new pageData.pageData('Users');
    res.render('index', data.data);
});

module.exports = router;
