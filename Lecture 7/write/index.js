const fs = require("fs")
const { write } = require("../IO/io.js");

let users = [
    {
        id : 1, 
        name : "Tejasav",
        age : "24"
    },
    {
        id : 2, 
        name : "Rahul",
        age : "25"
    },
];

// let dataToWrite = JSON.stringify(users, null, 2); 

// fs.writeFile("../users2.txt", JSON.stringify(users), function(err) {
//     if (err) return console.log(err);
//     console.log("User data has been written to One.txt successfully.");
// });


async function writing() {
    try {
        await write("../users2.txt", JSON.stringify(users));  // Calling the write function
        console.log("Users written to file:", users);
    } catch (err) {
        console.error("Error writing to file:", err);
    }
}

// Call the function
writing();