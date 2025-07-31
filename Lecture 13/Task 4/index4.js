let body = document.querySelector("body");

body.addEventListener("click", function(ev){
    //console.log(ev.target); // we use this to check at where on our website we clicked
    console.log(ev.target.innerText);
})