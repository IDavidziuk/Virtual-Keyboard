import './index.html';
import './style.css';

const body = document.querySelector("body")

function createTextareaAndAddition (){
let wrapper  = document.createElement('div');
wrapper.classList.add("wrapper");

let textContent  = document.createElement('div');
textContent.classList.add("text-content");

let textarea = document.createElement('textarea');
textarea.autofocus = true;
textarea.rows = '10';
textarea.cols = '80';

let nameOfOS = document.createElement('h1');
nameOfOS.innerText = 'For MacBook 2020';

let addInf = document.createElement('h2');
addInf.innerText = 'Use \'shift\' to change languages';

wrapper.append(textContent, textarea,);
textContent.append(nameOfOS, addInf)
body.append(wrapper);

}
createTextareaAndAddition ()

function createKeyboard() {
    let keyBoardContent  = document.createElement('div');
    keyBoardContent.classList.add("keyboard-content");
}