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

    timeNine.style.background = "#d3d3d3";
    timeTen.style.background = "#d3d3d3";
    timeEleven.style.background = "#d3d3d3";
    timeTwelve.style.background = "#d3d3d3";
    timeOne.style.background = "#d3d3d3";
    timeTwo.style.background = "#d3d3d3";
    timeThree.style.background = "#d3d3d3";
    timeFour.style.background = "#d3d3d3";
    timeFive.style.background = "#d3d3d3";

    if (hour === 9) {
        timeNine.style.background = "#ff6961";
        timeTen.style.background = "#77dd77";
        timeEleven.style.background = "#77dd77";
        timeTwelve.style.background = "#77dd77";
        timeOne.style.background = "#77dd77";
        timeTwo.style.background = "#77dd77";
        timeThree.style.background = "#77dd77";
        timeFour.style.background = "#77dd77";
        timeFive.style.background = "#77dd77";
    }
    
    if (hour === 10) {
        timeTen.style.background = "#ff6961";
        timeEleven.style.background = "#77dd77";
        timeTwelve.style.background = "#77dd77";
        timeOne.style.background = "#77dd77";
        timeTwo.style.background = "#77dd77";
        timeThree.style.background = "#77dd77";
        timeFour.style.background = "#77dd77";
        timeFive.style.background = "#77dd77";
    }
    
    if (hour === 11) {
        timeEleven.style.background = "#ff6961";
        timeTwelve.style.background = "#77dd77";
        timeOne.style.background = "#77dd77";
        timeTwo.style.background = "#77dd77";
        timeThree.style.background = "#77dd77";
        timeFour.style.background = "#77dd77";
        timeFive.style.background = "#77dd77";
    }
    
    if (hour === 12) {
        timeTwelve.style.background = "#ff6961";
        timeOne.style.background = "#77dd77";
        timeTwo.style.background = "#77dd77";
        timeThree.style.background = "#77dd77";
        timeFour.style.background = "#77dd77";
        timeFive.style.background = "#77dd77";
    }
    
    if (hour === 13) {
        timeOne.style.background = "#ff6961";
        timeTwo.style.background = "#77dd77";
        timeThree.style.background = "#77dd77";
        timeFour.style.background = "#77dd77";
        timeFive.style.background = "#77dd77";
    }
    
    if (hour === 14) {
        timeTwo.style.background = "#ff6961";
        timeThree.style.background = "#77dd77";
        timeFour.style.background = "#77dd77";
        timeFive.style.background = "#77dd77";
    }
    
    if (hour === 15) {
        timeThree.style.background = "#ff6961";
        timeFour.style.background = "#77dd77";
        timeFive.style.background = "#77dd77";
    }
    
    if (hour === 16) {
        timeFour.style.background = "#ff6961";
        timeFive.style.background = "#77dd77";
    }
    
    if (hour === 17) {
        timeFive.style.background = "#ff6961";  
    }    

    if (hour === 0 || hour === 1 || hour === 2 || hour === 3 || hour === 4 || hour === 5 || hour === 6 || hour === 7 || hour === 8) {
        timeNine.style.background = "#77dd77";
        timeTen.style.background = "#77dd77";
        timeEleven.style.background = "#77dd77";
        timeTwelve.style.background = "#77dd77";
        timeOne.style.background = "#77dd77";
        timeTwo.style.background = "#77dd77";
        timeThree.style.background = "#77dd77";
        timeFour.style.background = "#77dd77";
        timeFive.style.background = "#77dd77";
    }
}

colorCode();

var slotNine = function () {
    var storageInput = document.getElementById('storage');
    var text = document.getElementById('text');
    var button = document.getElementById('button');
    var storedInput = localStorage.getItem('textinput');
    
    if(storageInput !== null) {
        text.textContent = storedInput;
    }
    
    storageInput.addEventListener('input', letter => {
        text.textContent = letter.target.value;
    });
    
    var saveToLocalStorage = () => {
        localStorage.setItem('textinput', text.textContent);
    }
    
    button.addEventListener('click', saveToLocalStorage);
}

slotNine();

var slotTen = function () {
    var storageInput = document.getElementById('storage-a');
    var text = document.getElementById('text-a');
    var button = document.getElementById('button-a');
    var storedInput = localStorage.getItem('textinput-a');
    
    if(storageInput !== null) {
        text.textContent = storedInput;
    }
    
    storageInput.addEventListener('input', letter => {
        text.textContent = letter.target.value;
    });
    
    var saveToLocalStorage = () => {
        localStorage.setItem('textinput-a', text.textContent);
    }
    
    button.addEventListener('click', saveToLocalStorage);
}

