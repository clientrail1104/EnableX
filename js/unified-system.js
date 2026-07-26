/* ==========================================================
   ENABLEX DIGITAL OPERATING SYSTEM ENGINE
   unified-system.js
========================================================== */


document.addEventListener("DOMContentLoaded", () => {


console.log("EnableX Digital Operating System Loaded");



/* ========================================
   MODULE TRACKING
======================================== */


const modules =
document.querySelectorAll(
".system-card"
);



modules.forEach(module=>{


module.addEventListener(
"click",
()=>{


const moduleName =
module.querySelector("h2")
?.textContent
||
"Module";



localStorage.setItem(

"enablex-last-module",

moduleName

);



console.log(
`EnableX module accessed: ${moduleName}`
);



});


});







/* ========================================
   PLATFORM HEALTH ANIMATION
======================================== */


const healthValues =
document.querySelectorAll(
".health-grid strong"
);



healthValues.forEach(value=>{


value.style.opacity = "0";



setTimeout(()=>{


value.style.transition =
"opacity .8s ease";


value.style.opacity = "1";



},300);



});







/* ========================================
   ENABLEX OS DATA MODEL
======================================== */


window.enablexOS = {


platform:

"EnableX Digital Operating System",



status:

"Enterprise Intelligence Active",



modules:[

"AI Enterprise",

"Learning Intelligence",

"Performance Intelligence",

"Manager Intelligence",

"Strategy AI",

"Command Center"

],



intelligenceLayer:[

"Workforce Analytics",

"Knowledge Intelligence",

"Automation",

"Decision Support"

],



version:

"Enterprise Workplace 1.0"


};







/* ========================================
   PLATFORM EVENT SYSTEM
======================================== */


window.enablexEvent = function(eventName,data){


console.log(

"EnableX Event:",

eventName,

data

);


};







/* ========================================
   FUTURE API CONNECTION HOOK
======================================== */


window.enablexAPI = {


connect:function(system){


console.log(

`Connecting EnableX intelligence to ${system}`

);


},



sync:function(){


console.log(

"Enterprise intelligence synchronization started"

);


}



};







});
