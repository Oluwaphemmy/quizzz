const quizData = [
  {
    question: `What was Sarah's reaction to the news that she would bear a son?`,
    a: `She laughed`,
    b: `She cried`,
    c: `She rejoiced`,
    d: `She fainted`,
    correct: "a",
  },
  {
    question: `Who was cast into a den of lions?`,
    a: `Daniel`,
    b: `Joshua`,
    c: `David`,
    d: `Moses`,
    correct: "a",
  },

  {
    question: `What animal attacked Paul after being shipwrecked on the island of Malta?`,
    a: `Python`,
    b: `Hen`,
    c: `Chicken`,
    d: `Snake`,
    correct: "d",
  },

  {
    question: `Which place is called 'Zion' and ' the city of David'?`,
    a: `Lagos`,
    b: `Jerusalem`,
    c: `Jericho`,
    d: `Canaan`,
    correct: "b",
  },

  {
    question: `How many people entered Noah's ark?`,
    a: `8`,
    b: `9`,
    c: `10`,
    d: `11`,
    correct: "a",
  },

  {
    question: `Who is the first murderer in the bible?`,
    a: `Cain`,
    b: `Abel`,
    c: `Moses`,
    d: `Judas`,
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
