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
