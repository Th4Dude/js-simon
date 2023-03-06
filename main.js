'use strict'

/* Funzione generatore random numeri */

function getRndInteger(max) {
    return Math.floor(Math.random() * max) + 1;    
  }
  
  /* Funzione generatore random numeri */ 

  /* Funzione nasconde numeri */ 

  function NumeriDaNascondere(){
    numeriDom.innerHTML = '';
}

/* Funzione nasconde numeri */ 

/* Funzione appare Prompt */ 

const numeriUtenteInseriti = [];

function promptAppare(){
    for(let i = 0 ; i < 5 ; i++){
        const numeroUtente = Number(prompt('inserisci i numeri che ricordi'));
        const numeriUtenteInseriti = numeroUtente
        console.log(numeriUtenteInseriti)
    }
 }

 /* Funzione appare Prompt */ 

 /* array di numeri */

 const numeriDom = document.getElementById('demo');

  for(let i = 0 ; i < 5; i++){
    let numeriRandom = getRndInteger(100);
    console.log(numeriRandom);
    numeriDom.innerHTML += numeriRandom + ' ';
}

/* array di numeri */

/* Timer con funzione */

setTimeout( NumeriDaNascondere, 1* 1000);

setTimeout(promptAppare, 4 * 1000)



/* Timer con funzione */






