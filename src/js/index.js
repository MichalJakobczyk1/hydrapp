import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

console.log('HELLO 🚀')

const add = document.querySelector(".main__button--add");
const remove = document.querySelector(".main__button--remove");
const glassCounter = document.querySelector(".main__glass-counter--js");
const water = document.querySelector(".main__glass--water");
let counter = 0;

add.addEventListener("click",() => {
    counter++;
    glassCounter.innerHTML = counter;
    water.classList.add("main__glass--add");
    water.classList.remove("main__glass--remove");
});

remove.addEventListener("click",() => {
    if(counter>0) {
        counter--;
        glassCounter.innerHTML = counter;
    };
    water.classList.add("main__glass--remove");
    water.classList.remove("main__glass--add");
});