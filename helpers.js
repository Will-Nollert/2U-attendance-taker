const classMasterSheetFirstNameLastName = [
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


const classMasterSheetLastNameFirstName = [
"Neuwirth Andrew",
"Vazquez Andrew",
"Hodshire Anthony",
"Samani Anthony",
"Szpanelewski Ashley",
"Bility Ayoub",
"Ward Breanna",
"Alea Carlos",
"Roberts Chanceton",
"Krum Chelsea",
"Garnica Christopher",
"Morgan Dakota",
"Christy Daniel",
"Rodriguez Daniel",
"Murray Dominique",
"Bailey Elizabeth",
"Bermeo Fernando",
"Birge Gabrielle",
"Ibarra Isain",
"Patterson JaTanna",
"Phillips Jackie",
"Tallent Jackson",
"Hopper Jacob",
"Zander Jacob",
"Montoya Jorge",
"Cabriales rodriguez Junior",
"Szost Kelsie",
"Reynolds Kevin",
"Cvengros Lauren",
"Zielinski Mateusz",
"Ruffin Mechalle",
"Banks Mekhi",
"Robinson Melvin",
"Wells Michaela",
"Foote Mitchell",
"Salamey Mohamed",
"Arkow Natalie",
"Paribello Nicholas",
"Bish Nolan",
"Good Riley",
"Milligan Sara",
"Morin Sue",
"Nguyen Tony",
"Cruz Vegas",
"Winston William",
"Edmonson Zachary"
]

for (let index = 0; index < classMasterSheetFirstNameLastName.length; index++) {
    const element = classMasterSheetFirstNameLastName[index];
    const splitName = element.split(" ")
   splitName.reverse()
   const copyPaste = splitName.join(" ")
   console.log(copyPaste.toLowerCase())
}