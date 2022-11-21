var displayTimeEl = $(".container");
var currenTime = parseInt(moment().format("HH"));
var timeDisplayEl = $("#currentDay");

// Displays today's day and date
function displayTime() {
  var todayDate = moment().format("dddd, MMM Do YYYY");
  timeDisplayEl.text(todayDate);
}
console.log(currenTime);

if (currenTime == 9) {
  nine.classList.add("present");
  console.log("present");
} else if (currenTime < 9) {
  nine.classList.add("future");
  console.log("future");
} else if (currenTime > 9) {
  nine.classList.add("past");
  console.log("past");
}
console.log(nine);
