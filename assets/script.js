// use of Moment.js
var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a')

// Hour variables
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#1pm");
var twoPm = $("#2pm");
var threePm = $("#3pm");
var fourPm = $("#4pm");
var fivePm = $("#5pm");

var hour = moment().hours();
var userInput;
var hourSpan;

var interval = setInterval(function() {
    var  momentNow = moment();
    $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' ' + momentNow.format('dddd').substring(0,3).toUpperCase());
    $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
}, 100);

function initPage() {

    console.log("Current Hour" + hour);
    var init9 = JSON.parse(localStorage.getItem("9AM"));
    nineAm.val(init9);

    console.log("Current Hour" + hour);
    var init10 = JSON.parse(localStorage.getItem("10AM"));
    tenAm.val(init10)

    console.log("Current Hour" + hour);
    var init11 = JSON.parse(localStorage.getItem("11AM"));
    elevenAm.val(init11)

    console.log("Current Hour" + hour);
    var init12 = JSON.parse(localStorage.getItem("12PM"));
    twelvePm.val(init12)

    console.log("Current Hour" + hour);
    var init1 = JSON.parse(localStorage.getItem("1PM"));
    onePm.val(init1)

    console.log("Current Hour" + hour);
    var init2 = JSON.parse(localStorage.getItem("2PM"));
    twoPm.val(init2)

    console.log("Current Hour" + hour);
    var init3 = JSON.parse(localStorage.getItem("3PM"));
    threePm.val(init3)

    console.log("Current Hour" + hour);
    var init4 = JSON.parse(localStorage.getItem("4PM"));
    fourPm.val(init4)

    console.log("Current Hour" + hour);
    var init5 = JSON.parse(localStorage.getItem("5PM"));
    fivePm.val(init5)
}

function background () {

    $(".col-10").each(function() {
        var testTime = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        console.log(testTime);
        console.log(hour);

        if (hour > testTime) {
            $(this).addClass("past");
        } else if (hour < testTime) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
}

$(document).ready(function() {
    initPage()
    background()

    $(".saveBtn").on("click", function() {
        userInput = $(this).siblings(".col-10").val().trim();
        console.log(userInput);
        hourSpan = $(this).siblings(".time-hour").text().trim();
        console.log(hourSpan);
        localStorage.setItem(hourSpan, JSON.stringify(userInput));
    })
});
