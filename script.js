var questions = [
  {
    question: "Answer this question A",
    choices: ["Answer A1", "Answer B1", "Answer C1", "Answer D1"],
    correct: "Answer A1",
  },
  {
    question: "Answer this question B",
    choices: ["Answer A2", "Answer B2", "Answer C2", "Answer D2"],
    correct: "Answer B2",
  },
  {
    question: "Answer this question C",
    choices: ["Answer A3", "Answer B3", "Answer C3", "Answer D3"],
    correct: "Answer C3",
  },
  {
    question: "Answer this question D",
    choices: ["Answer A4", "Answer B4", "Answer C4", "Answer D4"],
    correct: "Answer D4",
  },
];

var startQuiz = document.getElementById("startQuiz");
var quiz = document.getElementById("quiz");
var titleQuestion = document.getElementById("titleQuestion");
var start = document.getElementById("start");

var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");

var timeLeft = document.getElementById("time");
var highscores = document.getElementById("highscores");
var finalScore = document.getElementById("finalScore");
var questionNumber = 0;
var score = 0;
var secondsLeft = 60;
var timerInterval;

start.addEventListener("click", function () {
  startQuiz.style = "display: none";
  startTimer();
  displayQuiz();
});

function startTimer() {
  //starts the timer
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeLeft.innerHTML = "Time: " + secondsLeft;
    // stops the timer at 0 seconds left
    if (secondsLeft < 1) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

function displayQuiz() {
  if (questionNumber !== 4) {
    titleQuestion.textContent = questions[questionNumber].question;
    console.log(titleQuestion);
    choiceA.textContent = questions[questionNumber].choices[0];
    choiceB.textContent = questions[questionNumber].choices[1];
    choiceC.textContent = questions[questionNumber].choices[2];
    choiceD.textContent = questions[questionNumber].choices[3];
    quiz.style = "display: block";
  }
}

function userPicks() {
  userChoice = event.target.textContent;
  if (userChoice === questions[questionNumber].correct) {
    questionNumber++;
    score = score + 20;
    displayQuiz();
    endGame();
  } else {
    secondsLeft = secondsLeft - 10;
    questionNumber++;
    displayQuiz();
    endGame();
  }
}

quiz.addEventListener("click", function () {
  userPicks();
});

function endGame() {
  if (questionNumber === 4) {
    quiz.style = "display: none";
    endScreen.style = "display: block";
    score = score + secondsLeft;
    clearInterval(timerInterval);
    finalScore.innerHTML = "Your final score is " + score + "!";
  }
}
