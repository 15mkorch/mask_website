module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/dropOff.js":
/*!**************************!*\
  !*** ./pages/dropOff.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dropOff; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/marykorch/masks-gu-website/pages/dropOff.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function dropOff() {
  return __jsx("div", {
    className: "jsx-1176579826" + " " + "main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,600;1,700&display=swap",
    rel: "stylesheet",
    className: "jsx-1176579826",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }), __jsx("h1", {
    className: "jsx-1176579826",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, "MATERIAL DROP OFF LOCATIONS"), __jsx("div", {
    className: "jsx-1176579826" + " " + "element",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "jsx-1176579826",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, "ADVENTURES IN MISSION ANNEX HOUSE"), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,600;1,700&display=swap",
    rel: "stylesheet",
    className: "jsx-1176579826",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: "jsx-1176579826" + " " + "indent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, "5375 Clarkes Bridge Rd Gainesville, GA 30534")), __jsx("div", {
    className: "jsx-1176579826",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "jsx-1176579826",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, "BECAUSE COFFEE"), __jsx("p", {
    className: "jsx-1176579826" + " " + "indent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, "240 Dawson Village Way N #100, Dawsonville, GA 30534")), __jsx("div", {
    className: "jsx-1176579826",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "jsx-1176579826",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, "CHASTAIN JANITORIAL"), __jsx("p", {
    className: "jsx-1176579826" + " " + "indent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, "1630 M.L.K. Jr. Blvd, Gainesville, GA 30534")), __jsx("div", {
    className: "jsx-1176579826",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }), __jsx("h2", {
    className: "jsx-1176579826",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, "Spring is here and cleaning has begun!"), __jsx("p", {
    className: "jsx-1176579826" + " " + "space",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "So many of us are quarantined in our homes. While you're doing your spring cleaning, donate materials to one of our partnered drop-off locations in the North Georgia area! "), __jsx("br", {
    className: "jsx-1176579826",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }), __jsx("p", {
    className: "jsx-1176579826" + " " + "space1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "You can drop off goods while still maintaining your social distance. For a list of needed donation materials, click ", __jsx("a", {
    href: "#list",
    className: "jsx-1176579826",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 151
    }
  }, "here"), ". "), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1176579826",
    __self: this
  }, "h1.jsx-1176579826{font-family:Poppins;font-style:italic;color:#2F2D2A;margin-left:15px;font-size:45px;}h2.jsx-1176579826{font-family:Poppins;color:#2F2D2A;margin-left:10px;}h3.jsx-1176579826{text-align:left;margin-left:15px;font-family:Poppins;color:#2F2D2A;}p.jsx-1176579826{color:#2F2D2A;font-family:Poppins;margin-left:20px;}.indent.jsx-1176579826{line-height:0px;}.main.jsx-1176579826{background-color:#ede1d0;width:100vw;height:100vh;}ul.jsx-1176579826{color:#2F2D2A;font-family:Poppins;}.space1.jsx-1176579826{text-align:center;font-style:italic;}.space.jsx-1176579826{margin-right:60px;margin-left:60px;}a.jsx-1176579826{color:#9cd6d6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJ5a29yY2gvbWFza3MtZ3Utd2Vic2l0ZS9wYWdlcy9kcm9wT2ZmLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCd0IsQUFHcUMsQUFPQSxBQUtKLEFBT0YsQUFNRSxBQUdTLEFBS1gsQUFJSSxBQUlBLEFBS0osY0ExQk0sQUFjQSxBQWF4QixFQWxDcUIsQUFhckIsRUFZc0IsQUFJRCxFQXpDQyxBQU9KLEtBcUJGLFFBZlEsQ0FMSCxBQVlBLEFBY3JCLENBUUEsQ0FKQSxDQVRpQixDQTVCQyxZQTZCbEIsQ0FyQkEsQUFhQSxDQXBCcUIsQ0FjdEIsY0FBQyxFQWJtQixlQUNuQiIsImZpbGUiOiIvVXNlcnMvbWFyeWtvcmNoL21hc2tzLWd1LXdlYnNpdGUvcGFnZXMvZHJvcE9mZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkcm9wT2ZmKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCw2MDA7MSw3MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cbiAgICAgICAgICAgIDxoMT5NQVRFUklBTCBEUk9QIE9GRiBMT0NBVElPTlM8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50XCI+XG4gICAgICAgICAgICAgICAgPGgzPkFEVkVOVFVSRVMgSU4gTUlTU0lPTiBBTk5FWCBIT1VTRTwvaDM+XG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwzMDA7MCw2MDA7MSw3MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmRlbnRcIj41Mzc1IENsYXJrZXMgQnJpZGdlIFJkXG4gICAgICAgICAgICAgICAgR2FpbmVzdmlsbGUsIEdBIDMwNTM0PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMz5CRUNBVVNFIENPRkZFRTwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5kZW50XCI+MjQwIERhd3NvbiBWaWxsYWdlIFdheSBOICMxMDAsIERhd3NvbnZpbGxlLCBHQSAzMDUzNDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDM+Q0hBU1RBSU4gSkFOSVRPUklBTDwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5kZW50XCI+MTYzMCBNLkwuSy4gSnIuIEJsdmQsXG4gICAgICAgICAgICAgICAgR2FpbmVzdmlsbGUsIEdBIDMwNTM0PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoMj5TcHJpbmcgaXMgaGVyZSBhbmQgY2xlYW5pbmcgaGFzIGJlZ3VuITwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzcGFjZVwiPlNvIG1hbnkgb2YgdXMgYXJlIHF1YXJhbnRpbmVkIGluIG91ciBob21lcy4gV2hpbGUgeW91J3JlIGRvaW5nIHlvdXIgc3ByaW5nIGNsZWFuaW5nLCBkb25hdGUgbWF0ZXJpYWxzIHRvIG9uZSBvZiBvdXIgcGFydG5lcmVkIGRyb3Atb2ZmIGxvY2F0aW9ucyBpbiB0aGUgTm9ydGggR2VvcmdpYSBhcmVhISA8L3A+XG4gICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNwYWNlMVwiPllvdSBjYW4gZHJvcCBvZmYgZ29vZHMgd2hpbGUgc3RpbGwgbWFpbnRhaW5pbmcgeW91ciBzb2NpYWwgZGlzdGFuY2UuIEZvciBhIGxpc3Qgb2YgbmVlZGVkIGRvbmF0aW9uIG1hdGVyaWFscywgY2xpY2sgPGEgaHJlZj1cIiNsaXN0XCI+aGVyZTwvYT4uIDwvcD5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgICAgICBjb2xvcjogIzJGMkQyQTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyRjJEMkE7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICAgICAgICAgICAgICBjb2xvcjogIzJGMkQyQVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyRjJEMkE7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW5kZW50IHtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1haW4ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGUxZDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyRjJEMkE7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3BhY2UxIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNwYWNlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOWNkNmQ2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2RpdiA+XG5cbiAgICApO1xufVxuXG4iXX0= */\n/*@ sourceURL=/Users/marykorch/masks-gu-website/pages/dropOff.js */"));
}

/***/ }),

/***/ 3:
/*!********************************!*\
  !*** multi ./pages/dropOff.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/marykorch/masks-gu-website/pages/dropOff.js */"./pages/dropOff.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=dropOff.js.map