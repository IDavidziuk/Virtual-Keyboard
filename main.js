/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/keyboard-content.js":
/*!*********************************!*\
  !*** ./src/keyboard-content.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const keysArray = [{
  code: 'Backquote',
  keyCode: 192,
  key: '`',
  keyShift: '~',
  keyRu: 'ё',
  keyRusShift: 'Ë'
}, {
  code: 'Digit1',
  keyCode: 49,
  key: '1',
  keyShift: '!',
  keyRu: '1',
  keyRusShift: '!'
}, {
  code: 'Digit2',
  keyCode: 50,
  key: '2',
  keyShift: '@',
  keyRu: '2',
  keyRusShift: '"'
}, {
  code: 'Digit3',
  keyCode: 51,
  key: '3',
  keyShift: '#',
  keyRu: '3',
  keyRusShift: '№'
}, {
  code: 'Digit4',
  keyCode: 52,
  key: '4',
  keyShift: '$',
  keyRu: '4',
  keyRusShift: ';'
}, {
  code: 'Digit5',
  keyCode: 53,
  key: '5',
  keyShift: '%',
  keyRu: '5',
  keyRusShift: '%'
}, {
  code: 'Digit6',
  keyCode: 54,
  key: '6',
  keyShift: '^',
  keyRu: '6',
  keyRusShift: ':'
}, {
  code: 'Digit7',
  keyCode: 55,
  key: '7',
  keyShift: '&',
  keyRu: '7',
  keyRusShift: '?'
}, {
  code: 'Digit8',
  keyCode: 56,
  key: '8',
  keyShift: '*',
  keyRu: '8',
  keyRusShift: '*'
}, {
  code: 'Digit9',
  keyCode: 57,
  key: '9',
  keyShift: '(',
  keyRu: '9',
  keyRusShift: '('
}, {
  code: 'Digit0',
  keyCode: 48,
  key: '0',
  keyShift: ')',
  keyRu: '0',
  keyRusShift: ')'
}, {
  code: 'Minus',
  keyCode: 189,
  key: '-',
  keyShift: '_',
  keyRu: '-',
  keyRusShift: '_'
}, {
  code: 'Equal',
  keyCode: 187,
  key: '=',
  keyShift: '+',
  keyRu: '=',
  keyRusShift: '+'
}, {
  code: 'Backspace',
  keyCode: 8,
  key: 'Delete',
  keyRu: 'Delete'
}, {
  code: 'Tab',
  keyCode: 9,
  key: 'Tab',
  keyRu: 'Tab'
}, {
  code: 'KeyQ',
  keyCode: 81,
  key: 'q',
  keyShift: 'Q',
  keyRu: 'й',
  keyRusShift: 'Й'
}, {
  code: 'KeyW',
  keyCode: 87,
  key: 'w',
  keyShift: 'W',
  keyRu: 'ц',
  keyRusShift: 'Ц'
}, {
  code: 'KeyE',
  keyCode: 69,
  key: 'e',
  keyShift: 'E',
  keyRu: 'у',
  keyRusShift: 'У'
}, {
  code: 'KeyR',
  keyCode: 82,
  key: 'r',
  keyShift: 'R',
  keyRu: 'к',
  keyRusShift: 'К'
}, {
  code: 'KeyT',
  keyCode: 84,
  key: 't',
  keyShift: 'T',
  keyRu: 'е',
  keyRusShift: 'Е'
}, {
  code: 'KeyY',
  keyCode: 89,
  key: 'y',
  keyShift: 'Y',
  keyRu: 'н',
  keyRusShift: 'Н'
}, {
  code: 'KeyU',
  keyCode: 85,
  key: 'u',
  keyShift: 'U',
  keyRu: 'г',
  keyRusShift: 'Г'
}, {
  code: 'KeyI',
  keyCode: 73,
  key: 'i',
  keyShift: 'I',
  keyRu: 'ш',
  keyRusShift: 'Ш'
}, {
  code: 'KeyO',
  keyCode: 79,
  key: 'o',
  keyShift: 'O',
  keyRu: 'щ',
  keyRusShift: 'Щ'
}, {
  code: 'KeyP',
  keyCode: 80,
  key: 'p',
  keyShift: 'P',
  keyRu: 'з',
  keyRusShift: 'З'
}, {
  code: 'BracketLeft',
  keyCode: 219,
  key: '[',
  keyShift: '{',
  keyRu: 'х',
  keyRusShift: 'Х'
}, {
  code: 'BracketRight',
  keyCode: 221,
  key: ']',
  keyShift: '}',
  keyRu: '(',
  keyRusShift: ')'
}, {
  code: 'Brackslash',
  keyCode: 220,
  key: '\\',
  keyShift: '|',
  keyRu: '\\',
  keyRusShift: '/'
}, {
  code: 'CapsLock',
  keyCode: 20,
  key: 'CapsLock',
  keyRu: 'CapsLock'
}, {
  code: 'KeyA',
  keyCode: 65,
  key: 'a',
  keyShift: 'A',
  keyRu: 'ф',
  keyRusShift: 'Ф'
}, {
  code: 'KeyS',
  keyCode: 83,
  key: 's',
  keyShift: 'S',
  keyRu: 'ы',
  keyRusShift: 'Ы'
}, {
  code: 'KeyD',
  keyCode: 68,
  key: 'd',
  keyShift: 'D',
  keyRu: 'в',
  keyRusShift: 'В'
}, {
  code: 'KeyF',
  keyCode: 70,
  key: 'f',
  keyShift: 'F',
  keyRu: 'а',
  keyRusShift: 'А'
}, {
  code: 'KeyG',
  keyCode: 71,
  key: 'g',
  keyShift: 'G',
  keyRu: 'п',
  keyRusShift: 'П'
}, {
  code: 'KeyH',
  keyCode: 72,
  key: 'h',
  keyShift: 'H',
  keyRu: 'р',
  keyRusShift: 'Р'
}, {
  code: 'KeyJ',
  keyCode: 74,
  key: 'j',
  keyShift: 'J',
  keyRu: 'о',
  keyRusShift: 'О'
}, {
  code: 'KeyK',
  keyCode: 75,
  key: 'k',
  keyShift: 'K',
  keyRu: 'л',
  keyRusShift: 'Л'
}, {
  code: 'KeyL',
  keyCode: 76,
  key: 'l',
  keyShift: 'L',
  keyRu: 'д',
  keyRusShift: 'Д'
}, {
  code: 'Semicolon',
  keyCode: 186,
  key: ';',
  keyShift: ':',
  keyRu: 'ж',
  keyRusShift: 'Ж'
}, {
  code: 'Quote',
  keyCode: 222,
  key: "'",
  keyShift: '"',
  keyRu: 'э',
  keyRusShift: 'Э'
}, {
  code: 'Enter',
  keyCode: 13,
  key: 'Return',
  keyRu: 'Return'
}, {
  code: 'ShiftLeft',
  keyCode: 16,
  key: 'Shift',
  keyRu: 'Shift'
}, {
  code: 'KeyZ',
  keyCode: 90,
  key: 'z',
  keyShift: 'Z',
  keyRu: 'я',
  keyRusShift: 'Я'
}, {
  code: 'KeyX',
  keyCode: 88,
  key: 'x',
  keyShift: 'X',
  keyRu: 'ч',
  keyRusShift: 'Ч'
}, {
  code: 'KeyC',
  keyCode: 67,
  key: 'c',
  keyShift: 'C',
  keyRu: 'с',
  keyRusShift: 'С'
}, {
  code: 'KeyV',
  keyCode: 86,
  key: 'v',
  keyShift: 'V',
  keyRu: 'м',
  keyRusShift: 'М'
}, {
  code: 'KeyB',
  keyCode: 66,
  key: 'b',
  keyShift: 'B',
  keyRu: 'и',
  keyRusShift: 'И'
}, {
  code: 'KeyN',
  keyCode: 78,
  key: 'n',
  keyShift: 'N',
  keyRu: 'т',
  keyRusShift: 'Т'
}, {
  code: 'KeyM',
  keyCode: 77,
  key: 'm',
  keyShift: 'M',
  keyRu: 'ь',
  keyRusShift: 'Ь'
}, {
  code: 'Comma',
  keyCode: 188,
  key: ',',
  keyShift: '<',
  keyRu: 'б',
  keyRusShift: 'Б'
}, {
  code: 'Period',
  keyCode: 190,
  key: '.',
  keyShift: '>',
  keyRu: 'ю',
  keyRusShift: 'Ю'
}, {
  code: 'Slash',
  keyCode: 191,
  key: '/',
  keyShift: '?',
  keyRu: '.',
  keyRusShift: ','
}, {
  code: 'ArrowUp',
  keyCode: 38,
  key: '▲',
  keyRu: '▲'
}, {
  code: 'ShiftRight',
  keyCode: 16,
  key: 'Shift',
  keyRu: 'Shift'
}, {
  code: 'ControlLeft',
  keyCode: 17,
  key: 'Control',
  keyRu: 'Control'
}, {
  code: 'AltLeft',
  keyCode: 18,
  key: 'Option',
  keyRu: 'Option'
}, {
  code: 'MetaLeft',
  keyCode: 91,
  key: 'Command',
  keyRu: 'Command'
}, {
  code: 'Space',
  keyCode: 32,
  key: ' ',
  keyRu: ' '
}, {
  code: 'MetaRight',
  keyCode: 93,
  key: 'Command',
  keyRu: 'Command'
}, {
  code: 'AltRight',
  keyCode: 18,
  key: 'Option',
  keyRu: 'Option'
}, {
  code: 'ArrowLeft',
  keyCode: 37,
  key: '◀︎',
  keyRu: '◀︎'
}, {
  code: 'ArrowDown',
  keyCode: 40,
  key: '▼',
  keyRu: '▼'
}, {
  code: 'ArrowRight',
  keyCode: 39,
  key: '►',
  keyRu: '►'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keysArray);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100vh;\n  width: 100%;\n  background-color: #f3f3f3;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: 400;\n}\n\n.wrapper {\n  max-width: 1280px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\ntextarea {\n  width: 500px;\n  height: 150px;\n  border: 1px solid rgb(1, 49, 40);\n  color: rgb(4, 11, 10);\n}\n\ntextarea:focus {\n  border: 1px solid rgb(8, 148, 122);\n  outline: none;\n  box-shadow: 2px 2px 4px rgba(86, 86, 86, 0.5);\n}\n\n.text-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nh1 {\n  margin-top: 30px;\n  margin-bottom: 0;\n  font-size: 30px;\n}\n\nh2 {\n  margin: 20px;\n  font-size: 20px;\n  font-weight: 200;\n}\n\n.keyboard {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 40px;\n  margin-bottom: 60px;\n  padding: 30px 40px;\n  background: #e5eae9;\n  width: 900px;\n  border-radius: 20px;\n  box-shadow: 8px 5px 15px rgba(138, 138, 138, 0.4);\n}\n\n.key-button {\n  font-weight: 600;\n  font-size: 11px;\n  outline: none;\n  border: none;\n  background-color: #3b5550;\n  color: #ffffff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  position: relative;\n  min-width: 60px;\n  height: 50px;\n  padding: 0;\n  text-align: center;\n  vertical-align: top;\n  box-shadow: 0px 2px 5px #4f4f4f;\n  transition: all 0.4s ease-out;\n}\n\n.key-button:hover {\n  background-color: #1f3528;\n}\n\n.key-button.active {\n  background-color: #1f3528;\n}\n\n.key-button.arrow {\n  min-width: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.key-button.switch {\n  font-size: 14px;\n  font-weight: 400;\n  min-width: 50px;\n}\n\n.key-button.space {\n  min-width: 250px;\n}\n\n.key-button.control {\n  min-width: 70px;\n}\n\n.key-button.shift {\n  min-width: 52px;\n  align-items: center;\n}\n\n/* .switch-el {\n  position: absolute;\n  top: 6px;\n  left: 10px;\n} */\n#shiftleft {\n  width: 118px;\n}\n\n.key-button.capslock {\n  width: 90px;\n}\n\n.capslock::after {\n  content: \"\";\n  top: 8px;\n  left: 8px;\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  background: #e5eae9;\n  border-radius: 50%;\n}\n\n.capslock.active::after {\n  background: #80ffe6;\n}\n\n.key-button.command {\n  width: 81px;\n}\n\n.key-button.return {\n  width: 80px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAA;AACF;;AAEA;EACE,aAAA;EACA,WAAA;EACA,yBAAA;EACA,yCAAA;EACA,gBAAA;AACF;;AAEA;EACE,iBAAA;EACA,cAAA;EACA,aAAA;EACA,sBAAA;EACA,6BAAA;EACA,mBAAA;AACF;;AAEA;EACE,YAAA;EACA,aAAA;EACA,gCAAA;EACA,qBAAA;AACF;;AAEA;EACE,kCAAA;EACA,aAAA;EACA,6CAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;AACF;;AAEA;EACE,gBAAA;EACA,gBAAA;EACA,eAAA;AACF;;AAEA;EACE,YAAA;EACA,eAAA;EACA,gBAAA;AACF;;AAEA;EACE,aAAA;EACA,eAAA;EACA,QAAA;EACA,gBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;EACA,mBAAA;EACA,iDAAA;AACF;;AACA;EACE,gBAAA;EACA,eAAA;EACA,aAAA;EACA,YAAA;EACA,yBAAA;EACA,cAAA;EACA,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,eAAA;EACA,YAAA;EACA,UAAA;EACA,kBAAA;EACA,mBAAA;EACA,+BAAA;EACA,6BAAA;AAEF;;AACA;EACE,yBAAA;AAEF;;AACA;EACE,yBAAA;AAEF;;AACA;EACE,eAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAEF;;AACA;EACE,eAAA;EACA,gBAAA;EACA,eAAA;AAEF;;AACA;EACE,gBAAA;AAEF;;AAAA;EACE,eAAA;AAGF;;AADA;EACE,eAAA;EACA,mBAAA;AAIF;;AAFA;;;;GAAA;AAMA;EACE,YAAA;AAIF;;AADA;EACE,WAAA;AAIF;;AADA;EACE,WAAA;EACA,QAAA;EACA,SAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,mBAAA;EACA,kBAAA;AAIF;;AAFA;EACE,mBAAA;AAKF;;AAHA;EACE,WAAA;AAMF;;AAHA;EACE,WAAA;AAMF","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100vh;\n  width: 100%;\n  background-color: #f3f3f3;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: 400;\n}\n\n.wrapper {\n  max-width: 1280px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\ntextarea {\n  width: 500px;\n  height: 150px;\n  border: 1px solid rgb(1, 49, 40);\n  color: rgb(4, 11, 10);\n}\n\ntextarea:focus {\n  border: 1px solid rgb(8, 148, 122);\n  outline: none;\n  box-shadow: 2px 2px 4px rgba(86, 86, 86, 0.5);\n}\n\n.text-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nh1 {\n  margin-top: 30px;\n  margin-bottom: 0;\n  font-size: 30px;\n}\n\nh2 {\n  margin: 20px;\n  font-size: 20px;\n  font-weight: 200;\n}\n\n.keyboard {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 40px;\n  margin-bottom: 60px;\n  padding: 30px 40px;\n  background: #e5eae9;\n  width: 900px;\n  border-radius: 20px;\n  box-shadow: 8px 5px 15px rgba(138, 138, 138, 0.4);\n}\n.key-button {\n  font-weight: 600;\n  font-size: 11px;\n  outline: none;\n  border: none;\n  background-color: #3b5550;\n  color: #ffffff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  position: relative;\n  min-width: 60px;\n  height: 50px;\n  padding: 0;\n  text-align: center;\n  vertical-align: top;\n  box-shadow: 0px 2px 5px #4f4f4f;\n  transition: all 0.4s ease-out;\n}\n\n.key-button:hover {\n  background-color: #1f3528;\n}\n\n.key-button.active {\n  background-color: #1f3528;\n}\n\n.key-button.arrow {\n  min-width: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.key-button.switch {\n  font-size: 14px;\n  font-weight: 400;\n  min-width: 50px;\n}\n\n.key-button.space {\n  min-width: 250px;\n}\n.key-button.control {\n  min-width: 70px;\n}\n.key-button.shift {\n  min-width: 52px;\n  align-items: center;\n}\n/* .switch-el {\n  position: absolute;\n  top: 6px;\n  left: 10px;\n} */\n\n#shiftleft {\n  width: 118px;\n}\n\n.key-button.capslock {\n  width: 90px;\n}\n\n.capslock::after {\n  content: '';\n  top: 8px;\n  left: 8px;\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  background: #e5eae9;\n  border-radius: 50%;\n}\n.capslock.active::after {\n  background: #80ffe6;\n}\n.key-button.command {\n  width: 81px;\n}\n\n.key-button.return {\n  width: 80px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    \n    <title>Virtual Keyboard</title>\n  </head>\n  <body></body>\n \n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _keyboard_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyboard-content */ "./src/keyboard-content.js");



