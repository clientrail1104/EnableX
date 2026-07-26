/* ==========================================================
   ENABLEX COURSE DETAIL ENGINE
   learning-detail.js
========================================================== */


document.addEventListener("DOMContentLoaded", () => {


console.log("EnableX Course Detail Loaded");



/* ========================================
   LOAD SELECTED COURSE
======================================== */


const courseTitle =
document.getElementById("courseTitle");



const selectedCourse =
localStorage.getItem("selectedCourse");



if(selectedCourse && courseTitle){

courseTitle.textContent =
selectedCourse;

}





/* ========================================
   LESSON COMPLETION
======================================== */


const lessons =
document.querySelectorAll(".lesson");



let completedLessons =
JSON.parse(

localStorage.getItem(
"completed-lessons"
)

|| "[]"

);



lessons.forEach((lesson,index)=>{


if(completedLessons.includes(index)){


lesson.classList.add(
"completed"
);


lesson.querySelector("span").textContent =
"✓";


}



lesson.addEventListener("click",()=>{


lesson.classList.toggle(
"completed"
);



if(lesson.classList.contains("completed")){


lesson.querySelector("span").textContent =
"✓";



if(!completedLessons.includes(index)){

completedLessons.push(index);

}


}
else{


lesson.querySelector("span").textContent =
index + 1;



completedLessons =
completedLessons.filter(
item => item !== index
);


}



localStorage.setItem(

"completed-lessons",

JSON.stringify(completedLessons)

);



updateProgress();



});



});







/* ========================================
   PROGRESS UPDATE
======================================== */


function updateProgress(){


const total =
lessons.length;


const completed =
completedLessons.length;



const percentage =
Math.round(

(completed / total) * 100

);



const progressBar =
document.querySelector(
".course-progress div"
);



const progressText =
document.querySelector(
".progress-panel strong"
);



if(progressBar){

progressBar.style.width =
percentage + "%";

}



if(progressText){

progressText.textContent =
`${percentage}% Complete`;

}



unlockCertificate(percentage);



}







/* ========================================
   CERTIFICATE LOGIC
======================================== */


function unlockCertificate(progress){


const certificateButton =
document.querySelector(
".certificate-panel button"
);



if(!certificateButton){

return;

}



if(progress >= 100){


certificateButton.textContent =
"Download Certificate";



certificateButton.onclick =
()=>{


showToast(
"Certificate unlocked successfully!"
);



};


}
else{


certificateButton.textContent =
"Preview Certificate";


}



}







/* ========================================
   START COURSE BUTTON
======================================== */


const startButton =
document.getElementById(
"startCourse"
);



if(startButton){


startButton.addEventListener(
"click",
()=>{


document
.querySelector(".lessons-panel")
.scrollIntoView({

behavior:"smooth"

});


showToast(
"Course started. Begin your first lesson."
);



});


}







/* ========================================
   AI LEARNING ASSISTANT
======================================== */


const aiButton =
document.querySelector(
".ai-learning-panel button"
);



if(aiButton){


aiButton.addEventListener(
"click",
()=>{


window.location.href =
"ai-assistant.html";


});


}







/* ========================================
   TOAST SYSTEM
======================================== */


function showToast(message){


const existing =
document.querySelector(
".learning-toast"
);



if(existing){

existing.remove();

}



const toast =
document.createElement("div");



toast.className =
"learning-toast";



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





updateProgress();



});
