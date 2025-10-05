const questions = [
  {
    question:"Qual propriedade CSS é usada para mudar a cor do texto?",
    answers: [
      { id: 1, text: "background-color", correct: false },
      { id: 2, text: "text-color", correct: false },
      { id: 3, text: "color", correct: true },
      { id: 4, text: "font-color", correct: false },
    ],
  },

  {
    question:"Qual tag é usada para criar um parágrafo em HTML?",
    answers: [
      { id: 1, text: "&lt;div&gt;", correct: false },
      { id: 2, text: "&lt;p&gt;", correct: true },
      { id: 3, text: "&lt;h1&gt;", correct: false },
      { id: 4, text: "&lt;span&gt;", correct: false },
    ],
  },

  {
    question:"Como se aplica um comentário em CSS?",
    answers: [
      { id: 1, text: "// comentário", correct: false },
      { id: 2, text: "&lt;!-- comentário --&gt;", correct: false },
      { id: 3, text: "/* comentário */", correct: true },
      { id: 4, text: "# comentário", correct: false },
    ],
  },

  {
    question: "Qual é a principal diferença entre 'var' e 'let' em JavaScript?",
    answers: [
      { id: 1, text: "Não existe diferença, os dois fazem a mesma coisa.", correct: false },
      { id: 2, text: "'var' tem escopo global ou de função, e 'let' tem escopo de bloco.", correct: true },
      { id: 3, text: "'let' é mais antigo que 'var'.", correct: false },
      { id: 4, text: "'var' só funciona dentro de loops.", correct: false },
    ],
  },

  {
    question: "Qual tag é usada para adicionar JavaScript no HTML?",
    answers: [
      { id: 1, text: "&lt;js&gt;", correct: false },
      { id: 2, text: "&lt;javascript&gt;", correct: false },
      { id: 3, text: "&lt;script&gt;", correct: true },
      { id: 4, text: "&lt;code&gt;", correct: false },
    ],
  },


];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Próxima";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    button.dataset.id = answer.id;

    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  answers = questions[currentQuestionIndex].answers;
  const correctAnswer = answers.filter((answer) => answer.correct == true)[0];
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.id == correctAnswer.id;
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();