// var nine = document.getElementById("9"); ?
var displayTimeEl = $(".container");
var currenTime = parseInt(moment().format("HH"));
var timeDisplayEl = $("#currentDay");
// var currentDay = $("#todayDate"); ?

// Displays today's day and date
function displayTime() {
  var todayDate = moment().format("dddd, MMM Do YYYY");
  timeDisplayEl.text(todayDate);
}
console.log(currenTime);

// Function to save tasks
if (currenTime === 9) {
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

if (currenTime === 10) {
  ten.classList.add("present");
  console.log("present");
} else if (currenTime < 10) {
  ten.classList.add("future");
  console.log("future");
} else if (currenTime > 10) {
  ten.classList.add("past");
  console.log("past");
}
console.log(ten);

if (currenTime === 11) {
  eleven.classList.add("present");
  console.log("present");
} else if (currenTime < 11) {
  eleven.classList.add("future");
  console.log("future");
} else if (currenTime > 11) {
  eleven.classList.add("past");
  console.log("past");
}
console.log(eleven);

if (currenTime === 12) {
  twelve.classList.add("present");
  console.log("present");
} else if (currenTime < 12) {
  twelve.classList.add("future");
  console.log("future");
} else if (currenTime > 12) {
  twelve.classList.add("past");
  console.log("past");
}
console.log(twelve);

if (currenTime === 13) {
  one.classList.add("present");
  console.log("present");
} else if (currenTime < 13) {
  one.classList.add("future");
  console.log("future");
} else if (currenTime > 13) {
  one.classList.add("past");
  console.log("past");
}
console.log(one);

if (currenTime === 14) {
  two.classList.add("present");
  console.log("present");
} else if (currenTime < 14) {
  two.classList.add("future");
  console.log("future");
} else if (currenTime > 14) {
  two.classList.add("past");
  console.log("past");
}
console.log(two);

if (currenTime === 15) {
  three.classList.add("present");
  console.log("present");
} else if (currenTime < 15) {
  three.classList.add("future");
  console.log("future");
} else if (currenTime > 15) {
  three.classList.add("past");
  console.log("past");
}
console.log(three);

if (currenTime === 16) {
  four.classList.add("present");
  console.log("present");
} else if (currenTime < 16) {
  four.classList.add("future");
  console.log("future");
} else if (currenTime > 16) {
  four.classList.add("past");
  console.log("past");
}
console.log(four);

if (currenTime === 17) {
  five.classList.add("present");
  console.log("present");
} else if (currenTime < 17) {
  five.classList.add("future");
  console.log("future");
} else if (currenTime > 17) {
  five.classList.add("past");
  console.log("past");
}
console.log(five);

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();

    localStorage.setItem(time, text);
  });

  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
});
