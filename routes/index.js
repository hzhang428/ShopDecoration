var express = require('express');
var csrf = require('csurf');
var passport = require('passport');
var router = express.Router();
var csrfProtection = csrf();

var Product = require('../model/product');

router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
    Product.find(function(err, docs) {
        if (err) {
            console.log("Error while retrieving data");
        }
        res.render('shop/index', { title: 'Shopping Cart', userInfo: 'User', products: docs });
    });

});

router.get('/user/signup', function(req, res, next) {
    var messages = req.flash('error');
    res.render('user/signup', {csrfToken: req.csrfToken(), userInfo: 'User', messages: messages, hasErrors: messages.length > 0});
});

router.post('/user/signup', passport.authenticate('local.signup', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/signup',
    failureFlash: true
}));

router.get('/user/signin', function(req, res, next) {
    var messages = req.flash('error');
    res.render('user/signin', {csrfToken: req.csrfToken(), userInfo: 'User', messages: messages, hasErrors: messages.length > 0});
});

router.post('/user/signin', passport.authenticate('local.signin', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/signin',
    failureFlash: true
}));

router.get('/user/profile', function(req, res, next) {
    res.render('user/profile', {userInfo: "Woo"});
});

module.exports = router;
