/* ==========================================================
   ENABLEX ENTERPRISE COMMAND CENTER ENGINE
   command-center.js
========================================================== */


document.addEventListener("DOMContentLoaded", () => {


console.log("EnableX Command Center Loaded");



/* ========================================
   HEALTH SCORE ANIMATION
======================================== */


const healthScores =
document.querySelectorAll(
".health-score"
);



healthScores.forEach(score=>{


const value =
parseInt(
score.textContent.replace("%","")
);



if(!isNaN(value)){


animateValue(
score,
value
);


}


});







function animateValue(element,target){


let current = 0;



const timer =
setInterval(()=>{


current++;



element.textContent =
current + "%";



if(current >= target){

clearInterval(timer);

}



},18);



}







/* ========================================
   KPI COUNTER ANIMATION
======================================== */


const kpis =
document.querySelectorAll(
".kpi-grid strong"
);



kpis.forEach(kpi=>{


const original =
kpi.textContent.trim();



const number =
parseInt(
original.replace(/\D/g,"")
);



if(!isNaN(number)){


animateKPI(
kpi,
number,
original
);


}



});







function animateKPI(element,target,original){


let current = 0;



const increment =
Math.max(
1,
Math.ceil(target / 70)
);



const timer =
setInterval(()=>{


current += increment;



if(current >= target){

current = target;

clearInterval(timer);

}



const suffix =
original.replace(/[0-9]/g,"");



element.textContent =
current + suffix;



},20);



}







/* ========================================
   EXECUTIVE INSIGHT ACTIONS
======================================== */


const insights =
document.querySelectorAll(
".executive-grid div"
);



insights.forEach(insight=>{


insight.addEventListener(
"click",
()=>{


const title =
insight.querySelector("h3")
?.textContent
||
"Executive Insight";



localStorage.setItem(

"executive-insight",

title

);



showToast(
"Executive insight saved"
);



});


});







/* ========================================
   COMMAND CENTER DATA MODEL
======================================== */


window.enablexCommandCenter = {


organizationHealth:94,


digitalTransformation:89,


aiMaturity:86,


kpis:{


employees:12450,


learningHours:84000,


aiProjects:126,


automationImpact:38


},


status:

"Enterprise transformation active"


};







/* ========================================
   TOAST SYSTEM
======================================== */


function showToast(message){


const existing =
document.querySelector(
"command-toast"
);



if(existing){

existing.remove();

}



const toast =
document.createElement(
"div"
);



toast.className =
"command-toast";



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
