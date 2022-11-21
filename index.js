//fs = file system, lets node dig around file strucutre 
const fs = require("fs")
// To read a CSV file using csv-parse, you need to create a readable stream using the fs.createReadStream() function.
const {parse} = require("csv-parse")

// Class Master Role Sheet
const classMasterSheet = [
  'Andrew Neuwirth',
  'Andrew Vazquez',
  'Anthony Hodshire',
  'Anthony Samani',
  'Ashley Szpanelewski',
  'Ayoub Bility',
  'Breanna Ward',
  'Carlos Alea',
  'Chanceton Roberts',
  'Chelsea Krum',
  'Christopher Garnica',
  'Dakota Morgan',
  'Daniel Christy',
  'Daniel Rodriguez',
  'Dominique Murray',
  'Elizabeth Bailey',
  'Fernando Bermeo',
  'Gabrielle Birge',
  'Isain Ibarra',
  "Ja'Tanna Patterson",
  'Jackie Phillips',
  'Jackson Tallent',
  'Jacob Hopper',
  'Jacob Zander',
  'Jorge Montoya',
  'Junior rodriguez Cabriales',
  'Kelsie Szost',
  'Kevin Reynolds',
  'Lauren Cvengros',
  'Mateusz Zielinski',
  'Mechalle Ruffin',
  'Mekhi Banks',
  'Melvin Robinson',
  'Michaela Wells',
  'Mitchell Foote',
  'Mohamed Salamey',
  'Natalie Arkow',
  'Nicholas Paribello',
  'Nolan Bish',
  'Riley Good',
  'Sara Milligan',
  'Sue Morin',
  'Tony Nguyen',
  'Vegas Cruz',
  'William Winston',
  'Zachary Edmonson'
  ]
// placeholder for data once parsed and cleaned 
let sortedAndCleanedNames  

//placeholder, is filled with names after CSV parsing
let zoomReportParsedNames = []
//CSV parsing function, param is the file being parsed
fs.createReadStream("./zoomRollReport.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  //data is read file, The row is an array filled with your CSV data
  .on("data", function (row) {
    //isolate names column from the rest of the data
    zoomReportParsedNames.push(row[0])
  })
  .on("error", function (error) {
    console.log(error.message);
  })
  .on("end", function () {
    sortAndClean()
    takeRoll()
   
  });


//takes parsed CSV names, alphabetizes the list and deletes duplicates 
function sortAndClean(){
  let placeholder = []
  //spreads array from zoomCSV into a new Set to elim duplicates 
  alphabetizedSingleNames = [...new Set(zoomReportParsedNames)];
  // flips names to Lastname Firstname to match Canvas UI
   for (let index = 0; index < alphabetizedSingleNames.length; index++) {
    const element = alphabetizedSingleNames[index];
    const splitName = element.split(" ")
    splitName.reverse()
    const lastNameFirstName = splitName.join(" ")
   placeholder.push(lastNameFirstName.toLowerCase())
}
  let stagingArray = []
//elims the # zoom throws into the CSV sometimes
  placeholder.forEach(replaceHashTags);
    function replaceHashTags(str){
    const replaced = str.replace(/[^a-z0-9]/gi, ' ');
    stagingArray.push(replaced)
    }
//lifts (hoists?) the data up to global scope 
sortedAndCleanedNames = stagingArray
}

//Prints a list of present students 
//Needs to print masterSheet with either present or absent not just positive cases  
function takeRoll(){
sortedAndCleanedNames.sort();
console.log("PRESENT " + (sortedAndCleanedNames.length))
console.log("PRESENT STUDENTS " + (sortedAndCleanedNames.length - 3)+"/"+(classMasterSheet.length))
for (let index = 0; index < sortedAndCleanedNames.length; index++) {
  const element = sortedAndCleanedNames[index];
  console.log(element )
}

}


