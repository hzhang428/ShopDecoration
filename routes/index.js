var express = require('express');
var router = express.Router();


var Product = require('../model/product');


/* GET home page. */
router.get('/', function(req, res, next) {
    Product.find(function(err, docs) {
        if (err) {
            console.log("Error while retrieving data");
        }
        res.render('shop/index', { title: 'Shopping Cart', userInfo: 'User', products: docs });
    });

});

module.exports = router;
