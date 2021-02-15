var startGame = document.getElementById("startButton");
var playAgain = document.createElement("h3");
playAgain.textContent = "Play Again?";
var totals = document.getElementById("totals");
var rules = document.getElementById("rules");
var header = document.getElementById("header");
var timerElement = document.getElementById("timer");
var answerArea = document.getElementById("multipleChoiceArea");
var saveScore = document.createElement("button");
var enterScore = document.createElement("input");
var yourName = document.createElement("p");
var scoreBoard = document.getElementById("scoreboard");
var right = document.getElementById("swish");
var wrong = document.getElementById("miss");
var bricks = 0;
var buckets = 0;
var timer;
var questionIndex = 0;
var timerCount;
var questionKey = [
  {
    question:
      "_______ is the process of finding errors and fixing them within a program.",
    answer: "Debugging",
    options: ["Scripting", "Scanning", "Debugging", "Decoding"],
  },

  {
    question: "A loop that never ends is referred to as a(n)_________.",
    answer: "Infinite loop",
    options: ["For Loop", "Forever Loop", "While Loop", "Infinite loop"],
  },

  {
    question:
      "Which of the following is the ultimate element selection method?",
    answer: "querySelectorAll()",
    options: ["querySelectorAll()", "queryAll()", "elementAll()", "query()"],
  },
  {
    question: "The node directly above a node is called __________",
    answer: "parent",
    options: ["upper node", "parent", "node mom", "ancestors"],
  },
  {
    question: "The C in CSS stands for _______________",
    answer: "Cascading",
    options: ["Contentional", "Continuous", "Cascading", "Cries for Help"],
  },
];
console.log(rules);
function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount <= 0) {
    }

    // if timer hits 0 = end & enter initials
    if (timerCount < 0) {
      clearInterval(timer);
      scores();
    }
  }, 1000);
}
// START THE GAME
startGame.addEventListener("click", start);
function start() {
  saveScore.style.visibility = "hidden";
  startGame.style.visibility = "hidden";
  highScoreList.style.visibility = "hidden";
  enterScore.style.visibility = "hidden";
  yourName.style.visibility = "hidden";
  bricks = 0;
  buckets = 0;
  questionIndex = 0;
  hideRules();

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
}

function answers(answer, selection) {
  if (answer === selection) {
    console.log("correct");
    buckets++;
  } else {
    console.log("wrong");
    bricks++;
    // time penalty for incorrect answers
    timerCount -= 20;
  }
  right.textContent = "made: " + buckets;
  wrong.textContent = "missed: " + bricks;
  questionIndex++;
  if (questionIndex === 5) {
    timer == 0;
    scores();
    return;
  }
  hideQNA();

  questions();
}

function scores() {
  console.log("thats all folks");
  // hide q&a
  hideQNA();
  yourName.textContent = "enter your name and secure your legacy";
  saveScore.setAttribute("type", "submit");
  saveScore.textContent = "save";

  scoreBoard.append(yourName);
  scoreBoard.append(saveScore);
  scoreBoard.append(enterScore);
  yourName.style.visibility = "visible";
  saveScore.style.visibility = "visible";
  startGame.style.visibility = "visible";
  enterScore.style.visibility = "visible";

  clearInterval(timer);
  timerElement.textContent = "GAME OVER";
}
saveScore.addEventListener("click", function () {
  highScore();
});

function hideQNA() {
  questionArea.textContent = "";
  answerArea.textContent = "";
}
function hideRules() {
  rules.textContent = "";
  header.textContent = "";
}
function highScore() {
  var scores = JSON.parse(localStorage.getItem("Scores")) || [];
  var loggedScore = {
    name: enterScore.value,
    score: buckets,
  };
  scores.push(loggedScore);
  localStorage.setItem("scores", JSON.stringify(loggedScore));
  console.log(scores);
}
var scoreLog = document.querySelector("#score-log");

scoreLog.addEventListener("click", function (event) {
  event.preventDefault();
  highScoreList.style.visibility = "visible";
  finalScore();
});

var nameList = [5];
var highScoreList = document.querySelector("#scores");
function finalScore() {
  var scores = JSON.parse(localStorage.getItem("scores"));
  var highScoreList = document.querySelector("#scores");
  var boxScore = scores.name + " , " + scores.score;
  for (var i = 0; i < nameList.length; i++) {
    var li = document.createElement("li");
    li.textContent = boxScore;
    li.style.color = "orange";
    li.setAttribute("data-index", i);
    highScoreList.appendChild(li);
  }
}
