import './index.html'
import './style.css'
import { keysArrayEng, keysArrayRu } from './keyboard-content'

const body = document.querySelector('body')

let keyItem = ''
//создание клавиатуры
function createKeyboard(array) {
  const keyElement = document.createElement('button')
  keyElement.classList.add('key-button')
  keyElement.setAttribute('type', 'button')

  array.forEach(function (el) {
    let keys = Object.values(el)
    if (keys.length === 4) {
      keyItem += `<button class="key-button switch" data = ${keys[1]} data-code = ${keys[0]}>${keys[2]} </button>`
    } else if (
      keys[0] === 'ArrowDown' ||
      keys[0] === 'ArrowRight' ||
      keys[0] === 'ArrowUp' ||
      keys[0] === 'ArrowLeft'
    ) {
      keyItem += `<button class="key-button arrow" data = ${keys[1]} data-code = ${keys[0]}>${keys[2]} </button>`
    } else if (keys[0] === 'Space') {
      keyItem += `<button class="key-button space" data = ${keys[1]} data-code = ${keys[0]}>${keys[2]}</button>`
    } else {
      keyItem += `<button class="key-button  ${keys[2].toLowerCase()}" data = ${
        keys[1]
      } data-code = ${keys[0]} id = ${keys[0].toLowerCase()}>${keys[2]}
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

if (!localStorage.getItem('lang')) {
  localStorage.setItem('lang', 'en')
}
const langCurr = localStorage.getItem('lang')
if (langCurr === 'en') {
  createKeyboard(keysArrayEng)
} else {
  createKeyboard(keysArrayRu)
}

// let keys

// arr.forEach(function (el) {
//   keys = Object.values(el)
// })

const textarea = document.querySelector('.textarea')
const keyButton = document.querySelectorAll('.key-button')

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
  if (
    event.currentTarget !== document.querySelector('[data-code = CapsLock]')
  ) {
    event.currentTarget.classList.add('active')
  } else {
    event.currentTarget.classList.toggle('active')
  }
}

function onKeyUpMouseHandler(event, keys) {
  if (
    event.currentTarget !== document.querySelector('[data-code = CapsLock]')
  ) {
    event.currentTarget.classList.remove('active')
  }
}

keyButton.forEach((element) =>
  element.addEventListener('mousedown', onKeyDownMouseHandler)
)
keyButton.forEach((element) =>
  element.addEventListener('mouseup', onKeyUpMouseHandler)
)

function specialButton(event) {
  textarea.focus()

  if (event.currentTarget === document.querySelector('[data-code= Tab]')) {
    textarea.value += '    '
  }
  if (
    event.currentTarget === document.querySelector('[data-code = Backspace]')
  ) {
    textarea.value =
      textarea.value.slice(0, textarea.selectionStart - 1) +
      textarea.value.slice(textarea.selectionStart)
    textarea.selectionEnd = textarea.selectionStart - 1
  }
  if (event.currentTarget === document.querySelector('[data-code = Enter]')) {
    textarea.value += '\n'
  }
  if (event.currentTarget === document.querySelector('[data-code = Space]')) {
    textarea.value += ' '
  }
  if (
    event.currentTarget === document.querySelector('[data-code = ArrowLeft]')
  ) {
    textarea.selectionStart = textarea.selectionStart - 1
    textarea.selectionEnd = textarea.selectionEnd - 1
  }
  if (
    event.currentTarget === document.querySelector('[data-code = ArrowRight]')
  ) {
    textarea.selectionStart = textarea.selectionStart + 1
  }
  if (
    event.currentTarget === document.querySelector('[data-code = CapsLock]')
  ) {
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
    event.currentTarget === document.querySelector('[data-code = MetaLeft]') ||
    event.currentTarget === document.querySelector('[data-code = MetaRight]')
  ) {
    if (localStorage.getItem('lang') === 'en') {
      localStorage.setItem('lang', 'ru')
    }
  } else {
    localStorage.setItem('lang', 'en')
  }

  if (event.target.classList.contains('switch')) {
    keyItem = event.target.innerText
    textarea.value += keyItem
  }
}

keyButton.forEach((element) => element.addEventListener('click', specialButton))
// keyButton.forEach((element) => element.addEventListener('keydown', specialButton))
// alert(
//   'Привет. я не доконца еще доделала работу, буду благодарна, если посмотришь в четверг! Заранее спасибо!'
// )
