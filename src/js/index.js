import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

console.log("HELLO 🚀");

const add = document.querySelector(".main__button--add");
const remove = document.querySelector(".main__button--remove");
const glassCounter = document.querySelector(".main__glass-counter--js");

let counter = 0;

const key = new Date().toISOString().slice(0, 10);
const localStorageValue = localStorage.getItem(key);

if (localStorageValue) {
  counter = localStorageValue;
} else {
  localStorage.setItem(key, 0);
}

if (document.querySelector(".main--js")) {
  glassCounter.innerHTML = counter;

  add.addEventListener("click", () => {
    counter++;
    glassCounter.innerHTML = counter;
    localStorage.setItem(key, counter);
  });

  remove.addEventListener("click", () => {
    if (counter > 0) {
      counter--;
    }
    glassCounter.innerHTML = counter;
    localStorage.setItem(key, counter);
  });
}

const history = document.querySelector(".main__history-list--js");

function listItemRender() {
  const item = document.createElement("li");
  item.classList.add("main__history-list-item");

  history.appendChild(item);
  item.innerHTML = `Dnia ${key} wypiłeś ${counter} szklanek wody`;
}

const now = new Date();
let hour =
  new Date(now.getFullYear(), now.getMonth(), now.getDate(), 1, 0, 0, 0) - now;

if (hour < 0) {
  hour += 86400000;
}

setTimeout(listItemRender, hour);
listItemRender();
