class OrderBook {
    constructor(symbol) {
        this.symbol = symbol;
        this.bids = [];
        this.ask = [];
        this.currentPrice = null;
        this.trades = [];
    }

    _sort(side) {
        if (side == "BUY") {
            this.bids.sort((a, b) => {
                if (a.price != b.price) {
                    return b.price - a.price;  
                }
                return a.timeStamp - b.timeStamp;   
            })  
        } else {
            this.ask.sort((a, b) => {
                if (a.price != b.price) {
                    return a.price - b.price;  
                }
                return a.timeStamp - b.timeStamp;   
            })  
        }
    }

    placeOrder(price, quantity, type, side, userName) {
        let newOrder = {
            symbol: this.symbol,
            orderId: Math.floor(Math.random() * 1000000),
            side: side,
            type: type,
            price: price || null,
            originalQty: quantity,
            executedQty: 0,
            remainingQty: quantity,
            user: userName,
            timeStamp: Date.now()
        }
        if (newOrder.type == "LIMIT") {
            let result = this._LimitMatch(newOrder);
            if (result.remainingQty > 0) {
                if (result.side == "BUY") {
                    this.bids.push(result);
                } else {
                    this.ask.push(result);
                }
                this._sort(result.side)
            }
        } else {
            let result = this._MarketMatch(newOrder);
            if(result.remainingQty > 0){
                console.log("order complete"+" "+newOrder.executedQty+","+"order cancel"+" "+newOrder.remainingQty);
            }
            console.log("order completed "+newOrder.executedQty);
        }
    }

    _LimitMatch(order) {
        if (order.side == "BUY") {
            let askArr = this.ask;
            while (order.remainingQty > 0 && askArr.length > 0) {
                let top = askArr[0];
                if (top.price <= order.price) {
                    let buyQuantity = Math.min(top.remainingQty, order.remainingQty);
                    
                    order.executedQty += buyQuantity;
                    order.remainingQty -= buyQuantity;

                    top.executedQty += buyQuantity;
                    top.remainingQty -= buyQuantity;

                    if (top.remainingQty == 0) {
                        askArr.shift();
                    }
                } else {
                    break;
                }
            }
            return order;
        } else if (order.side == "SELL") {
            let bidArr = this.bids;
            while (order.remainingQty > 0 && bidArr.length > 0) {
                let top = bidArr[0];
                if (top.price >= order.price) {
                    let buyQuantity = Math.min(top.remainingQty, order.remainingQty);
                    
                    order.executedQty += buyQuantity;
                    order.remainingQty -= buyQuantity;

                    top.executedQty += buyQuantity;
                    top.remainingQty -= buyQuantity;

                    if (top.remainingQty == 0) {
                        bidArr.shift();
                    }
                } else {
                    break;
                }
            }
            return order;
        } else {
            return "Invalid Order Side"
        }
    }

    _MarketMatch(order) {
      if (order.side == "BUY") {
            let askArr = this.ask;
            while (order.remainingQty > 0 && askArr.length > 0) {
                let top = askArr[0];
                
                let buyQuantity = Math.min(top.remainingQty, order.remainingQty);
                
                order.executedQty += buyQuantity;
                order.remainingQty -= buyQuantity;

                top.executedQty += buyQuantity;
                top.remainingQty -= buyQuantity;

                if (top.remainingQty == 0) {
                    askArr.shift();
                }
            }
            return order;
        } else if (order.side == "SELL") {
            let bidArr = this.bids;
            while (order.remainingQty > 0 && bidArr.length > 0) {
                let top = bidArr[0];
                
                let sellQuantity = Math.min(top.remainingQty, order.remainingQty);
                
                order.executedQty += sellQuantity;
                order.remainingQty -= sellQuantity;

                top.executedQty += sellQuantity;
                top.remainingQty -= sellQuantity;

                if (top.remainingQty == 0) {
                    bidArr.shift();
                }
            }
            return order;
        } else {
            return "Invalid Order Side"
        }
    }
    }


let BTCUSDOrderBook = new OrderBook("BTC_USD");
// BTCUSDOrderBook.bids.push({price:"100",quantity:10,type:"LIMIT",user:"sumiti"})
// BTCUSDOrderBook.bids.push({price:"101",quantity:10,type:"LIMIT",user:"sukriti"})
// BTCUSDOrderBook.bids.push({price:"99",quantity:10,type:"LIMIT",user:"omisha"})
// //console.log(BTCUSDOrderBook);
// BTCUSDOrderBook._sort("BUY");
// console.log(BTCUSDOrderBook.bids);
// BTCUSDOrderBook.ask.push({price:"105",quantity:5,type:"LIMIT",user:"sumiti"})
// BTCUSDOrderBook.ask.push({price:"101",quantity:8,type:"LIMIT",user:"sukriti"})
// BTCUSDOrderBook.ask.push({price:"110",quantity:10,type:"LIMIT",user:"omisha"})
// BTCUSDOrderBook._sort("SELL");
// console.log(BTCUSDOrderBook.ask);

BTCUSDOrderBook.placeOrder("100", 5, "LIMIT", "BUY", "omisha");
BTCUSDOrderBook.placeOrder("101", 10, "LIMIT", "BUY", "sumiti");
BTCUSDOrderBook.placeOrder("99", 5, "LIMIT", "BUY", "sukriti");
console.log(BTCUSDOrderBook);
BTCUSDOrderBook.placeOrder("102", 5, "LIMIT", "SELL", "omisha");
BTCUSDOrderBook.placeOrder("104", 10, "LIMIT", "SELL", "sukriti");
console.log(BTCUSDOrderBook);
BTCUSDOrderBook.placeOrder("101", 5, "LIMIT", "SELL", "sumiti");
BTCUSDOrderBook.placeOrder(null, 10, "MARKET", "BUY", "sumiti");
// console.log(BTCUSDOrderBook);

//if a function start with underscore ( _ ) it is used to tell that it is a private function but it doesnot make it actually private