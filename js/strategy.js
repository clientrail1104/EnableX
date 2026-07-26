/* ==========================================================
   ENABLEX AI WORKFORCE STRATEGY ENGINE
   strategy.js
========================================================== */


document.addEventListener("DOMContentLoaded", () => {


console.log("EnableX Strategy Intelligence Loaded");



/* ========================================
   STRATEGY METRIC ANIMATION
======================================== */


const metrics =
document.querySelectorAll(
".strategy-card strong"
);



metrics.forEach(metric=>{


const value =
parseInt(
metric.textContent.replace("%","")
);



if(!isNaN(value)){


animateMetric(
metric,
value
);


}



});






function animateMetric(element,target){


let current = 0;



const timer =
setInterval(()=>{


current++;



element.textContent =
current + "%";



if(current >= target){


clearInterval(timer);


}



},20);



}







/* ========================================
   FORECAST BAR ANIMATION
======================================== */


const forecastBars =
document.querySelectorAll(
".forecast-bar span"
);



forecastBars.forEach(bar=>{


const width =
bar.style.width;



bar.style.width =
"0%";



setTimeout(()=>{


bar.style.width =
width;



},400);



});







/* ========================================
   STRATEGIC RECOMMENDATIONS
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
?.textContent
||
"Strategy Insight";



localStorage.setItem(

"strategy-selection",

title

);



showToast(
"Strategic insight saved"
);



});


});







/* ========================================
   AI STRATEGY DATA MODEL
======================================== */


window.enablexStrategy = {


futureSkillReadiness:88,


aiAdoptionForecast:94,


transformationImpact:91,


priorityCapabilities:[

"AI Engineering",

"Automation",

"Digital Leadership"

],


recommendations:[

"Increase AI learning investment",

"Build internal capability",

"Prioritize automation roadmap"

]


};







/* ========================================
   EXECUTIVE TOAST
======================================== */


function showToast(message){


const existing =
document.querySelector(
".strategy-toast"
);



if(existing){

existing.remove();

}



const toast =
document.createElement(
"div"
);



toast.className =
"strategy-toast";



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
