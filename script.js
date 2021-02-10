var startGame = document.getElementById("startButton");
var rules = document.getElementById("rules");
var header = document.getElementById("header");
var timerElement = document.getElementById("timer");
var answerArea = document.getElementById("multipleChoiceArea");
var saveScore = document.createElement("button");
var enterScore = document.createElement("input");
var yourName = document.createElement("p");
var scoreBoard = document.getElementById("scoreboard");
var timer;
var questionIndex = 0;
var timerCount;
var questionKey = [
  {
    question: "1Whats 2 + 3",
    answer: "5",
    options: ["4", "5", "6", "7"],
  },

  {
    question: "2Whats 2 + 3",
    answer: "5",
    options: ["5", "5", "6", "7"],
  },

  {
    question: "3Whats 2 + 3",
    answer: "5",
    options: ["6", "5", "6", "7"],
  },
  {
    question: "4Whats 2 + 3",
    answer: "5",
    options: ["6", "5", "6", "7"],
  },
  {
    question: "5Whats 2 + 3",
    answer: "5",
    options: ["8", "5", "6", "7"],
  },
];
console.log(rules);
function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
    }

    // if timer hits 0 = end & enter initials
    if (timerCount === 0) {
      clearInterval(timer);
      scores();
    }
  }, 1000);
}
// START THE GAME
function start() {
  startGame.style.visibility = "hidden";
  rules.textContent = "";
  header.textContent = "";
  console.log("start it then");
  timerCount = 60;
  startTimer();
  questions();
}
// POPULATE QUESTIONS [ CURRENT QUESTION W/ OPTIONS , LOAD NEXT QUESTION UNTIL NO MORE QUESTIONS || NO MORE TIME]
function questions() {
  var thisQuestion = questionKey[questionIndex];
  var multipleChoice = questionKey[questionIndex].options;
  // this will have more options after all question arrays made
  // var thisAnswer = thisQuestion.answer;

  console.log(thisQuestion.question);
  console.log(multipleChoice);

  var questionArea = document.getElementById("questionArea");
  question = document.createElement("h2");
  question.textContent = thisQuestion.question;

  questionArea.appendChild(question);

  for (let i = 0; i < multipleChoice.length; i++) {
    var buttons = document.createElement("button");
    const choices = multipleChoice[i];
    buttons.textContent = choices;
    buttons.addEventListener("click", function () {
      var selection = this.textContent;
      // will have more answers after all questions made
      console.log(questionKey[questionIndex].answer);

      answers(questionKey[questionIndex].answer, selection);
    });

    answerArea.appendChild(buttons);
  }

  // multipleChoiceArea = document.createElement('button')
  // multipleChoiceArea.textContent = multipleChoice

  // answerArea.appendChild(multipleChoiceArea)
}

function answers(answer, selection) {
  if (answer === selection) {
    console.log("correct");
  } else {
    console.log("wrong");
    // time penalty for incorrect answers
    timerCount -= 20;
  }
  questionIndex++;
  if (questionIndex === 5) {
    timer == 0;
    scores()
    return;
  }
  questionArea.textContent = "";
  answerArea.textContent = "";

  questions();
}
// function endGame() {
//   console.log('thats all folks')
// }
function scores() {
  console.log("thats all folks");
  yourName.textContent = "enter your initials and secure your legacy";
  saveScore.setAttribute("type", "submit");
  saveScore.textContent = "save";

  scoreBoard.append(yourName);
  scoreBoard.append(saveScore);
  scoreBoard.append(enterScore);
}

startGame.addEventListener("click", start);
