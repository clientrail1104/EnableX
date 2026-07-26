/* ==========================================================
   ENABLEX ENTERPRISE COMMUNITIES ENGINE
   community.js
========================================================== */


document.addEventListener("DOMContentLoaded", () => {


console.log("EnableX Communities Loaded");



/* ========================================
   COMMUNITY JOIN ACTIONS
======================================== */


const joinButtons =
document.querySelectorAll(
".community-card button"
);



joinButtons.forEach(button=>{


button.addEventListener(
"click",
()=>{


const card =
button.closest(
".community-card"
);



const communityName =
card.querySelector("h2")
?.textContent
||
"Community";



localStorage.setItem(

"joined-community",

communityName

);



button.textContent =
"Joined ✓";



showToast(
`Joined ${communityName}`
);



});


});







/* ========================================
   COMMUNITY RECOMMENDATION TRACKING
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
"Recommendation";



localStorage.setItem(

"community-recommendation",

title

);



showToast(
"Collaboration recommendation saved"
);



});


});







/* ========================================
   COMMUNITY INTELLIGENCE MODEL
======================================== */


window.enablexCommunity = {


platform:

"Enterprise Collaboration Network",



communities:[

"AI Innovation Hub",

"Leadership Network",

"Digital Skills Circle",

"Project Collaboration"

],



engagementScore:

94,



activeMembers:

18000,



recommendationEngine:

"Active"


};







/* ========================================
   COLLABORATION PROFILE
======================================== */


window.enablexCollaborationProfile = {


interests:[

"Artificial Intelligence",

"Digital Transformation",

"Leadership",

"Automation"

],



connections:0,



discover:function(topic){


console.log(

`Finding collaboration opportunities for ${topic}`

);


}



};







/* ========================================
   TOAST SYSTEM
======================================== */


function showToast(message){


const existing =
document.querySelector(
".community-toast"
);



if(existing){

existing.remove();

}



const toast =
document.createElement(
"div"
);



toast.className =
"community-toast";



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
