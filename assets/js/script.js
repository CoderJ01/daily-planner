document.querySelector('.container').style.background = "#d3d3d3"; //past

var retrieveTime = function () {
    var today = new Date();
    var day = today.getDay();
    var dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    currentDay.innerHTML = dayList[day];

    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var meridiem = (hour >= 12)? " PM ":" AM ";
    hour = (hour >= 12)? hour - 0: hour;
    if (hour === 0 && meridiem === ' PM') {
        if (minute === 0 && second === 0) {
            hour = 12;
            meridiem =' Noon';
        }
        else {
            hour = 12;
            meridiem =' PM';
        }
    }

    if (hour === 0 && meridiem ===' AM') {
        if (minute === 0 && second === 0) {
            hour = 12;
            meridiem ='Midnight';
        }
        else {
            hour = 12;
            meridiem =' Midnight';
        }
    }
    console.log("Current Time : "+hour + meridiem + " : " + minute + " : " + second);

    return hour;
}

var hour = retrieveTime();

var colorCode = function () {
    var timeNine = document.getElementById('nine');
    var timeTen = document.getElementById('ten');
    var timeEleven = document.getElementById('eleven');
    var timeTwelve = document.getElementById('twelve');
    var timeOne = document.getElementById('one');
    var timeTwo = document.getElementById('two');
    var timeThree = document.getElementById('three');
    var timeFour = document.getElementById('four');
    var timeFive = document.getElementById('five');

    if (hour === 9) {
        timeNine.style.background = "#ff6961";
    }
    
    if (hour === 10) {
        timeTen.style.background = "#ff6961";
    }
    
    if (hour === 11) {
        timeEleven.style.background = "#ff6961";
    }
    
    if (hour === 12) {
        timeTwelve.style.background = "#ff6961";
    }
    
    if (hour === 13) {
        timeOne.style.background = "#ff6961";
    }
    
    if (hour === 14) {
        timeTwo.style.background = "#ff6961";
    }
    
    if (hour === 15) {
        timeThree.style.background = "#ff6961";
    }
    
    if (hour === 16) {
        timeFour.style.background = "#ff6961";
    }
    
    if (hour === 17) {
        timeFive.style.background = "#ff6961";  
    }    
}

colorCode();









