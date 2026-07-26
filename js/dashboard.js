/* ==========================================================
   ENABLEX EMPLOYEE DASHBOARD ENGINE
   dashboard.js
========================================================== */


document.addEventListener("DOMContentLoaded", () => {


console.log("EnableX Dashboard Loaded");



/* ========================================
   SESSION PERSONALIZATION
======================================== */


const session =
JSON.parse(

localStorage.getItem(
"enablex-session"
)

);



const welcomeName =
document.querySelector(".welcome-section h1 span");



if(session && welcomeName){


const userName =
session.email
? session.email.split("@")[0]
: "Employee";



welcomeName.textContent =
capitalize(userName);


}





function capitalize(value){


return value.charAt(0).toUpperCase()
+
value.slice(1);


}







/* ========================================
   METRIC ANIMATION
======================================== */


const metrics =
document.querySelectorAll(
".metric-grid strong"
);



metrics.forEach(metric => {


const raw =
metric.textContent.trim();



const number =
parseInt(
raw.replace(/\D/g,"")
);



if(!isNaN(number)){


animateMetric(
metric,
number,
raw
);


}



});






function animateMetric(element,target,original){


let current = 0;


const step =
Math.ceil(target / 50);



const timer =
setInterval(()=>{


current += step;



if(current >= target){


current = target;


clearInterval(timer);


}



let suffix =
original.replace(/[0-9]/g,"");



element.textContent =
current.toLocaleString()
+
suffix;



},25);



}







/* ========================================
   AI BUTTON SHORTCUT
======================================== */


const aiButton =
document.querySelector(
".welcome-section button"
);



if(aiButton){


aiButton.addEventListener(
"click",
()=>{


window.location.href =
"ai-assistant.html";


}

);


}







/* ========================================
   DASHBOARD CARD INTERACTION
======================================== */


const recommendations =
document.querySelectorAll(
".recommendation button"
);



recommendations.forEach(button=>{


button.addEventListener(
"click",
()=>{


button.textContent =
"Opening...";



setTimeout(()=>{


button.textContent =
"Continue";


},1200);



}

);


});







/* ========================================
   KNOWLEDGE ITEM CLICK
======================================== */


const knowledgeItems =
document.querySelectorAll(
".knowledge-list li"
);



knowledgeItems.forEach(item=>{


item.addEventListener(
"click",
()=>{


localStorage.setItem(

"selectedKnowledge",

item.textContent.trim()

);



window.location.href =
"knowledge-detail.html";


}

);


});







/* ========================================
   DASHBOARD READY MESSAGE
======================================== */


setTimeout(()=>{


console.log(
"EnableX workspace ready"
);


},800);



});
