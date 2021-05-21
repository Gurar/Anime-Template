/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/components/Validator.js":
/*!************************************!*\
  !*** ./js/components/Validator.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Validator": () => (/* binding */ Validator)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Validator = /*#__PURE__*/function () {
  function Validator() {
    _classCallCheck(this, Validator);
  }

  _createClass(Validator, null, [{
    key: "isValidSelector",
    value: function isValidSelector(param) {
      return param === null ? console.error('ERROR: selector no exist') + false : true;
    }
  }, {
    key: "isString",
    value: function isString(param) {
      if (typeof param !== 'string' || param === null) {
        console.error('ERROr: value not a string');
        return false;
      }

      if (param.length === 0) {
        console.error('ERROR: string empry');
        return false;
      }

      return true;
    }
  }]);

  return Validator;
}();



/***/ }),

/***/ "./js/components/headerNavbar.js":
/*!***************************************!*\
  !*** ./js/components/headerNavbar.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hamburger": () => (/* binding */ hamburger),
/* harmony export */   "dropdown": () => (/* binding */ dropdown)
/* harmony export */ });
/* harmony import */ var _Validator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Validator.js */ "./js/components/Validator.js");
 // navbar hamburger button event

var hamburger = function hamburger() {
  var DOM = document.querySelector('[data-navbar-burger]');

  if (!_Validator_js__WEBPACK_IMPORTED_MODULE_0__.Validator.isValidSelector(DOM)) {
    console.error('ERROR: Selector not exist');
    return false;
  }

  DOM.addEventListener('click', function (e) {
    e.preventDefault();
    DOM.classList.toggle('active');
    var navigation = document.querySelector('[data-navbar-nav]');

    if (!_Validator_js__WEBPACK_IMPORTED_MODULE_0__.Validator.isValidSelector(navigation)) {
      console.error('ERROR: Selector not exist');
      return false;
    }

    navigation.classList.toggle('open');
    window.addEventListener('click', function (event) {
      if (event.target.tagName.toLowerCase() === 'a') {
        DOM.classList.remove('active');
        navigation.classList.remove('open');
      }
    });
  });
};

var dropdown = function dropdown() {
  var dropdown = document.querySelector('[data-navbar-dropdown]');

  if (!_Validator_js__WEBPACK_IMPORTED_MODULE_0__.Validator.isValidSelector(dropdown)) {
    console.error('ERROR: Selector not exist');
    return false;
  }

  dropdown.addEventListener('click', function (e) {
    e.preventDefault();
    var dropdownList = document.querySelector('[data-navbar-dropdown-list]');

    if (!_Validator_js__WEBPACK_IMPORTED_MODULE_0__.Validator.isValidSelector(dropdownList)) {
      console.error('ERROR: Selector not exist');
      return false;
    }

    dropdownList.classList.toggle('active');
  });
};



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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_headerNavbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/headerNavbar.js */ "./js/components/headerNavbar.js");
 //mobile menu button

(0,_components_headerNavbar_js__WEBPACK_IMPORTED_MODULE_0__.hamburger)(); //drobdown navigation

(0,_components_headerNavbar_js__WEBPACK_IMPORTED_MODULE_0__.dropdown)();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map