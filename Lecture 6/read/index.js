const fs  = require("fs");

fs.readFile("../One.txt", "utf-8",  function(err, data){
    if(err) return console.log(err);
    console.log(data);
})
fs.readFile("../Onetwo.txt", "utf-8",  function(err, data){
    if(err) return console.log(err);
    console.log(data);
})



