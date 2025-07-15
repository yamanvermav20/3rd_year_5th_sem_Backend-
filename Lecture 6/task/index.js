const fs = require("fs");

//read One.txt and Onetwo.txt and write in file result.txt
// file result.txt

fs.readFile("../One.txt", "utf-8", function(err, data){
    if(err) return console.log(err);
    let data1 = data;
    fs.readFile("../Onetwo.txt", "utf-8", function(err, data){
        if(err) return console.log(err);
        let data2 = data;

        let result = data1 + "\n" + data2;
        fs.writeFile("./result.txt", result, function(err){
            if(err) return console.log(err);
            console.log("done");
        })
    })
})

console.log(process.argv[2]);