/*

 # LEARN YOU THE NODE.JS FOR MUCH WIN!  
   
 ## HTTP COLLECT (Exercise 8 of 13)  
   
  Write a program that performs an HTTP GET request to a URL provided to  
  you as the first command-line argument. Collect all data from the server  
  (not just the first "data" event) and then write two lines to the  
  console (stdout).  
   
  The first line you write should just be an integer representing the  
  number of characters received from the server. The second line should  
  contain the complete String of characters sent by the server.

*/

/*

The HTTP interfaces in Node.js are designed to support many features of the protocol which have been traditionally difficult to use. In particular, large, possibly chunk-encoded, messages. The interface is careful to never buffer entire requests or responses, so the user is able to stream data.

*/

const http = require('http'); // get the http package

const url = process.argv[2]; // set the url to the first command line arg

// GET request
http.get(url, (res) => {
  let output = ""; // to store the overall data
  
  res.setEncoding('utf8'); // set encoding to utf8 to emit String objects
    
  // on data collect the data events
  res.on('data', (data) => {
    output += data;
  }); // end res.on
  
  // on end STDOUT the output number and contents
  res.on('end', () => {
    console.log(output.toString().length);
    console.log(output);
  }); // end res.on
  
  
  // on error STDOUT error events
  res.on('error', (err) => {
    console.log(err);
  }); // end res.on
}) // end http.get
