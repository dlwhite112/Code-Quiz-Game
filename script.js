var startGame = document.getElementById('startButton')
var timerElement = document.getElementById('timer')
var timer;
var timerCount;

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

    timerCount = 80;
    startTimer();
    
}

function questions(){

}

function scores(){

}


startGame.addEventListener('click');