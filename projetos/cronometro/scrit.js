/*=============== Element selection ===============*/
const HOURS_EL = document.querySelector('#hours');
const MINUTES_EL = document.querySelector('#minutes');
const SECONDS_EL = document.querySelector('#seconds');
const HUNDREDTHS_EL = document.querySelector('#hundredths');

/*=============== Stores the buttons ===============*/
const START_BTN = document.querySelector('#start');
const PAUSE_BTN = document.querySelector('#pause');
const CONTINUE_BTN = document.querySelector('#continue');
const RESET_BTN = document.querySelector('#reset');

/*=============== Creating event button  ===============*/
START_BTN.addEventListener('click', starTimer);
PAUSE_BTN.addEventListener('click', pauseTimer);
CONTINUE_BTN.addEventListener('click', continueTimer);
RESET_BTN.addEventListener('click', resetTimer)

//important variables for the chronometer
let timer = 0;
let interval = null;
let isRunning = false;

//formatting the timer and how it appears on the screen
const formatTimer = (time) => {
    const HOURS = Math.floor(time / 360000);
    const MINUTES = Math.floor((time % 360000) / 6000);
    const SECONDS = Math.floor((time % 6000) / 100);
    const HUNDERDTHS = time % 100;

    HOURS_EL.textContent = HOURS.toString().padStart(2, '0');
    MINUTES_EL.textContent = MINUTES.toString().padStart(2, '0');
    SECONDS_EL.textContent = SECONDS.toString().padStart(2, '0');
    HUNDREDTHS_EL.textContent = HUNDERDTHS.toString().padStart(2, '0');
}

// Activate the timer on click
function starTimer(){
    if(!isRunning){
        isRunning = true;
        interval = setInterval(()=>{ //setInterval execute a function repeatedly in a defined time interval
            timer += 1;
            formatTimer(timer);
        }, 10);
    }

    //Adjusts the state of the buttons when the start button is active, avoids clicking again
    START_BTN.disabled = true;
    PAUSE_BTN.disabled = false;
    CONTINUE_BTN.disabled = true;
    RESET_BTN.disabled = false;
}

// Pause the timer on click
function pauseTimer(){
    if(isRunning){
        clearInterval(interval); //serves to stop an interval created by the setInterval() function
        isRunning = false;

        // Adjust button state
        PAUSE_BTN.disabled = true;
        CONTINUE_BTN.disabled = false;
    }
}

// Continue the timer on click
function continueTimer(){
    if (!isRunning) {
        starTimer()

        // Adjust button state
        PAUSE_BTN.disabled = false;
        CONTINUE_BTN.disabled = true;
    }
}

// Reset timer on click
function resetTimer() {
    clearInterval(interval);
    timer = 0;
    isRunning = false;
    formatTimer(timer);

    // Adjust button state
    START_BTN.disabled = false;
    PAUSE_BTN.disabled = true;
    CONTINUE_BTN.disabled = true;
    RESET_BTN.disabled = true;
}