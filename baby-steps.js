//Create a file named baby-steps.js.  
   
//Write a program that accepts one or more numbers as  
//command-line arguments and prints the sum of those 
//numbers to the console (stdout). 

//create var to hold value of what sum will be.
var sum = 0;

//create for statement to loop thru numbers.
// starting at index 2 b/c we want to ignore the first two objects in arr.
//we enter our #'s in through the terminal using the file.js name + whatever numbers.
//index is greater than process.argv(refers to an array that contains the commandline argument(numbers placed in terminal))
for (var i = 2; i < process.argv.length; i++){
    sum += Number(process.argv[i])
};
console.log(sum);

