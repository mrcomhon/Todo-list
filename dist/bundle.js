/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/scripts.js":
/*!********************************!*\
  !*** ./src/scripts/scripts.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_toggleSwitch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/toggleSwitch */ \"./src/scripts/toggleSwitch.js\");\n\nnew _scripts_toggleSwitch__WEBPACK_IMPORTED_MODULE_0__.ThemeSwitcher();\n\n//# sourceURL=webpack://todo-list/./src/scripts/scripts.js?");

/***/ }),

/***/ "./src/scripts/toggleSwitch.js":
/*!*************************************!*\
  !*** ./src/scripts/toggleSwitch.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ThemeSwitcher: () => (/* binding */ ThemeSwitcher)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar ThemeSwitcher = /*#__PURE__*/function () {\n  function ThemeSwitcher() {\n    var _this = this;\n    _classCallCheck(this, ThemeSwitcher);\n    _defineProperty(this, \"selectors\", {\n      switchThemeButton: \"[data-js-theme-switcher]\"\n    });\n    _defineProperty(this, \"themes\", {\n      dark: \"dark\",\n      light: \"light\"\n    });\n    _defineProperty(this, \"stateClasses\", {\n      isDarkTheme: \"is-dark-theme\"\n    });\n    _defineProperty(this, \"storageKey\", \"theme\");\n    _defineProperty(this, \"onClick\", function () {\n      var isDark = _this.switchThemeButtonElement.checked;\n      localStorage.setItem(_this.storageKey, _this.isDarkThemeCached ? _this.themes.light : _this.themes.dark);\n      document.body.classList.toggle(_this.stateClasses.isDarkTheme);\n    });\n    this.switchThemeButtonElement = document.querySelector(this.selectors.switchThemeButton);\n    this.setInitialTheme();\n    this.bindEvents();\n  }\n  return _createClass(ThemeSwitcher, [{\n    key: \"isDarkThemeCached\",\n    get: function get() {\n      return localStorage.getItem(this.storageKey) === this.themes.dark;\n    }\n  }, {\n    key: \"setInitialTheme\",\n    value: function setInitialTheme() {\n      var isDark = this.isDarkThemeCached;\n      document.body.classList.toggle(this.stateClasses.isDarkTheme, isDark\n      //   this.isDarkThemeCached\n      );\n      this.switchThemeButtonElement.checked = isDark;\n    }\n  }, {\n    key: \"bindEvents\",\n    value: function bindEvents() {\n      this.switchThemeButtonElement.addEventListener(\"change\", this.onClick);\n    }\n  }]);\n}();\n\n//# sourceURL=webpack://todo-list/./src/scripts/toggleSwitch.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/scripts.js");
/******/ 	
/******/ })()
;