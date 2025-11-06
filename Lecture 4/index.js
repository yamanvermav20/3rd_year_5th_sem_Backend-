let account_balance = 200000;
let products = [
    {
        name: "samsung",
        amount: 70000,
        quantity: 10
    },
    {
        name: "Iphone 16",
        amount: 100000,
        quantity: 1
    }
];
// function buyProduct(product_name, cb){
//     //some asynchronous operations
//     //1. get product detail from product db
//     //2. write order detail in user db
//     setTimeout(() => {
//         console.log("order complete");
//         cb();        
//     })
// }

buyProduct("Iphone 16", function(err, amount){
    if(err) return console.log(err)
        console.log(amount)
    console.log("product is purchased");
    deductAmount(amount, function(err, message){
        if(err) return console.log(err);
        console.log(message);
    })
});
    
// console.log("product is purchased");


function buyProduct(product_name, cb) {
    let isProduct = null;
    //implement for loop to find product in an array
    //find product object from product array who's name is equal to the name coming in function
    for (let i = 0; i < products.length; i++) {
        if(products[i].name == product_name){
            isProduct = products[i];
        }
    }
    if(!isProduct){
        cb("Product is not available", null)
    }else{
        cb(null, isProduct.amount);
    }
}

function deductAmount(amount, cb){
    if(amount > account_balance){
        cb("your account balance is low");
    }
    else{
        account_balance -= amount;
        cb(null, "your product is purchased");
    }
}

//problems in callback
// 1. nested callback
