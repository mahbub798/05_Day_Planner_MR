$(document).ready(function() {
  // display current day  and date on the top of the page
  $("#currentDay").text(moment().format("dddd, MMMM Do"));

  //Update the hours block
  hourUpdater();

  // set up interval to check if current time needs to be updated
  var interval = setInterval(hourUpdater, 15000);

  // Eventlistener for save button clicks
  $(".saveBtn").on("click", function() {
    // get values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // save in localStorage
    localStorage.setItem(time, value);
  });
  
  // load saved data from localStorage if any
  $("#currenthour-9.description").val(localStorage.getItem("currenthour-9"));
  $("#currenthour-10.description").val(localStorage.getItem("currenthour-10"));
  $("#currenthour-11.description").val(localStorage.getItem("currenthour-11"));
  $("#currenthour-12.description").val(localStorage.getItem("currenthour-12"));
  $("#currenthour-13.description").val(localStorage.getItem("currenthour-13"));
  $("#currenthour-14.description").val(localStorage.getItem("currenthour-14"));
  $("#currenthour-15.description").val(localStorage.getItem("currenthour-15"));
  $("#currenthour-16.description").val(localStorage.getItem("currenthour-16"));
  $("#currenthour-17.description").val(localStorage.getItem("currenthour-17"));
  
  function hourUpdater() {
    // get current number of hours
    var currentHour = moment().hours();
    // loop the time blocks
    $(".time-block").each(function() {
      var blockedHour = parseInt($(this).attr("id").split("-")[1]);
      //console.log("blocked hour is: " + blockedHour);
      //console.log("current hour is: "+ currentHour);
      // check the time
      if (blockedHour < currentHour) {
        $(this).addClass("past");
      } 
      else if (blockedHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } 
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
});