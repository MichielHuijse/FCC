
// Javascript code for Pomodoro clock

  function Timer() {

    var interval;
    var offset;
    var breakTime = 5;
    var workTime = 25;

    setInterval(function(){

        }, 1000);

    this.start = function () {


    };

    this.stop = function () {

      //should pauze timer

    };

    this.reset = function () {
      //resets timer
    };

    this.decBreak = function () {
      if( breakTime > 0) {
        breakTime = breakTime -1;
        $('#setBreakTime').text(breakTime);
      }
    };

    this.incBreak = function () {
      breakTime = breakTime + 1;
      $('#setBreakTime').text(breakTime);
    };

    this.decWork = function () {
      if( workTime > 0) {
        workTime = workTime - 1;
        $('#setWorkTime').text(workTime);
      }
    };

    this.incWork = function () {
      workTime = workTime + 1;
      $('#setWorkTime').text(workTime);
    };
  }


var pomodoro = new Timer();






// Increase or decrease workTime.
/*function increaseWorkTime(){
  workTime =+ 1;
}

function decreaseWorkTime(){
  workTime =+ 1;
}

// Increase or decrease breakTime.
function increaseBreakTime(){
  breakTime =+1;
}

function decreaseBreakTime(){
  breakTime =+1;
}

setInterval(function() {
  // Do something every 1 seconds
  // decrease workTime with 1 second.
  workTimeSeconds =- 1;
  if (workTimeSeconds === -1) {
    workTime =- 1;
    workTimeSeconds = 59;
    document.getElementById('pText').innerHTML = workTime;
  }
  // attach it to the element.
}, 1000);*/


// Counter with plus and minus buttons to increase or decrease time of break.
// - button (this will be a button with a value -), text field displaying the set min (this will be an element with a value which is changed), + button.

// Counter with plus and minus buttons to increase or decrease time of work.

// Interactive count down in minutes and seconds for time of work.