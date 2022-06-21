let shopping=document.getElementById("shopping");
let shopping2=document.getElementById("shopping2");
let ul=document.getElementById("ul");
if(ul){
    shopping.addEventListener("click",()=>{
      ul.classList.add("active");
    })
}
if(ul){
    shopping2.addEventListener("click",()=>{
      ul.classList.remove("active");
    })
}

/****************************************************** */
let shopcart=document.querySelector(".shopcart");
let shopcart2=document.querySelector(".fa-cart-shopping");


// shopcart2.addEventListener("click",()=>{
//   shopcart.style.display="block";
// })

