var express = require('express');
var router = express.Router();

var mysql = require('mysql');


/* GET home page. */
router.get('/', function(req, res, next) {
      res.render('admin', { title: "Geek Bot" , manage: "Manage Product"});
});

router.get('/login', function(req, res, next) {
          res.render('login', { title: "Geek Bot" , login:"Admin" ,  dir:""});
});
  

module.exports = router;
