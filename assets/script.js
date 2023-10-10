// --------BELOW-------
// pulling elements in from HTML
// --------BELOW-------
var startGameBtn = document.getElementById("start-btn");

var quizBoxElement = document.querySelector(".quiz-box");
var welcomeBoxElement = document.querySelector(".welcome-message");

var resultH3 = document.querySelector("h3");


// --------BELOW-------
// setting global variables
// --------BELOW-------
var correctAnswer = 0;
var currentQuestionArrayIndex = 0;



// --------BELOW-------
// list of questions and answers
// --------BELOW-------
questionsList = [
    {
        question: "Which 3 doctors are invited to endorse the island?",
        choices: [
            { choice: "Dr. Charles, Dr. Redmond, Dr. Simon", correctChoice: false },
            { choice: "Dr. Noble, Dr. Kahn, Dr. Richards", correctChoice: false },
            { choice: "Dr. Minton, Dr. Charles, Dr. Raj", correctChoice: false },
            { choice: "Dr. Grant, Dr. Sattler, & Dr. Malcolm", correctChoice: true }
        ]
    },
    {
        question: "Why are there kids on the island?",
        choices: [
            { choice: "They're the CEO's grandchildren", correctChoice: true },
            { choice: "They're the lawyer's kids", correctChoice: false },
            { choice: "They won a prize from a sweepstakes", correctChoice: false },
            { choice: "They're from a focus group", correctChoice: false }
        ]
    },
    {
        question: "What is the first dinosaur the doctors see?",
        choices: [
            { choice: "T-Rex", correctChoice: false },
            { choice: "Brachiosaurus", correctChoice: true },
            { choice: "Velociraptor", correctChoice: false },
            { choice: "Triceratops", correctChoice: false }
        ]
    },
    {
        question: 'Which actor says the famous line: "Hold onto your butts..."?',
        choices: [
            { choice: "Jeff Goldblum", correctChoice: false },
            { choice: "Laura Dern", correctChoice: false },
            { choice: "Sam Neill", correctChoice: false },
            { choice: "Samuel L. Jackson", correctChoice: true }
        ]
    },
    {
        question: "Who's a clever girl?",
        choices: [
            { choice: "Lex", correctChoice: false },
            { choice: "Laura", correctChoice: false },
            { choice: "A velociraptor", correctChoice: true },
            { choice: "A T-Rex", correctChoice: false }
        ]
    },
    {
        question: "How does Lex get Jurassic Park's security back online?",
        choices: [
            { choice: "She's a computer hacker familiar with MacOS systems", correctChoice: false },
            { choice: "She's a computer hacker familiar with JavaScript", correctChoice: false },
            { choice: "She's a computer hacker familiar with Linux systems", correctChoice: false },
            { choice: "She's a computer hacker familiar with UNIX systems", correctChoice: true }
        ]
    },
    {
        question: "How do the dinosaurs get loose?",
        choices: [
            { choice: "A storm knocks out the power", correctChoice: false },
            { choice: "A computer programmer deactivates the system ", correctChoice: true },
            { choice: "The T-Rex bursts through the power lines", correctChoice: false },
            { choice: "An lab tech releases them", correctChoice: false }
        ]
    },
    {
        question: "Which dinosaur did the group find sick in a field?",
        choices: [
            { choice: "A baby pteradacytl", correctChoice: false },
            { choice: "A triceratops", correctChoice: true },
            { choice: "A stegosaurus", correctChoice: false },
            { choice: "A baby T-Rex", correctChoice: false }
        ]
    },
    {
        question: "What's uh... flocking this way?",
        choices: [
            { choice: "A herd of Gallamimus", correctChoice: true },
            { choice: "A flock of Pteradons", correctChoice: false },
            { choice: "A a pack of Velociraptors", correctChoice: false },
            { choice: "A murder of Compies", correctChoice: false }
        ]
    },
    {
        question: 'Who said: "life finds a way"?',
        choices: [
            { choice: "Lex", correctChoice: false },
            { choice: "Laura", correctChoice: false },
            { choice: "Ian", correctChoice: true },
            { choice: "Alan", correctChoice: false }
        ]
    }
]

// --------BELOW-------
// page load welcome 
// --------BELOW-------
function welcomePage() {
    welcomeBoxElement.style.display = "block"
    quizBoxElement.style.display = "none"
}

welcomePage();



// --------BELOW-------
// start quiz
// --------BELOW-------
function startQuiz() {
    quizBoxElement.style.display = "block";

    // --------BELOW-------
    // pulling in elements from HTML
    var questionH2 = document.querySelector("h2");

    var opt1 = document.querySelector("#option1");
    var opt2 = document.querySelector("#option2");
    var opt3 = document.querySelector("#option3");
    var opt4 = document.querySelector("#option4");

    // --------BELOW-------
    // setting text content to appropriate question/choices on list
    // --------
    // 10/09/23 update: dang! So close! I needed to have the startQuiz function have a function inside it that keeps track of what index in the questionList array we're at and go/tally from there
    function updateQuestion() {
        const currentQuestion = questionsList[currentQuestionArrayIndex];
        questionH2.textContent = currentQuestion.question;

        opt1.textContent = currentQuestion.choices[0].choice;
        opt2.textContent = currentQuestion.choices[1].choice;
        opt3.textContent = currentQuestion.choices[2].choice;
        opt4.textContent = currentQuestion.choices[3].choice;

        // --------BELOW-------
        // evaluate if choice is true or false
        opt1.value = currentQuestion.choices[0].correctChoice;
        opt2.value = currentQuestion.choices[1].correctChoice;
        opt3.value = currentQuestion.choices[2].correctChoice;
        opt4.value = currentQuestion.choices[3].correctChoice;

        // --------BELOW-------
        // setting answer to empty
        var answer = "";

        // clear the highlight color
        opt1.style.backgroundColor = "";
        opt2.style.backgroundColor = "";
        opt3.style.backgroundColor = "";
        opt4.style.backgroundColor = "";
    }
    updateQuestion();
    // --------BELOW-------
    // creating event listeners to change selected choice to yellow and
    // setting answer to that particular value
    // --------BELOW-------
    opt1.addEventListener("click", function () {
        opt1.style.backgroundColor = "yellow"
        answer = opt1.value;
    })

    opt2.addEventListener("click", function () {
        opt2.style.backgroundColor = "yellow"
        answer = opt2.value;
    })

    opt3.addEventListener("click", function () {
        opt3.style.backgroundColor = "yellow"
        answer = opt3.value;
    })

    opt4.addEventListener("click", function () {
        opt4.style.backgroundColor = "yellow"
        answer = opt4.value;
    })

    // --------BELOW-------
    // grabbing submit button from HTML
    // --------BELOW-------
    var evalSubmit = document.querySelector("#submit-btn")

    // --------BELOW-------
    // evaluating if answer is correct choice and
    // displaying corresponding message
    // --------BELOW-------
    evalSubmit.addEventListener("click", function () {
        if (answer == true) {
            resultH3.textContent = "Result: Correct!";
            correctAnswer++;
        } else {
            resultH3.textContent = "Result: Incorrect!"
        }

        currentQuestionArrayIndex++;

        if (currentQuestionArrayIndex < questionsList.length) {
            updateQuestion();
        } else {
            resultH3.textContent = `Thanks for playing! Correct Answers: ${correctAnswer}/${questionsList.length}`
        }
    });


}



// --------BELOW-------
// event listener to start quiz
// --------BELOW-------
startGameBtn.addEventListener("click", function () {
    welcomeBoxElement.style.display = "none";

    startQuiz();
});


