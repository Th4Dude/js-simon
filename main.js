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

function promptAppare(){
    const numeriUtenteInseriti = [];
    let numeriUguali = 0
    for(let i = 0 ; i < 5 ; i++){
        const numeroUtente = Number(prompt('inserisci i numeri che ricordi'));
        numeriUtenteInseriti.push(numeroUtente);
        if(numeriRandom.includes(numeroUtente)){
            numeriUguali++;
        }
    }
    alert(`hai indovinato ${numeriUguali} numeri su 5` + `,i numeri random erano ${numeriRandom} `)
 }

 /* Funzione appare Prompt */ 

 /* array di numeri */

 const numeriRandom = [];

 const numeriDom = document.getElementById('demo');

  for(let i = 0 ; i < 5; i++){
    let demo = getRndInteger(100);
    numeriRandom.push(demo);
    console.log(demo)
    const element = document.createElement('div');
    element.classList.add("prova");
    element.innerText = demo;
    numeriDom.append(element);
}

/* array di numeri */

/* Timer con funzione */

setTimeout( NumeriDaNascondere, 30* 1000);

setTimeout(promptAppare, 31 * 1000)

/* Timer con funzione */

