import './index.html'
import './style.css'
import {keysArrayEng} from './keyboard-content'


const body = document.querySelector('body')
let languageCurr = localStorage.getItem('keyboard-lang') || 'en'

// function changeLeng () {
//     if(localStorage.languageCurr === 'ru') {
//         localStorage.setItem('keyboard-lang', 'en')
//     }
// }

function takeKays() {
  let key
  keysArrayEng.forEach(function (el) {
    key = Object.entries(el)
  })
  return key
}
let oneKey = takeKays()

//создание клавиатуры
function createKeyboard(array) {
  const oneKey = document.createElement('div')
  oneKey.classList.add('key-button')
  let keyItem = ''
  array.forEach(function (el) {
    let key = Object.entries(el)

    if (key.length === 4 && languageCurr === 'en') {
      keyItem += `<button class="key-button switch-key" data = ${key[1][1]} data-code = ${key[0][1]}>${key[2][1]}</button>`
    } else if (key.length === 7 && languageCurr === 'ru') {
      keyItem += `<button class="key-button switch-key" data = ${key[1][1]} data-code = ${key[0][1]}>${key[2][1]}
      </button>`
    } else if (
      key[0][1] === 'ArrowDown' ||
      key[0][1] === 'ArrowRight' ||
      key[0][1] === 'ArrowUp' ||
      key[0][1] === 'ArrowLeft'
    ) {
      keyItem += `<button class="key-button arrow" data = ${key[1][1]} data-code = ${key[0][1]}>${key[2][1]} </button>`
    } else if (key[0][1] === 'Space') {
      keyItem += `<button class="key-button noswitch-key space" data = ${key[1][1]} data-code = ${key[0][1]}>${key[2][1]}</button>`
    } else {
      keyItem += `<button class="key-button noswitch-key ${key[2][1]}" data = ${key[1][1]} data-code = ${key[0][1]} id = ${key[0][1]}>${key[2][1]}
      </button>`
    }
  })
  document.querySelector('.keyboard').innerHTML = keyItem
}

function createTextareaAndAddition() {
  const wrapper = document.createElement('div')
  wrapper.classList.add('wrapper')

  const textContent = document.createElement('div')
  textContent.classList.add('text-content')

  const textarea = document.createElement('textarea')
  textarea.autofocus = true
  textarea.rows = '10'
  textarea.cols = '80'
  textarea.classList.add('textarea')

  const nameOfOS = document.createElement('h1')
  nameOfOS.innerText = 'For MacBook 2020'

  const addInf = document.createElement('h2')
  addInf.innerText = "Use 'option' to change languages"

  const keyboard = document.createElement('div')
  keyboard.classList.add('keyboard')

  wrapper.append(textContent, textarea, keyboard)
  textContent.append(nameOfOS, addInf)
  body.append(wrapper)
}

createTextareaAndAddition()
createKeyboard(keysArrayEng)

const textarea = document.querySelector('.textarea')
const keyButton = document.querySelectorAll('.key-button')

function onKeyDownHandler(event) {

  document.querySelector(`[data-code = ${event.code}]`).classList.add('active')
}
function onKeyUpHandler(event) {
    document.querySelector(`[data-code = ${event.code}]`).classList.remove('active')
  }

function onKeyDownMouseHandler(event) {
    event.currentTarget.classList.add('active')
  }
function onKeyUpMouseHandler(event) {
    if(event.currentTarget !== document.querySelector('[data-code = CapsLock]'))
    event.currentTarget.classList.remove('active')
    
}



document.addEventListener('keydown', onKeyDownHandler)
document.addEventListener('keyup', onKeyUpHandler)
keyButton.forEach((element) => element.addEventListener('mousedown', onKeyDownMouseHandler))
keyButton.forEach((element) => element.addEventListener('mouseup', onKeyUpMouseHandler))
 keyButton.forEach((element) => element.addEventListener('mouseout', onKeyUpMouseHandler))

function specialButton(event) {
  textarea.focus()
 
  if (
    event.code === 'Tab' ||
    event.currentTarget === document.querySelector('[data-code= Tab]')
  ) {
    textarea.value += '    '
  }
  if (
    event.code === 'Backspace' ||
    event.currentTarget === document.querySelector('[data-code = Backspace]')
  ) {
    textarea.value = textarea.value.slice(0, textarea.selectionStart-1) + textarea.value.slice(textarea.selectionStart);
    textarea.selectionEnd=textarea.selectionStart-1;
  }
  if (
    event.code === 'Enter' ||
    event.currentTarget === document.querySelector('[data-code = Enter]')
  ) {
    textarea.value += '\n'
  }
  if (
    event.code === 'Space' ||
    event.currentTarget === document.querySelector('[data-code = Space]')
  ) {
    textarea.value += ' '
  }
  if (
    event.code === 'ArrowLeft' ||
    event.currentTarget === document.querySelector('[data-code = ArrowLeft]')
  ) {
    textarea.selectionStart = textarea.selectionStart - 1
    textarea.selectionEnd = textarea.selectionEnd - 1
  }
  if (
    event.code === 'ArrowRight' ||
    event.currentTarget === document.querySelector('[data-code = ArrowRight]')
  ) {
    textarea.selectionStart = textarea.selectionStart + 1
    
  }

if (event.currentTarget !== document.querySelector('[data-code = Space]') && 
     event.currentTarget !== document.querySelector('[data-code = Enter]') && 
     event.currentTarget !== document.querySelector('[data-code = Backspace]') && 
     event.currentTarget !== document.querySelector('[data-code= Tab]')){
 textarea.value += event.currentTarget.innerText
     }
}





keyButton.forEach((element) => element.addEventListener('click', specialButton))
// keyButton.forEach((element) => element.addEventListener('keydown', specialButton))


alert('Привет. я не доконца еще доделала работу, буду благодарна, если посмотришь в четверг! Заранее спасибо!')