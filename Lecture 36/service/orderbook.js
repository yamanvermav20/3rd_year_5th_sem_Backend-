class OrderBook{
    constructor(symbol){
        this.symbol = symbol;
        this.bids = [];
        this.ask = [];
        this.currrentPrice = null;
        this.trades = []
    }
    _sort(side){
        if(side == "BUY"){
            this.bids.sort((a, b) => {
                //a - b;
                //b - a;
                if(a.price != b.price){
                    a.price - b.price; // sort according to
                }
                a.timeStamp  - b.timeStamp;                
            }) //lexographically

        }
        else{
            this.asks.sort((a, b) => {
                if(a.price != b.price){
                    b.price - a.price;
                }
                a.timeStamp - b.timeStamp
            })
        }
    }
}

let BIRTCUSDOrder B