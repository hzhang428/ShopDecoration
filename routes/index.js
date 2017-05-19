var express = require('express');
var router = express.Router();
var Cart = require('../model/cart');


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
    var cart = new Cart(req.session.cart);

    Product.findById(productId, function(err, product) {
        if (err) {
            return res.redirect('/');
        }
        cart.add(product, product.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/');
    });
});

router.get('/shopping-cart', function(req, res, next) {
    if (!req.session.cart) {
        return res.render('shop/shopping-cart', {products: null});
    }
    var cart = new Cart(req.session.cart);
    res.render('shop/shopping-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice});
});

module.exports = router;
