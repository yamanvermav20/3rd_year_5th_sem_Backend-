const fs = require("fs");



fs.writeFile("../One.txt", "Hello G27 this is One.txt File ", function(err, data){
    if(err) return console.log(err);
    console.log("This one is success from One");
})
fs.writeFile("../Onetwo.txt", "Hello Yaman this is Onetwo.txt File today date is 15-07-2025", function(err, data){
    if(err) return console.log(err);
    console.log("This one is success from Onetwo");
})

