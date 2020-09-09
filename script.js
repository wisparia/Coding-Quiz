var questions = [
    {
    question : "Awnser this question A",
    choices : ["Awnser A", "Awnser B", "Awnser C", "Awnser D"],
    awnser : "b",
},
{
    question : "Awnser this question B",
    choiceA : "Awnser A",
    choiceB : "Awnser B",
    choiceC : "Awnser C",
    choiceD : "Awnser D",
},
{
    question : "Awnser this question C",
    choiceA : "Awnser A",
    choiceB : "Awnser B",
    choiceC : "Awnser C",
    choiceD : "Awnser D",
    correct : "C"
},
{
    question : "Awnser this question D",
    choiceA : "Awnser A",
    choiceB : "Awnser B",
    choiceC : "Awnser C",
    choiceD : "Awnser D",
    correct : "D",
}]; 


var startQuiz = document.getElementById("startQuiz");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var start = document.getElementById("start");

var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");
var timeLeft = document.getElementById("time");
var highscores = document.getElementById("highscores");
var score = 0;
var secondsLeft = 60;
var timerInterval;

start.addEventListener("click", function(){
        startQuiz.style = "display: none";
        quiz.style = "display: block";
        startTimer();
    })

    function startTimer() {
        //starts the timer
        timerInterval = setInterval(function() {
            secondsLeft--;
            timeLeft.innerHTML = "Time: " + secondsLeft;
            // stops the timer at 0 seconds left
            if(secondsLeft < 1 ) {
            clearInterval(timerInterval);
            }
        }, 1000);
    }