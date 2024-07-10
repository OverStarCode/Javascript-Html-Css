var quizArray = [
    { 
        id:1,
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid", "Rome"],
        answer: "Paris"
    },

    {
        id:2,

        question: "Who is the current Prime Minister of the United Kingdom?",
        options: ["David Cameron", "Theresa May", "Johnson", "Boris Johnson"],
        answer: "Theresa May"
    },

    {
        id:3,

        question: "What is the largest ocean in the world?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        answer: "Pacific Ocean"
    },

    {
        id:4,

        question: "What is the world's most populated city?",
        options: ["New York", "Tokyo", "London", "Beijing"],
        answer: "Tokyo"
    },

    {
        id:5,

        question: "What is the largest desert in the world?",
        options: ["Sahara", "Arabian Desert", "Antarctica", "Gobi Desert"],
        answer: "Sahara"
    }
];


var QuesionHeader = document.querySelector(".quiz-header");

var QuizQuesion = document.querySelector(".quiz-question");

var QuizOptions = document.querySelector(".quiz-options")


var Score = document.querySelector(".quiz-score");



var SubmitButton = document.getElementById("submitBtn")

var ResetButton = document.getElementById("resetBtn")

var NextButton = document.getElementById("nextBtn")

var currentQuestionIndex = 0;

 
var timer_html_place = document.querySelector(".question-time");


var score = 0;

var timeLeft = 60;

var timerInterval;

var isQuizOver = false;

var IsChecked = false;

ResetButton.style.display = "none";




alert("start the Quiz")

startQuiz();



// Function to start the quiz

function startQuiz() {

    currentQuestionIndex = 0;

    score = 0;

    timeLeft = 60;


    Score.innerHTML = `Score: <span id="score">${score}</span> / ${quizArray.length}</span>`;

    isQuizOver = false;

    displayNextQuestion();

    startTimer();

}

// Function to display the next question

function displayNextQuestion() {

    if (currentQuestionIndex >= quizArray.length) {
        clearInterval(timerInterval);
    }else{
        QuesionHeader.textContent = `Question ${currentQuestionIndex + 1} of ${quizArray.length}`;

        QuizQuesion.textContent = quizArray[currentQuestionIndex].question;

        QuizOptions.innerHTML = "";


        quizArray[currentQuestionIndex].options.forEach(function(option, index) {
            var newOption = `<div class="block">
          <input type="radio" id="${option}" name="option" value=${option} />
          <label for="${option}">${option}</label><br />
        </div>`;

        QuizOptions.innerHTML += newOption;



        });
    }

    if(currentQuestionIndex == quizArray.length - 1) {
        // ResetButton.style.display = "block";
        NextButton.style.display = "none";
    }
}

// Function to check the answer

function checkAnswer() {

    var userAnswer = document.querySelector('input[name="option"]:checked');

    if (!userAnswer) {

        alert("Please select an answer.");

        return;

    }

    var correctAnswer = quizArray[currentQuestionIndex].answer;

    if (userAnswer.value === correctAnswer) {

        score++;
        Score.innerHTML = `Score: <span id="score">${score}</span> / ${quizArray.length}</span>`;

        document.querySelector('input[name="option"]:checked').parentElement.classList.add("correct")
    }else{
        document.querySelector('input[name="option"]:checked').parentElement.classList.add("wrong")

    }
    IsChecked = true;



}


SubmitButton.addEventListener("click", function(){
    checkAnswer();

    if(currentQuestionIndex === quizArray.length - 1) {
        ResetButton.style.display = "block";
        NextButton.style.display = "none";
        SubmitButton.style.display = "none";

        clearInterval(timerInterval);

        QuesionHeader.textContent = "Quiz End ";


        QuizQuesion.textContent = "";

        QuizOptions.innerHTML = "";

        timer_html_place.innerHTML = "";


        

        Score.innerHTML = `<div>Your Score: <span id="score">${score}</span> / ${quizArray.length}</span></div>`;
        // ResetButton.style.backgroundColor = "green";
        Score.style.backgroundColor = "orange";
    }
})
// Function to start the timer

function startTimer() {

    timerInterval = setInterval(function() {

        timeLeft--;


        timer_html_place.innerHTML = `    Time left: <span style="font-weight: bolder; padding: 10px;" id="timer">${timeLeft}</span> seconds`

        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            isQuizOver = true;

            // alert("Time's up!");

            showScore();

            timer_html_place.innerHTML = "";

            NextButton.style.display = "none";
 

        }

    }, 1000);

}

// Function to show the score

function showScore() {

    clearInterval(timerInterval);

    QuesionHeader.textContent = "Quiz Over!";

    QuizQuesion.textContent = "";

    QuizOptions.innerHTML = "";

    Score.innerHTML = `<div>Your Score: <span id="score">${score}</span> / ${quizArray.length}</span></div>`;
    Score.style.backgroundColor = "orange";

    SubmitButton.style.display = "none";

    ResetButton.style.display = "block";

}

// Function to reset the quiz

ResetButton.addEventListener("click", function() {
    clearInterval(timerInterval);
    startQuiz();

    Score.style.backgroundColor = "blue";

    SubmitButton.style.display = "block";
    NextButton.style.display = "block";
    ResetButton.style.display = "none";

    timer_html_place.innerHTML = "";


});

// Function to display the next question

NextButton.addEventListener("click", function() {

    if (isQuizOver) {

        return;

    }

    if(IsChecked){
        currentQuestionIndex++;

        displayNextQuestion();
        IsChecked = false;
    } 
    else{
        alert("Please check your answer before moving to the next question.");
    }


});