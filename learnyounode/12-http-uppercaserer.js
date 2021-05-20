/*

 # LEARN YOU THE NODE.JS FOR MUCH WIN!  
   
 ## HTTP UPPERCASERER (Exercise 12 of 13)  
   
  Write an HTTP server that receives only POST requests and converts  
  incoming POST body characters to upper-case and returns it to the  
  client.  
   
  Your server should listen on the port provided by the first argument  
  to your program.  
  
*/

/*

The HTTP interfaces in Node.js are designed to support many features of the protocol which have been traditionally difficult to use. In particular, large, possibly chunk-encoded, messages. The interface is careful to never buffer entire requests or responses, so the user is able to stream data.

through2-map allows you to create a transform stream using only a  
single function that takes a chunk of data and returns a chunk of  
data. It's designed to work much like Array#map() but for streams

*/
const http = require("http"); // get the http package
const map = require("through2-map"); // get the through2-map package

const port = process.argv[2]; // port is passed in the 1st cmd line arg

// Create an http server
var server = http.createServer(function(req, res) {
  // if the request is a POST request
  if (req.method == "POST") {
    // take the incoming data; req.pipe(){...}
    // then transform it; map(function (chunk) { ... })
    req.pipe( map( function( chunk ) {
          return chunk.toString().toUpperCase(); // into an uppercase string
        })
            ).pipe(res); // then return it in the response; .pipe(res)
  } // end if
}); // end http.createServer

server.listen(+port); // start listening on assigned port
