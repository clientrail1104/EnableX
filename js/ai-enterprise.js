/* ==========================================================
   ENABLEX ENTERPRISE AI ASSISTANT ENGINE
   ai-enterprise.js
========================================================== */


document.addEventListener("DOMContentLoaded", () => {


console.log("EnableX Enterprise AI Loaded");



/* ========================================
   AI CHAT ENGINE
======================================== */


const input =
document.getElementById(
"aiPrompt"
);



const askButton =
document.getElementById(
"askAI"
);



const conversation =
document.querySelector(
".conversation"
);





const responses = {


"workforce":
"Current workforce priorities are AI capability growth, automation adoption, leadership development and digital transformation readiness.",


"learning":
"Recommended learning focus areas include artificial intelligence, analytics, automation and strategic leadership.",


"performance":
"Performance intelligence indicates strong capability growth with opportunities in advanced AI implementation.",


"strategy":
"Strategic priorities include workforce transformation, future skills development and enterprise automation.",


"default":
"I can help analyze workforce data, learning insights, performance metrics and enterprise strategy."

};







if(askButton){


askButton.addEventListener(
"click",
sendMessage
);


}



if(input){


input.addEventListener(
"keypress",
(event)=>{


if(event.key === "Enter"){


sendMessage();


}


});


}







function sendMessage(){


const question =
input.value.trim();



if(!question){

return;

}



addMessage(
question,
"user-message"
);



input.value = "";



setTimeout(()=>{


const answer =
generateResponse(
question
);



addMessage(
answer,
"ai-message"
);



},700);



}







function generateResponse(question){


const text =
question.toLowerCase();



for(const key in responses){


if(text.includes(key)){


return responses[key];


}


}



return responses.default;


}







function addMessage(
message,
className
){


const element =
document.createElement(
"div"
);



element.className =
"message " + className;



element.textContent =
message;



conversation.appendChild(
element
);



conversation.scrollTop =
conversation.scrollHeight;


}







/* ========================================
   AI ENTERPRISE DATA MODEL
======================================== */


window.enablexAIEnterprise = {


status:
"Active",


capabilities:[

"Knowledge Reasoning",

"Business Insights",

"Workflow Automation",

"Employee Support",

"Executive Assistance"

],


connectedSystems:[

"Learning Management",

"Performance Intelligence",

"Manager Analytics",

"Strategy AI",

"Command Center"

]


};







/* ========================================
   AUTOMATION ACTIONS
======================================== */


const automationCards =
document.querySelectorAll(
".automation-grid div"
);



automationCards.forEach(card=>{


card.addEventListener(
"click",
()=>{


const action =
card.querySelector("h3")
.textContent;



localStorage.setItem(

"ai-automation-action",

action

);



showToast(
`${action} automation selected`
);



});


});







/* ========================================
   TOAST
======================================== */


function showToast(message){


const old =
document.querySelector(
".ai-enterprise-toast"
);



if(old){

old.remove();

}



const toast =
document.createElement(
"div"
);



toast.className =
"ai-enterprise-toast";



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