const body = document.querySelector('body');
let keyItem = '';
let langEng = true;
// создание клавиатуры
function createKeyboard(array) {
  keyItem = '';
  const keyElement = document.createElement('button');
  keyElement.classList.add('key-button');
  keyElement.setAttribute('type', 'button');
  array.forEach(el => {
    if (el.keyRusShift) {
      keyItem += `<button class="key-button switch" data = ${el.keyCode} data-code = ${el.code}  id = ${el.code.toLowerCase()}>${el.key} </button>`;
    } else if (el.code === 'ArrowDown' || el.code === 'ArrowRight' || el.code === 'ArrowUp' || el.code === 'ArrowLeft') {
      keyItem += `<button class="key-button arrow" data = ${el.keyCode} data-code = ${el.code} id = ${el.code.toLowerCase()}>${el.key} </button>`;
    } else if (el.code === 'Space') {
      keyItem += `<button class="key-button space" data = ${el.keyCode} data-code = ${el.code} id = ${el.code.toLowerCase()}>${el.key}</button>`;
    } else {
      keyItem += `<button class="key-button  ${el.key.toLowerCase()}" data = ${el.keyCode} data-code = ${el.code} id = ${el.code.toLowerCase()}>${el.key}
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
createKeyboard(_keyboard_content__WEBPACK_IMPORTED_MODULE_2__["default"]);
const textarea = document.querySelector('.textarea');
const changeLang = function () {
  let en = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  let ruKey;
  const keyButton = document.querySelectorAll('.key-button');
  keyButton.forEach(elem => {
    const el = elem;
    ruKey = _keyboard_content__WEBPACK_IMPORTED_MODULE_2__["default"].find(item => item.code.toLowerCase() === el.id);
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
  document.querySelector(`[data-code = ${event.code}]`).classList.toggle('active');
  if (event.code === 'Backspace') {
    textarea.value = textarea.value.substring(0, textarea.selectionStart - 1) + textarea.value.substring(textarea.selectionStart);
    textarea.selectionEnd = textarea.selectionStart + 1;
  }
  if (event.code === 'CapsLock') {
    const letters = document.querySelectorAll('.switch');
    letters.forEach(elem => {
      const el = elem;
      if (document.querySelector('[data-code = CapsLock]').classList.contains('active')) {
        el.innerText = el.innerText.toUpperCase();
      } else {
        el.innerText = el.innerText.toLowerCase();
      }
    });
  }
  const oneElement = document.getElementById(event.code.toLowerCase());
  console.log(oneElement);
  if (oneElement.classList.contains('switch') || event.code === 'ArrowUp' || event.code === 'ArrowDown') {
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
  if (event.code === 'Tab') {
    textarea.value += '    ';
  }
  if (event.code === 'Enter') {
    textarea.value += '\n';
  }
  if (event.code === 'Space') {
    textarea.value += ' ';
  }
  if (event.code === 'ArrowLeft') {
    textarea.selectionStart -= 1;
    textarea.selectionEnd -= 1;
  }
  if (event.code === 'ArrowRight') {
    textarea.selectionStart += 1;
  }
}
function onKeyUpHandler(event) {
  document.querySelector(`[data-code = ${event.code}]`).classList.remove('active');
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
keyButton.forEach(element => element.addEventListener('mousedown', onKeyDownMouseHandler));
keyButton.forEach(element => element.addEventListener('mouseup', onKeyUpMouseHandler));
if (localStorage.getItem('lang') === 'ru') {
  langEng = false;
  changeLang(langEng);
}
function specialButton(event) {
  textarea.focus();
  const cursorStart = textarea.selectionStart;
  const cursorEnd = textarea.selectionEnd;
  if (event.target === document.querySelector('[data-code= Tab]')) {
    textarea.value += '    ';
  }
  if (event.target === document.querySelector('[data-code = Backspace]')) {
    if (cursorStart === cursorEnd) {
      textarea.value = textarea.value.slice(0, textarea.selectionStart) + textarea.value.slice(textarea.selectionStart + 1);
      textarea.setSelectionRange(cursorStart, cursorStart);
    }
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
    letters.forEach(elem => {
      const el = elem;
      const capsLock = document.querySelector('[data-code = CapsLock]');
      if (capsLock.classList.contains('active')) {
        el.innerText = el.innerText.toUpperCase();
      } else {
        el.innerText = el.innerText.toLowerCase();
      }
    });
  }
  if (event.target.classList.contains('switch') || event.target === document.querySelector('[data-code = ArrowUp]') || event.target === document.querySelector('[data-code = ArrowDown]')) {
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
keyButton.forEach(element => element.addEventListener('click', specialButton));
})();

/******/ })()
;
//# sourceMappingURL=main.js.map