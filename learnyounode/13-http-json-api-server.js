/*
   
 # LEARN YOU THE NODE.JS FOR MUCH WIN!  
   
 ## HTTP JSON API SERVER (Exercise 13 of 13)  
   
  Write an HTTP server that serves JSON data when it receives a GET  
  request to the path '/api/parsetime'. Expect the request to contain  
  a query string with a key 'iso' and an ISO-format time as the value.  
   
  For example:  
   
  /api/parsetime?iso=2013-08-10T12:10:15.474Z  
   
  The JSON response should contain only 'hour', 'minute' and 'second'  
  properties. For example:  
   
     {  
       "hour": 14,  
       "minute": 23,  
       "second": 15  
     }  
   
  Add second endpoint for the path '/api/unixtime' which accepts the  
  same query string but returns UNIX epoch time in milliseconds (the  
  number of milliseconds since 1 Jan 1970 00:00:00 UTC) under the  
  property 'unixtime'. For example:  
   
     { "unixtime": 1376136615474 }  
   
  Your server should listen on the port provided by the first argument  
  to your program. 
  
*/

/*

The HTTP interfaces in Node.js are designed to support many features of the protocol which have been traditionally difficult to use. In particular, large, possibly chunk-encoded, messages. The interface is careful to never buffer entire requests or responses, so the user is able to stream data.

*/
const http = require("http"); // get the http package
const url = require("url"); // get the url package

const port = process.argv[2]; // port is passed in the 1st cmd line arg

// Create an http server
var server = http.createServer(function(req, res) {
  // if the request is a GET request
  if (req.method == "GET") {

    var data = url.parse(req.url, true); // parse the url to get the needed info
    // console.log(data.pathname); // to view the parsed pathname
    // console.log(data); // to view the parsed url
    var time = new Date(data.query.iso); // get the iso value and make a new Date object to parse it
    // console.log(time); // to view the parsed time
    var result; // to store the formated time

    // if endpoint for the path '/api/parsetime'
    if (data.pathname == "/api/parsetime") {
      // store the time required as an object
      result = {
        hour: time.getHours(), // get the hours
        minute: time.getMinutes(), // get the minutes
        second: time.getSeconds() // get the seconds
      }
    } // end if
    // if endpoint for the path '/api/unixtime'
    else if (data.pathname == "/api/unixtime") {
      // store the time required as an object
      result = {
        unixtime: time.getTime() // get the unix epoch time in ms
      }
    } // end else if

    // if there is a result    
    if (result) {
      // be a good web citizen and set the Content-Type and indicate the response status as OK
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(result)); // convert the result to a JSON object and send back as the response
    } // end if
  } // end if
}) // end  http.createServer
server.listen(+port); // start listening on assigned port
