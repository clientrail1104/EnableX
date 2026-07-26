/* ==========================================================
   ENABLEX EMPLOYEE PROFILE ENGINE
   profile.js
========================================================== */


document.addEventListener("DOMContentLoaded", () => {


console.log("EnableX Profile Loaded");



/* ========================================
   SKILL BAR ANIMATION
======================================== */


const skillBars =
document.querySelectorAll(
".skill-bar span"
);



skillBars.forEach(bar=>{


const width =
bar.style.width;



bar.style.width =
"0%";



setTimeout(()=>{


bar.style.width =
width;



},300);



});







/* ========================================
   PROFILE EDIT ACTION
======================================== */


const editButton =
document.querySelector(
".profile-header .btn-primary"
);



if(editButton){


editButton.addEventListener(
"click",
()=>{


showToast(
"Profile editing mode enabled"
);



editButton.textContent =
"Editing...";



setTimeout(()=>{


editButton.textContent =
"Save Profile";


},1200);



});


}







/* ========================================
   CAREER GOAL INTERACTIONS
======================================== */


const goals =
document.querySelectorAll(
".goal"
);



goals.forEach(goal=>{


goal.addEventListener(
"click",
()=>{


goal.classList.toggle(
"selected"
);



showToast(
"Career goal selected"
);



});


});







/* ========================================
   CERTIFICATION VIEW
======================================== */


const certificates =
document.querySelectorAll(
".cert-list li"
);



certificates.forEach(certificate=>{


certificate.addEventListener(
"click",
()=>{


showToast(

`Opening ${certificate.textContent.trim()}`

);



});


});







/* ========================================
   AI RECOMMENDATIONS
======================================== */


const recommendations =
document.querySelectorAll(
".recommendation-grid div"
);



recommendations.forEach(item=>{


item.addEventListener(
"click",
()=>{


const title =
item.querySelector("h3")
.textContent;



localStorage.setItem(

"profile-recommendation",

title

);



window.location.href =
"learning.html";


});


});







/* ========================================
   EMPLOYEE GROWTH DATA HOOK
======================================== */


window.enablexEmployeeProfile = {


skills:[

"Artificial Intelligence",

"Digital Strategy",

"Data Analytics"

],


certifications:[

"AI Fundamentals",

"Digital Leadership",

"Cloud Essentials"

],


careerGoal:

"AI Transformation Manager"


};







/* ========================================
   TOAST
======================================== */


function showToast(message){


const existing =
document.querySelector(
"profile-toast"
);



if(existing){

existing.remove();

}



const toast =
document.createElement("div");



toast.className =
"profile-toast";



toast.textContent =
message;



document.body.appendChild(toast);



setTimeout(()=>{

toast.classList.add(
"active"
);

},50);



setTimeout(()=>{


toast.classList.remove(
"active"
);



setTimeout(()=>{

toast.remove();

},300);



},2500);



}



});
