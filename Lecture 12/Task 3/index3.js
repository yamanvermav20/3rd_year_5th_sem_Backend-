//how to insert new element in dom

//1. create a new Element ---> createElement
//2. add required data in that element using innerText or innerHTML
//3. add that element in parent container using appendChild or append
let todo = {
    id:234565432,
    title:"Todo4"
}
let ul = document.querySelector(".todoList")
function addTodo(){
    let li = document.createElement("li");
    li.setAttribute("id", `${todo.id}`);
    li.innerHTML = `<div>
                <input type="checkbox" name = "" id = "checkbox">
                <h1>${todo.title}</h1>
                <div>
                    <button class = "edit">🤠</button>
                    <button class = "delete">❌</button>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi non dignissimos, tenetur quasi illum saepe velit recusandae vel id eaque sequi, eum enim. Debitis molestias asperiores aliquid voluptatum quidem voluptates.</p>
                </div>
            </div>`
        ul.appendChild(li);
}
addTodo();