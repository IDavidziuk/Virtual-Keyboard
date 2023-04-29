import './index.html';
import './style.css';

const keysArray = {
  Backquote: {
    keyCode: 192,
    key: '`',
    keyShift: '~',
    keyRus: 'ё',
    keyRusShift: 'Ë',
    keySpecific: 'switch',
  },
  Digit1: {
    keyCode: 49,
    key: '1',
    keyShift: '!',
    keyRus: '1',
    keyRusShift: '!',
    keySpecific: 'switch',
  },
  Digit2: {
    keyCode: 50,
    key: '2',
    keyShift: '@',
    keyRus: '2',
    keyRusShift: '"',
    keySpecific: 'switch',
  },
  Digit3: {
    keyCode: 51,
    key: '3',
    keyShift: '#',
    keyRus: '3',
    keyRusShift: '№',
    keySpecific: 'switch',
  },
  Digit4: {
    keyCode: 52,
    key: '4',
    keyShift: '$',
    keyRus: '4',
    keyRusShift: ';',
    keySpecific: 'switch',
  },
  Digit5: {
    keyCode: 53,
    key: '4',
    keyShift: '%',
    keyRus: '5',
    keyRusShift: '%',
    keySpecific: 'switch',
  },
  Digit6: {
    keyCode: 54,
    key: '6',
    keyShift: '^',
    keyRus: '6',
    keyRusShift: ':',
    keySpecific: 'switch',
  },
  Digit7: {
    keyCode: 55,
    key: '7',
    keyShift: '&',
    keyRus: '7',
    keyRusShift: '?',
    keySpecific: 'switch',
  },
  Digit8: {
    keyCode: 56,
    key: '8',
    keyShift: '*',
    keyRus: '8',
    keyRusShift: '*',
    keySpecific: 'switch',
  },
  Digit9: {
    keyCode: 57,
    key: '9',
    keyShift: '(',
    keyRus: '9',
    keyRusShift: '(',
    keySpecific: 'switch',
  },
  Digit0: {
    keyCode: 48,
    key: '0',
    keyShift: ')',
    keyRus: '0',
    keyRusShift: ')',
    keySpecific: 'switch',
  },
  Minus: {
    keyCode: 189,
    key: '-',
    keyShift: '_',
    keyRus: '-',
    keyRusShift: '_',
    keySpecific: 'switch',
  },
  Equal: {
    keyCode: 187,
    key: '=',
    keyShift: '+',
    keyRus: '=',
    keyRusShift: '+',
    keySpecific: 'switch',
  },
  Backspace: {
    keyCode: 8,
    key: 'delete',
    keyRus: '',
    keySpecific: 'noswitch',
  },
  Tab: {
    keyCode: 9,
    key: 'tab',
    keyRus: '',
    keySpecific: 'noswitch',
  },
  KeyQ: {
    keyCode: 81,
    key: 'q',
    keyShift: 'Q',
    keyRus: 'й',
    keyRusShift: 'Й',
    keySpecific: 'switch',
  },
  KeyW: {
    keyCode: 87,
    key: 'w',
    keyShift: 'W',
    keyRus: 'ц',
    keyRusShift: 'Ц',
    keySpecific: 'switch',
  },
  KeyE: {
    keyCode: 69,
    key: 'e',
    keyShift: 'E',
    keyRus: 'у',
    keyRusShift: 'У',
    keySpecific: 'switch',
  },
  KeyR: {
    keyCode: 82,
    key: 'r',
    keyShift: 'R',
    keyRus: 'к',
    keyRusShift: 'К',
    keySpecific: 'switch',
  },
  KeyT: {
    keyCode: 84,
    key: 't',
    keyShift: 'T',
    keyRus: 'е',
    keyRusShift: 'Е',
    keySpecific: 'switch',
  },
  KeyY: {
    keyCode: 89,
    key: 'y',
    keyShift: 'Y',
    keyRus: 'н',
    keyRusShift: 'Н',
    keySpecific: 'switch',
  },
  KeyU: {
    keyCode: 85,
    key: 'u',
    keyShift: 'U',
    keyRus: 'г',
    keyRusShift: 'Г',
    keySpecific: 'switch',
  },
  KeyI: {
    keyCode: 73,
    key: 'i',
    keyShift: 'I',
    keyRus: 'ш',
    keyRusShift: 'Ш',
    keySpecific: 'switch',
  },
  KeyO: {
    keyCode: 79,
    key: 'o',
    keyShift: 'O',
    keyRus: 'щ',
    keyRusShift: 'Щ',
    keySpecific: 'switch',
  },
  KeyP: {
    keyCode: 80,
    key: 'p',
    keyShift: 'P',
    keyRus: 'з',
    keyRusShift: 'З',
    keySpecific: 'switch',
  },
  BracketLeft: {
    keyCode: 219,
    key: '[',
    keyShift: '{',
    keyRus: 'х',
    keyRusShift: 'Х',
    keySpecific: 'switch',
  },
  BracketRight: {
    keyCode: 221,
    key: ']',
    keyShift: '}',
    keyRus: 'ъ',
    keyRusShift: 'Ъ',
    keySpecific: 'switch',
  },
  Brackslash: {
    keyCode: 220,
    key: '\\',
    keyShift: '|',
    keyRus: '\\',
    keyRusShift: '/',
    keySpecific: 'switch',
  },
  CapsLock: {
    keyCode: 20,
    key: 'CapsLock',
    keyRus: '',
    keySpecific: 'noswitch',
  },
  KeyA: {
    keyCode: 65,
    key: 'a',
    keyShift: 'A',
    keyRus: 'ф',
    keyRusShift: 'Ф',
    keySpecific: 'switch',
  },
  KeyS: {
    keyCode: 83,
    key: 's',
    keyShift: 'S',
    keyRus: 'ы',
    keyRusShift: 'Ы',
    keySpecific: 'switch',
  },
  KeyD: {
    keyCode: 68,
    key: 'd',
    keyShift: 'D',
    keyRus: 'в',
    keyRusShift: 'В',
    keySpecific: 'switch',
  },
  KeyF: {
    keyCode: 70,
    key: 'f',
    keyShift: 'F',
    keyRus: 'а',
    keyRusShift: 'А',
    keySpecific: 'switch',
  },
  KeyG: {
    keyCode: 71,
    key: 'g',
    keyShift: 'G',
    keyRus: 'п',
    keyRusShift: 'П',
    keySpecific: 'switch',
  },
  KeyH: {
    keyCode: 72,
    key: 'h',
    keyShift: 'H',
    keyRus: 'р',
    keyRusShift: 'Р',
    keySpecific: 'switch',
  },
  KeyJ: {
    keyCode: 74,
    key: 'j',
    keyShift: 'J',
    keyRus: 'о',
    keyRusShift: 'О',
    keySpecific: 'switch',
  },
  KeyK: {
    keyCode: 75,
    key: 'k',
    keyShift: 'K',
    keyRus: 'л',
    keyRusShift: 'Л',
    keySpecific: 'switch',
  },
  KeyL: {
    keyCode: 76,
    key: 'l',
    keyShift: 'L',
    keyRus: 'д',
    keyRusShift: 'Д',
    keySpecific: 'switch',
  },
  Semicolon: {
    keyCode: 186,
    key: ';',
    keyShift: ':',
    keyRus: 'ж',
    keyRusShift: 'Ж',
    keySpecific: 'switch',
  },
  Quote: {
    keyCode: 222,
    key: "'",
    keyShift: '"',
    keyRus: 'э',
    keyRusShift: 'Э',
    keySpecific: 'switch',
  },
  Enter: {
    keyCode: 13,
    key: 'Return',
    keyRus: '',
    keySpecific: 'noswitch',
  },
  ShiftLeft: {
    keyCode: 16,
    key: 'Shift',
    keyRus: '',
    keySpecific: 'noswitch',
  },
  KeyZ: {
    keyCode: 90,
    key: 'z',
    keyShift: 'Z',
    keyRus: 'я',
    keyRusShift: 'Я',
    keySpecific: 'switch',
  },
  KeyX: {
    keyCode: 88,
    key: 'x',
    keyShift: 'X',
    keyRus: 'ч',
    keyRusShift: 'Ч',
    keySpecific: 'switch',
  },
  KeyC: {
    keyCode: 67,
    key: 'c',
    keyShift: 'C',
    keyRus: 'с',
    keyRusShift: 'С',
    keySpecific: 'switch',
  },
  KeyV: {
    keyCode: 86,
    key: 'v',
    keyShift: 'V',
    keyRus: 'м',
    keyRusShift: 'М',
    keySpecific: 'switch',
  },
  KeyB: {
    keyCode: 66,
    key: 'b',
    keyShift: 'B',
    keyRus: 'и',
    keyRusShift: 'И',
    keySpecific: 'switch',
  },
  KeyN: {
    keyCode: 78,
    key: 'n',
    keyShift: 'N',
    keyRus: 'т',
    keyRusShift: 'Т',
    keySpecific: 'switch',
  },
  KeyM: {
    keyCode: 77,
    key: 'm',
    keyShift: 'M',
    keyRus: 'ь',
    keyRusShift: 'Ь',
    keySpecific: 'switch',
  },
  Comma: {
    keyCode: 188,
    key: ',',
    keyShift: '<',
    keyRus: 'б',
    keyRusShift: 'Б',
    keySpecific: 'switch',
  },
  Period: {
    keyCode: 190,
    key: '.',
    keyShift: '>',
    keyRus: 'ю',
    keyRusShift: 'Ю',
    keySpecific: 'switch',
  },
  Slash: {
    keyCode: 191,
    key: '/',
    keyShift: '?',
    keyRus: '.',
    keyRusShift: ',',
    keySpecific: 'switch',
  },
  ArrowUp: {
    keyCode: 38,
    key: '▲',
    keyRus: '▲',
    keySpecific: 'noswitch',
  },
  ShiftRight: {
    keyCode: 16,
    key: 'Shift',
    keyRus: '',
    keySpecific: 'noswitch',
  },
  ControlLeft: {
    keyCode: 17,
    key: 'Control',
    keyRus: '⌃',
    keySpecific: 'noswitch',
  },
  AltLeft: {
    keyCode: 18,
    key: 'Option',
    keyRus: '⌥',
    keySpecific: 'noswitch',
  },
  MetaLeft: {
    keyCode: 91,
    key: 'Meta',
    keyRus: '⌘',
    keySpecific: 'noswitch',
  },
  Space: {
    keyCode: 32,
    key: ' ',
    keyRus: ' ',
    keySpecific: 'noswitch',
  },
  MetaRight: {
    keyCode: 93,
    key: 'Meta',
    keyRus: '⌘',
    keySpecific: 'noswitch',
  },
  AltRight: {
    keyCode: 18,
    key: 'Option',
    keyRus: '⌥',
    keySpecific: 'noswitch',
  },
  ArrowLeft: {
    keyCode: 37,
    key: '◀︎',
    keyRus: '◀︎',
    keySpecific: 'noswitch',
  },
  ArrowDown: {
    keyCode: 40,
    key: '▼',
    keyRus: '▼',
    keySpecific: 'noswitch',
  },
  ArrowRight: {
    keyCode: 39,
    key: '►',
    keyRus: '►',
    keySpecific: 'noswitch',
  },
};

