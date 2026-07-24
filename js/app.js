/* ==========================================================
   DIGITAL ENABLEMENT
   Premium Interaction Engine
   app.js
========================================================== */


/* ==========================================================
   PAGE READY
========================================================== */

document.addEventListener(
"DOMContentLoaded",
()=>{


/* ==========================================================
   NAVBAR SCROLL EFFECT
========================================================== */


const navbar=document.querySelector(".navbar");


if(navbar){


window.addEventListener(
"scroll",
()=>{


if(window.scrollY>50){

navbar.style.background=
"rgba(5,8,22,.85)";

navbar.style.boxShadow=
"0 20px 50px rgba(0,0,0,.35)";


}else{


navbar.style.background=
"rgba(255,255,255,.06)";

navbar.style.boxShadow=
"0 10px 30px rgba(0,0,0,.20)";


}


});


}



/* ==========================================================
   SCROLL REVEAL SYSTEM
========================================================== */


const revealElements=
document.querySelectorAll(
".feature-card, .knowledge-card, .solution-card, .glass-card"
);



const revealObserver=
new IntersectionObserver(

(entries)=>{


entries.forEach(

(entry)=>{


if(entry.isIntersecting){


entry.target.classList.add(
"show"
);


}


}

);


},

{

threshold:.15

}

);



revealElements.forEach(
(el)=>{


el.classList.add(
"reveal"
);


revealObserver.observe(el);


}

);





/* ==========================================================
   CURSOR LIGHT EFFECT
========================================================== */


const cursorGlow=
document.createElement(
"div"
);


cursorGlow.className=
"cursor-glow";


document.body.appendChild(
cursorGlow
);



document.addEventListener(
"mousemove",
(e)=>{


cursorGlow.style.left=
e.clientX+"px";


cursorGlow.style.top=
e.clientY+"px";


}

);





/* ==========================================================
   PREMIUM CARD TILT
========================================================== */


const cards=
document.querySelectorAll(
".glass-card, .feature-card"
);



cards.forEach(
(card)=>{


card.addEventListener(
"mousemove",
(e)=>{


const rect=
card.getBoundingClientRect();


const x=
e.clientX-rect.left;


const y=
e.clientY-rect.top;


const rotateX=
((y-rect.height/2)/20)*-1;


const rotateY=
(x-rect.width/2)/20;


card.style.transform=
`
perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)
`;



}

);



card.addEventListener(
"mouseleave",
()=>{


card.style.transform="";


}

);



}

);





/* ==========================================================
   SMOOTH ANCHOR SCROLL
========================================================== */


document
.querySelectorAll(
'a[href^="#"]'
)
.forEach(
(anchor)=>{


anchor.addEventListener(
"click",
function(e){


const target=
document.querySelector(
this.getAttribute("href")
);



if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


}

);


}

);



/* ==========================================================
   PAGE LOAD ANIMATION
========================================================== */


document.body.classList.add(
"loaded"
);



});
