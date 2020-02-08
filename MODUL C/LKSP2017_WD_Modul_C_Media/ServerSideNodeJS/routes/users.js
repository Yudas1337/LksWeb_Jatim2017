var express = require('express');
var router = express.Router();

var session = require('express-session');
var mysql = require('mysql');


/* GET users listing. */
router.get('/', function(req, res, next) {
 
 res.render('users', { title: "Geek Bot" , nama: "Geeko" });      
 
});

module.exports = router;
