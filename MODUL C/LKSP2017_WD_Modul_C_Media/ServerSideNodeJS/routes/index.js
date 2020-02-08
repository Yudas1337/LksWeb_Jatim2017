var express = require('express');
var router = express.Router();

var session = require('express-session');
var mysql = require('mysql');
var bcrypt = require('bcrypt');


 var sess;
/* GET home page. */
router.get('/', function(req, res, next) {
    sess = req.session;
    var nama;
    if(sess.login){
        nama = sess.nama;
    }else{
        sess.login = false;
        nama = "none";
    }

      res.render('index', { title: "Geek Bot" , manage: "Manage Product", account :sess.login });
});


router.get('/login', function(req, res, next) {
    //sess = req.session;
    //sess.login = "true";
    res.render('login', { title: "Geek Bot" ,login:"Log In" , dir:"/userauth" });
});

router.get('/logout', function(req, res, next) {
    //sess = req.session;
    req.session.destroy();
    res.redirect('/');
});

router.get('/register', function(req, res, next) {
    //sess = req.session;
    //sess.login = "true";
    res.render('register', { title: "Geek Bot" ,regis:"Register" , dir:"/newuser" });
});

module.exports = router;
