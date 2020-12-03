import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

console.log('HELLO 🚀')

const water = document.querySelector(".main__glass--water");
const add = document.querySelector(".main__button--add");
const remove = document.querySelector(".main__button--remove");

add.addEventListener("click",() => {
    water.classList.add("main__glass--add");
    water.classList.remove("main__glass--remove");
})

remove.addEventListener("click",() => {
    water.classList.add("main__glass--remove");
    water.classList.remove("main__glass--add");
})