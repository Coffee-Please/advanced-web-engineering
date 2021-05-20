/*  

 # LEARN YOU THE NODE.JS FOR MUCH WIN!  
   
 ## MY FIRST ASYNC I/O! (Exercise 4 of 13)  
   
  Write a program that uses a single asynchronous filesystem operation to  
  read a file and print the number of newlines it contains to the console  
  (stdout), similar to running cat file | wc -l.  
   
  The full path to the file to read will be provided as the first  
  command-line argument. 

*/

/*

The fs module enables interacting with the file system in a way modeled on s
tandard POSIX functions.

*/

// load file system module from Node.js
var fs = require("fs");

/*

You can supply 'utf8' as the second argument and put the callback as the third argument  
and you will get a String instead of a Buffer.

Async uses a callback function to deliver errors and data

*/
// read and get file contents as a string object, then use the callback function
// to get the async results
fs.readFile(process.argv[2], "utf8", function callback(error, string) {
  // check if there is no errors
  if (!error) {
    // split at all newlines in the string
    var newlines = string.split("\n");

    // STDOUT the total number of newlines - 1 since the last line does not have the '\n' delimiter
    console.log(newlines.length - 1);
  } // end if
  else {
    console.log(error); // otherwise log the error
  } // end else
}); // end fs.readFile
