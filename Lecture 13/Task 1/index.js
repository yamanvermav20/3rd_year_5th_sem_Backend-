let box = document.querySelector("#box");
let btn = document.querySelector("#btn");
let stop = document.querySelector("#stopbtn");
let id = null; 
let colours = ["red", "blue", "black", "green", "yellow", "orange", "brown", "pink", "purple", "grey"]
function generateRandomColour(){
    let index = Math.floor(Math.random() * 10);
    console.log(index);

    let randomcolor = colours[index];
    console.log(randomcolor);
    box.style.background = randomcolor;
}
btn.addEventListener("click", function(){
    id = setInterval(() => {
        generateRandomColour();
    }, 30);
})

stop.addEventListener("click", function () {
    if (id !== null) {
        clearInterval(id);
        id = null; // reset
        console.log("Color changing stopped");
    }
});