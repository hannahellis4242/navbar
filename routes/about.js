var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'About' ,                                        nav: [
                                                    {
                                                        label:'Home',
                                                        ref:'/'
                                                    },
                                                    {
                                                        label:'About',
                                                        ref:'/about'
                                                    },
                                                    {
                                                        label:'Users',
                                                        ref:'/users'
                                                    },
                                               ]});
});

module.exports = router;
