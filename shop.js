let body = document.querySelector("body");
let sidemenu = document.querySelector(".sidemenu");
let sidemenuf = document.querySelector(".sidemenuf");
let list = document.querySelector(".market");
let total=document.querySelector(".totale")
let tog = false;
console.log(sidemenu);
function showmenu() {
  tog = !tog;
  if (tog) {
    sidemenu.style.right = "0";
    body.style.marginRight = "400px";
  } else {
    sidemenu.style.right = "-400px";
    body.style.marginRight = "0";
  }
}
const redheart = (key) => {
  let heart = document.querySelector(".fa-heart");
  tog = !tog;

  if (tog) {
    heart.style.color = "red";
  } else {
    heart.style.color = "white";
  }
};

let dishes = [
  {
    name: "chiken",
    image: "item1.jpeg",
    price: 50,
  },
  {
    name: "Gyros",
    image: "gyros.jpg",
    price: 70,
  },
  {
    name: "Italian-Spaghetti",
    image: "Italian-Spaghetti.jpg",
    price: 80,
  },
  {
    name: "Spanish-paella",
    image: "Spanish-paella.jpg.webp",
    price: 120,
  },
];

function affich() {
  dishes.forEach((value, key) => {
    let newdiv = document.createElement("div");
    newdiv.innerHTML = `
    <img src="./assest/${value.image}">

    <p class="title">${value.name}</p>
    <br>
    <label for="">${value.price.toLocaleString()} $</label>
    <br>
    <i class="fa-solid fa-heart class="like" onclick="redheart(${key}),showmenu()"></i>
    <i class="fa-sharp fa-solid fa-cart-shopping " onclick="addToCard(${key})" ></i>
    
    `;
    newdiv.classList.add("item");
    list.appendChild(newdiv);
  });
}
let cardlist = [];
affich();
function addToCard(key){
 
  cardlist.push(dishes[key]);   
  cardlist[key].quantity = 1
      reloadCard()
     
     }


function reloadCard() {
  sidemenu.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  cardlist.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    console.log("price",totalPrice);
    console.log(count);
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
      
      <div class="divcalss">
              <div><img src="./assest/${value.image}" class="sideimg"/></div>
              <div>${value.name}</div>
              
              
              <div>${value.price}</div>
              <div class="total">
                  <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                  <div class="count">${value.quantity}</div>
                  <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
              </div>
              </div>`;
              
              sidemenu.appendChild(newDiv);
     
    }
  });
  total.innerText = totalPrice.toLocaleString();
  
}
function changeQuantity(key, quantity){
  if(quantity == 0){
      delete cardlist[key];
  }else{
      cardlist[key].quantity = quantity;
      cardlist[key].price = quantity * products[key].price;
  }
  reloadCard();
}