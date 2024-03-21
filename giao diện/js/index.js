let products=JSON.parse(localStorage.getItem("products"))||[];
//     {
//         image:"https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lpjgnfdoqjc038",
//         name:"đồng hồ điện tử có đèn led", 
//         id:1,
//         price:140.000
//     },
//     {
//         image:"https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lojwkzq30eer2d",
//         name:"Thú nhồi bông cao cấp Lotso", 
//         id:2,
//         price:255.000
//     },
//     {
//         image:"https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lohse58uh5fb21",
//         name:"Set quà sinh nhật tặng nguời yêu bạn bè", 
//         id:3,
//         price:95.000
//     },
//     {
//         image:"https://down-vn.img.susercontent.com/file/sg-11134201-7rbkz-lo0jhv4l4a2te8",
//         name:"Đệm ghế sanrio", 
//         id:4,
//         price:295.000 
//     },
//     {
//         image:"https://down-vn.img.susercontent.com/file/229da0a8b4786b7da31dfa14b4dcb653",
//         name:"socola mana tươi 450g", 
//         id:5,
//         price:77.000 

//     },
//     {
//         image:"https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lo25a4efrw8da0",
//         name:"Bộ Chăn Ga Gối 4 Món, 3 Món 💖m2/m4/m6/m8/2m2💖", 
//         id:6,
//         price:500.000
//     },
//    {

//     image:"https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpnfrqubsspnb2",
    
//     name:"combo ù ú", 
//     id:7,
//     price:59.000
//    },
//    {
//     image:"https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lme23tpzg1jz52" ,
    
//     name:"Bình đựng nước giữ nhiệt ", 
//     id:8,
//     price:267.000
//    },
//    {
//     image:"https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lp93ct7ismzg1b" ,
    
//     name:"Dép lông mềm hai quai", 
//     id:9,
//     price:152.000
//    },
// ]
// lưu data tren localStorage
// localStorage.setItem ("products",JSON.stringify(products));


let user = JSON.parse(localStorage.getItem("user"));
let check=false;
let users = JSON.parse(localStorage.getItem("users")) || [];
function changeName() {
    for (let i = 0; i < users.length; i++) {
        if (user.id == users[i].id){
            check=true;
            break;
        }
    }
    if(!check){
        document.getElementById("user").innerHTML=
        `
        <div id ="user" class="user">
            <li> <a class="fa-solid fa-user-tie"></a></li><a href="./register.html">Đăng kí</a>
            <li> <a class="fa-solid fa-user-tie"></a></li><a href="./login.html">Đăng nhập</a>
        </div>
        `;
                     
    }else{
        document.getElementById("user").innerHTML=`<div id="user" > ${user.name} ${user.surname}</div>`;
    }
}
// lấy dữ liệu về đi render
// fuction render product 
changeName();
function renderProduct (){
    let element="";
    for(let i=0;i<products.length;i++){
        element+=
        `<div onclick="productDetail(${products[i].id})" id="products" class="cartegory-right-content1 ">
            <div onclick="addToCart(${products[i].id})" class ="cartegory-right-content-item ">
                <img src="${products[i].image}" alt="" width="250px">
                <h3>${products[i].name}</h3>
                <p>${products[i].price}.000<sup>đ</sup></p>
            </div>
        </div>
    `
    }
    document.getElementById("products").innerHTML =element;

}
renderProduct();

// function đi mua hàng 
function addToCart(productId){
    // ddang nha moi cho mua hang 
    if(!check){
        alert("ban phai dang nhap de mua hang");
        return;
    }
    /* 

    lấy gio hang cua user de di mua hàng 
    và lấy gio hàng user dựa vào id cua user 

    */
    for (let i=0;i<users.length;i++){
        if (users[i].id == user.id ){
            // lấy thông tin san pham de dua vao gio hang
            // lam sao de lây thong tin spham
            // console.log ("11111",productId);
            // có id spham roi lam sao lay thong tin spham 
            for(let j=0;j<products.length;j++){
                if(productId== products[j].id){
                    // lay thông tin spham 
                    // let a={... product[j].quantity:1}

                    /*

                    truoc khi them vao phai xem trong gio hang co san pham do chua 
                    co roi thi tang so luong con chua co thi them vao btap

                    */

                    // kiem tra xem trong gio hang co ton tai san pham do chua 
                    // duyet gio hang
                    let check2 = false
                    for (const i in user.cart) {
                        if (productId == user.cart[i].id) {
                            check2 = true;
                            break;                            
                        }
                    }
                    if(!check2){
                        // tuc la ko co them bth
                        user.cart.push({...products[j],quantity:1});
                        localStorage.setItem("user",JSON.stringify(user));
                    }else{
                        //co roi di tang so luong
                        // minh phai biet vi tri cua cai can tang
                        for (let i in user.cart) {
                            if (user.cart[i].id = productId) {
                                user.cart[i].quantity++;
                                localStorage.setItem("user",JSON.stringify(user));
                            }
                        }
                    }
                    users[i] = user;
                    localStorage.setItem("users",JSON.stringify(users));
                }
            }
        }
    }
    renderCart();
}
function renderCart() {
    let total = 0; 
    for (let i in user.cart) {
        total += user.cart[i].quantity
    }
    let itemInCart = document.getElementById("itemInCart");
    itemInCart.innerText = total;
}
function productDetail(id) {
    console.log(1111);
    console.log(id);
    localStorage.setItem("idProduct",id);
    window.location.href = "./product.html";
}











const imgPosition = document.querySelectorAll(".aspect-ratio-169 img")
const imgContainer = document.querySelector('.aspect-ratio-169')
const dotItem =document.querySelectorAll(".dot")
let imgNuber=imgPosition.length
let index=0

// console.log(imgPosition)
imgPosition.forEach(function(image,index){
 image.style.left= index *100+ "%"
 dotItem[index].addEventListener("click",function(){
    slider(index)
 })
})
function imgSlide(){
    index++;
    if (index >=imgNuber){index=0}
    slider(index)
}
function slider(index){
    imgContainer.style.left="-"+index*100+"%"
    dotItem[index].classList.add("active")      
}
setInterval(imgSlide,5000)

