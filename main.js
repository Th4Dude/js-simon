'use strict'

function getRndInteger(max) {
    return Math.floor(Math.random() * max) + 1;    
  }
  
  const numeriDom = document.getElementById('demo1')

  for(let i = 0 ; i < 5; i++){
    let numeriRandom = getRndInteger(100);
    console.log(numeriRandom)
    numeriDom.innerHTML += numeriRandom;
}

 