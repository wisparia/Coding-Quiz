// The questions, choices, and awnsers that will be pulled for each question in the displayQuiz function.
var questions = [
  {
    question: "Commonly used data tyles DO NOT include:",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    correct: "Alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed within ____.",
    choices: ["Quotations", "Curly Brackets", "Parenthesis", "Square Brackets"],
    correct: "Curly Brackets",
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "Numbers and Strings",
      "Other Arrays",
      "Booleans",
      "All of the Above",
    ],
    correct: "All of the Above",
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
    correct: "Quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "Terminal/bash", "For Loops", "Console Log"],
    correct: "Console Log",
  },
];
// the defined variables that will be used to pull, and connect sections throughout the javascript and HTML
var startQuiz = document.getElementById("startQuiz");
var quiz = document.getElementById("quiz");
var buttons = document.getElementById("buttons");
var titleQuestion = document.getElementById("titleQuestion");
var start = document.getElementById("start");

var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");

var timeLeft = document.getElementById("time");
var confirm = document.getElementById("confirm");
var highscores = document.getElementById("highscores");
var finalScore = document.getElementById("finalScore");
var userInitials = document.getElementById("userInitials");
var questionNumber = 0;
var score = 0;
var secondsLeft = 60;
var timerInterval;

// The  listener that will start the quiz and the timer once the user hits the start button.
start.addEventListener("click", function () {
  startQuiz.style = "display: none";
  startTimer();
  displayQuiz();
});

// function that will run the timer onc the user starts the quiz.
function startTimer() {
  //starts the timer
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeLeft.innerHTML = "Time: " + secondsLeft;
    // stops the timer at 0 seconds left
    if (secondsLeft < 1) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
}
// Generates the questions and choices to the user in the buttons displayed on the screen.
function displayQuiz() {
  if (questionNumber !== 5) {
    titleQuestion.textContent = questions[questionNumber].question;
    console.log(titleQuestion);
    choiceA.textContent = questions[questionNumber].choices[0];
    choiceB.textContent = questions[questionNumber].choices[1];
    choiceC.textContent = questions[questionNumber].choices[2];
    choiceD.textContent = questions[questionNumber].choices[3];
    quiz.style = "display: block";
  } else {
    endGame();
  }
}
// what happens when the user clicks on a choice.
function userPicks() {
  userChoice = event.target.textContent;
  //  If user picked the correct awnser, it adds to their score, and moves onto the next question.
  if (userChoice === questions[questionNumber].correct) {
    questionNumber++;
    score = score + 20;
    confirm.innerHTML = "Correct!";
    displayQuiz();
    // if user picks the incorrect it minuses time and moves to the next question or onto the end screen if all questions have been done.
  } else {
    secondsLeft = secondsLeft - 10;
    questionNumber++;
    confirm.innerHTML = "Wrong!";
    displayQuiz();
  }
}
// Adding the listener to 'listen' for the user clicking on the buttons.
buttons.addEventListener("click", function () {
  // stops buttons from overlapping for the click function since they are all being pulled from the same div box
  event.stopPropagation();
  //   will run the userPicks function
  userPicks();
});
// Brings up the end screen for the quiz once it gets past the last question
function endGame() {
  score = score + secondsLeft;
  score = score < 0 ? 0 : score;
  quiz.style = "display: none";
  endScreen.style = "display: block";
  finalScore.innerHTML = "Your final score is " + score + "!";
  timeLeft.innerHTML = "Time: 0";
  clearInterval(timerInterval);
}

// Creates the vartiables used for storing the submitted scores on local storage
var storedScores = localStorage.getItem("resultsString");
var resultsArray;

// Adds the event listener for submitting your score at the end of the quiz and then stores it locally on the users browser
submitScore.addEventListener("click", function () {
  event.preventDefault();
  if (storedScores === null) {
    resultsArray = [];
  } else {
    resultsArray = JSON.parse(storedScores);
  }
  var gameResult = {
    player: userInitials.value.trim(),
    totalscore: score,
  };
  resultsArray.push(gameResult);
  localStorage.setItem("resultsString", JSON.stringify(resultsArray));
});

startOver.addEventListener("click", function () {
  location.reload();
});
// Attempted to add in a highscore board but could not get it to load properly. Will come back to play with on my own time.

// highscores.addEventListener("click", function(){
// for (var i = 0; i < resultsArray.length; i++) {
//     endScreen.style = "display: none";
//     highscores.classList.remove("hide");
//     var nameRow = document.createElement("p");
//     nameRow.textContent = resultsArray[i].player;
//     scoreboard.appendChild(nameRow);
//     console.log(nameRow);
//   }
// });
