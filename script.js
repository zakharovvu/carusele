'use strict'

let ul = document.querySelector('.images');
let count = 0;
let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
button1.style.display = 'none';

function left() {
  if (count >= 0) {
    count = 0;
    button1.style.display = 'none';
    button2.style.display = '';
   } else {
    count += 130;
    button1.style.display = '';
    button2.style.display = '';
   }  
  ul.style.transform = `translateX(${ count  }px)`;
}

function right() {
  if (count > (-910)) {
    count -= 130;
    button1.style.display = '';
    button2.style.display = '';
   } else {
    count= (-910); 
    button1.style.display = '';
    button2.style.display = 'none';
   }  
  
  ul.style.transform =  `translateX(${ count }px)`;
}