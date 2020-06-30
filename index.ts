// Import stylesheets
import './style.css';

// Write TypeScript code!
const sec: HTMLElement = document.getElementById('sec');

const min: HTMLElement = document.getElementById('min');

const hor: HTMLElement = document.getElementById('hor');

setInterval(() => {
  let date = new Date();
  let ss = date.getSeconds();
  let mm = date.getMinutes();
  let hh = date.getHours();
  sec.style.transform = `rotateZ(${ss*6}deg)`;
  min.style.transform = `rotateZ(${mm*6}deg)`

console.log(date.getHours())
    hor.style.transform = `rotateZ(${hh*30}deg)`


},1000)