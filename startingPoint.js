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
fs.createReadStream("./zoomRoleReport.csv")
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
    console.log("finished");
    sortAndClean()
    takeRole()
   
  });


//takes parsed CSV names, alphabetizes the list and deletes duplicates 
function sortAndClean(){
  zoomReportParsedNames.sort()
   alphabetizedSingleNames = [...new Set(zoomReportParsedNames)];

  let stagingArray = []

   alphabetizedSingleNames.forEach(replaceHashTags);
    function replaceHashTags(str){
    const replaced = str.replace(/[^a-z0-9]/gi, ' ');
    stagingArray.push(replaced)
    }

sortedAndCleanedNames = stagingArray
}

//compares the list of Zoomstudents to the MasterList return Masterlist students with no match  
function takeRole(){
console.log(sortedAndCleanedNames)
console.log(classMasterSheet)



}

