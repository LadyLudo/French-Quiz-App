// Start button toggle classes
function startQuiz() {
    $('#start-quiz').on("click", function (event) {
        $(".start-quiz").toggleClass('hidden');
        $(".quiz-questions").toggleClass('hidden');
        console.log("start button pressed");
    });
}
startQuiz();

