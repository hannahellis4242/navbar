var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 // res.send('respond with a resource');
  res.render('index', { title: 'Users' ,                                        nav: [
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
