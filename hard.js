//HARD: Create a JSON file that will have 10 employees 
//in it, their employeeID, their name, their salary and 
//department name.

//Then, create an express API so that when you hit the 
//endpoint with a GET request we want the api to respond 
//with all data on the employees.

//If you hit the endpoint with their employeeID, we want 
//to hand up only the information on that one employee.

//If you hit the endpoint with an incorrect employeeID, 
//send back the correct HTTP status code and an error 
//message stating that the employee was not found.

//GET::myendpointname.com/employees = Json with 
//information from all 10 employees.

//GET::myendpointname.com/employees/<employeeID> = Json 
//with the information from that specific employee.

// pulling from express
const express = require("express");

//creating app variable to have method value
const app = express();
//creating new varible to store employee info we will be pulling from JSOM file.
const employeeInfo = require("./employee.json");

//here we will GET all employees info using .get
//using app bc it stores the express method to get info.
//give it an arguement to send request and return response
app.get("/employees", (req, res)=>{
    //here is the response + pulling info from json file
    //target "employees" bc employees is the var name of json data.
    res.json(employeeInfo.employees);
});

//here we will target a specfic object from employees data
// here we use app.get again to get info from json targeted data
app.get("/employees/:employeeID", (req, res)=>{
    //creating a object var to hold value of employeeID
    const {employeeID} = req.params;
    //create new var to hold value of targeted it
    //runs thru employeeinfo(json file) to each individual employee
    //then uses the find method to find employeeID,
    //ask if it is true
    const employee = employeeInfo.employees.find(emp =>employeeID === parseInt(employeeID));

    //now we create IF statement incase an error happens
    if (employee) {
        res.json(employee);
    }else {
        res.status(404).json({error: "Employee cannot be found"});
    }

});

//here we will start our port by calling .listen() method.
app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});