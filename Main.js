
let aulab = {
    nome: "aulab ",
    indirizzo: "Strada San Giorgio Martire",
    
    getcoffee : function (params) {
        console.log('andiamo a prendere il caffè');
        
    }
}



console.log(aulab.nome);

aulab.getcoffee();


// ESERCIZIO 1 //


// 1. Crea un oggetto libro con le seguenti proprietà:
// ○ titolo: "Il Signore degli Anelli"
// ○ autore: "J.R.R. Tolkien"
// ○ annoPubblicazione: 1954
// Stampa il titolo e l'autore utilizzando la notazione a punto e la notazione a
// parentesi.
// 2. Aggiungi una proprietà



// let libro  = {
//     title: 'Il signore degl Anelli',
//     autore: 'J.R.R Tolkien',
//     annoPubblicazione: 1954,
// }

// console.log(libro.title+" "+libro.autore);

//                 //ESERCIZIO 2 
// Aggiungi una proprietà genere al tuo oggetto libro e impostala a "Fantasy".
// Modifica l'anno di pubblicazione a 1955 e stampa l'oggetto aggiornato



let libro  = {
    title: 'Il signore degl Anelli',
    autore: 'J.R.R Tolkien',
    annoPubblicazione: 1954,
}

console.log(libro.title+" "+libro.autore);


libro.genere = 'Fantasy';
libro.annoPubblicazione = ' 1955';

console.log(libro);
//                   ESERCIZIO 3 
// Crea un oggetto studente con:
// ○ Una proprietà nome
// ○ Una proprietà cognome
// ○ Un metodo saluto che stampa: "Ciao, sono [nome] [cognome]!"
// Ricordati di invocare il metodo.


let studente = {
    name : '',
    surname : '',
}


console.log(`Ciao sono ${studente.name}   e di cognome ${studente.surname} ....`);
