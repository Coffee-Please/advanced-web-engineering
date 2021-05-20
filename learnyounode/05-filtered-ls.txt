/*  

# LEARN YOU THE NODE.JS FOR MUCH WIN!  
   
## FILTERED LS (Exercise 5 of 13)  
   
Create a program that prints a list of files in a given directory,  
filtered by the extension of the files. You will be provided a directory  
name as the first argument to your program (e.g. '/path/to/dir/') and a  
file extension to filter by as the second argument.  
   
For example, if you get 'txt' as the second argument then you will need to  
filter the list to only files that end with .txt. Note that the second  
argument will not come prefixed with a '.'.  
 
Keep in mind that the first arguments of your program are not the first  
values of the process.argv array, as the first two values are reserved for  
system info by Node.  
   
The list of files should be printed to the console, one file per line. You  
must use asynchronous I/O.  

*/

/*

The fs module enables interacting with the file system in a way modeled on s
tandard POSIX functions.

The path module provides utilities for working with file and directory paths

*/

var fs = require("fs"); // load file system module from Node.js
const path = require("path"); // load path module from Node.js

var directory = process.argv[2];
var ext = '.' + process.argv[3];

/*

  The fs.readdir() method takes a pathname as its first argument and a  
  callback as its second. The callback signature is:  
   
     function callback (err, list) { ... }  
   
  where list is an array of filename strings.  

*/
// read and get array of filename strings, then use the callback function
// to get the async results
fs.readdir(directory, function callback(err, list) {
  // check if there is no errors
  if (!err) {
    //for each filename string
    list.forEach(file => {
      /*

      The path.extname() method returns the extension of the path, from the 
      last occurrence of the . (period) character to end of string in the 
      last portion of the path. If there is no . in the last portion of the 
      path, or if there are no . characters other than the first character 
      of the basename of path (see path.basename()) , an empty string is returned.

      */
      // check if the file extension matchs the filter option
      if (path.extname(file) == ext) {
        console.log(file); // If so, STDOUT
      } // end if
    }); // end list.forEach
  } // end if 
  else {
    console.log(err); // otherwise log the error
  } // end else
}); // end fs.readdir
