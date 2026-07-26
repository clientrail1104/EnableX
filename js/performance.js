/* ==========================================================
   ENABLEX PERFORMANCE INTELLIGENCE ENGINE
   performance.js
========================================================== */


document.addEventListener("DOMContentLoaded", () => {


console.log("EnableX Performance Intelligence Loaded");



/* ========================================
   PERFORMANCE SCORE ANIMATION
======================================== */


const scoreCircles =
document.querySelectorAll(
".score-circle"
);



scoreCircles.forEach(circle=>{


const text =
circle.textContent.trim();



const target =
parseInt(
text.replace("%","")
);



if(!isNaN(target)){


animateScore(
circle,
target
);


}



});






function animateScore(element,target){


let current = 0;


const interval =
setInterval(()=>{


current++;



element.childNodes[0].textContent =
current + "%";



if(current >= target){

clearInterval(interval);

}



},20);



}







/* ========================================
   OKR INTERACTIONS
======================================== */


const okrCards =
document.querySelectorAll(
".okr-card"
);



okrCards.forEach(card=>{


card.addEventListener(
"click",
()=>{


card.classList.toggle(
"active"
);



showToast(
"Goal analytics opened"
);



});


});







/* ========================================
   TALENT INSIGHT ACTIONS
======================================== */


const insights =
document.querySelectorAll(
".insight-grid div"
);



insights.forEach(insight=>{


insight.addEventListener(
"click",
()=>{


const title =
insight.querySelector("h3")
?.textContent
||
"Talent Insight";



localStorage.setItem(

"selected-insight",

title

);



showToast(
"Insight saved"
);



});


});







/* ========================================
   PERFORMANCE DATA MODEL
======================================== */


window.enablexPerformance = {


performanceScore:92,


careerReadiness:87,


skillGrowth:78,


objectives:[

{

name:
"AI Transformation Initiative",

progress:
85

},


{

name:
"Digital Skills Development",

progress:
70

},


{

name:
"Knowledge Contribution",

progress:
60

}

]


};







/* ========================================
   TOAST SYSTEM
======================================== */


function showToast(message){


const existing =
document.querySelector(
".performance-toast"
);



if(existing){

existing.remove();

}



const toast =
document.createElement(
"div"
);



toast.className =
"performance-toast";



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
