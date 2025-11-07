class OrderBook {
    constructor(symbol) {
        this.symbol = symbol;
        this.bids = [];
        this.asks = [];
        this.currentPrice = null;
        this.trades = [];
    }

    _sort(side) {
        if (side === 'BUYS') {
            this.bids.sort((a, b) => {
                if (a.price === b.price) {
                    return a.timeStamp - b.timeStamp;
                } else {
                    return b.price - a.price;
                }
            });
        } else if (side === 'SELLS') {
            this.asks.sort((a, b) => {
                if (a.price === b.price) {
                    return a.timeStamp - b.timeStamp;
                } else {
                    return a.price - b.price;
                }
            });
        }
    }
    placeOrder(price, quantity, type, side) {
        let neworder = {
            symbol: this.symbol,
            OrderId: Math.floor(Math.random() * 1000000),
            price: price||null,
            quantity: quantity,
            OriginalQty: quantity,
            executedQty: 0,
            remainingQty: quantity,
            user: userName,
            timeStamp: Date.now()
        };
        if(neworder.type === 'LIMIT'){
            let result=this._LimitMatch(neworder);
        }
        else{
            let result=this._MarketMatch(neworder);
        }
}
}

// Example usage
let BITCOINUSD = new OrderBook("BTC_USD");

BITCOINUSD.bids.push({price:100, quantity:10, type:"LIMIT", user:"Yaman", timeStamp: Date.now()});
BITCOINUSD.bids.push({price:101, quantity:11, type:"LIMIT", user:"Yaman_Verma", timeStamp: Date.now() + 10});
BITCOINUSD.bids.push({price:102, quantity:12, type:"LIMIT", user:"Verma", timeStamp: Date.now() + 20});

BITCOINUSD.asks.push({price:105, quantity:10, type:"LIMIT", user:"Vansh", timeStamp: Date.now()});
BITCOINUSD.asks.push({price:99, quantity:11, type:"LIMIT", user:"Ritik", timeStamp: Date.now() + 10});
BITCOINUSD.asks.push({price:102, quantity:12, type:"LIMIT", user:"Nitesh", timeStamp: Date.now() + 20});

console.log("Before sorting:", BITCOINUSD);

BITCOINUSD._sort('BUYS');
BITCOINUSD._sort('SELLS');

console.log("After sorting:", BITCOINUSD);

_LimitMatch() {
    if(order.side=="BUY" ) {
        let askArr = this.ask;
        while (order.remainingQty>=0 && askArr >0) {
            let top = askArr[0];
            if(top.price<=order.price){
                let buyQTY=Math.min(top.quantity,order.quantity);
                order.executedQty+=buyQTY;
                order.remainingQty+=buyQTY;

                top.executedQty+=buyQTY;
                top.remainingQty-=buyQTY;
            }
        }
    }                          
}