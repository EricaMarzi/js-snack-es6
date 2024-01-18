//& SNACK 1 ✔
/*
Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo  e la lista degli invitati in ordine di posto.

Per stampare il tutto,  la tipografia  vuole che le mandiamo una lista di ospiti in cui ogni ospite sia un oggetto javascript che ha come attributi: nome del tavolo, nome dell'ospite e posto occupato.
Generiamo questo array in una variabile guestsList e stampiamolo in console
*/

const tableName = 'Tavolo Vip';

const guests = [
  'Brad Pitt',
  'Johnny Depp',
  'Lady Gaga',
  'Cristiano Ronaldo',
  'Georgina Rodriguez',
  'Chiara Ferragni',
  'Fedez',
  'George Clooney',
  'Amal Clooney',
  'Maneskin'
];

const placeholder = guests.map( (guest, i) => {
    return {
        table: tableName,
        name: guest,
        place: i + 1
    }
});

// console.log(placeholder);



//& SNACK 2 ✔
/*
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
Per preparare l'aula di un nuovo corso, dobbiamo svolgere una serie di operazioni
1. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
2.Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
3.  dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo ES (Marco della Rovere => MARCO DELLA ROVERE);
Questo è l'elenco degli studenti:
Id|Name|Grades
213|Marco della Rovere|78
110|Paola Cortellessa|96
250|Andrea Mantegna|48
145|Gaia Borromini|74
196|Luigi Grimaldello|68
102|Piero della Francesca|50
120|Francesca da Polenta|84
*/

const students = [
    {
        id: 213,
        name: "Marco della Rovere",
        grades: 78
    },
    {
        id: 110,
        name: "Paola Cortellessa",
        grades: 96
    },
    {
        id: 250,
        name: "Andrea Mantegna",
        grades: 48
    },
    {
        id: 145,
        name: "Gaia Borromini",
        grades: 74
    },
    {
        id: 196,
        name: "Luigi Grimaldello",
        grades: 68
    },
    {
        id: 102,
        name: "Piero della Francesca",
        grades: 50
    },
    {
        id: 120,
        name: "Francesca da Polenta",
        grades: 84
    }
]


const bestStudents = students.filter(({ grades }) => grades >= 70);
/*const bestStudents = students.filter(({grades}) => {
    if (grades >= 70) {
        return true
    }
})
console.log("here", bestStudent)*/
const newBestStudents = bestStudents.filter(({ id  }) => id > 120);

const plates = students.map(({name}) => name.toUpperCase())

// console.log(bestStudents);
// console.log(newBestStudents);
// console.log(plates);

//& Snack 3 ✘
/* 
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: name e peso. Stampare in console la bici con peso minore utilizzando il destructuring
*/

const bicycles =[
    {
        brand: "Atala",
        weight: 8
    },
    {
        brand: "Perrone",
        weight: 8.7
    },
    {
        brand: "Bianchi",
        weight: 6.9
    },
    {
        brand: "Bold",
        weight: 7.3
    },
    {
        brand: "BMX",
        weight: 9.5
    },
    {
        brand: "Scott",
        weight: 6.8
    },
    {
        brand: "Officine Mattio",
        weight: 7
    },
]

//^ nuovo array solo con i pesi
// bicyclesWeight = bicycles.map(({weight}) => {
//     return weight
// })
// console.log(bicyclesWeight)

//^ trovo il peso più basso
// lighter = (Math.min(...bicyclesWeight))
// console.log(lighter)

//^ stampare in console bici più leggera
// let lighter = bicycles[0].weight;
// for(let i = 0; i < bicycles.length; i ++){
    //   if (bicycles[i].weight < lighter){
        //      lighter =`${bicycles[i].brand} : ${bicycles[i].weight}`;
        //   }
        // }
        
let lighter = bicycles[0].weight;
bicycles.forEach(({weight, brand}) => {
    if (weight < lighter){
        lighter =`${brand} : ${weight}`;
    }
})

console.log(lighter);

//& Snack 4 ✔
/*
Creare un array di oggetti di squadre di e-sports.
Ogni squadra avrà diverse proprietà: nome, partite vinte, partite perse.
Il nome sarà l’unica proprietà da inventare voi, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà punti fatti e falli subiti.
Infine, usando il destructuring, creiamo un nuovo array i cui elementi contengono solo nomi e partite vinte e stampiamo tutto in console
*/

const eSportTeams = [
    {
        name: "Fnatic",
        win: 0,
        lose: 0
    },
    {
        name: "Cloud9",
        win: 0,
        lose: 0
    },
    {
        name: "G2",
        win: 0,
        lose: 0
    },
    {
        name: "SKT",
        win: 0,
        lose: 0
    },
    {
        name: "TSM",
        win: 0,
        lose: 0
    },
]

console.log("e-sports", eSportTeams)

//^ nuovo array con win/lose random
const lcs = eSportTeams.map((team) => {
    const matches = {...team}
    matches.win = Math.floor(Math.random() * (10 + 1))
    matches.lose = Math.floor(Math.random() * (10 + 1))
    return matches
})
console.log("LCS", lcs)

//^ nuovo array solo win
const eSportWins = lcs.map(({name, win}) => `${name}: ${win}`)

console.log("Win", eSportWins);
