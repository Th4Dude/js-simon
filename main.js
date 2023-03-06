'use strict'

/* Funzione generatore random numeri */

function getRndInteger(max) {
    return Math.floor(Math.random() * max) + 1;    
  }
  
  function NumeriDaNascondere(){
    numeriDom.innerHTML = '';
}

 /* Funzione generatore random numeri */ 

 /* array di numeri */

 const numeriDom = document.getElementById('demo');

  for(let i = 0 ; i < 5; i++){
    let numeriRandom = getRndInteger(100);
    console.log(numeriRandom);
    numeriDom.innerHTML += numeriRandom + ' ';
}

/* array di numeri */

/* Timer con funzione */

setTimeout( NumeriDaNascondere, 5 * 1000);

/* Timer con funzione */

const myTimeout = setTimeout( prompt('inserisci un numero'), 10 * 1000);