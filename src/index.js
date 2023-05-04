import './index.html';
import './style.css';
import keysArray from './keyboard-content';

const body = document.querySelector('body');

let keyItem = '';
let langEng = true;
// создание клавиатуры
function createKeyboard(array) {
  keyItem = '';
  const keyElement = document.createElement('button');
  keyElement.classList.add('key-button');
  keyElement.setAttribute('type', 'button');

  array.forEach((el) => {
    if (el.keyRusShift) {
      keyItem += `<button class="key-button switch" data = ${
        el.keyCode
      } data-code = ${el.code}  id = ${el.code.toLowerCase()}>${
        el.key
      } </button>`;
    } else if (
      el.code === 'ArrowDown'
      || el.code === 'ArrowRight'
      || el.code === 'ArrowUp'
      || el.code === 'ArrowLeft'
    ) {
      keyItem += `<button class="key-button arrow" data = ${
        el.keyCode
      } data-code = ${el.code} id = ${el.code.toLowerCase()}>${
        el.key
      } </button>`;
    } else if (el.code === 'Space') {
      keyItem += `<button class="key-button space" data = ${
        el.keyCode
      } data-code = ${el.code} id = ${el.code.toLowerCase()}>${el.key}</button>`;
    } else {
      keyItem += `<button class="key-button  ${el.key.toLowerCase()}" data = ${
        el.keyCode
      } data-code = ${el.code} id = ${el.code.toLowerCase()}>${el.key}
      </button>`;
    }
  });
  document.querySelector('.keyboard').innerHTML = keyItem;
}

function createTextareaAndAddition() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  const textContent = document.createElement('div');
  textContent.classList.add('text-content');

  const textarea = document.createElement('textarea');
  textarea.autofocus = true;
  textarea.classList.add('textarea');

  const nameOfOS = document.createElement('h1');
  nameOfOS.innerText = 'For MacBook 2020';

  const addInf = document.createElement('h2');
  addInf.innerText = "Use 'option' to change languages";

  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');

  wrapper.append(textContent, textarea, keyboard);
  textContent.append(nameOfOS, addInf);
  body.append(wrapper);
}

createTextareaAndAddition();
createKeyboard(keysArray);

const textarea = document.querySelector('.textarea');

const changeLang = (en = true) => {
  let ruKey;
  const keyButton = document.querySelectorAll('.key-button');
  keyButton.forEach((elem) => {
    const el = elem;
    ruKey = keysArray.find((item) => item.code.toLowerCase() === el.id);
    if (ruKey.keyRu) {
      if (en) {
        el.innerHTML = ruKey.key;
      } else {
        el.innerHTML = ruKey.keyRu;
      }
    }
  });
};

function onKeyDownHandler(event) {
  if (event.code !== 'CapsLock') {
    document.querySelector(`[data-code = ${event.code}]`).add('active');
  } else {
    document
      .querySelector(`[data-code = ${event.code}]`)
      .classList.toggle('active');
  }

  if (event.code === 'CapsLock') {
    const letters = document.querySelectorAll('.switch');
    letters.forEach((elem) => {
      const el = elem;
      if (
        document
          .querySelector('[data-code = CapsLock]')
          .classList.contains('active')
      ) {
        el.innerText = el.innerText.toUpperCase();
      } else {
        el.innerText = el.innerText.toLowerCase();
      }
    });
  }
  const oneElement = document.getElementById(event.code.toLowerCase());
  console.log(oneElement);
  if (
    oneElement.classList.contains('switch')
    || event.code === 'ArrowUp'
    || event.code === 'ArrowDown'
  ) {
    keyItem = event.key;
    textarea.innerText += keyItem;
  }
  if (event.code === 'MetaLeft') {
    langEng = !langEng;
    if (langEng) {
      localStorage.setItem('lang', 'en');
    } else {
      localStorage.setItem('lang', 'ru');
    }
    changeLang(langEng);
  }
}
function onKeyUpHandler(event) {
  document
    .querySelector(`[data-code = ${event.code}]`)
    .classList.remove('active');
}

body.addEventListener('keydown', onKeyDownHandler);
body.addEventListener('keyup', onKeyUpHandler);

function onKeyDownMouseHandler(event) {
  if (event.target !== document.querySelector('[data-code = CapsLock]')) {
    event.target.classList.add('active');
  } else {
    event.target.classList.toggle('active');
  }
}

function onKeyUpMouseHandler(event) {
  if (event.target !== document.querySelector('[data-code = CapsLock]')) {
    event.target.classList.remove('active');
  }
}
const keyButton = document.querySelectorAll('.key-button');
keyButton.forEach((element) => element.addEventListener('mousedown', onKeyDownMouseHandler));
keyButton.forEach((element) => element.addEventListener('mouseup', onKeyUpMouseHandler));

if (localStorage.getItem('lang') === 'ru') {
  langEng = false;
  changeLang(langEng);
}

function specialButton(event) {
  textarea.focus();
  if (event.target === document.querySelector('[data-code= Tab]')) {
    textarea.value += '    ';
  }
  if (event.target === document.querySelector('[data-code = Backspace]')) {
    textarea.value = textarea.value.substring(0, textarea.selectionStart - 1)
      + textarea.value.substring(textarea.selectionStart);
    textarea.selectionEnd = textarea.selectionStart + 1;
  }
  if (event.target === document.querySelector('[data-code = Enter]')) {
    textarea.value += '\n';
  }
  if (event.target === document.querySelector('[data-code = Space]')) {
    textarea.value += ' ';
  }
  if (event.target === document.querySelector('[data-code = ArrowLeft]')) {
    textarea.selectionStart -= 1;
    textarea.selectionEnd -= 1;
  }
  if (event.target === document.querySelector('[data-code = ArrowRight]')) {
    textarea.selectionStart += 1;
  }

  if (event.target === document.querySelector('[data-code = CapsLock]')) {
    const letters = document.querySelectorAll('.switch');
    letters.forEach((elem) => {
      const el = elem;
      const capsLock = document.querySelector('[data-code = CapsLock]');
      if (capsLock.classList.contains('active')) {
        el.innerText = el.innerText.toUpperCase();
      } else {
        el.innerText = el.innerText.toLowerCase();
      }
    });
  }
  if (
    event.target.classList.contains('switch')
    || event.target === document.querySelector('[data-code = ArrowUp]')
    || event.target === document.querySelector('[data-code = ArrowDown]')
  ) {
    keyItem = event.target.innerText;
    textarea.value += keyItem;
  }
  if (event.target === document.querySelector('[data-code = MetaLeft]')) {
    langEng = !langEng;
    if (langEng) {
      localStorage.setItem('lang', 'en');
    } else {
      localStorage.setItem('lang', 'ru');
    }
    changeLang(langEng);
  }
}

keyButton.forEach((element) => element.addEventListener('click', specialButton));
