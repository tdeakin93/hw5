$(document).ready(function () {
  //all your code goes here - this says wait for the document to load before running javascript- this is jquery - should wrap around ALL javascript

  //first order of business - get one hour fully functioning at once

    function saveTask() {
        //add to local storage
        //get user input in text area
        //save that to local storage
        //show message to user
            //hide message after so many seconds
    }
    
    //user clicks save button
    $('.saveBtn').on('click', saveTask);
    //doing this will do all of this because of "this" will need to use THIS in on lcikc

    
  function updateRowColor() {
    //set variable to current hour
    //can loop through each row of the class (time-block)
    //jquery has jquery.each
    //check if id has number OR better way is attach data-time="9"
    //find row time useing data attribute (9am ~ 9pm) aka (9<21 bc military time)
    //add the past class to $(this)
    //in CSS there are past current and future classes
    //will use if else statement
  }
  // color rows based on time of day
  //attach a class based on what time of day it is
  //call function updateRowColor
  //use interval to update row color - by hour or by half hour
  updateRowColor();

  //load data from local storage and put it in the correct row
  //#hour9 textarea to value of localstorage key number 'hour-9;
  //#hour10 textarea to value of localstorage key number 'hour-10;
  //#hour11 textarea to value of localstorage key number 'hour-11;
  //#hour12 textarea to value of localstorage key number 'hour-12;
  //#hour13 textarea to value of localstorage key number 'hour-13;

  // display current date on page//
  //moment (get document by id)
});