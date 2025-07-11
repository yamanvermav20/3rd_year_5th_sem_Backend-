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

// Convert buyProduct to return a Promise
function buyProduct(product_name) {
    return new Promise((resolve, reject) => {
        let isProduct = null;
        for (let i = 0; i < products.length; i++) {
            if(products[i].name == product_name){
                isProduct = products[i];
            }
        }
        if(!isProduct){
            reject("Product is not available");
        } else {
            resolve(isProduct.amount);
        }
    });
}

// Convert deductAmount to return a Promise
function deductAmount(amount) {
    return new Promise((resolve, reject) => {
        if(amount > account_balance){
            reject("Your account balance is low");
        } else {
            account_balance -= amount;
            resolve("Your product is purchased");
        }
    });
}

// Calling the functions using Promise chaining
// buyProduct("Iphone 16")
// .then((amount) => {
//     console.log(amount);
//     // console.log("Product is purchased");
//     return deductAmount(amount);
// })
// .then(message => {
//     console.log(message);
// })
// .catch(err => {
//     console.log(err);
// });


async function myfun(){
    try{
        let amount = await buyProduct("Iphone 16")  //
        console.log(amount)
        let message = deductAmount(amount)
        console.log(message)
    }catch(error){
        console.log(error)
    }
}
console.log(myfun());
console.log("start");
console.log("end");