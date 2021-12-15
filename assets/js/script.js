// var weekday = new Array(7);
// weekday[0]="Sunday";
// weekday[1]="Monday";
// weekday[2]="Tuesday";
// weekday[3]="Wednesday";
// weekday[4]="Thursday";
// weekday[5]="Friday";
// weekday[6]="Saturday";

// $(document).ready(function() {
//     $('#currentDay').currentDay( { 
//         onSelect: function(dateText, inst) {
//             var date = $(this).currentDay('getDate');
//             var dayOfWeek = weekday[date.getUTDay()];
//             document.getElementById('currentDay').value = dayOfWeek;
//         }
//     });
// });

var today = new Date();
var day = today.getDay();
var dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
currentDay.innerHTML = today;


