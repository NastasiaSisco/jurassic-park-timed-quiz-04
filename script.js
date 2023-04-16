// declare in JS that you're creating a variable from an element on another page. Search the HTML ^.document^ by using ^.querySelector()^ method
var startGameBtn = document.getElementById("start-btn");

var quizBoxElement = document.querySelector(".quiz-box");
var welcomeBoxElement = document.querySelector(".welcome-message");



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
        question: "How does Lex get Jurassic Park's security back online?",
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
            {
                choice: "Lex", 
                correctChoice: false},

            {choice: "Laura", correctChoice: false},
            {choice: "A velociraptor", correctChoice: true},
            {choice: "A T-Rex", correctChoice: false}
        ]
    }
]



// on pageload, only show the welcome message
function welcomePage() {
    welcomeBoxElement.style.display = "block"
    quizBoxElement.style.display = "none"
}

welcomePage();



var resultH3 = document.querySelector("h3");
var correctAnswer = 0;



function startQuiz () {
    quizBoxElement.style.display = "block";

    // questionsList = 0;

    var questionH2 = document.querySelector("h2");
    
    var opt1 = document.querySelector("#option1");
    var opt2 = document.querySelector("#option2");
    var opt3 = document.querySelector("#option3");
    var opt4 = document.querySelector("#option4");
    
    
    questionH2.textContent = questionsList[0].question;

    opt1.textContent = questionsList[0].choices[0].choice;
    opt2.textContent = questionsList[0].choices[1].choice;
    opt3.textContent = questionsList[0].choices[2].choice;
    opt4.textContent = questionsList[0].choices[3].choice;

    opt1.value = questionsList[0].choices[0].correctChoice;
    opt2.value = questionsList[0].choices[1].correctChoice;
    opt3.value = questionsList[0].choices[2].correctChoice;
    opt4.value = questionsList[0].choices[3].correctChoice;

    var answer = "";

    opt1.addEventListener("click", function() {
        opt1.style.backgroundColor = "yellow"
        answer = opt1.value;
    })
    
    opt2.addEventListener("click", function() {
        opt2.style.backgroundColor = "yellow"
        answer = opt2.value;
    })

    opt3.addEventListener("click", function() {
        opt3.style.backgroundColor = "yellow"
        answer = opt3.value;
    })

    opt4.addEventListener("click", function() {
        opt4.style.backgroundColor = "yellow"
        answer = opt4.value;
    })
    
    // evaluate if correct
    evalSubmit = document.querySelector("#submit-btn")

    evalSubmit.addEventListener("click", function() {
        if (answer == true) {
            resultH3.textContent = "Result: Correct!";
            correctAnswer++;
        } else {
            resultH3.textContent = "Result: Incorrect!"
        }
    })



    console.log(opt3.value)
}




















    // var opt1 = document.getElementById("option1");
    // var opt2 = document.getElementById("option2");
    // var opt3 = document.getElementById("option3");
    // var opt4 = document.getElementById("option4");

    // opt1.textContent = questionsList[0].question;

    // li1.appendChild(opt1);

    // console.log(questionH2);
    // console.log(opt1);
    // console.log(li1);




// attach an event listener to the newly declared variable with .addEventListener() method
// hide the welcome page after startGameBtn is clicked
startGameBtn.addEventListener("click", function() {
    welcomeBoxElement.style.display = "none";
    
    startQuiz();
});


