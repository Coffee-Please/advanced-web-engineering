/*  

# LEARN YOU THE NODE.JS FOR MUCH WIN!  
   
## MY FIRST I/O! (Exercise 3 of 13)  
   
Write a program that uses a single synchronous filesystem operation to  
read a file and print the number of newlines (\n) it contains to the  
console (stdout), similar to running cat file | wc -l.  
   
The full path to the file to read will be provided as the first  
command-line argument (i.e., process.argv[2]). You do not need to make  
your own test file.  

*/

/*

The fs module enables interacting with the file system in a way modeled on s
tandard POSIX functions.

*/

// load file system module from Node.js
var fs = require('fs')

/*

Buffer objects are Node's way of efficiently representing arbitrary arrays  
of data, whether it be ascii, binary or some other format. 

*/
// read and get file contents as a buffer object; fs.readFileSync()
// full path to the file to read will be provided as the first command-line argument
var buffer = fs.readFileSync(process.argv[2]);

// convert the buffer to a string
var string = buffer.toString();

// split at all newlines in the string
var newlines = string.split('\n');

// STDOUT the total number of newlines - 1 since the last line does not have the '\n' delimiter
console.log(newlines.length - 1);
