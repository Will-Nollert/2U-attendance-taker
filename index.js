//fs = file system, lets node dig around file strucutre 
const fs = require("fs")
// To read a CSV file using csv-parse, you need to create a readable stream using the fs.createReadStream() function.
const {parse} = require("csv-parse")

// Class Master Role Sheet
const classMasterSheetLastNameFirstName = [
  "neuwirth andrew",
  "vazquez andrew",
  "hodshire anthony",
  "samani anthony",
  "szpanelewski ashley",
  "bility ayoub",
  "ward breanna",
  "alea carlos",
  "roberts chanceton",
  "krum chelsea",
  "garnica christopher",
  "morgan dakota",
  "christy daniel",
  "rodriguez daniel",
  "murray dominique",
  "bailey elizabeth",
  "bermeo fernando",
  "birge gabrielle",
  "ibarra isain",
  "patterson ja'tanna",
  "phillips jackie",
  "tallent jackson",
  "hopper jacob",
  "zander jacob",
  "montoya jorge",
  "cabriales rodriguez junior",
  "szost kelsie",
  "reynolds kevin",
  "cvengros lauren",
  "zielinski mateusz",
  "ruffin mechalle",
  "banks mekhi",
  "robinson melvin",
  "wells michaela",
  "foote mitchell",
  "salamey mohamed",
  "arkow natalie",
  "paribello nicholas",
  "bish nolan",
  "good riley",
  "milligan sara",
  "morin sue",
  "nguyen tony",
  "cruz vegas",
  "winston william",
  "edmonson zachary",
  ]
// placeholder for data once parsed and cleaned 
let sortedAndCleanedNames  

//placeholder, is filled with names after CSV parsing
let zoomReportParsedNames = []
//CSV parsing function, param is the file being parsed
fs.createReadStream("./zoomus_meeting_report.csv")
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


function takeRoll(){
//results array
let placeholder = []
//both rolls in order
const presentStudents = sortedAndCleanedNames.sort()
const allStudents = classMasterSheetLastNameFirstName.sort()
//color display of top-level class stats 
console.log('\x1b[43m%s\x1b[0m', "PRESENT " + (presentStudents.length))
console.log('\x1b[43m%s\x1b[0m', "PRESENT STUDENTS " + (presentStudents.length - 3)+"/"+(allStudents.length))

//compares zoom list to masterlist 
//will mark students with diffrent zoom names as absent 
for (let index = 0; index < allStudents.length; index++) {
  const oneOfAllStudents = allStudents[index];
  if(presentStudents.includes(oneOfAllStudents)){
   placeholder.push(oneOfAllStudents + " was PRESENT")
  } else {
    placeholder.push(oneOfAllStudents + " was not")
  }
  
}
//logs the remaining zoom participants who were present but who's name returns no matches 
for (let index = 0; index < presentStudents.length; index++) {
  const oneOfPresentStudents = presentStudents[index];
  if(placeholder.includes(oneOfPresentStudents + " was PRESENT")){
    index ++
  } else {
    placeholder.push(oneOfPresentStudents + " was PRESENT but not on masterlist")
  }
  
}

console.log(placeholder)
}





