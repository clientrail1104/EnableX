/* ==========================================================
   ENABLEX DIGITAL WORKPLACE ENGINE
   workplace.js
========================================================== */


document.addEventListener("DOMContentLoaded", () => {


console.log("EnableX Digital Workplace Loaded");



/* ========================================
   WORKSPACE CARD ACTIONS
======================================== */


const workspaceButtons =
document.querySelectorAll(
".workspace-card button"
);



workspaceButtons.forEach(button=>{


button.addEventListener(
"click",
()=>{


const card =
button.closest(
".workspace-card"
);



const title =
card.querySelector("h2")
?.textContent
||
"Workspace Action";



localStorage.setItem(

"enablex-workplace-action",

title

);



showToast(
`${title} opened`
);



});


});







/* ========================================
   AI RECOMMENDATION TRACKING
======================================== */


const recommendations =
document.querySelectorAll(
".recommendation-list div"
);



recommendations.forEach(item=>{


item.addEventListener(
"click",
()=>{


const recommendation =
item.querySelector("h3")
?.textContent
||
"Recommendation";



localStorage.setItem(

"employee-recommendation",

recommendation

);



showToast(
"Recommendation saved"
);



});


});







/* ========================================
   EMPLOYEE PROFILE MODEL
======================================== */


window.enablexWorkplace = {


employee:{


name:
"Jordan Davis",


role:
"Digital Transformation Specialist",


level:
"Advanced"


},



todayFocus:[

"AI Leadership Development",

"Project Analytics Review",

"Quarterly Objective Update"

],



recommendations:[

"AI Analytics Training",

"Leadership Pathway",

"Workflow Automation"

],



status:
"Personalized Workspace Active"


};







/* ========================================
   EMPLOYEE PREFERENCE SYSTEM
======================================== */


window.enablexPreferences = {


save:function(key,value){


localStorage.setItem(
key,
value
);


},



get:function(key){


return localStorage.getItem(
key
);


}



};







/* ========================================
   TOAST SYSTEM
======================================== */


function showToast(message){


const existing =
document.querySelector(
".workplace-toast"
);



if(existing){

existing.remove();

}



const toast =
document.createElement(
"div"
);



toast.className =
"workplace-toast";



toast.textContent =
message;



document.body.appendChild(
toast
);



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
