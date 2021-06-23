/* This script dispays a greeting to the user based upon the current time. It is an exmaple from JavaScript & JQuery book */
var today = new Date(); //create a new date object
var hourNow = today.getHours(); // find the current hourvar greeting;

// diaply the appropiate greeting based on the current time
if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';

}
document.write('<h3>' + greeting + '</h3');