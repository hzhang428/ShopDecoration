var Product = require('../model/product');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');
mongoose.Promise = global.Promise;

var products = [
    new Product({
        imagePath: 'https://s-media-cache-ak0.pinimg.com/originals/d0/72/d9/d072d9c961ac9e97bef254941beee3cd.jpg',
        title: 'Flower ring',
        description: [
            '5 in a pack',
            'hand-made',
            'can be used on trees'
        ],
        price: 13
    }),
    new Product({
        imagePath: 'http://www.aacfralwake.org/wp-content/uploads/2013/11/christmas-tree-ornaments-personalized.jpg',
        title: 'Tree decoration',
        description: [
            '10 faces included',
            'use sharpie to draw'
        ],
        price: 14
    }),
    new Product({
        imagePath: 'https://s-media-cache-ak0.pinimg.com/736x/4b/72/98/4b729855ac8a29bf2c4e915e372f7abd.jpg',
        title: 'Jewelry hanger',
        description: [
            'hand-made',
            'multiple usage'
        ],
        price: 40
    }),
    new Product({
        imagePath: 'http://cdn.homedit.com/wp-content/uploads/2011/12/Crocheted-Christmas-Tree-Ornament-3.jpg',
        title: 'Christmas tree ball',
        description: [
            '3 in a pack',
            'tree decoration'
        ],
        price: 7
    }),
    new Product({
        imagePath: 'https://ae01.alicdn.com/kf/HTB1UUORNVXXXXXAaXXXq6xXFXXXr/Merry-font-b-Christmas-b-font-font-b-Tree-b-font-Star-Decoration-Supplies-font-b.jpg',
        title: 'Stars',
        description: [
            '2 different shapes',
            'used on the top of the tree'
        ],
        price: 15
    }),
    new Product({
        imagePath: 'http://g03.a.alicdn.com/kf/HTB1UdS1OFXXXXbRaXXXq6xXFXXXp/Snowflake-font-b-Christmas-b-font-font-b-tree-b-font-decoration-deserve-to-act-the.jpg',
        title: 'Snow flake',
        description: [
            '5 in a pack',
            '10cm in diameter'
        ],
        price: 8
    })
];

var saveData = new Promise((resolve, reject) => {
    try {
        for (let i = 0; i < products.length; i++) {
            products[i].save();
        }
        resolve();
    } catch (e) {
        reject(e.message);
    }
});

saveData.then(() => {
    mongoose.disconnect().then(() => {
        console.log("Closed successfully");
    }, () => {
        console.log("Failed to close");
    });
}).catch(
    e => {
        console.log(e);
    }
);


