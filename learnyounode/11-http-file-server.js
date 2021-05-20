/*

 # LEARN YOU THE NODE.JS FOR MUCH WIN!  
   
 ## HTTP FILE SERVER (Exercise 11 of 13)  
   
  Write an HTTP server that serves the same text file for each request it  
  receives.  
   
  Your server should listen on the port provided by the first argument to  
  your program.  
   
  You will be provided with the location of the file to serve as the  
  second command-line argument. You must use the fs.createReadStream()  
  method to stream the file contents to the response. 
  
*/

/*

The HTTP interfaces in Node.js are designed to support many features of the protocol which have been traditionally difficult to use. In particular, large, possibly chunk-encoded, messages. The interface is careful to never buffer entire requests or responses, so the user is able to stream data.

The fs module enables interacting with the file system in a way modeled on standard POSIX functions.

*/
const http = require("http"); // get the http package
var fs = require("fs"); // load file system module from Node.js

const port = process.argv[2]; // port is passed in the 1st cmd line arg
const file = process.argv[3]; // port is passed in the 2nd cmd line arg

var server = http.createServer(function(req, res) {
  // request handling logic...
  // create a stream representing the file you are given as a command-line argument
  // then pipe the data from the src stream to the dst stream
  fs.createReadStream(file).pipe(res);
}); // end http.createServer

server.listen(port); // start listening on assigned port
