
    //helper function to get the masterRole Sheet in Firstname, Lastname order
/* for (let index = 0; index < classMasterSheet.length; index++) {
        let setString = ""
        const element = classMasterSheet[index];
        const splitName = element.split(" ")
       splitName.reverse()
       const copyPaste = splitName.join(" ")
       setString = copyPaste
       console.log(setString)
}
 

function replaceHashTags(str){
const replaced = str.replace(/[^a-z0-9]/gi, ' ');
     console.log(replaced)
}
replaceHashTags("Christy# Daniel") 

 */

//work on spitting out an actual role sheet here 
function compareArrays(){
    const zoomClass =[ 'Anthony s Fathom Notetaker',
    'Ayoub Bility',
    'Carlos Alea',
    'Chris Garnica',
    'Christy  Daniel',
    'Dakota Morgan',
    'Harrison Armstrong',
    'Isain Ibarra',
    'Jatanna Patterson',
    'Junior Cabriales rodriguez',
    'Kelsie Szost',
    'Lauren Cvengros',
    'Mateusz Zielinski',
    'Melvin s Fathom Notetaker',
    'Michaela Wells',
    'Mitch Foote',
    'Mohamed Salamey',
    'Nolan Bish',
    'Robinson  Melvin',
    'Sara Milligan',
    'Sarah Brich',
    'Winston  William',
    'anthony',
    'jacob h',
    'mekhi b',
    'sue morin',
    'willn',
    'zach']
    const masterRole = ['Andrew Neuwirth',
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
    'Zachary Edmonson']

    for (let index = 0; index < masterRole.length; index++) {
        const masterStudent = masterRole[index];
        for (let index = 0; index < zoomClass.length; index++) {
            const zoomStudent = zoomClass[index];
            if(masterStudent != zoomStudent){
                console.log(zoomStudent)
            } 
        }
    }
}

compareArrays()