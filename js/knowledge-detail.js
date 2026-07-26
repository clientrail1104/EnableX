/* ==========================================================
   ENABLEX KNOWLEDGE DETAIL ENGINE
   knowledge-detail.js
========================================================== */


document.addEventListener("DOMContentLoaded", () => {


console.log("EnableX Knowledge Detail Loaded");



/* ========================================
   LOAD SELECTED ARTICLE
======================================== */


const articleTitle =
document.getElementById("articleTitle");



const savedArticle =
localStorage.getItem("selectedKnowledge");



if(savedArticle && articleTitle){

    articleTitle.textContent = savedArticle;

}





/* ========================================
   BOOKMARK SYSTEM
======================================== */


const bookmarkBtn =
document.getElementById("bookmarkBtn");



let bookmarked =
false;



if(bookmarkBtn){


bookmarkBtn.addEventListener("click",()=>{


bookmarked = !bookmarked;



bookmarkBtn.textContent =
bookmarked
? "★ Bookmarked"
: "☆ Bookmark";



localStorage.setItem(

"knowledge-bookmarked",

bookmarked

);



showToast(

bookmarked
? "Article saved to bookmarks"
: "Bookmark removed"

);



});


}







/* ========================================
   AI INSIGHT BUTTON
======================================== */


const aiButton =
document.querySelector(".ai-summary button");



if(aiButton){


aiButton.addEventListener("click",()=>{


aiButton.textContent =
"Generating Insights...";



setTimeout(()=>{


aiButton.textContent =
"AI Insights Ready";



showToast(
"AI knowledge analysis completed"
);



},1500);



});


}







/* ========================================
   FEEDBACK
======================================== */


const ratingButtons =
document.querySelectorAll(".rating button");



ratingButtons.forEach(button=>{


button.addEventListener("click",()=>{


showToast(

`Thank you for your feedback: ${button.textContent}`

);


});


});







/* ========================================
   COMMENT SYSTEM
======================================== */


const commentBox =
document.querySelector(".comments textarea");


const commentButton =
document.querySelector(".comments button");



if(commentButton && commentBox){


commentButton.addEventListener("click",()=>{


const message =
commentBox.value.trim();



if(!message){


showToast(
"Please enter a comment",
"error"
);


return;


}



showToast(
"Comment submitted successfully"
);



commentBox.value="";



});


}







/* ========================================
   TOAST
======================================== */


function showToast(message,type="success"){


const existing =
document.querySelector(".detail-toast");



if(existing){

existing.remove();

}



const toast =
document.createElement("div");



toast.className =
`detail-toast ${type}`;



toast.textContent =
message;



document.body.appendChild(toast);



setTimeout(()=>{

toast.classList.add("active");

},50);




setTimeout(()=>{


toast.classList.remove("active");


setTimeout(()=>{

toast.remove();

},300);



},2500);



}



});
