/*

# LEARN YOU THE NODE.JS FOR MUCH WIN!  
   
## HTTP CLIENT (Exercise 7 of 13)  
   
Write a program that performs an HTTP GET request to a URL provided to you  
as the first command-line argument. Write the String contents of each  
  "data" event from the response to a new line on the console (stdout). 

*/

/*

The HTTP interfaces in Node.js are designed to support many features of the protocol which have been traditionally difficult to use. In particular, large, possibly chunk-encoded, messages. The interface is careful to never buffer entire requests or responses, so the user is able to stream data.

*/

const http = require('http'); // get the http package

const url = process.argv[2]; // set the url to the first command line arg

// GET request
http.get(url, (res) => {
  res.setEncoding('utf8'); // set encoding to utf8 to emit String objects
    
  // on data STDOUT the data events
  res.on('data', (data) => {
    console.log(data);
  }); // end res.on
  
  // on error STDOUT error events
  res.on('error', (err) => {
    console.log(err);
  }); // end res.on
}) // end http.get
