<script>

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;

const count=+counter.innerText;

const speed=40;

const increment=target/speed;

if(count<target){

counter.innerText=Math.ceil(count+increment);

requestAnimationFrame(update);

}else{

counter.innerText=target.toLocaleString();

}

}

update();

});


const cards=document.querySelectorAll(".card,.metric");

window.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;
const y=e.clientY/window.innerHeight;

cards.forEach(card=>{

card.style.transform=
`rotateY(${(x-.5)*8}deg)
 rotateX(${(0.5-y)*8}deg)`;

});

});

</script>

<script>


// Scroll reveal animation

const revealElements =
document.querySelectorAll(
".card,.ai-card,.leader-card,.showcase,.timeline-item"
);


const observer =
new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},
{
threshold:.15
});


revealElements.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(50px)";

el.style.transition="1s ease";

observer.observe(el);

});



// Cursor glow effect

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);


document.addEventListener(
"mousemove",
(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});



</script>
<script>

// Remove loader after page load

window.addEventListener("load",()=>{

document.querySelector(".loader")
.style.display="none";

});


// Smooth card tilt

document.querySelectorAll(
".ai-card,.feed-card,.leader-card"
)
.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{

let rect=card.getBoundingClientRect();

let x=e.clientX-rect.left;

let y=e.clientY-rect.top;


let rotateX=
(y-rect.height/2)/20;


let rotateY=
(rect.width/2-x)/20;


card.style.transform=
`
perspective(700px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
`;

});


card.addEventListener(
"mouseleave",
()=>{

card.style.transform="";

});


});

</script>

