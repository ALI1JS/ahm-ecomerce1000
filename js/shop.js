let product=document.querySelector(".products");
let product2=document.querySelector(".products2");
let link1=document.querySelector(".link1");
let link2=document.querySelector(".link2");
function changecontent (){
    link1.addEventListener("click",()=>{
        product.classList.remove("active2");
        product2.classList.add("active2");
          
    })
    link2.addEventListener("click",()=>{
        product2.classList.remove("active2");
        product.classList.add("active2");
          
    })
}
/************************************************ */
/************************************************ */


/******************************************************** */
/******************************************************** */
let mainimg=document.querySelector(".image .mainimg img");
function transform(imgsrc){
    mainimg.src=imgsrc;
}
/************************************* */
function translatetoshop(){
    window.location="shopditails.html";
}
changecontent ();

