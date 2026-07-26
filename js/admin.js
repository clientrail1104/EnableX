/* ==========================================================
   ENABLEX ADMIN ENGINE
   admin.js
========================================================== */


document.addEventListener("DOMContentLoaded", () => {


console.log("EnableX Admin Portal Loaded");



/* ========================================
   ADMIN PANEL INTERACTIONS
======================================== */


const adminActions =
document.querySelectorAll(".admin-action");



adminActions.forEach(action => {


action.addEventListener("click", () => {


const title = action.textContent.trim();



showAdminToast(

`${title} module selected`

);



});


});





/* ========================================
   KPI CARD ANIMATION
======================================== */


const cards =
document.querySelectorAll(".admin-card strong");



cards.forEach(card => {


const value =
parseInt(card.textContent.replace(/,/g,""));



if(!isNaN(value)){


animateCounter(card,value);


}


});





/* ========================================
   COUNTER ANIMATION
======================================== */


function animateCounter(element,target){


let current = 0;


const increment =
Math.ceil(target / 80);



const timer =
setInterval(()=>{


current += increment;



if(current >= target){


current = target;

clearInterval(timer);


}



element.textContent =
current.toLocaleString();



},20);



}






/* ========================================
   ADMIN NOTIFICATION
======================================== */


function showAdminToast(message){


const existing =
document.querySelector(".admin-toast");



if(existing){

existing.remove();

}



const toast =
document.createElement("div");



toast.className =
"admin-toast";



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
