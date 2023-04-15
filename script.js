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



// list of all questions in an Array, but the actual questions and answers are objects inside the overall array 
questionsList = [
    {
        question: "Which 3 doctors are invited to endorse the island?",
        choices: [
            {choice: "Dr. Charles, Dr. Redmond, Dr. Simon", correctChoice: false},
            {choice: "Dr. Noble, Dr. Kahn, Dr. Richards", correctChoice: false},
            {choice: "Dr. Minton, Dr. Charles, Dr. Raj", correctChoice: false},
            {choice: "Dr. Grant, Dr. Sattler, & Dr. Malcolm", correctChoice: true}
        ]
    },
    {
        question: 'Why are there kids on the island"?',
        choices: [
            {choice: "They're the CEO's grandchildren", correctChoice: true},
            {choice: "They're the lawyer's kids", correctChoice: false},
            {choice: "They won a prize from a sweepstakes", correctChoice: false},
            {choice: "They're from a focus group", correctChoice: false}
        ]
    },
    {
        question: "What is the first dinosaur the doctors see?",
        choices: [
            {choice: "T-Rex", correctChoice: false},
            {choice: "Brachiosaurus", correctChoice: true},
            {choice: "Velociraptor", correctChoice: false},
            {choice: "Triceratops", correctChoice: false}
        ]
    },
    {
        question: 'Which actor says the famous line: "Hold onto your butts..."?',
        choices: [
            {choice: "Jeff Goldblum", correctChoice: false},
            {choice: "Laura Dern", correctChoice: false},
            {choice: "Sam Neill", correctChoice: false},
            {choice: "Samuel L. Jackson", correctChoice: true}
        ]
    },
    {
        question: "Who's a clever girl?",
        choices: [
            {choice: "Lex", correctChoice: false},
            {choice: "Laura", correctChoice: false},
            {choice: "A velociraptor", correctChoice: true},
            {choice: "A T-Rex", correctChoice: false}
        ]
    },
    {
        question: "How does Lex get Jurassic Park's security back online?"
        choices: [
            {choice: "She's a computer hacker familiar with MacOS systems", correctChoice: false},
            {choice: "She's a computer hacker familiar with JavaScript", correctChoice: false},
            {choice: "She's a computer hacker familiar with Linux systems", correctChoice: false},
            {choice: "She's a computer hacker familiar with UNIX systems", correctChoice: true}
        ]
    },
    {
        question: "How do the dinosaurs get loose?",
        choices: [
            {choice: "A storm knocks out the power", correctChoice: false},
            {choice: "A computer programmer deactivates the system ", correctChoice: true},
            {choice: "The T-Rex bursts through the power lines", correctChoice: false},
            {choice: "An lab tech releases them", correctChoice: false}
        ]
    }, 
    {
        question: "Which dinosaur did the group find sick in a field?",
        choices: [
            {choice: "A baby pteradacytl", correctChoice: false},
            {choice: "A triceratops", correctChoice: true},
            {choice: "A stegosaurus", correctChoice: false},
            {choice: "A baby T-Rex", correctChoice: false}
        ]
    },
    {
        question: "What's uh... flocking this way?",
        choices: [
            {choice: "A herd of Gallamimus", correctChoice: true},
            {choice: "A flock of Pteradons", correctChoice: false},
            {choice: "A a pack of Velociraptors", correctChoice: false},
            {choice: "A pack of Compies", correctChoice: false}
        ]
    },
    {
        question: 'Who said: "life finds a way"?',
        choices: [
            {choice: "Lex", correctChoice: false},
            {choice: "Laura", correctChoice: false},
            {choice: "A velociraptor", correctChoice: true},
            {choice: "A T-Rex", correctChoice: false}
        ]
    }
]