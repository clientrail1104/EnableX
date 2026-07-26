/* ==========================================================
   ENABLEX LEARNING ENGINE
   learning.js
========================================================== */


document.addEventListener("DOMContentLoaded", () => {


console.log("EnableX Learning Hub Loaded");



/* ========================================
   COURSE SEARCH
======================================== */


const searchInput =
document.getElementById("courseSearch");


const courses =
document.querySelectorAll(".course-card");



if(searchInput){


searchInput.addEventListener("input",()=>{


const keyword =
searchInput.value.toLowerCase();



courses.forEach(course=>{


const text =
course.textContent.toLowerCase();



if(text.includes(keyword)){


course.style.display="block";


}
else{


course.style.display="none";


}



});


});


}







/* ========================================
   COURSE ACTIONS
======================================== */


const courseButtons =
document.querySelectorAll(
".course-card button"
);



courseButtons.forEach(button=>{


button.addEventListener("click",()=>{


const course =
button.closest(".course-card");



const title =
course.querySelector("h3").textContent;



localStorage.setItem(

"selectedCourse",

title

);



button.textContent =
"Opening...";



setTimeout(()=>{


window.location.href =
"learning-detail.html";



},800);



});


});







/* ========================================
   PERSONALIZED LEARNING MESSAGE
======================================== */


const stats =
document.querySelectorAll(
".learning-stats strong"
);



stats.forEach(stat=>{


stat.style.transition =
"all .5s";



});







/* ========================================
   CERTIFICATION INTERACTION
======================================== */


const certificates =
document.querySelectorAll(
".certificate-grid div"
);



certificates.forEach(card=>{


card.addEventListener("click",()=>{


card.style.transform =
"scale(1.05)";



setTimeout(()=>{


card.style.transform =
"scale(1)";


},300);



});


});







/* ========================================
   AI LEARNING RECOMMENDATION HOOK
======================================== */


window.getLearningRecommendation =
function(){


return {

recommended:

[

"AI Fundamentals",

"Digital Transformation",

"Cyber Security Awareness"

],


reason:

"Based on employee development goals"

};


};







});
