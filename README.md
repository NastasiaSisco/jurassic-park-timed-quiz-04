# timed-quiz-homework04

## Info
My first attempt at a JavaScript/CSS app from scratch. Homework for Bootcamp. No starter code.

### How-To
Upon page load: the welcome screen's element is shown, hiding the quiz screen's element
There is a start button which reveals the quiz screen whilst hiding the welcome page

#### Stay Tuned!
Once questions and their possible answers are added, they will appear one at a time when start button is pushed.
Start button will also initiate a countdown timer
If a question is answered incorrectly, and additional 10 seconds will be deducted from timer.
If timer runs out, a loss is recorded.
If quiz is passes, score is calculated and a prompt will appear to add user initials to "leader board" which is saved to localStorage and retrieved later.

Acceptance Criteria from assignment Below:
GIVEN I am taking a quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score