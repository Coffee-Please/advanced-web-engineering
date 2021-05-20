/*
 # LEARN YOU THE NODE.JS FOR MUCH WIN!  
   
 ## TIME SERVER (Exercise 10 of 13)  
   
  Write a TCP time server!  
   
  Your server should listen to TCP connections on the port provided by the  
  first argument to your program. For each connection you must write the  
  current date & 24 hour time in the format:  
   
     "YYYY-MM-DD hh:mm"  
   
  followed by a newline character. Month, day, hour and minute must be  
  zero-filled to 2 integers. For example:  
   
     "2013-07-06 17:42"  
   
  After sending the string, close the connection.  

*/

/*

The net module provides an asynchronous network API for creating stream-based TCP or
IPC servers (net.createServer()) and clients (net.createConnection()).

*/
const net = require("net"); // get the net package

var data = new Date(); // create a Date object to get the current date and time
var date = ""; // to store and return the formatted date
const port = process.argv[2]; // use the port number supplied as the first command-line argument

// function pads zeros on the date elements requiring them
function addZeros(item) {
  // if the Date element is less than 10
  if (item < 10) {
    return "0" + item; // padd with a 0
  } // end if
  else {
    return item; // otherwise leave as is
  } // end else
} // end addZeros

// function retrieves and formats the date data retrieved from Date()
function getDate() {
  date =
    "" +
    data.getFullYear() + // year
    "-" +
    addZeros(data.getMonth() + 1) + // month starts at 0
    "-" +
    addZeros(data.getDate()) + // returns the day of month; can be single digit
    " " +
    addZeros(data.getHours()) + // hour starts at 0
    ":" +
    addZeros(data.getMinutes()) +
    "\n"; // minute starts at 0

  return date; // return the full date
} // end getData

var server = net.createServer(function(socket) {
  // socket handling logic
  socket.end(getDate()); // write to then close the socket
}); // end net.createServer

server.listen(+port); // listen to the assigned port
