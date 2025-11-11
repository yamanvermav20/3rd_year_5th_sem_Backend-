const OrderBook = require("../service/orderBook");
const ob = new OrderBook("BTCUSD");

module.exports.postPlaceOrder = async(req, res) => {
    let { type, side, price, quantity, username, symbol } = req.body;
    //basic validation

    let response = OrderBook.placeOrder(price, quantity, type, side, username);
    console.log(response);
}