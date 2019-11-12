//variables for quiz score and question number
let score = 0;
let questionNumber = 0;
//increments score
function updateScore(){
    score+=10;
    $('#score').text(`${score}%`);
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
        finalGrade();
        console.log('final screen shown')
    }
}
//Next question button
function nextQuestion(){
    $('.next-question').on('click', function(event){
        console.log('next button pressed');
        resetRadio();
        $(this).parent().toggleClass('hidden');
        toggleQuestions();
        generateQuestion();
    })
}
//Reset radio button
function resetRadio(){
    $('input[type=radio]').prop('checked', function () {
        return this.getAttribute('checked') == 'checked';
    });
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
    let selectedAnswer = $('input:checked').next().text();
    let rightAnswer = STORE[questionNumber-1].correctAnswer;
    if (selectedAnswer === rightAnswer){
        correctAnswer();
    } else if (selectedAnswer === ''){
        alert('Oops! Please select an option!');
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
    $('#right').text(`Yay! Great Job!`);
}
//Wrong answer
function wrongAnswer(){
    console.log('wrong answer');
    toggleQuestions();
    $('.wrong-answer').toggleClass('hidden');
    $('#wrong').text(`Nope, sorry! "${STORE[questionNumber-1].correctAnswer}" is correct.`);
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
//Grade final score
function finalGrade(){
    let grade=''
    if (score >= 100){
        grade= 'Perfect! You really know your french!';
    } else if (score >= 80){
        grade= 'Nice job! You know french pretty well!';
    } else if (score >= 50){
        grade= 'Might need to brush up a little more.';
    } else {
        grade='Uh oh! Need some more time to study!';
    }
    $('#final').text(`You got ${score}%! ${grade}`);
}
//Run all functions
function runQuiz(){
    startQuiz();
    submitAnswer();
    nextQuestion();
    retakeQuiz();
}

$(runQuiz);