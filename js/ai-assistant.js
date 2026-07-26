/* ==========================================================
   ENABLEX AI ASSISTANT ENGINE
   ai-assistant.js
========================================================== */


document.addEventListener("DOMContentLoaded", () => {


console.log("EnableX AI Assistant Loaded");



const input =
document.getElementById("aiInput");


const sendButton =
document.getElementById("sendAI");


const chatMessages =
document.getElementById("chatMessages");



/* ========================================
   SEND MESSAGE
======================================== */


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



input.value="";



showTyping();



setTimeout(()=>{


removeTyping();


const response =
generateAIResponse(question);



addMessage(

response,

"ai-message"

);



saveConversation(
question,
response
);



},1200);



}






/* ========================================
   MESSAGE CREATOR
======================================== */


function addMessage(text,type){


const message =
document.createElement("div");



message.className =
`message ${type}`;



message.textContent =
text;



chatMessages.appendChild(message);



chatMessages.scrollTop =
chatMessages.scrollHeight;



}







/* ========================================
   AI RESPONSE SIMULATION
======================================== */


function generateAIResponse(question){


const text =
question.toLowerCase();



if(text.includes("security")){


return "I found enterprise security resources including policies, compliance frameworks and access governance guidelines.";


}



if(text.includes("learning")){


return "Recommended learning paths include leadership development, AI literacy and digital transformation programs.";


}



if(text.includes("strategy")){


return "The AI Transformation Strategy focuses on governance, adoption, capability building and measurable business outcomes.";


}



return "I searched the enterprise knowledge repository and found relevant information. I can help summarize documents, explain processes and recommend resources.";

}







/* ========================================
   TYPING INDICATOR
======================================== */


function showTyping(){


const typing =
document.createElement("div");



typing.id =
"aiTyping";



typing.className =
"message ai-message";



typing.textContent =
"AI is thinking...";



chatMessages.appendChild(typing);



}



function removeTyping(){


const typing =
document.getElementById("aiTyping");



if(typing){

typing.remove();

}


}







/* ========================================
   PROMPT BUTTONS
======================================== */


const prompts =
document.querySelectorAll(".prompt-card button");



prompts.forEach(prompt=>{


prompt.addEventListener("click",()=>{


input.value =
prompt.textContent;



sendMessage();



});


});







/* ========================================
   STORAGE
======================================== */


function saveConversation(question,response){


const history =
JSON.parse(

localStorage.getItem(
"enablex-ai-history"
)

|| "[]"

);



history.push({

question,

response,

time:
new Date().toISOString()

});



localStorage.setItem(

"enablex-ai-history",

JSON.stringify(history)

);



}







/* ========================================
   EVENTS
======================================== */


if(sendButton){


sendButton.addEventListener(
"click",
sendMessage
);


}



if(input){


input.addEventListener(
"keydown",
(event)=>{


if(event.key==="Enter"){

sendMessage();

}


});


}



});
