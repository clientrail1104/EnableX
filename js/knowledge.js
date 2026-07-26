/* ==========================================================
   ENABLEX KNOWLEDGE ENGINE
   knowledge.js
========================================================== */


document.addEventListener("DOMContentLoaded", () => {


console.log("EnableX Knowledge Hub Loaded");



/* ========================================
   SEARCH ENGINE
======================================== */


const searchInput =
document.getElementById("knowledgeSearch");


const cards =
document.querySelectorAll(".knowledge-card");



if(searchInput){


searchInput.addEventListener("input", () => {


const keyword =
searchInput.value.toLowerCase();



cards.forEach(card => {


const content =
card.textContent.toLowerCase();



if(content.includes(keyword)){


card.style.display = "block";


}
else{


card.style.display = "none";


}



});



});


}






/* ========================================
   CATEGORY INTERACTION
======================================== */


const categories =
document.querySelectorAll(".category-card");



categories.forEach(category => {


category.addEventListener("click", () => {


const name =
category.querySelector("h3").textContent;



showKnowledgeToast(

`${name} category selected`

);



});


});







/* ========================================
   ARTICLE CARD INTERACTION
======================================== */


cards.forEach(card => {


card.addEventListener("click", () => {


const title =
card.querySelector("h3").textContent;



localStorage.setItem(

"selectedKnowledge",

title

);



window.location.href =
"knowledge-detail.html";



});


});







/* ========================================
   TOAST SYSTEM
======================================== */


function showKnowledgeToast(message){


const old =
document.querySelector(".knowledge-toast");



if(old){

old.remove();

}



const toast =
document.createElement("div");



toast.className =
"knowledge-toast";



toast.textContent =
message;



document.body.appendChild(toast);



setTimeout(()=>{

toast.classList.add("active");

},50);



setTimeout(()=>{


toast.classList.remove("active");


setTimeout(()=>{

toast.remove();

},300);



},2500);



}



});
