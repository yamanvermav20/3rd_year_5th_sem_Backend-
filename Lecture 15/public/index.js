const signUpForm = document.querySelector("#signup");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

function addUser(email, password){
    let newUser = {
        email: email,
        password: password
    }
    fetch("/addUser", {
        method : "POST", 
        body:JSON.stringify(newUser), 
        headers: {
            "Content-Type":"application/json"
        }
    }).then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        if(data.success){
            alert(data.message);
            signUpForm.reset()
        }else{
            alert(error);
            signUpForm.reset()
        }
    })
    .catch((err) => {
        console.log(err);
    })
}

signUpForm.addEventListener("submit", function(e){
    e.preventDefault();
    addUser(email.value, password.value);
})
// addUser("yman123@gmail.com", "1223");
