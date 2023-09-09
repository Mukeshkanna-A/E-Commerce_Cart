const btnCart = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const btnClose = document.querySelector("#cart-close");

btnCart.addEventListener("click",()=>{
    cart.classList.add("cart-active");
});

btnClose.addEventListener('click',()=>{
    cart.classList.remove("cart-active");
});

document.addEventListener('DOMContentLoaded',loadItems);

function loadItems(){
    //console.log("calling");
    loadContent();
}
function loadContent(){
    // remove items from Cart
    let btnRemove = document.querySelectorAll(".cart-remove");
    btnRemove.forEach((btn)=>{
        btn.addEventListener("click",removeItem);
    });

    //Product item change event
    let qtyElements = document.querySelectorAll(".cart-quantity");
    qtyElements.forEach((input)=>{
        input.addEventListener("change",changeQty);
    });

    //product cart

    let cartBtns = document.querySelectorAll(".add_cart");
    // console.log(cartBtns);
    cartBtns.forEach((btn)=>{
        btn.addEventListener("click",addCart);
    });
    updateTotal();
}

// remove Item
function removeItem(){
    // console.log("click");
    if(confirm("Are you really want to remove that item?")){
        let title = this.parentElement.querySelector(".cart-shirt-title").innerHTML;
        itemsList = itemsList.filter(el=>el.title!=title);
        this.parentElement.remove();
        loadContent();
}
}
//change Quantity
function changeQty(){
    if(isNaN(this.value) || this.value<1){
        this.value=1;
    }
    loadContent();
}

let itemsList = [];
 
//Add cart

function addCart(){
    // console.log("Check");
    let item = this.parentElement;
    let title = item.querySelector(".card-title").innerHTML;
    let price = item.querySelector(".card-text").innerHTML;
    let imgSrc = item.querySelector(".card-img-top").src;
    // console.log(title,price,imgSrc);

    let newProduct = {title,price,imgSrc}

    //check product already exist in cart
    if(itemsList.find((el)=>el.title==newProduct.title))
    {
        alert("Product already added in Cart");
        return;
    }
    else
    {
            itemsList.push(newProduct);
    }

    let newProductElement = createCartProduct(title,price,imgSrc);
    let element = document.createElement("div");
    element.innerHTML= newProductElement;
    let cartBasket = document.querySelector(".cart-content");
    cartBasket.append(element);
    loadContent();
}

function createCartProduct(title,price,imgSrc){

    return `
                    <div class="cart-box">
                    <img src="${imgSrc}" class="cart-img">
                    <div class="detail-box">
                      <div class="cart-shirt-title">${title}</div>
                      <div class="price-box">
                        <div class="cart-price">${price}</div>
                        <div class="cart-amt">${price}</div>
                      </div>
                      <input type="number" value="1" class="cart-quantity">
                    </div>
                    <i class="fa-solid fa-trash-can cart-remove" name="trash"></i>
                  </div>
    `;
}

function updateTotal()
{
    const cartItems = document.querySelectorAll(".cart-box");
    const totalValue = document.querySelector(".total-price");

    let total = 0;

    cartItems.forEach(product=>{
        let priceElement = product.querySelector(".cart-price");
        let price = parseFloat(priceElement.innerHTML.replace("$ ",""));
        let qty = product.querySelector(".cart-quantity").value;
        total +=(price*qty);
        product.querySelector(".cart-amt").innerHTML = "$ "+price*qty;
    });

    totalValue.innerHTML = "$ " +total;

    // Add Product Count in cart Icon

    const cartCount = document.querySelector(".cart-count");
    let count = itemsList.length;
    cartCount.innerHTML = count;

    if(count==0)
    {
        cartCount.style.display = "none";
    }
    else
    {
        cartCount.style.display = "inline-block";
    }
}




















































































// function loadContent(){
//     //remove items from cart
//     let btnRemove = document.querySelectorAll('.cart-remove');
//     console.log(btnRemove);
//     btnRemove.forEach((btn)=>{
//         btn.addEventListener('click',removeItem);
//     });

//     // //remove Item
//     // function removeItem(){
//     //     this.parentElement.remove();
//     // }

//     //product Item Change Event
//     let qtyElements = document.querySelectorAll('.cart-quantity');
//     qtyProduct.forEach((input)=>{
//         input.addEventListener('change',changeQty);
//     });

//     //product Cart
//     let cartBtns = document.querySelectorAll('.add-cart');
//     // console.log(cartBtns);
//     cartBtns.forEach((btn)=>{
//         btn.addEventListener('click',addCart);
//     });

//     updateTotal();
// }

// //remove Item
// function removeItem(){
//     if(confirm("Are You Sure to Remove")){
//         // let title=this.parentElement.querySelector('.cart-title').innerHTML;
//         // itemList=itemList.filter(el=>el.title!=title);
//         this.parentElement.remove();
//     }
//     loadContent();
    
// }

// //change Quantity

// function changeQty(){
//     if(isNaN(this.value)||this.value<1){
//         this.value = 1;
//     }
//     loadContent();
// }
// let itemList=[];

// //Add Cart
// function addCart(){
//     // console.log('Check');
//     let product = this.parentElement;
//     // console.log(product);
//     let title=product.querySelector('.card-title').innerHTML;
//     let price=product.querySelector('.Item-price').innerHTML;
//     // console.log(price);
//     let imgSrc=product.querySelector('.card-img-top').src;
//     // console.log(imgSrc);

//     let newProduct={title,price,imgSrc};

//     //Check Product already exsists
//     if(itemList.find((el)=>el.title==newProduct.title)){
//         alert("Product Already Added in Cart");
//         return;
//     }else{
//         itemList.push(newProduct);
//     }

//     let newProductElement = createCartProduct(title,price,imgSrc);

//     let cartProduct=document.createElement('div');
//     cartProduct.innerHTML=newProductElement;
//     let cartBasket=document.querySelector('.cart-content');
//     cartBasket.append(cartProduct);

//     loadContent();
// }



// function createCartProduct(title,price,imgSrc){
//     return `
//                 <div class="cart-box">
//                     <img src="${imgSrc}" class="img-thumbnail rounded-circle " alt="">
//                     <div class="detail-box">
    
//                             <div class="cart-title">${title}</div>
                        
//                         <div class="price-box">
//                             <div class="cart-price">${price}</div>
//                             <div class="cart-amt">${price}</div>
                            
//                         </div>
//                         <input type="number" value="1" class="cart-quantity w-25 ">
//                     </div>
//                     <a name="trash" class="cart-remove"><i class="fa-solid fa-trash"></i><a></a>
//                 </div>
//     `;

// }

// function updateTotal()
// {
//     const cartItems=document.querySelectorAll('.cart-box');
//     const totalValue=document.querySelector('.total-price');

//     let total=0;

//     cartItems.forEach(product=>{
//         let productPrice=product.querySelector('.cart-price');
//         let price=parseInt(productPrice.innerHTML.replace("₹",""));
//         let qty=product.querySelector('.cart-quantity').value;
//         total+=(price*qty);
//         product.querySelector('.cart-amt').innerText="(x"+qty+")"+" ₹ "+price*qty;

//     });
//     totalValue.innerHTML=`₹ ${total}`;

//     //Cart Count
//     const cartCount=document.querySelector('.badge');
//     let count=itemList.length;
//     cartCount.innerHTML=count;

// }