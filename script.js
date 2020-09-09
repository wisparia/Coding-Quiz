var questions = [
  {
    question: "Awnser this question A",
    choices: ["Awnser A1", "Awnser B1", "Awnser C1", "Awnser D1"],
    correct: "Awnser A1",
  },
  {
    question: "Awnser this question B",
    choices: ["Awnser A2", "Awnser B2", "Awnser C2", "Awnser D2"],
    correct: "Awnser A2",
  },
  {
    question: "Awnser this question C",
    choices: ["Awnser A3", "Awnser B3", "Awnser C3", "Awnser D3"],
    correct: "Awnser C3",
  },
  {
    question: "Awnser this question D",
    choices: ["Awnser A4", "Awnser B4", "Awnser C4", "Awnser D4"],
    correct: "Awnser A4",
  },
  {
    question: "none",
    choices: ["none"],
    correct: "none",
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
  titleQuestion.textContent = questions[questionNumber].question;
  console.log(titleQuestion);
  choiceA.textContent = questions[questionNumber].choices[0];
  choiceB.textContent = questions[questionNumber].choices[1];
  choiceC.textContent = questions[questionNumber].choices[2];
  choiceD.textContent = questions[questionNumber].choices[3];
  quiz.style = "display: block";
}

function userPicks() {
    userChoice = event.target.textContent;
  if (userChoice === questions[questionNumber].correct) {
    questionNumber++;
    displayQuiz();
    endGame();
  } else {
    secondsLeft = secondsLeft - 10;
    questionNumber++;
    displayQuiz();
    endGame();
  }
}

quiz.addEventListener('click', function(){
    userPicks();
});

function endGame (){
    if(questionNumber === 4){
    quiz.style = "display: none";
    endScreen.style = "display: block";
    }
}