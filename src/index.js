import './index.html'
import './style.css'
import { keysArray } from './keyboard-content'

const body = document.querySelector('body')

let keyItem = ''
let langEng = true
//создание клавиатуры
function createKeyboard(array) {
  keyItem = ''
  const keyElement = document.createElement('button')
  keyElement.classList.add('key-button')
  keyElement.setAttribute('type', 'button')

  array.forEach(function (el) {
    if (el.keyRusShift) {
      keyItem += `<button class="key-button switch" data = ${
        el.keyCode
      } data-code = ${el.code}  id = ${el.code.toLowerCase()}>${
        el.key
      } </button>`
    } else if (
      el.code === 'ArrowDown' ||
      el.code === 'ArrowRight' ||
      el.code === 'ArrowUp' ||
      el.code === 'ArrowLeft'
    ) {
      keyItem += `<button class="key-button arrow" data = ${
        el.keyCode
      } data-code = ${el.code} id = ${el.code.toLowerCase()}>${
        el.key
      } </button>`
    } else if (el.code === 'Space') {
      keyItem += `<button class="key-button space" data = ${
        el.keyCode
      } data-code = ${el.code} id = ${el.code.toLowerCase()}>${el.key}</button>`
    } else {
      keyItem += `<button class="key-button  ${el.key.toLowerCase()}" data = ${
        el.keyCode
      } data-code = ${el.code} id = ${el.code.toLowerCase()}>${el.key}
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
createKeyboard(keysArray)

const textarea = document.querySelector('.textarea')

function onKeyDownHandler(event) {
  document.querySelector(`[data-code = ${event.code}]`).classList.add('active')
}
function onKeyUpHandler(event) {
  document
    .querySelector(`[data-code = ${event.code}]`)
    .classList.remove('active')
}

document.addEventListener('keydown', onKeyDownHandler)
document.addEventListener('keyup', onKeyUpHandler)

function onKeyDownMouseHandler(event) {
  if (event.target !== document.querySelector('[data-code = CapsLock]')) {
    event.target.classList.add('active')
  } else {
    event.target.classList.toggle('active')
  }
}

function onKeyUpMouseHandler(event) {
  if (event.target !== document.querySelector('[data-code = CapsLock]')) {
    event.target.classList.remove('active')
  }
}
const keyButton = document.querySelectorAll('.key-button')
keyButton.forEach((element) =>
  element.addEventListener('mousedown', onKeyDownMouseHandler)
)
keyButton.forEach((element) =>
  element.addEventListener('mouseup', onKeyUpMouseHandler)
)

const changeLang = (en = true) => {
  let ruKey
  keyButton.forEach((elem) => {
    ruKey = keysArray.find((item) => item.code.toLowerCase() === elem.id)
    console.log(ruKey)
    if (ruKey.keyRu) {
      en ? (elem.innerHTML = ruKey.key) : (elem.innerHTML = ruKey.keyRu)
    }
  })
}

if (localStorage.getItem('lang') === 'ru') {
  langEng = false
  changeLang(langEng)
}

function specialButton(event) {
  textarea.focus()

  if (event.target === document.querySelector('[data-code= Tab]')) {
    textarea.value += '    '
  }
  if (event.target === document.querySelector('[data-code = Backspace]')) {
    textarea.value =
      textarea.value.substring(0, textarea.selectionStart - 1) +
      textarea.value.substring(textarea.selectionStart)
    textarea.selectionEnd = textarea.selectionStart + 1
  }
  if (event.target === document.querySelector('[data-code = Enter]')) {
    textarea.value += '\n'
  }
  if (event.target === document.querySelector('[data-code = Space]')) {
    textarea.value += ' '
  }
  if (event.target === document.querySelector('[data-code = ArrowLeft]')) {
    textarea.selectionStart = textarea.selectionStart - 1
    textarea.selectionEnd = textarea.selectionEnd - 1
  }
  if (event.target === document.querySelector('[data-code = ArrowRight]')) {
    textarea.selectionStart = textarea.selectionStart + 1
  }

  if (event.target === document.querySelector('[data-code = CapsLock]')) {
    const letters = document.querySelectorAll('.switch')
    letters.forEach((elem) => {
      document
        .querySelector('[data-code = CapsLock]')
        .classList.contains('active')
        ? (elem.innerText = elem.innerText.toUpperCase())
        : (elem.innerText = elem.innerText.toLowerCase())
    })
  }
  if (
    event.target.classList.contains('switch') ||
    event.target === document.querySelector('[data-code = ArrowUp]') ||
    event.target === document.querySelector('[data-code = ArrowDown]')
  ) {
    keyItem = event.target.innerText
    textarea.value += keyItem
  }
  if (event.target === document.querySelector('[data-code = MetaLeft]')) {
    langEng = !langEng
    langEng
      ? localStorage.setItem('lang', 'en')
      : localStorage.setItem('lang', 'ru')
    changeLang(langEng)
  }
}

keyButton.forEach((element) => element.addEventListener('click', specialButton))
// keyButton.forEach((element) => element.addEventListener('keydown', specialButton))
// alert
// ('Привет. я не доконца еще доделала работу, буду благодарна, если посмотришь в четверг! Заранее спасибо!')
