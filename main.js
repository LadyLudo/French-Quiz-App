//variables for quiz score and question number
let score = 0;
let questionNumber = 0;
//increments score
function updateScore(){
    score++;
    $('#score').text(score);
}
//increments questions number
function updateQuestionNumber(){
    questionNumber++;
    $('.question-number').text(`${questionNumber}/10`);
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
    $('.next-question').on('click', function(event){
        console.log('next button pressed');
        $(this).parent().toggleClass('hidden');
        toggleQuestions();
        generateQuestion();
    })
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
        console.log(`${selectedAnswer} was chosen`);
        console.log(`${rightAnswer} is correct`);
        wrongAnswer();
    }
}
//Right answer
function correctAnswer(){
    console.log('right answer');
    updateScore();
    toggleQuestions();
    $('.right-answer').toggleClass('hidden');
}
//Wrong answer
function wrongAnswer(){
    console.log('wrong answer');
    toggleQuestions();
    $('.wrong-answer').toggleClass('hidden');
}
// retake button
function retakeQuiz(){
    $("#reset-quiz").on("click", function(){
        console.log('retake button pressed');
        score = 0;
        questionNumber = 0;
        $('#score').text(score);
        $('.question-number').text(`${questionNumber}/10`);
        $(".final").toggleClass('hidden');
        $(".start-quiz").toggleClass('hidden');
    })
}
//Run all functions
function runQuiz(){
    startQuiz();
    submitAnswer();
    nextQuestion();
    retakeQuiz();
}

$(runQuiz);