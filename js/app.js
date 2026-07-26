/* ==========================================================
   ENABLEX APPLICATION ENGINE
   app.js
========================================================== */


/* ==========================================================
   DOM READY
========================================================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


console.log(
"EnableX Platform Loaded"
);



/* ==========================================================
   ACTIVE NAVIGATION
========================================================== */


const currentPage =
window.location.pathname.split("/").pop();



const navLinks =
document.querySelectorAll(
".nav-links a"
);



navLinks.forEach(link=>{


const href =
link.getAttribute("href");



if(
href === currentPage
){

link.classList.add(
"active"
);

}


});





/* ==========================================================
   SMOOTH BUTTON EFFECTS
========================================================== */


const buttons =
document.querySelectorAll(
".btn-primary, .btn-secondary"
);



buttons.forEach(button=>{


button.addEventListener(
"mouseenter",
()=>{

button.style.transform =
"translateY(-4px)";

});


button.addEventListener(
"mouseleave",
()=>{

button.style.transform =
"translateY(0)";

});


});






/* ==========================================================
   SCROLL REVEAL
========================================================== */


const revealElements =
document.querySelectorAll(
".feature-card, .glass-card, .cta"
);



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";


}


});


},
{

threshold:.15

}
);



revealElements.forEach(element=>{


element.style.opacity="0";

element.style.transform=
"translateY(40px)";


element.style.transition=
"all .6s ease";


observer.observe(element);


});






/* ==========================================================
   AI DEMO INTERACTION
========================================================== */


const aiInput =
document.querySelector(
".chat-input input"
);



const aiButton =
document.querySelector(
".chat-input button"
);



if(
aiInput &&
aiButton
){


aiButton.addEventListener(
"click",
()=>{


const question =
aiInput.value.trim();



if(question === "")
return;



const messages =
document.querySelector(
".messages"
);



const userMessage =
document.createElement(
"div"
);



userMessage.className =
"message user";



userMessage.textContent =
question;



messages.appendChild(
userMessage
);



aiInput.value="";




setTimeout(
()=>{


const aiMessage =
document.createElement(
"div"
);



aiMessage.className =
"message ai";



aiMessage.innerHTML =
`
I analyzed your request.

<br><br>

Recommended knowledge resources
have been identified from the
enterprise knowledge base.

<br><br>

AI Insight:
"${question}"
can be explored through
relevant documents and experts.
`;



messages.appendChild(
aiMessage
);



messages.scrollTop =
messages.scrollHeight;



},
800
);



});


}






/* ==========================================================
   PROMPT BUTTONS
========================================================== */


const prompts =
document.querySelectorAll(
".prompt"
);



prompts.forEach(prompt=>{


prompt.addEventListener(
"click",
()=>{


if(aiInput){


aiInput.value =
prompt.textContent.trim();


aiInput.focus();


}


});


});



});
