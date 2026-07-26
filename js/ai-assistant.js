/* ==========================================================
   ENABLEX AI ASSISTANT ENGINE
   ai-assistant.js
========================================================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


console.log(
"EnableX AI Assistant Activated"
);



const input =
document.querySelector(
".chat-input input"
);



const sendButton =
document.querySelector(
".chat-input button"
);



const messages =
document.querySelector(
".messages"
);



const prompts =
document.querySelectorAll(
".prompt"
);





/* ==========================================================
   AI KNOWLEDGE RESPONSES
========================================================== */


const responses = {


"find":
"Here are recommended knowledge resources related to your request. I identified relevant documents, expert recommendations and learning materials.",


"summarize":
"The latest knowledge updates include digital transformation insights, AI adoption practices and enterprise learning improvements.",


"recommend":
"Recommended learning path: Digital Foundations → AI Productivity → Enterprise Innovation → Leadership Enablement.",


"default":
"I analyzed your question using the enterprise knowledge intelligence engine and generated a recommended insight pathway."

};






/* ==========================================================
   CREATE MESSAGE
========================================================== */


function addMessage(
text,
type
){


const message =
document.createElement(
"div"
);



message.className =
"message "
+
type;



message.textContent =
text;



messages.appendChild(
message
);



messages.scrollTop =
messages.scrollHeight;


}







/* ==========================================================
   TYPING INDICATOR
========================================================== */


function showTyping(){


const typing =
document.createElement(
"div"
);



typing.className =
"message ai typing";



typing.textContent =
"AI is analyzing knowledge...";



messages.appendChild(
typing
);



messages.scrollTop =
messages.scrollHeight;



return typing;


}







/* ==========================================================
   AI RESPONSE ENGINE
========================================================== */


function processQuestion(
question
){


addMessage(
question,
"user"
);



const typing =
showTyping();



setTimeout(
()=>{


typing.remove();



const lower =
question.toLowerCase();



let response =
responses.default;



if(
lower.includes("find")
||
lower.includes("resource")
){


response =
responses.find;


}


else if(
lower.includes("summary")
||
lower.includes("update")
){


response =
responses.summarize;


}


else if(
lower.includes("learn")
||
lower.includes("training")
||
lower.includes("recommend")
){


response =
responses.recommend;


}



addMessage(
response,
"ai"
);



},
1200
);



}








/* ==========================================================
   SEND BUTTON
========================================================== */


if(
sendButton &&
input
){



sendButton.addEventListener(
"click",
()=>{


const question =
input.value.trim();



if(
question === ""
)
return;



processQuestion(
question
);



input.value =
"";



});





input.addEventListener(
"keypress",
(event)=>{


if(
event.key === "Enter"
){


sendButton.click();


}



});



}








/* ==========================================================
   QUICK PROMPTS
========================================================== */


prompts.forEach(
prompt=>{


prompt.addEventListener(
"click",
()=>{


processQuestion(
prompt.textContent
);


});


});






});
