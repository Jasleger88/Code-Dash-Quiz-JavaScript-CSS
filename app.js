const quizQuestions = [
   {
      question: "Which answer choice below can be used inside of a function as it must output the function value ?",
      option: ["Console.log", "Return", "Function", "All the above"],
      answer: 1
   },
   {
      question: "What is the correct syntax for adding color to the background?",
      option: ["{ body; color:black }", "color of body: black;", "body {color: black;}", "{background-color: black }"],
      answer: 2
   },
   {
      question: "How do you display hyperlinks without an underline ?",
      option: ["a { text-decoration: none }", " a { text-decoration: underline = none }", "{text-decoration: none }", "None the above"],
      answer: 0
   },
   {
      question: "Which of the following JavaScript methods is used to get the computed style of an element?",
      option: [" getElementComputedStyle()", "getStyle()", "getComputedStyle()", "fetchStyle()"],
      answer: 2
   },
   {
      question: "What is the difference between `==` and `===` in JavaScript comparison operators?",
      options: ["`==` checks for equality of value and type, while `===` checks for equality of value only", " `==` checks for equality of value only, while `===` checks for equality of value and type", "`==` and `===` are equivalent and can be used interchangeably", " `==` is used for strict comparison, while `===` is used for loose comparison"],
      answer: 1
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

   }

]
let questionText = document.getElementById('question-text');
const answerChoices = document.querySelectorAll(".quiz-button")
const feedbackMessage = document.querySelector('.feedback-message');
const navigationControl = document.getElementById('navigation-control')
const scoreValue = document.getElementById('score-value');
const audio = document.getElementById('my-audio')


console.log(quizQuestions[0].question);

let currentQuestionIndex = 0;
let playerScore = 0;

//let playerSelectedAnswer = currentQuestion;

//Function to start the game
function startGame() {
   console.log('game started');

   currentQuestionIndex = 0;
   playerScore = 0;


   displayQuestion(quizQuestions[currentQuestionIndex].question,
      quizQuestions[currentQuestionIndex].option);

}
const nextButton = document.getElementById('next-button');
nextButton.addEventListener('click', function () {
   currentQuestionIndex++;
   console.log(quizQuestions[currentQuestionIndex])
})

// Function to display the question
function displayQuestion(question, options) {
   questionText.textContent = question;
   console.log("Hey World", options)
   console.log(answerChoices)
   options.forEach((choice, index) => {
      answerChoices[index].textContent = choice;
   });
   function nextQuestion() {
      currentQuestionIndex++;
      if (currentQuestionIndex < quizQuestions.length) {
         displayQuestion();
      } else {
         console.log("quiz completed")
      }
   }
}




console.log(quizQuestions)
console.log(quizQuestions[currentQuestionIndex].question,
   quizQuestions[currentQuestionIndex].option)

// set conditionoal for correct answers/ incorrect answer

function checkAnswer(event) {
   console.log(event.target.value)
   const currentQuestion = quizQuestions[currentQuestionIndex];
   const selectedAnswer = parseInt(event.target.id);
   console.log(selectedAnswer)
   console.log(currentQuestion.answer)




   function incrementScore() {
      playerScore += 10;
      console.log(incrementScore)
   }

   if (selectedAnswer === currentQuestion.answer) {
      feedbackMessage.innerText = `You are Correct: ${selectedAnswer}`;
      feedbackMessage.style.color = "green";
      playerScore += 10;
      audio.src = './Audio/correct.mp3'
      audio.play();
   } else {
      feedbackMessage.innerText = `You are incorrect: ${selectedAnswer}`;
      feedbackMessage.style.color = "red";
      audio.src = './Audio/wrong.mp3'
      audio.play();
   }
   answerChoices.forEach(choice => {
      choice.disabled = true;
   });
   currentQuestionIndex;
   if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion();
   } else {
      console.log("Quiz Completed")
   }
}

function continueGameUntilEnd() {
   feedbackMessage.textContent = "At the end of the Quiz, you can view your score or restart the game.";
   navigation - control.style.display
   console.log(feedbackMessage.textContent)
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
const quizButton = document.querySelectorAll('.quiz-button')
quizButton.forEach((button, index) => {
   button.addEventListener('click', checkAnswer)
})
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', function () {
   if (currentQuestionIndex < 10) {
      console.log("Not Done Yet");
   } else {
      console.log("Submitting all Answers");
   }
});


//function to display score/ increase score
//function to SUBMIT QUIZ
//function to reset game
//displayQuestion();
//display Answers
// call the questions/ answers
//displayQuestion(quizQuestions[currentQuestionIndex].question,
//quizQuestions[currentQuestionIndex].options);
//eventlistener 
// add event listener to click on the user
// add event listener to submit
// add event listener to next
//function to say the quiz is completed
//alt on the image 
//style page more

