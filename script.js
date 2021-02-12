var startGame = document.getElementById("startButton");
var playAgain = document.createElement("h3")
  playAgain.textContent = "Play Again?"
var totals = document.getElementById("totals")
var rules = document.getElementById("rules");
var header = document.getElementById("header");
var timerElement = document.getElementById("timer");
var answerArea = document.getElementById("multipleChoiceArea");
var saveScore = document.createElement("button");
var enterScore = document.createElement("input");
var yourName = document.createElement("p");
var scoreBoard = document.getElementById("scoreboard");
var right = document.getElementById("swish")
var wrong = document.getElementById("miss")
var bricks = 0
var buckets = 0
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
    if (timerCount <= 0) {
    }

    // if timer hits 0 = end & enter initials
    if (timerCount === 0) {
      clearInterval(timer);
      scores();
    }
  }, 1000);
}
// START THE GAME
startGame.addEventListener("click", start);
function start() {
  saveScore.style.visibility = "hidden"
  startGame.style.visibility = "hidden";
  highScoreList.style.visibility = "hidden";
  enterScore.style.visibility = "hidden"
  yourName.style.visibility = "hidden"
  bricks = 0
  buckets = 0
  questionIndex = 0
  hideRules()
  
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
    buckets++
  } else {
    console.log("wrong");
    bricks++
    // time penalty for incorrect answers
    timerCount -= 20;
  }
  right.textContent = "made: " + buckets;
  wrong.textContent = "missed: " + bricks;
  questionIndex++;
  if (questionIndex === 5) {
    timer == 0;
    scores()
    return;
  }
  hideQNA()

  questions();
}
// function endGame() {
//   console.log('thats all folks')
// }
function scores() {
  console.log("thats all folks");
  // hide q&a
  hideQNA()
  yourName.textContent = "enter your name and secure your legacy";
  saveScore.setAttribute("type", "submit");
  saveScore.textContent = "save";

  scoreBoard.append(yourName);
  scoreBoard.append(saveScore);
  scoreBoard.append(enterScore);
  yourName.style.visibility = "visible"
  saveScore.style.visibility = "visible"
  startGame.style.visibility = "visible";
  enterScore.style.visibility = "visible"
}
saveScore.addEventListener("click", function () {
  highScore()
})

function hideQNA(){
  questionArea.textContent = ""
  answerArea.textContent = ""
  // timerElement.textContent = "" 
}
function hideRules(){
  rules.textContent = "";
  header.textContent = "";
}
function highScore(){
  var scores = JSON.parse(localStorage.getItem("Scores")) || [];
  var loggedScore = {
    name: enterScore.value,
    score: buckets,
  };
  scores.push(loggedScore);
  localStorage.setItem("scores", JSON.stringify(loggedScore));
  console.log(scores)
}
var scoreLog = document.querySelector("#score-log")

scoreLog.addEventListener("click", function (event) {
  event.preventDefault();
    highScoreList.style.visibility = "visible"
    finalScore()
})

var nameList = [5];
var highScoreList = document.querySelector("#scores");
function finalScore() {
    var scores = JSON.parse(localStorage.getItem("scores"));
    var highScoreList = document.querySelector("#scores");
    var boxScore = scores.name + " , " + scores.score;
    for (var i = 0; i < nameList.length; i++) {
        var li = document.createElement("li");
        li.textContent = boxScore;
        li.setAttribute("data-index", i);
        highScoreList.appendChild(li);
    }

};



