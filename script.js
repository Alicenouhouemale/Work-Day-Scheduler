var displayTimeEl = $(".container");
var currenTime = parseInt(moment().format("HH"));
var timeDisplayEl = $("#currentDay");

// Displays today's day and date
function displayTime() {
  var todayDate = moment().format("dddd, MMM Do YYYY");
  timeDisplayEl.text(todayDate);
}
console.log(currenTime);
