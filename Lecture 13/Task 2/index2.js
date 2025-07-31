let edit = document.querySelector(".edit");
let del = document.querySelector(".delete");
/*
parent
child 
siblings

1. nextElementSibling
2. previousElementSibling

*/
console.dir(edit.nextElementSibling);
console.log(edit.previousElementSibling);
console.log(edit.nextElementSibling.nextElementSibling.innerText);
console.log(edit.parentElement.previousElementSibling)
let li = edit.parentElement.parentElement.parentElement.getAttribute("id");
console.log(li);
