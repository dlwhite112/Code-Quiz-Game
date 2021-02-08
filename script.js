var startGame = document.getElementById('startButton')
var timerElement = document.getElementById('timer')
var timer;
var timerCount;
var questionKey = [
    {
    question: "Whats 2 + 3",
    answer: '5',
    options: ['4', '5', '6', '7']
    }]



function startTimer(){
    timer = setInterval(function() {
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

function start(){
    console.log('start it then')
    timerCount = 80;
    startTimer();
    
}

function questions(){

}

function scores(){

}


startGame.addEventListener('click', start,);