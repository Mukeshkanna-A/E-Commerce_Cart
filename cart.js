const product =[
    {
        id: 0,
        image: "T-shirt1.jpg",
        title: "MOCKUP WHITE T-SHIRT",
        price: $50,
    },
    {
        id: 1,
        image: "T-shirt2.jpg",
        title: "MOCKUP RED T-SHIRT",
        price: $50,
    },
    {
        id: 2,
        image: "Blue T-shirt.jpg",
        title: "BLUE T-SHIRT",
        price: $50,
    },
    {
        id: 3,
        image: "green-front-sweater.jpg",
        title: "GREEN SWEATER",
        price: $100,
    },
    {
        id: 4,
        image: "pink-sweater-front.jpg",
        title: "PINK SWEATER",
        price: $100,
    },
    {
        id: 5,
        image: "white-front-sweater.jpg",
        title: "WHITE SWEATER",
        price: $100,
    }

];
const categories = [...new set(product.map((item)=>{return item}))]
let i = 0;
document.getElementById("demo").innerHTML = categories.map((item)=>
{
    var{image,title,price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>` + 
        "<button onclick= 'addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('');

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a,1);
    displaycart();
}

function displaycart(a){
    let j =0,total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById("cartItem").innerHTMl = "Your cart is empty";
        document.getElementById("total").innerHTML = "$"+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image,title,price} = items;
            total = total+price;
            document.getElementById("total").innerHTML = "$"+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size:15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

}