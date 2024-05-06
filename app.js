const quizQuestions = [
   {
      question: "Which answer choice below can be used inside of a function as it must output the function value ?",
      option: ["Console.log", "Return", "Function", "All the above"],
      answer: "Return"
   },
   {
      question: "What is the correct syntax for adding color to the background?",
      option: ["body {color: black; }", "{ body; color: black}", "color of body: black;", "{background-color: black }"],
      answer: "body {color: black; }"
   },
   {
      question: "How do you display hyperlinks without an underline ?",
      option: ["a { text-decoration: none }", " a { text-decoration: underline = none }", "{text-decoration: none }", "None the above"],
      answer: "a { text-decoration: none }"
   },
   {
      question: "Which of the following JavaScript methods is used to get the computed style of an element?",
      option: [" getElementComputedStyle()", "getStyle()", "getComputedStyle()", "fetchStyle()"],
      answer: "getComputedStyle ()"
   },
   {
      question: "What is the difference between `==` and `===` in JavaScript comparison operators?",
      options: ["`==` checks for equality of value and type, while `===` checks for equality of value only", " `==` checks for equality of value only, while `===` checks for equality of value and type", "`==` and `===` are equivalent and can be used interchangeably", " `==` is used for strict comparison, while `===` is used for loose comparison"],
      answer: "`==` checks for equality of value only, while `===` checks for equality of value and type"
   },
   {
      question: "How do you round the number to the nearest integer?",
      option: ["mathround (10)", "math.round(10)", "math.round 9.25", "math.round (9.25)"],
      answer: "math.round (9.25)"
   },
   {
      question: "What is the correct syntax for arrays?",
      option: ["[0 1 3]", "[0, 1, 3,]", "[0, 1, 3]", "[1, 2, 4]"],
      answer: "[0, 1, 3]"
   },
   {
      question: "How do you write 'Hello, World!' in an alert box?",
      option: ["msgBox('Hello, World!');", "alertBox('Hello, World!');", " prompt('Hello, World!');", "alert('Hello, World!');"],
      answer: "alert('Hello, World!');"
   },
   {
      question: "Which of the following is used to declare a variable in JavaScript?",
      option: ["let x = 10;", "const y = 20;", "var z= 30;", "int w= 50;"],
      answer: "let x = 10;"
   },
   {
      question: "What happens when you try to access a property of a `null` or `undefined` object in JavaScript?",
      option: ["It throws a runtime error", "It returns `undefined`", "It returns `null`", "It returns an empty string"],
      answer: "It throws a runtime error"

   }

]
const answerChoices = document.querySelectorAll(".quiz-button")
let questionText = document.getElementById('question-text');
const feedbackMessage = document.getElementById('.feedback-message');
const navigationControl = document.getElementById('navigation-control')
const scoreValue = document.getElementById('#score-value');
console.log(quizQuestions[0].question);

let currentQuestionIndex = 0;
let playerScore = 0;
//let playerSelectedAnswer = currentQuestion;


//Function to start the game
function startGame() {
   console.log('game started');
   
   currentQuestionIndex = 0;
   playerScore = 0;
   //displayQuestion();

   displayQuestion(quizQuestions[currentQuestionIndex].question,
      quizQuestions[currentQuestionIndex].option);
      
}

// Function to display the question
function displayQuestion (question, options) {
   questionText.textContent = question;
console.log ("Hey World", options)
console.log(answerChoices)
   options.forEach ((choice, index) => {
      answerChoices[index].textContent = choice;
   });
}

//displayQuestion();

//display Answers

// call the questions/ answers
// displayQuestion(quizQuestions[currentQuestionIndex].question,
// quizQuestions[currentQuestionIndex].options);

console.log(quizQuestions)
console.log (quizQuestions[currentQuestionIndex].question,
   quizQuestions[currentQuestionIndex].option)

// set conditionoal for correct answers/ incorrect answer

function checkAnswer (selectedOption) {
   const currentQuestion = quizQuestions[currentQuestionIndex];
   const selectedAnswer =currentQuestion.option[selectedOption];

   const audio = new Audio;
   audio.src = ""
   

   if (selectedAnswer === currentQuestion.answer) {
      feedbackMessage.textContent = `You are Correct: ${selectedAnswer}`; 
      feedbackMessage.style.color ="green";
      playerScore += 10;
      new Audio ('sound/correct_winner.mp3').play();
   } else {
      feedbackMessage.textContent = `You are incorrect: ${selectedAnswer}`;
      feedbackMessage.style.color ="red";
      new Audio ('sound/buzzer_buzzing.mp3').play();
   }
   audio.play ();
}



//function to display score
//function to SUBMIT QUIZ
//function to reset game

function continueGameUntilEnd () {
   feedbackMessage.textContent = "At the end of the Quiz, you can view your score or restart the game.";
   navigation-control.style.display
}
const submit = " "

let allQuestionsCompleted = true;

 quizQuestions.forEach((currentQuestionIndex, idx)=> {
   if (currentQuestionIndex !== quizQuestions[idx]) {
      allQuestionCompleted =false;
      continueGameUntilEnd();
      return;
   }
 });
 if (allQuestionsCompleted) {
   //displayScore();
   startGame();
 }
 startGame();


// add event listener to click on the user
// add event listener to submit
// add event listener to next
//function to say the quiz is completed