import './index.html';
import './style.css';


const keysArray = [
    { code: 'Backquote', 
      keyCode: 192,
      key: '`',
      keyShift: '~',
      keyRus: 'ё',
      keyRusShift: 'Ë',
      keySpecific: 'switch',
    },
    { code: 'Digit1', 
      keyCode: 49,
      key: '1',
      keyShift: '!',
      keyRus: '1',
      keyRusShift: '!',
      keySpecific: 'switch',
    },
    { code: 'Digit2', 
      keyCode: 50,
      key: '2',
      keyShift: '@',
      keyRus: '2',
      keyRusShift: '"',
      keySpecific: 'switch',
    },
    { code: 'Digit3',
      keyCode: 51,
      key: '3',
      keyShift: '#',
      keyRus: '3',
      keyRusShift: '№',
      keySpecific: 'switch',
    },
    {code: 'Digit4',
      keyCode: 52,
      key: '4',
      keyShift: '$',
      keyRus: '4',
      keyRusShift: ';',
      keySpecific: 'switch',
    },
    { code: 'Digit5', 
      keyCode: 53,
      key: '4',
      keyShift: '%',
      keyRus: '5',
      keyRusShift: '%',
      keySpecific: 'switch',
    },
    {code: 'Digit6', 
      keyCode: 54,
      key: '6',
      keyShift: '^',
      keyRus: '6',
      keyRusShift: ':',
      keySpecific: 'switch',
    },
    {code: 'Digit7', 
      keyCode: 55,
      key: '7',
      keyShift: '&',
      keyRus: '7',
      keyRusShift: '?',
      keySpecific: 'switch',
    },
    { code: 'Digit8', 
      keyCode: 56,
      key: '8',
      keyShift: '*',
      keyRus: '8',
      keyRusShift: '*',
      keySpecific: 'switch',
    },
    {code: 'Digit9', 
      keyCode: 57,
      key: '9',
      keyShift: '(',
      keyRus: '9',
      keyRusShift: '(',
      keySpecific: 'switch',
    },
   {code: 'Digit0', 
      keyCode: 48,
      key: '0',
      keyShift: ')',
      keyRus: '0',
      keyRusShift: ')',
      keySpecific: 'switch',
    },
    {code: 'Minus', 
      keyCode: 189,
      key: '-',
      keyShift: '_',
      keyRus: '-',
      keyRusShift: '_',
      keySpecific: 'switch',
    },
    {code: 'Equal',
      keyCode: 187,
      key: '=',
      keyShift: '+',
      keyRus: '=',
      keyRusShift: '+',
      keySpecific: 'switch',
    },
    { code: 'Backspace',
      keyCode: 8,
      key: 'delete',
      keyRus: '',
      keySpecific: 'noswitch',
    },
    { code: 'Tab',
      keyCode: 9,
      key: 'tab',
      keyRus: '',
      keySpecific: 'noswitch',
    },
    { code: 'KeyQ',
      keyCode: 81,
      key: 'q',
      keyShift: 'Q',
      keyRus: 'й',
      keyRusShift: 'Й',
      keySpecific: 'switch',
    },
    {code: 'KeyW',
      keyCode: 87,
      key: 'w',
      keyShift: 'W',
      keyRus: 'ц',
      keyRusShift: 'Ц',
      keySpecific: 'switch',
    },
    { code: 'KeyE',
      keyCode: 69,
      key: 'e',
      keyShift: 'E',
      keyRus: 'у',
      keyRusShift: 'У',
      keySpecific: 'switch',
    },
    {code:'KeyR',
      keyCode: 82,
      key: 'r',
      keyShift: 'R',
      keyRus: 'к',
      keyRusShift: 'К',
      keySpecific: 'switch',
    },
    {code:'KeyT',
      keyCode: 84,
      key: 't',
      keyShift: 'T',
      keyRus: 'е',
      keyRusShift: 'Е',
      keySpecific: 'switch',
    },
    {code: 'KeyY',
      keyCode: 89,
      key: 'y',
      keyShift: 'Y',
      keyRus: 'н',
      keyRusShift: 'Н',
      keySpecific: 'switch',
    },
    {code:'KeyU',
      keyCode: 85,
      key: 'u',
      keyShift: 'U',
      keyRus: 'г',
      keyRusShift: 'Г',
      keySpecific: 'switch',
    },
    {code:'KeyI',
      keyCode: 73,
      key: 'i',
      keyShift: 'I',
      keyRus: 'ш',
      keyRusShift: 'Ш',
      keySpecific: 'switch',
    },
    {code:'KeyO',
      keyCode: 79,
      key: 'o',
      keyShift: 'O',
      keyRus: 'щ',
      keyRusShift: 'Щ',
      keySpecific: 'switch',
    },
    {code:'KeyP',
      keyCode: 80,
      key: 'p',
      keyShift: 'P',
      keyRus: 'з',
      keyRusShift: 'З',
      keySpecific: 'switch',
    },
    {code:'BracketLeft',
      keyCode: 219,
      key: '[',
      keyShift: '{',
      keyRus: 'х',
      keyRusShift: 'Х',
      keySpecific: 'switch',
    },
    {code:'BracketRight',
      keyCode: 221,
      key: ']',
      keyShift: '}',
      keyRus: 'ъ',
      keyRusShift: 'Ъ',
      keySpecific: 'switch',
    },
    {code:'Brackslash',
      keyCode: 220,
      key: '\\',
      keyShift: '|',
      keyRus: '\\',
      keyRusShift: '/',
      keySpecific: 'switch',
    },
    {code:'CapsLock',
      keyCode: 20,
      key: 'CapsLock',
      keyRus: '',
      keySpecific: 'noswitch',
    },
    {code:'KeyA',
      keyCode: 65,
      key: 'a',
      keyShift: 'A',
      keyRus: 'ф',
      keyRusShift: 'Ф',
      keySpecific: 'switch',
    },
    {code:'KeyS',
      keyCode: 83,
      key: 's',
      keyShift: 'S',
      keyRus: 'ы',
      keyRusShift: 'Ы',
      keySpecific: 'switch',
    },
    {code:'KeyD',
      keyCode: 68,
      key: 'd',
      keyShift: 'D',
      keyRus: 'в',
      keyRusShift: 'В',
      keySpecific: 'switch',
    },
    {code:'KeyF',
      keyCode: 70,
      key: 'f',
      keyShift: 'F',
      keyRus: 'а',
      keyRusShift: 'А',
      keySpecific: 'switch',
    },
    {code:'KeyG',
      keyCode: 71,
      key: 'g',
      keyShift: 'G',
      keyRus: 'п',
      keyRusShift: 'П',
      keySpecific: 'switch',
    },
    {code:'KeyH',
      keyCode: 72,
      key: 'h',
      keyShift: 'H',
      keyRus: 'р',
      keyRusShift: 'Р',
      keySpecific: 'switch',
    },
    {code:'KeyJ',
      keyCode: 74,
      key: 'j',
      keyShift: 'J',
      keyRus: 'о',
      keyRusShift: 'О',
      keySpecific: 'switch',
    },
    {code:'KeyK',
      keyCode: 75,
      key: 'k',
      keyShift: 'K',
      keyRus: 'л',
      keyRusShift: 'Л',
      keySpecific: 'switch',
    },
    {code:'KeyL',
      keyCode: 76,
      key: 'l',
      keyShift: 'L',
      keyRus: 'д',
      keyRusShift: 'Д',
      keySpecific: 'switch',
    },
    {code:'Semicolon',
      keyCode: 186,
      key: ';',
      keyShift: ':',
      keyRus: 'ж',
      keyRusShift: 'Ж',
      keySpecific: 'switch',
    },
    {code:'Quote',
      keyCode: 222,
      key: "'",
      keyShift: '"',
      keyRus: 'э',
      keyRusShift: 'Э',
      keySpecific: 'switch',
    },
    {code:'Enter',
      keyCode: 13,
      key: 'Return',
      keyRus: '',
      keySpecific: 'noswitch',
    },
    {code:'ShiftLeft',
      keyCode: 16,
      key: 'Shift',
      keyRus: '',
      keySpecific: 'noswitch',
    },
    {code:'KeyZ',
      keyCode: 90,
      key: 'z',
      keyShift: 'Z',
      keyRus: 'я',
      keyRusShift: 'Я',
      keySpecific: 'switch',
    },
    {code:'KeyX',
      keyCode: 88,
      key: 'x',
      keyShift: 'X',
      keyRus: 'ч',
      keyRusShift: 'Ч',
      keySpecific: 'switch',
    },
    {code:'KeyC',
      keyCode: 67,
      key: 'c',
      keyShift: 'C',
      keyRus: 'с',
      keyRusShift: 'С',
      keySpecific: 'switch',
    },
    {code:'KeyV',
      keyCode: 86,
      key: 'v',
      keyShift: 'V',
      keyRus: 'м',
      keyRusShift: 'М',
      keySpecific: 'switch',
    },
    {code:'KeyB',
      keyCode: 66,
      key: 'b',
      keyShift: 'B',
      keyRus: 'и',
      keyRusShift: 'И',
      keySpecific: 'switch',
    },
    {code:'KeyN',
      keyCode: 78,
      key: 'n',
      keyShift: 'N',
      keyRus: 'т',
      keyRusShift: 'Т',
      keySpecific: 'switch',
    },
    {code:'KeyM',
      keyCode: 77,
      key: 'm',
      keyShift: 'M',
      keyRus: 'ь',
      keyRusShift: 'Ь',
      keySpecific: 'switch',
    },
    {code:'Comma',
      keyCode: 188,
      key: ',',
      keyShift: '<',
      keyRus: 'б',
      keyRusShift: 'Б',
      keySpecific: 'switch',
    },
    {code:'Period',
      keyCode: 190,
      key: '.',
      keyShift: '>',
      keyRus: 'ю',
      keyRusShift: 'Ю',
      keySpecific: 'switch',
    },
    {code:'Slash',
      keyCode: 191,
      key: '/',
      keyShift: '?',
      keyRus: '.',
      keyRusShift: ',',
      keySpecific: 'switch',
    },
    {code:'ArrowUp',
      keyCode: 38,
      key: '▲',
      keyRus: '',
      keySpecific: 'noswitch',
    },
    {code:'ShiftRight',
      keyCode: 16,
      key: 'Shift',
      keyRus: '',
      keySpecific: 'noswitch',
    },
    {code:'ControlLeft',
      keyCode: 17,
      key: 'Control',
      keyRus: '⌃',
      keySpecific: 'noswitch',
    },
    {code:'AltLeft',
      keyCode: 18,
      key: 'Option',
      keyRus: '⌥',
      keySpecific: 'noswitch',
    },
    {code:'MetaLeft',
      keyCode: 91,
      key: 'Command',
      keyRus: '⌘',
      keySpecific: 'noswitch',
    },
    { code:'Space',
      keyCode: 32,
      key: ' ',
      keyRus: ' ',
      keySpecific: 'noswitch',
    },
    {code:'MetaRight',
      keyCode: 93,
      key: 'Command',
      keyRus: '⌘',
      keySpecific: 'noswitch',
    },
    {code:'AltRight',
      keyCode: 18,
      key: 'Option',
      keyRus: '⌥',
      keySpecific: 'noswitch',
    },
    {code:'ArrowLeft',
      keyCode: 37,
      key: '◀︎',
      keyRus: '',
      keySpecific: 'noswitch',
    },
    {code:'ArrowDown',
      keyCode: 40,
      key: '▼',
      keyRus: '',
      keySpecific: 'noswitch',
    },
    {code:'ArrowRight',
      keyCode: 39,
      key: '►',
      keyRus: '',
      keySpecific: 'noswitch',
    },
  ];
  

