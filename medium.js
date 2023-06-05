//MEDIUM: Create a node application that will read all of the planets 
//in the solar system from a text file and print them to the console.
//Text file: mercury, venus, earth, mars, jupiter, saturn ,uranus, 
//neptune, pluto (I still believe in you pluto)

const fs = require("fs");

//This is to read file using the readFile() method
//we are telling the fileSystem(fs) to readFile(planet.txt)
//now we are giving it arguement in the parameter if an error happen
fs.readFile("planets.txt", "utf8", (err,data)=>{
    //IF statement to say if error happens then
    if (err) {
        console.log("err", "Error file not read");
        return
    }
    //here we will split our data into an array
    const planets = data.split(",");

    
    //here is to print planets to terminal
    planets.forEach(planet => {
        console.log(planet);
    });
});

