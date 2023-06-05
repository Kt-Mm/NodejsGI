// Create a file named my-first-io.js.  
   
// Write a program that uses a single synchronous 
// filesystem operation to read a file and print the
// number of newlines (\n) it contains to the console 
// (stdout), similar to running cat file | wc -l.  
 
// The full path to the file to read will be provided 
// as the first command-line argument (i.e., process.argv[2]). You do  
// not need to make your own test file. 

//to pull from a required file system
var fs = require("fs");
var fileName = process.argv[2];
var contents = fs.readFileSync(fileName);
var str = contents.toString();
var lines = str.split("\n").length;

console.log(lines -1);