//variables for quiz score and question number
let score = 0;
let questionNumber = 0;
//increments score
function updateScore(){
    score++;
    $('.score').text(score);
}
//increments questions number
function updateQuestionNumber(){
    questionNumber++;
    $('.question-number').text(`${questionNumber}/10`)
}
//toggle question screen
function toggleQuestions(){
    $(".quiz-questions").toggleClass('hidden');
}
//Render a question
function renderQuestion(){
    let currentQuestion = STORE[questionNumber -1];
    $('[for=question]').text(currentQuestion.question);
    $('[for=a]').text(currentQuestion.answers[0]);
    $('[for=b]').text(currentQuestion.answers[1]);
    $('[for=c]').text(currentQuestion.answers[2]);
    $('[for=d]').text(currentQuestion.answers[3]);
}
//Start Quiz
function startQuiz() {
    $('#start-quiz').on("click", function (event) {
        console.log("start button pressed")
        $(".start-quiz").toggleClass('hidden');
        toggleQuestions();
        generateQuestion();
    });
}
//generate quiz question
function generateQuestion(){
    if (questionNumber < STORE.length){
        updateQuestionNumber();
        renderQuestion();
        console.log('answer question');
    } else {
        toggleQuestions();
        $(".final").toggleClass('hidden');
        console.log('final screen shown')
    }
}
//Next question button
function nextQuestion(){
    $('.next-question').on('click', generateQuestion())
}
//Submit button
function submitAnswer(){
    $(':submit').on("click", function(event) {
        event.preventDefault();
        checkAnswer();
    })
}
//Check Answer
function checkAnswer(){
    let selectedAnswer = $('input:checked').val();
    let rightAnswer = STORE[questionNumber-1].correctAnswer;
    if (selectedAnswer === rightAnswer){
        correctAnswer();
    } else {
        console.log(selectedAnswer);
        console.log(rightAnswer);
        wrongAnswer();
    }
}
//Right answer
function correctAnswer(){
    console.log('right answer');
}
//Wrong answer
function wrongAnswer(){
    console.log('wrong answer');
}
//Run all functions
function runQuiz(){
    startQuiz();
    submitAnswer();
}

$(runQuiz);