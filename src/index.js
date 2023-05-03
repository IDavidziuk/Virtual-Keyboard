import './index.html'
import './style.css'
import { keysArrayEng, keysArrayRu } from './keyboard-content'

const body = document.querySelector('body')

// function changeLeng() {
//     if (!localStorage.getItem('lang')) {
//         localStorage.setItem('lang', 'en');
//       }
// }

//создание клавиатуры
function createKeyboard(array) {
  const keyElement = document.createElement('button')
  keyElement.classList.add('key-button')
  keyElement.setAttribute('type', 'button')
  let keyItem = ''

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

  //this.elements.keysContainer.appendChild(this.createKeyboard)

  wrapper.append(textContent, textarea, keyboard)
  textContent.append(nameOfOS, addInf)
  body.append(wrapper)

  //   if (localStorage.getItem('lang') === 'en') {
  //     createKeyboard(keysArrayEng)
  //   } else {
  //     createKeyboard(keysArrayRu)
  //   }
}
createTextareaAndAddition()
createKeyboard(keysArrayEng)

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

function onKeyDownMouseHandler(event) {
  if (
    event.currentTarget !== document.querySelector('[data-code = CapsLock]')
  ) {
    event.currentTarget.classList.add('active')
  } else {
    event.currentTarget.classList.toggle('active')
  }
}

function onKeyUpMouseHandler(event) {
  if (
    event.currentTarget !== document.querySelector('[data-code = CapsLock]')
  ) {
    event.currentTarget.classList.remove('active')
  }
}

document.addEventListener('keydown', onKeyDownHandler)
document.addEventListener('keyup', onKeyUpHandler)
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
    document
      .querySelector('[data-code = CapsLock]')
      .classList.contains('active')
  ) {
    textarea.value += event.currentTarget.innerText.toUpperCase()
  }
  if (
    event.currentTarget == document.querySelector('[data-code = CapsLock]') ||
    event.currentTarget == document.querySelector('[data-code = ShiftRight]') ||
    event.currentTarget == document.querySelector('[data-code = ShiftLeft]') ||
    event.currentTarget == document.querySelector('[data-code = Enter]')
  ) {
    textarea.value = ''
  }
  //   else {
  //     textarea.value += event.currentTarget.innerText
  //   }
}

keyButton.forEach((element) => element.addEventListener('click', specialButton))
// keyButton.forEach((element) => element.addEventListener('keydown', specialButton))
// alert(
//   'Привет. я не доконца еще доделала работу, буду благодарна, если посмотришь в четверг! Заранее спасибо!'
// )
