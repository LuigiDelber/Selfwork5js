
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



                let libro  = {
                    title: 'Il signore degl Anelli',
                    autore: 'J.R.R Tolkien',
                    annoPubblicazione: 1954,
                }

                console.log(libro.title+" "+libro.autore);
                
                