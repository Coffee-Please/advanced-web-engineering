/*

 # LEARN YOU THE NODE.JS FOR MUCH WIN!  
   
 ## JUGGLING ASYNC (Exercise 9 of 13)  
   
  This problem is the same as the previous problem (HTTP COLLECT) in that  
  you need to use http.get(). However, this time you will be provided with  
  three URLs as the first three command-line arguments.  
   
  You must collect the complete content provided to you by each of the  
  URLs and print it to the console (stdout). You don't need to print out  
  the length, just the data as a String; one line per URL. The catch is  
  that you must print them out in the same order as the URLs are provided  
  to you as command-line arguments. 

*/

/*

The HTTP interfaces in Node.js are designed to support many features of the protocol which have been traditionally difficult to use. In particular, large, possibly chunk-encoded, messages. The interface is careful to never buffer entire requests or responses, so the user is able to stream data.

*/

const http = require("http"); // get the http package

const urls = process.argv; // set the url to the first command line arg
let results = []; // to store all the data in order
let count = urls.length - 2; // number of urls to handle; prevents printing until all urls are handled (count == 0)

// function to implement GET request
function getRequest(index) {
  // GET request
  http.get(urls[index + 2], res => {
    let output = ""; // to store the data chunks

    res.setEncoding("utf8"); // set encoding to utf8 to emit String objects

    // on data capture the data events in output
    res.on("data", (data) => {
      output += data; // each chunk of data in added to the output
    }); // end res.on

    // on end handle the data
    res.on("end", () => {
      results[index] = output; // store the data of the get request in the designated array index
      count--; // reduce number of urls to handle by one

      // when the urls are all handled
      if (count <= 0) {
        // go through all the results
        for (var k = 0; k < results.length; k++) {
          console.log(results[k]); // and print them
        } // end for
      } // end if
    }); // end res.on

    // on error STDOUT error events
    res.on("error", err => {
      console.log(err);
    }); // end res.on
  }); // end http.get
} // end getRequest

// loop through the number of urls
for (var index = 0; index < urls.length - 2; index++) {
  getRequest(index); // make the get request for each url; This way allows to pass one url at a time
} // end for