slotTen();

var slotEleven = function () {
    var storageInput = document.getElementById('storage-b');
    var text = document.getElementById('text-b');
    var button = document.getElementById('button-b');
    var storedInput = localStorage.getItem('textinput-b');
    
    if(storageInput !== null) {
        text.textContent = storedInput;
    }
    
    storageInput.addEventListener('input', letter => {
        text.textContent = letter.target.value;
    });
    
    var saveToLocalStorage = () => {
        localStorage.setItem('textinput-b', text.textContent);
    }
    
    button.addEventListener('click', saveToLocalStorage);
}

slotEleven();

var slotTwelve = function () {
    var storageInput = document.getElementById('storage-c');
    var text = document.getElementById('text-c');
    var button = document.getElementById('button-c');
    var storedInput = localStorage.getItem('textinput-c');
    
    if(storageInput !== null) {
        text.textContent = storedInput;
    }
    
    storageInput.addEventListener('input', letter => {
        text.textContent = letter.target.value;
    });
    
    var saveToLocalStorage = () => {
        localStorage.setItem('textinput-c', text.textContent);
    }
    
    button.addEventListener('click', saveToLocalStorage);
}

slotTwelve();

var slotOne = function () {
    var storageInput = document.getElementById('storage-d');
    var text = document.getElementById('text-d');
    var button = document.getElementById('button-d');
    var storedInput = localStorage.getItem('textinput-d');
    
    if(storageInput !== null) {
        text.textContent = storedInput;
    }
    
    storageInput.addEventListener('input', letter => {
        text.textContent = letter.target.value;
    });
    
    var saveToLocalStorage = () => {
        localStorage.setItem('textinput-d', text.textContent);
    }
    
    button.addEventListener('click', saveToLocalStorage);
}

slotOne();

var slotTwo = function () {
    var storageInput = document.getElementById('storage-e');
    var text = document.getElementById('text-e');
    var button = document.getElementById('button-e');
    var storedInput = localStorage.getItem('textinput-e');
    
    if(storageInput !== null) {
        text.textContent = storedInput;
    }
    
    storageInput.addEventListener('input', letter => {
        text.textContent = letter.target.value;
    });
    
    var saveToLocalStorage = () => {
        localStorage.setItem('textinput-e', text.textContent);
    }
    
    button.addEventListener('click', saveToLocalStorage);
}

slotTwo();

var slotThree = function () {
    var storageInput = document.getElementById('storage-f');
    var text = document.getElementById('text-f');
    var button = document.getElementById('button-f');
    var storedInput = localStorage.getItem('textinput-f');
    
    if(storageInput !== null) {
        text.textContent = storedInput;
    }
    
    storageInput.addEventListener('input', letter => {
        text.textContent = letter.target.value;
    });
    
    var saveToLocalStorage = () => {
        localStorage.setItem('textinput-f', text.textContent);
    }
    
    button.addEventListener('click', saveToLocalStorage);
}

slotThree();

var slotFour = function () {
    var storageInput = document.getElementById('storage-g');
    var text = document.getElementById('text-g');
    var button = document.getElementById('button-g');
    var storedInput = localStorage.getItem('textinput-g');
    
    if(storageInput !== null) {
        text.textContent = storedInput;
    }
    
    storageInput.addEventListener('input', letter => {
        text.textContent = letter.target.value;
    });
    
    var saveToLocalStorage = () => {
        localStorage.setItem('textinput-g', text.textContent);
    }
    
    button.addEventListener('click', saveToLocalStorage);
}

slotFour();

var slotFive = function () {
    var storageInput = document.getElementById('storage-h');
    var text = document.getElementById('text-h');
    var button = document.getElementById('button-h');
    var storedInput = localStorage.getItem('textinput-h');
    
    if(storageInput !== null) {
        text.textContent = storedInput;
    }
    
    storageInput.addEventListener('input', letter => {
        text.textContent = letter.target.value;
    });
    
    var saveToLocalStorage = () => {
        localStorage.setItem('textinput-h', text.textContent);
    }
    
    button.addEventListener('click', saveToLocalStorage);
}

slotFive();









