/* ==========================================================
   ENABLEX KNOWLEDGE HUB ENGINE
   knowledge.js
========================================================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


console.log(
"EnableX Knowledge Hub Activated"
);





/* ==========================================================
   KNOWLEDGE SEARCH
========================================================== */


const searchInput =
document.getElementById(
"knowledgeSearch"
);



const searchButton =
document.querySelector(
".knowledge-search button"
);



const articles =
document.querySelectorAll(
".article-card"
);





if(searchInput && searchButton){



const performSearch = ()=>{


const keyword =
searchInput.value
.toLowerCase()
.trim();



let found = false;



articles.forEach(article=>{


const content =
article.textContent
.toLowerCase();



if(
content.includes(keyword)
||
keyword === ""
){


article.style.display =
"block";


found = true;


}

else{


article.style.display =
"none";


}


});



showSearchMessage(
found
?
"Knowledge resources found"
:
"No matching knowledge resources found"
);



};





searchButton.addEventListener(
"click",
performSearch
);



searchInput.addEventListener(
"keypress",
(event)=>{


if(event.key==="Enter"){

performSearch();

}


});



}





/* ==========================================================
   SEARCH MESSAGE
========================================================== */


function showSearchMessage(message){


let notification =
document.querySelector(
".knowledge-notification"
);



if(notification){

notification.remove();

}



notification =
document.createElement(
"div"
);



notification.className =
"knowledge-notification";



notification.textContent =
message;



document.body.appendChild(
notification
);



setTimeout(
()=>{


notification.remove();


},
2500
);



}






/* ==========================================================
   CATEGORY INTERACTION
========================================================== */


const categories =
document.querySelectorAll(
".category-card"
);



categories.forEach(category=>{


category.addEventListener(
"click",
()=>{


categories.forEach(item=>{

item.classList.remove(
"active-category"
);

});



category.classList.add(
"active-category"
);



showSearchMessage(

category.querySelector("h3").textContent
+
" selected"

);



});


});







/* ==========================================================
   ARTICLE CARD INTERACTION
========================================================== */


articles.forEach(article=>{


article.addEventListener(
"mouseenter",
()=>{


article.style.cursor =
"pointer";


});



article.addEventListener(
"click",
()=>{


const title =
article.querySelector(
"h3"
).textContent;



showSearchMessage(

"Opening knowledge article: "
+
title

);



});


});



});
