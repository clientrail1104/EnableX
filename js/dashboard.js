/* ==========================================================
   ENTERPRISE DASHBOARD ENGINE
   dashboard.js
========================================================== */


/* ==========================================================
   ANIMATED COUNTERS
========================================================== */


function animateCounter(element,target,duration=1800){

let start=0;

let increment=
target/(duration/16);


let timer=setInterval(()=>{


start+=increment;


if(start>=target){

element.innerText=
target.toLocaleString();

clearInterval(timer);

}
else{

element.innerText=
Math.floor(start).toLocaleString();

}


},16);


}




document.addEventListener(
"DOMContentLoaded",
()=>{


/* KPI COUNTERS */


const counters=
document.querySelectorAll(
".metric-card h2"
);



const values=[

128450,
24560,
85230,
94

];



counters.forEach(
(counter,index)=>{


animateCounter(
counter,
values[index]
);


});


/* ==========================================================
   CHART ANIMATION
========================================================== */


const bars=
document.querySelectorAll(
".chart-placeholder div"
);



bars.forEach(
(bar,index)=>{


const height=
bar.style.height;


bar.style.height="0";


setTimeout(()=>{


bar.style.height=
height;


},300+(index*150));


});





/* ==========================================================
   ACTIVITY LIVE UPDATE
========================================================== */


const activityBox=
document.querySelector(
".activity"
);



if(activityBox){


setInterval(()=>{


console.log(
"Dashboard synced"
);


},10000);


}



/* ==========================================================
   CARD GLOW EFFECT
========================================================== */


const cards=
document.querySelectorAll(
".metric-card, .dashboard-card"
);



cards.forEach(
(card)=>{


card.addEventListener(
"mouseenter",
()=>{


card.style.boxShadow=
"0 0 35px rgba(46,197,255,.20)";


}
);



card.addEventListener(
"mouseleave",
()=>{


card.style.boxShadow="";


});


});



});
