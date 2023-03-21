const questionBtns = document.querySelectorAll(".question-btn");
const questions = document.querySelectorAll(".question");

questionBtns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    const currentQuestion = event.currentTarget.parentElement.parentElement;

    questions.forEach(function (question) {
      if (question !== currentQuestion) {
        question.classList.remove("show-text");
        question.querySelector(".arrow-down").classList.remove("rotate");
        question.querySelector(".question-btn").classList.remove("clicked");
      }
    });

    currentQuestion.classList.toggle("show-text");
    currentQuestion.querySelector(".arrow-down").classList.toggle("rotate");
    currentQuestion.querySelector(".question-btn").classList.toggle("clicked");
  });
});
