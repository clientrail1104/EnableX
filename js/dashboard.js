/* ==========================================================
   ENABLEX EXECUTIVE DASHBOARD ENGINE
   dashboard.js
========================================================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


console.log(
"EnableX Dashboard Activated"
);



/* ==========================================================
   KPI COUNTER ANIMATION
========================================================== */


const counters =
document.querySelectorAll(
".stat-card strong"
);



counters.forEach(counter=>{


const target =
parseInt(
counter.textContent.replace(/,/g,"")
);



let current = 0;



const increment =
Math.ceil(
target / 120
);



const updateCounter = ()=>{


current += increment;



if(current < target){


counter.textContent =
current.toLocaleString();



requestAnimationFrame(
updateCounter
);



}

else{


counter.textContent =
target.toLocaleString();



}


};



updateCounter();



});






/* ==========================================================
   KPI CARD INTERACTION
========================================================== */


const cards =
document.querySelectorAll(
".stat-card"
);



cards.forEach(card=>{


card.addEventListener(
"click",
()=>{


cards.forEach(item=>{

item.classList.remove(
"selected"
);

});


card.classList.add(
"selected"
);



});


});







/* ==========================================================
   LIVE TIME INDICATOR
========================================================== */


const createTimeWidget =
()=>{


const dashboardHero =
document.querySelector(
".dashboard-hero"
);



if(!dashboardHero)
return;



const time =
document.createElement(
"p"
);



time.className =
"dashboard-time";



dashboardHero.appendChild(
time
);



const updateTime =
()=>{


const now =
new Date();



time.textContent =
"Last Updated: "
+
now.toLocaleString();



};



updateTime();



setInterval(
updateTime,
1000
);



};



createTimeWidget();






/* ==========================================================
   CHART OBSERVER
========================================================== */


const chart =
document.querySelector(
".chart-placeholder"
);



if(chart){



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


chart.classList.add(
"chart-active"
);


}


});


},
{
threshold:.4
}
);



observer.observe(chart);



}







/* ==========================================================
   DASHBOARD NOTIFICATION
========================================================== */


const showNotification =
(message)=>{


const notification =
document.createElement(
"div"
);



notification.className =
"dashboard-notification";



notification.textContent =
message;



document.body.appendChild(
notification
);



setTimeout(
()=>{


notification.remove();


},
3000
);



};




setTimeout(
()=>{


showNotification(
"Dashboard intelligence synchronized"
);


},
1500
);



});
