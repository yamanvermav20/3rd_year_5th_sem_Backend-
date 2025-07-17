const fs = require("fs");
const { read, write } = require("../Lecture 7/IO/io");
async function buyproduct(username, productname){
    let usersdata = await read("./users.txt");
    let productsdata = await read("./products.txt");

    // console.log(usersdata);
    // console.log(productsdata);

    let isUserValid = usersdata.find((u)=>{
        return u.username == username
    });
    // console.log(isUserValid)

    let isProductValid = productsdata.find((p) => {
        return p.name == productname
    })

    if(!isUserValid){
        console.log(`user "${username}" not found`)
        return;
    }

    if(!isProductValid){
        console.log(`Product "${productname} " not found`);
        return;
    }

    let allusers = [isUserValid, isProductValid];

    let message = await write("./orderHistory.txt", JSON.stringify(allusers));
    console.log(message);
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your name: ", (name) => {
    rl.question("Enter product name: ", (product) => {
        buyproduct(name.trim(), product.trim());
        rl.close(); 
    });
});

