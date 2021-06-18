firstTime = true;

function checkValues(id){
    array = new Array();
    if(id === 'am1'){
        array['value'] = 5;
        array['id'] = 'amount1';
        return array;
    }
    if(id === 'am2'){
        array['value'] = 6;
        array['id'] = 'amount2';
        return array;
    }
    if(id === 'am3'){
        array['value'] = 11;
        array['id'] = 'amount3';
        return array;
    }
}

$('.card').click(function () {
    setMultiplicar($(this).attr('id'));
});

function setMultiplicar(id) {
    let val = checkValues(id);

    if(firstTime){
        $('#'+ val['id']).text('');
        $('#'+ val['id']).text(val['value']);
        firstTime = false;
    }
    else {
        let currentValue = $('#'+ val['id']).text();
        let res = Number(currentValue) + val['value'];
        $('#'+ val['id']).text(res);
    }
}


var upgradeTime = 172801;
var seconds = upgradeTime;

function timer() {
    let daysElement = document.getElementById('dayQ');
    let hoursElement = document.getElementById('hoursQ');
    let minutesElement = document.getElementById('minutesQ');
    let secondsElement = document.getElementById('secondsQ');

    var days        = Math.floor(seconds/24/60/60);
    var hoursLeft   = Math.floor((seconds) - (days*86400));
    var hours       = Math.floor(hoursLeft/3600);
    var minutesLeft = Math.floor((hoursLeft) - (hours*3600));
    var minutes     = Math.floor(minutesLeft/60);
    var remainingSeconds = seconds % 60;

    function pad(n) {
      return (n < 10 ? "0" + n : n);
    }
  
    daysElement.innerText = '';
    daysElement.innerText = pad(days);
  
    hoursElement.innerText = '';
    hoursElement.innerText = pad(hours);
  
    minutesElement.innerText = '';
    minutesElement.innerText = pad(minutes);
  
    secondsElement.innerText = '';
    secondsElement.innerText = pad(remainingSeconds);
    
    if (seconds == 0) {
      clearInterval(countdownTimer);
      alert('Completed!');
    } else {
      seconds--;
    }
}
countdownTimer = setInterval('timer()', 1000);
