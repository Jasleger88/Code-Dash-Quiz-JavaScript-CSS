const quizQuestions = [
   {
      question: "Which answer choice below can be used inside of a function as it must output the function value ?",
      option: ["Return and Console.log", "Return", "Function", "All the above"],
      answer: 1
   },
   {
      question: "What is the correct syntax for adding color to the background?",
      option: ["color: background;", "colorOfBody: black;", "background-color: red;", "background-color: none "],
      answer: 2
   },
   {
      question: "How do you display hyperlinks without an underline ?",
      option: ["text-decoration: none;", " text-decoration: underline = none ", "text-decoration: none ", "None the above"],
      answer: 0
   },
   {
      question: "Which of the following JavaScript methods is used to get the computed style of an element?",
      option: [" getElementComputedStyle()", "retrieveStyle()", "getComputedStyle()", "fetchStyle()"],
      answer: 2
   },
   {
      question: "How do you round the number to the nearest integer?",
      option: ["mathround (10)", "math.round(10)", "math.round 9.25", "math.round (9.25)"],
      answer: 3
   },
   {
      question: "What is the correct syntax for arrays?",
      option: ["[0 1 3]", "[0, 1, 3,]", "[0, 1, 3]", "[1, 2, 4]"],
      answer: 2
   },
   {
      question: "How do you write 'Hello, World!' in an alert box?",
      option: ["msgBox('Hello, World!');", "alertBox('Hello, World!');", " prompt('Hello, World!');", "alert('Hello, World!');"],
      answer: 3
   },
   {
      question: "Which of the following is used to declare a variable in JavaScript?",
      option: ["let x = 10;", "const y = 20;", "var z= 30;", "int w= 50;"],
      answer: 0
   },
   {
      question: "What happens when you try to access a property of a `null` or `undefined` object in JavaScript?",
      option: ["It throws a runtime error", "It returns `undefined`", "It returns `null`", "It returns an empty string"],
      answer: 0

   },
   {
      question: "Which of the following array methods is used to sort the elements of an arry in place and returns the sorted array?",
      option: ["sort()", "sorted()", "order()", "arrange ()"],
      answer: 0
   }


]
let questionText = document.getElementById('question-text');
const answerChoices = document.querySelectorAll(".quiz-button")
const feedbackMessage = document.querySelector('.feedback-message');
const navigationControl = document.getElementById('navigation-control');
const scoreValue = document.getElementById('score-value');
const audio = document.getElementById('my-audio');
document.getElementById('restart').classList.add('displayNone');
const muteButton = document.getElementById('mute-button');


console.log(quizQuestions[0].question);

let currentQuestionIndex = 0;
let playerScore = 0;

function startGame() {
   currentQuestionIndex = 0;
   playerScore = 0;
   displayQuestion(quizQuestions[currentQuestionIndex].question,
      quizQuestions[currentQuestionIndex].option);

}
const nextButton = document.getElementById('next-button');

function displayQuestion() {
   const currentQuestion = quizQuestions[currentQuestionIndex]
   questionText.innerText = currentQuestion.question;
   currentQuestion.option.forEach((choice, index) => {
      answerChoices[index].textContent = choice;
   });

}
function nextQuestion() {
   currentQuestionIndex++;
   if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion();
      answerChoices.forEach(choice => {
         choice.disabled = false;
      });
   }
}

function checkAnswer(event) {
   const currentQuestion = quizQuestions[currentQuestionIndex];
   const selectedAnswer = parseInt(event.target.id);


   if (selectedAnswer === currentQuestion.answer) {
      feedbackMessage.innerText = "You are Correct!";
      feedbackMessage.style.color = "green";
      playerScore += 10;
      scoreValue.innerText = playerScore;


      audio.src = './Audio/correct.mp3'
      audio.play();
   } else {
      feedbackMessage.innerText = "You are incorrect.";
      feedbackMessage.style.color = "red";
      audio.src = './Audio/wrong.mp3'
      audio.play();
   }
   answerChoices.forEach(choice => {
      choice.disabled = true;
   });
   setTimeout(() => {
      feedbackMessage.textContent = "";
   },
      1000);
}

let allQuestionsCompleted = true;

quizQuestions.forEach((currentQuestionIndex, index) => {
   if (currentQuestionIndex !== quizQuestions[index]) {
      allQuestionsCompleted = false;
      continueGameUntilEnd();
      return;
   }
});
if (allQuestionsCompleted) {

   startGame();
}


function displayFinalScore() {
   const challengeContainer = document.getElementById('challenge-container');
   challengeContainer.innerText = "";


   answerChoices.forEach(button => {
      button.classList.add('displayNone')
   })
   document.getElementById('restart').classList.add('displayBlock');

   challengeContainer.innerText = `Your Final score: ${playerScore}`

   document.getElementById('restart').addEventListener('click', restartQuiz);
}


function restartQuiz() {
   window.location.reload();
}

muteButton.addEventListener('click', function () {
   if (audio.muted) {
      audio.muted = false;
      muteButton.textContent = 'Mute';
   } else {
      audio.muted = true;
      muteButton.textContent = 'Unmute';
   }
});

const quizButton = document.querySelectorAll('.quiz-button')
quizButton.forEach((button, index) => {
   button.addEventListener('click', checkAnswer)
})
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', function () {
   const playerPercentage = (playerScore / (quizQuestions.length * 10)) * 100;

   if (playerPercentage >= 70) {
      displayFinalScore();
      window.alert("Congratulations, You Win")
   } else {
      window.alert("You lose!")
   }
});

nextButton.addEventListener('click', nextQuestion);



