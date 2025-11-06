let signUpForm = document.querySelector();
let signupUsername = document.querySelector();
let signUpEmail = document.querySelector();
let signUpPassword = document.querySelector();

signUpForm.addEventListener("submit", async function(e){
    e.preventDefault();
    let username = signupUsername.value;
    let email = signUpEmail.value;
    let password = signUpPassword.value;
    let response = await fetch("/api/users", {
        method: "POST",
        body:JSON.stringify({
            email: email,
            username: username,
            password: password
        }),
        headers:{
            "content-type": "application/json"
        }
    })
    let data = await response.json();
    console.log(data);
    if(data.success){
        alert("sign-up succcessful, please login to continue")
    }
    else{
        alert("something went wrong");
    }

})


// login- feature
let loginform = document.querySelector("#login-form");
let loginEmail = document.querySelector("#login-email");
let loginpassword = document.querySelector("#login-password");

loginEmail.form.addEventListener("submit", function(e){
    e.preventDefault();
    let email = loginEmail.value;
    let password = loginPassword.value;
    let response = await fetch("/api/auth/login", {
        method:"POST",
        body:JSON.stringify()
    })
    let data = await response.json();
    console.log(data)
    if(data.success()){
        
    }
})