const body = document.querySelector('body');
let languageCurr = localStorage.getItem('keyboard-lang') || 'en';

// function changeLeng () {
//     if(localStorage.languageCurr === 'ru') {
//         localStorage.setItem('keyboard-lang', 'en')
//     }
// }

function takeKays () {
    let key 
    keysArray.forEach(function(el){
    key = Object.entries(el) 
  })
  return key
  }
let oneKey =  takeKays ()

//создание клавиатуры
function createKeyboard(array) {
  const oneKey = document.createElement('div');
  oneKey.classList.add('key-button');
  let keyItem = '';
  array.forEach(function(el){
  let key = Object.entries(el)
    
if (key.length === 7 && languageCurr === 'en') {
      keyItem += `<button class="key-button switch-key" data = ${key[1][1]} data-code = ${key[0][1]}>${key[2][1]}
      <i class = "switch-el">${key[3][1]}</i>
      </button>`;
    } 
    else if (key.length === 7 && languageCurr === 'ru'){
        keyItem += `<button class="key-button switch-key" data = ${key[1][1]} data-code = ${key[0][1]}>${key[2][1]}
      <i class = "switch-el">${key[3][1]}</i>
      </button>`;
    }
     else if (
      key[0][1] === 'ArrowDown'
        || key[0][1] === 'ArrowRight'
        || key[0][1] === 'ArrowUp'
        || key[0][1] === 'ArrowLeft'
    ) {
      keyItem += `<button class="key-button arrow" data = ${key[1][1]} data-code = ${key[0][1]}>${key[2][1]} </button>`;
    } else if (key[0][1] === 'Space') {
      keyItem += `<button class="key-button noswitch-key space" data = ${key[1][1]} data-code = ${key[0][1]}>${key[2][1]}</button>`;
    } else {
      keyItem += `<button class="key-button noswitch-key ${key[2][1]}" data = ${key[1][1]} data-code = ${key[0][1]} id = ${key[0][1]}>${key[2][1]}
      <i class = "add-el">${key[3][1]}</i>
      </button>`;
    }
  
})
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
 
}

createTextareaAndAddition();
createKeyboard(keysArray);

const textarea = document.querySelector('.textarea');
const keyButton = document.querySelectorAll('.key-button')



function onKeyDownHandler (event) {
    document.querySelector('.textarea').focus()
    document.querySelector(`[data-code = ${event.code}]`).classList.add('active')
}


function onKeyUpHandler (event) {
    document.querySelector(`[data-code = ${event.code}]`).classList.remove('active')
}

keyButton.forEach(function(el) {
    let active = document.getElementsByClassName('active')
    el.onclick = function (event) {
        let currActive = active[0];
        if(currActive){
            currActive.classList.remove('active')
        }
        document.querySelector('.textarea').focus()
         let code = this.getAttribute('data');
         if(currActive !== this){
         this.classList.add('active')
        }
        textarea.value += String.fromCharCode(code).toLowerCase()
         console.log(code)
    }
})
    






document.addEventListener('keydown', onKeyDownHandler);
document.addEventListener('keyup', onKeyUpHandler)




