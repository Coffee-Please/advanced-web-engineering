/*
   
# LEARN YOU THE NODE.JS FOR MUCH WIN!  
   
## BABY STEPS (Exercise 2 of 13)  
   
Write a program that accepts one or more numbers as command-line arguments  
and prints the sum of those numbers to the console (stdout). 

*/

// console.log(process.argv) // show the argv array
let num = process.argv; // to access numbers from the command line that are stored in process.argv
let sum = 0; // to store the sum of added numbers

// LOOP to go through the argv array
for (var i = 2; i < num.length; i++) {
  sum += +num[i]; // Addition; +prefix to convert argv string to number
  // console.log("SUM", sum); // show the additon step
} // end for

console.log(sum); // STDOUT the total
