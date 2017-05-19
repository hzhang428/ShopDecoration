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

/* Add product to the cart */
router.get('/add-to-cart/:id', function(req, res, next) {
    var productId = req.params.id;
});

module.exports = router;
