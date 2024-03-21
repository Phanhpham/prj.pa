let users = JSON.parse(localStorage.getItem("users")) || [];
let user = {};
function signIn(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let check = false;
    for (let i = 0; i < users.length; i++) {
        if (email == users[i].email) {
            user = users[i];
            check = true;
            break;
        }        
    }
    if (check) {
        if( password == user.password){

            localStorage.setItem(("user"),JSON.stringify(user));
            window.location.href = "index.html";
        }else{
            alert("sai thong tin");
        }
    }else{
        alert("chua co tk");
    }
}
