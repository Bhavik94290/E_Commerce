
let products = [
    {img: "belt1.webp", title: "Black Leather Belt", type: "Fashion", price: 95},
    {img: "gloves1.png", title: "Leather Gloves", type: "Fashion", price: 120},
    {img: "drive1.webp", title: "Flash Drive", type: "Every Day", price: 15},
    {img: "bag1.webp", title: "Leather Bag", type: "Fashion", price: 395},
    {img: "gymbag1.png", title: "Leather Gym Bag", type: "Fashion", price: 420},
    {img: "wallet1.png", title: "Black Wallet", type: "Every Day", price: 95},
    {img: "bag1.webp", title: "Leather Bag", type: "Fashion", price: 395},
]

let boxes = document.querySelector(".boxes");

function addCards(){

    var clutter = "";

    products.forEach(function(card, index){
        clutter+= `<div class="box" id=${index}>
                <div class="up">
                    <img src="./img/${card.img}" alt="">
                </div>
                <div class="down">
                    <div class="title">
                        <h3>${card.title}</h3>
                        <p>${card.type}</p>
                    </div>
                    <div class="price">${card.price}$</div>
                </div>
             </div>`
    })

    boxes.innerHTML = clutter;

}

addCards();