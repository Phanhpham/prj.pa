let users = JSON.parse(localStorage.getItem("users")) || [];

function register(event){
    console.log(33);
    event.preventDefault();
    let nameElement= document.getElementById("name").value;
    let surnameElement=document.getElementById("ho").value;
    let emailElement=document.getElementById("email").value;
    let passwordElement=document.getElementById("password").value;
    console.log(nameElement);
    let user = {
        id: Math.floor(Math.random()*1000000000),
        name: `${nameElement}`,
        surname: `${surnameElement}`,
        email: `${emailElement}`,
        password: `${passwordElement}`,
        cart:[]
    }
    if (nameElement == "" || surnameElement == "" || emailElement == "" || passwordElement == "") {
        alert("khong de trong thong tin");
        return;
    }
    let check = true;
    for (let i = 0; i < users.length; i++) {
        if (emailElement == users[i].email) {
            alert("email da duoc su dung");
            check = false;
            break;
        }  
    }
    console.log(user);
    if (check) {
        alert("dang ki thanh cong")
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        window.location.href = "login.html";
    }
}