const body = document.querySelector('body');
const keys = Object.entries(keysArray);

function createKeyboard(array) {
  const oneKey = document.createElement('div');
  oneKey.classList.add('key-button');
  let keyItem = '';

  for (let i = 0; i < keys.length; i += 1) {
    if (keys[i][1].keySpecific === 'switch') {
      keyItem += `<button class="key-button switch-key" data = ${keys[i][1].keyCode} data-code = ${keys[i][0]}>${keys[i][1].key}</button>`;
    } else if (
      keys[i][0] === 'ArrowDown'
        || keys[i][0] === 'ArrowRight'
        || keys[i][0] === 'ArrowUp'
        || keys[i][0] === 'ArrowLeft'
    ) {
      keyItem += `<button class="key-button arrow" data = ${keys[i][1].keyCode} data-code = ${keys[i][0]}>${keys[i][1].key} </button>`;
    } else if (keys[i][0] === 'Space') {
      keyItem += `<button class="key-button noswitch-key space" data = ${keys[i][1].keyCode} data-code = ${keys[i][0]}>${keys[i][1].key}</button>`;
    } else {
      keyItem += `<button class="key-button noswitch-key ${keys[i][1].key}" data = ${keys[i][1].keyCode} data-code = ${keys[i][0]} id="${keys[i][0]}"">${keys[i][1].key}
      <i class = "add-el">${keys[i][1].keyRus}</i>
      </button>`;
    }
  }
  document.querySelector('.keyboard').innerHTML = keyItem;
}

function createTextareaAndAddition() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  const textContent = document.createElement('div');
  textContent.classList.add('text-content');

  const textarea = document.createElement('textarea');
  textarea.autofocus = true;
  textarea.rows = '10';
  textarea.cols = '80';
  textarea.classList.add('textarea')

  const nameOfOS = document.createElement('h1');
  nameOfOS.innerText = 'For MacBook 2020';

  const addInf = document.createElement('h2');
  addInf.innerText = "Use 'option' to change languages";

  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');

  wrapper.append(textContent, textarea, keyboard);
  textContent.append(nameOfOS, addInf);
  body.append(wrapper);
  createKeyboard(keysArray);
}

const textarea = document.querySelector('.textarea');
const keyButton = document.querySelectorAll('.key-button')

function onKeyDownHandler (event) {
    document.querySelector(`[data-code = ${event.code}]`).classList.add('active')
}
function onKeyUpHandler (event) {
    document.querySelector(`[data-code = ${event.code}]`).classList.remove('active')
}

createTextareaAndAddition();
document.addEventListener('keydown', onKeyDownHandler);
document.addEventListener('keyup', onKeyUpHandler)



