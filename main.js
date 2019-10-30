//Start Quiz
function startQuiz() {
    $('#start-quiz').on("click", function (event) {
        $(".start-quiz").toggleClass('hidden');
        $(".quiz-questions").toggleClass('hidden');
        console.log("start button pressed");
    });
}
//Reveal quiz question
function generateQuestion(){}
//Submit and check answer
function submitAnswer(){}
//Display good or bad window
function displayCorrectOrNot(){}
//Update question number and score
function updateQuestionAndScore(){}
//Render next question
function nextQuestion(){}
//Calculate and show results
function finalResult(){}
//Restart quiz
function restartQuiz(){}
//Run all functions
function runQuiz(){
    startQuiz();
}

$(runQuiz);