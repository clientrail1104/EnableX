/* ==========================================================
   ENABLEX MANAGER INTELLIGENCE ENGINE
   manager.js
========================================================== */


document.addEventListener("DOMContentLoaded", () => {


console.log("EnableX Manager Intelligence Loaded");



/* ========================================
   TEAM METRIC ANIMATION
======================================== */


const metrics =
document.querySelectorAll(
".manager-card strong"
);



metrics.forEach(metric=>{


const value =
metric.textContent.trim();



const number =
parseInt(
value.replace(/\D/g,"")
);



if(!isNaN(number)){


animateMetric(
metric,
number,
value
);


}



});






function animateMetric(element,target,original){


let current = 0;


const increment =
Math.max(
1,
Math.ceil(target / 60)
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



},25);



}







/* ========================================
   SKILL HEATMAP INTERACTION
======================================== */


const skills =
document.querySelectorAll(
".skill-heatmap div"
);



skills.forEach(skill=>{


skill.addEventListener(
"click",
()=>{


skill.classList.toggle(
"selected"
);



const skillName =
skill.childNodes[0]
.textContent
.trim();



showToast(
`${skillName} capability analysis opened`
);



});


});







/* ========================================
   AI INSIGHT SELECTION
======================================== */


const insights =
document.querySelectorAll(
".insight-cards div"
);



insights.forEach(insight=>{


insight.addEventListener(
"click",
()=>{


const title =
insight.querySelector("h3")
?.textContent
||
"AI Recommendation";



localStorage.setItem(

"manager-insight",

title

);



showToast(
"Recommendation saved"
);



});


});







/* ========================================
   MANAGER DATA MODEL
======================================== */


window.enablexManagerAnalytics = {


teamSize:48,


learningAdoption:86,


performanceScore:91,


skillReadiness:84,


priorityAreas:[

"AI Capability",

"Automation",

"Leadership Development"

]

};







/* ========================================
   TOAST SYSTEM
======================================== */


function showToast(message){


const existing =
document.querySelector(
".manager-toast"
);



if(existing){

existing.remove();

}



const toast =
document.createElement(
"div"
);



toast.className =
"manager-toast";



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
