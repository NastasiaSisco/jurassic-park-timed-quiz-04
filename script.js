// declare in JS that you're creating a variable from an element on another page. Search the HTML ^.document^ by using ^.querySelector()^ method
var startGameBtn = document.getElementById("start-btn");

var quizBoxElement = document.querySelector(".quiz-box");
var welcomeBoxElement = document.querySelector(".welcome-message");


// on pageload, only show the welcome message
function welcomePage() {
    if (quizBoxElement.style.display === "none") {
        quizBoxElement.style.display = "block";
    } else {
        quizBoxElement.style.display = "none";
    }
}

welcomePage();


// attach an event listener to the newly declared variable with ^.addEventListener() method
// hide the welcome page after startGameBtn is clicked
startGameBtn.addEventListener("click", function() {
    welcomeBoxElement.style.display = "none";
    quizBoxElement.style.display = "block";
});


