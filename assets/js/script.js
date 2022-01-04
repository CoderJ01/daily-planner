// retrieve current time
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

    return hour;
}

var hour = retrieveTime();

//set up color scheme for planner
var colorCode = function () {

    var time = [];
    time[0] = document.getElementById('nine');
    time[1] = document.getElementById('ten');
    time[2] = document.getElementById('eleven');
    time[3] = document.getElementById('twelve');
    time[4] = document.getElementById('one');
    time[5] = document.getElementById('two');
    time[6] = document.getElementById('three');
    time[7] = document.getElementById('four');
    time[8] = document.getElementById('five');

    for (var i = 0; i < time.length; i++) {
        time[i].style.background = "#d3d3d3" // default color
    }

    for (var i = 0; i < time.length; i++) {
        time[i].style.bakcground = "#d3d3d3";

        if (hour === (i + 9)) {
            time[i].style.background = "#ff6961"; // current time

            for (var i = (i + 1); i < time.length; i++) {
                time[i].style.background = "#77dd77"; // future times
            }
        }

    }

    if (hour === 0 || hour === 1 || hour === 2 || hour === 3 || hour === 4 || hour === 5 || hour === 6 || hour === 7 || hour === 8) {
        for (var i = 0; i < 9; i++) {
            time[i].style.background = "#77dd77";
        }
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









