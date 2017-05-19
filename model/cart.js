/**
 * Cart model
 */
function Cart(oldCart) {
    this.items = oldCart? oldCart.items : {};
    this.totalQty = oldCart? oldCart.totalQty : 0;
    this.totalPrice = oldCart? oldCart.totalPrice : 0;
}

Cart.prototype.add = function(item, id) {
    var storedItem = this.items[id];
    if (!storedItem) {
        storedItem = this.items[id] = {
            item : item,
            qty: 0,
            price: 0};
    }
    storedItem.qty++;
    storedItem.price = storedItem.item.price * storedItem.qty;
    this.totalQty++;
    this.totalPrice += storedItem.item.price;
};

Cart.prototype.remove = function(id) {

};

Cart.prototype.generateArray = function() {
    var arr = [];
    for (let id in this.items) {
        arr.push(this.items[id]);
    }
    return arr;
};

module.exports = Cart;
