module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/skin/skin-2.css":
/*!*****************************!*\
  !*** ./css/skin/skin-2.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-rangeslider/lib/index.css":
/*!******************************************************!*\
  !*** ./node_modules/react-rangeslider/lib/index.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_rangeslider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-rangeslider */ "react-rangeslider");
/* harmony import */ var react_rangeslider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_rangeslider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-rangeslider/lib/index.css */ "./node_modules/react-rangeslider/lib/index.css");
/* harmony import */ var react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_rangeslider_lib_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var use_scroll_position__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! use-scroll-position */ "use-scroll-position");
/* harmony import */ var use_scroll_position__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(use_scroll_position__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_skin_skin_2_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/skin/skin-2.css */ "./css/skin/skin-2.css");
/* harmony import */ var _css_skin_skin_2_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_skin_skin_2_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_switcher_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/switcher.css */ "./styles/switcher.css");
/* harmony import */ var _styles_switcher_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_switcher_css__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "C:\\Users\\Ashis\\Desktop\\BytesClinet\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 //import "../css/skin/skin-1.css";
//import "../css/skin/skin-3.css";






function MyApp({
  Component,
  pageProps
}) {
  const {
    0: toggle1,
    1: setToggle1
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: body_,
    1: setbody_
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: layout,
    1: setLayout
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("wide");
  const {
    0: header,
    1: setHeader
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("fixed");
  const {
    0: header_,
    1: setHeader_
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: sliderValu,
    1: setSliderValu
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(20);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setbody_(document.querySelector("body"));
    setHeader_(document.getElementsByClassName("main-bar-wraper"));
  }, []);
  let scrollPosition = use_scroll_position__WEBPACK_IMPORTED_MODULE_6___default()();

  function toggle() {
    setToggle1(!toggle1);
  }

  const backGroundImage = value => {
    body_.style.backgroundImage = `url(${value})`;
    body_.style.backgroundSize = "auto";
  };

  const chageHeader = value => {
    setHeader(value);

    if (value === "fixed") {
      header_[0].classList.add("sticky-header");
      header_[0].classList.remove("sticky-no");
    } else {
      header_[0].classList.add("sticky-no");
      header_[0].classList.remove("sticky-header");
      header_[0].classList.remove("is-fixed");
    }
  };

  const onChange = value => {
    setSliderValu(value);
    body_.style.padding = value + "px";
  };

  header === "fixed" && scrollPosition > 10 ? header_ && header_[0].classList.add("is-fixed") : header_ && header_[0].classList.remove("is-fixed");
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "page-wraper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "https://1.envato.market/VLMVO",
      target: "_blank",
      className: "bt-buy-now theme-btn",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "ti-shopping-cart"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "Buy Now"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 362,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "https://w3itexperts.ticksy.com",
      target: "_blank",
      className: "bt-support-now theme-btn",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "ti-headphone-alt"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 369,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: "Support"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 370,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "#top",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "scroltop icon-up",
        type: "button",
        style: {
          display: "inline-block"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "fa fa-arrow-up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 378,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 373,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/switcher.css":
/*!*****************************!*\
  !*** ./styles/switcher.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-rangeslider":
/*!************************************!*\
  !*** external "react-rangeslider" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-rangeslider");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "use-scroll-position":
/*!**************************************!*\
  !*** external "use-scroll-position" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("use-scroll-position");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJhbmdlc2xpZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXNlLXNjcm9sbC1wb3NpdGlvblwiIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidG9nZ2xlMSIsInNldFRvZ2dsZTEiLCJ1c2VTdGF0ZSIsImJvZHlfIiwic2V0Ym9keV8iLCJsYXlvdXQiLCJzZXRMYXlvdXQiLCJoZWFkZXIiLCJzZXRIZWFkZXIiLCJoZWFkZXJfIiwic2V0SGVhZGVyXyIsInNsaWRlclZhbHUiLCJzZXRTbGlkZXJWYWx1IiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNjcm9sbFBvc2l0aW9uIiwidXNlU2Nyb2xsUG9zaXRpb24iLCJ0b2dnbGUiLCJiYWNrR3JvdW5kSW1hZ2UiLCJ2YWx1ZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJjaGFnZUhlYWRlciIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm9uQ2hhbmdlIiwicGFkZGluZyIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBD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WjtBQUVFLFlBQUksRUFBQyxRQUZQO0FBR0UsYUFBSyxFQUFFO0FBQUVnQyxpQkFBTyxFQUFFO0FBQVgsU0FIVDtBQUFBLCtCQUtFO0FBQUcsbUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRURjtBQUFBLGtCQURGO0FBa1VEOztBQUVjbEMsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaFlBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGdEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXJhbmdlc2xpZGVyXCI7XHJcbmltcG9ydCBcInJlYWN0LXJhbmdlc2xpZGVyL2xpYi9pbmRleC5jc3NcIjtcclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XHJcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzc1wiO1xyXG5pbXBvcnQgdXNlU2Nyb2xsUG9zaXRpb24gZnJvbSBcInVzZS1zY3JvbGwtcG9zaXRpb25cIjtcclxuLy9pbXBvcnQgXCIuLi9jc3Mvc2tpbi9za2luLTEuY3NzXCI7XHJcbi8vaW1wb3J0IFwiLi4vY3NzL3NraW4vc2tpbi0zLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9jc3Mvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBcIi4uL2Nzcy9za2luL3NraW4tMi5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9zd2l0Y2hlci5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIGNvbnN0IFt0b2dnbGUxLCBzZXRUb2dnbGUxXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYm9keV8sIHNldGJvZHlfXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2xheW91dCwgc2V0TGF5b3V0XSA9IHVzZVN0YXRlKFwid2lkZVwiKTtcclxuICBjb25zdCBbaGVhZGVyLCBzZXRIZWFkZXJdID0gdXNlU3RhdGUoXCJmaXhlZFwiKTtcclxuICBjb25zdCBbaGVhZGVyXywgc2V0SGVhZGVyX10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzbGlkZXJWYWx1LCBzZXRTbGlkZXJWYWx1XSA9IHVzZVN0YXRlKDIwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldGJvZHlfKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpKTtcclxuICAgIHNldEhlYWRlcl8oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW4tYmFyLXdyYXBlclwiKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBsZXQgc2Nyb2xsUG9zaXRpb24gPSB1c2VTY3JvbGxQb3NpdGlvbigpO1xyXG4gIGZ1bmN0aW9uIHRvZ2dsZSgpIHtcclxuICAgIHNldFRvZ2dsZTEoIXRvZ2dsZTEpO1xyXG4gIH1cclxuXHJcbiBcclxuICBcclxuXHJcbiAgY29uc3QgYmFja0dyb3VuZEltYWdlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBib2R5Xy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dmFsdWV9KWA7XHJcbiAgICBib2R5Xy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiYXV0b1wiO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoYWdlSGVhZGVyID0gKHZhbHVlKSA9PiB7XHJcbiAgICBzZXRIZWFkZXIodmFsdWUpO1xyXG4gICAgaWYgKHZhbHVlID09PSBcImZpeGVkXCIpIHtcclxuICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QuYWRkKFwic3RpY2t5LWhlYWRlclwiKTtcclxuICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5LW5vXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaGVhZGVyX1swXS5jbGFzc0xpc3QuYWRkKFwic3RpY2t5LW5vXCIpO1xyXG4gICAgICBoZWFkZXJfWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3ktaGVhZGVyXCIpO1xyXG4gICAgICBoZWFkZXJfWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1maXhlZFwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgc2V0U2xpZGVyVmFsdSh2YWx1ZSk7XHJcbiAgICBib2R5Xy5zdHlsZS5wYWRkaW5nID0gdmFsdWUgKyBcInB4XCI7XHJcbiAgfTtcclxuXHJcbiAgaGVhZGVyID09PSBcImZpeGVkXCIgJiYgc2Nyb2xsUG9zaXRpb24gPiAxMFxyXG4gICAgPyBoZWFkZXJfICYmIGhlYWRlcl9bMF0uY2xhc3NMaXN0LmFkZChcImlzLWZpeGVkXCIpXHJcbiAgICA6IGhlYWRlcl8gJiYgaGVhZGVyX1swXS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtZml4ZWRcIik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utd3JhcGVyXCI+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDxkaXZcclxuICAgICAgICBpZD1cImR6U3dpdGNoZXItcmlnaHRcIlxyXG4gICAgICAgIGNsYXNzPXtgc3R5bGVzd2l0Y2hlciAke3RvZ2dsZTEgPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCJ9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoZXItYnRuLWJ4XCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiXHJcbiAgICAgICAgICAgIGNsYXNzPXtgc3dpdGNoLWJ0biAke3RvZ2dsZTEgPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCJ9YH1cclxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLWNvZ3MgZmEtbGdcIj48L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHlsZXN3aXRjaGVyLWlubmVyXCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlei1wYWdlIGJ0biBidG4tcHJpbWFyeSBidG4tc21cIlxyXG4gICAgICAgICAgICBvbmNsaWNrPVwiZGVsZXRlQWxsQ29va2llKCk7XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRGVsZXRlIEFsbCBDb29raWVcclxuICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoZW1lLWJveFwiPlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwic3dpdGNoZXItdGl0bGVcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5UaGVtZTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInN3aXRjaGVyLXRpdGxlXCI+U3RhbmRhcmQ8L2g2PlxyXG4gICAgICAgICAgICA8dWwgdmFsPVwidGhlbWVGdWxsQ29sb3JcIiBjbGFzc05hbWU9XCJjb2xvci1za2lucy1kYiB0aGVtZS1wYW5lbC1zYXZlXCI+XHJcbiAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IGJvZHlfLnNldEF0dHJpYnV0ZShcImNvbG9yXCIsIFwiY29sb3JfMVwiKX0+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aGVtZS1za2luIHNraW4tMVwiXHJcbiAgICAgICAgICAgICAgICAgIGRpcj1cImNzcy9za2luL3NraW4tMVwiXHJcbiAgICAgICAgICAgICAgICAgIGxvZ289XCJpbWFnZXMvbG9nby5wbmdcIlxyXG4gICAgICAgICAgICAgICAgPjwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBib2R5Xy5zZXRBdHRyaWJ1dGUoXCJjb2xvclwiLCBcImNvbG9yXzJcIil9PlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGhlbWUtc2tpbiBza2luLTJcIlxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIGRpcj1cImNzcy9za2luL3NraW4tMlwiXHJcbiAgICAgICAgICAgICAgICAgIGxvZ289XCJpbWFnZXMvbG9nby0yLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICA+PC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IGJvZHlfLnNldEF0dHJpYnV0ZShcImNvbG9yXCIsIFwiY29sb3JfM1wiKX0+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aGVtZS1za2luIHNraW4tM1wiXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgZGlyPVwiY3NzL3NraW4vc2tpbi0zXCJcclxuICAgICAgICAgICAgICAgICAgbG9nbz1cImltYWdlcy9sb2dvLTMucG5nXCJcclxuICAgICAgICAgICAgICAgID48L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoZW1lLWJveFwiPlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwic3dpdGNoZXItdGl0bGVcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5MYXlvdXQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgIDx1bCB2YWw9XCJsYXlvdXRcIiBjbGFzc05hbWU9XCJsYXlvdXQtdmlldyB0aGVtZS1wYW5lbC1zYXZlXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPXtgd2lkZS1sYXlvdXQgJHtsYXlvdXQgPT09IFwid2lkZVwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIGRpcj1cIndpZGUtbGF5b3V0XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbGF5b3V0Q2hhbmdlKFwid2lkZVwiKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgV2lkZVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPXtgYm94ZWQgJHtsYXlvdXQgPT09IFwiYm94ZWRcIiA/IFwiYWN0aXZlXCIgOiBcIlwifWB9PlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBkaXI9XCJib3hlZFwiIG9uQ2xpY2s9eygpID0+IGxheW91dENoYW5nZShcImJveGVkXCIpfT5cclxuICAgICAgICAgICAgICAgICAgQm94ZWRcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz17YGZyYW1lICR7bGF5b3V0ID09PSBcImZyYW1lXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1gfT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgZGlyPVwiZnJhbWVcIiBvbkNsaWNrPXsoKSA9PiBsYXlvdXRDaGFuZ2UoXCJmcmFtZVwiKX0+XHJcbiAgICAgICAgICAgICAgICAgIEZyYW1lXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBpZD1cIlRoZW1lUmFuZ2VTbGlkZXJcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByaWNlLXNsaWRlLTIgcmFuZ2Utc2xpZGVyXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBsYXlvdXQgPT09IFwiZnJhbWVcIiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICA8Yj57c2xpZGVyVmFsdX1weDwvYj5cclxuICAgICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgbWluPXsyMH1cclxuICAgICAgICAgICAgICAgICAgbWF4PXs4MH1cclxuICAgICAgICAgICAgICAgICAgdG9vbHRpcD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtzbGlkZXJWYWx1fVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGVtZS1ib3hcIj5cclxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInN3aXRjaGVyLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+SGVhZGVyPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICA8dWwgdmFsPVwiaGVhZGVyXCIgY2xhc3NOYW1lPVwiaGVhZGVyLXZpZXcgdGhlbWUtcGFuZWwtc2F2ZVwiPlxyXG4gICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgY2xhc3M9e2BoZWFkZXItZml4ZWQgJHtoZWFkZXIgPT09IFwiZml4ZWRcIiA/IFwiYWN0aXZlXCIgOiBcIlwifWB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFnZUhlYWRlcihcImZpeGVkXCIpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgZGlyPVwic3RpY2t5LWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICBGaXhlZFxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICBjbGFzcz17YGhlYWRlci1zdGF0aWMgJHtoZWFkZXIgPT09IFwic3RhdGljXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhZ2VIZWFkZXIoXCJzdGF0aWNcIil9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBkaXI9XCJzdGlja3ktbm9cIj5cclxuICAgICAgICAgICAgICAgICAgU3RhdGljXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGVtZS1ib3hcIj5cclxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInN3aXRjaGVyLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+QmFja2dyb3VuZDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInN3aXRjaGVyLXRpdGxlXCI+Q29sb3I8L2g2PlxyXG4gICAgICAgICAgICA8dWwgdmFsPVwiYmdDb2xvclwiIGNsYXNzTmFtZT1cImJnLWNvbG9yLXN3aXRjaGVyIHRoZW1lLXBhbmVsLXNhdmVcIj5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1jb2xvci0xXCJcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICBkaXI9XCIjODk2ZWZmXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYmFja0dyb3VuZENoYWdlKFwiY29sb3JfMVwiKX1cclxuICAgICAgICAgICAgICAgID48L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1jb2xvci0yXCJcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICBkaXI9XCIjZjU1ZjhkXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYmFja0dyb3VuZENoYWdlKFwiY29sb3JfMlwiKX1cclxuICAgICAgICAgICAgICAgID48L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1jb2xvci0zXCJcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICBkaXI9XCIjZWYxNDZlXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYmFja0dyb3VuZENoYWdlKFwiY29sb3JfM1wiKX1cclxuICAgICAgICAgICAgICAgID48L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInN3aXRjaGVyLXRpdGxlXCI+SW1hZ2U8L2g2PlxyXG4gICAgICAgICAgICA8dWwgdmFsPVwiYmdJbWFnZVwiIGNsYXNzTmFtZT1cImJhY2tncm91bmQtc3dpdGNoZXIgdGhlbWUtcGFuZWwtc2F2ZVwiPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzL3N3aXRjaGVyL3N3aXRjaGVyLWJnL2JnMS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICBkaXI9XCJpbWFnZXMvYmFja2dyb3VuZC9iZzEuanBnXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYmFja0dyb3VuZEltYWdlKFwiL2ltYWdlcy9iYWNrZ3JvdW5kL2JnMS5qcGdcIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvc3dpdGNoZXIvc3dpdGNoZXItYmcvYmcyLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGRpcj1cImltYWdlcy9iYWNrZ3JvdW5kL2JnMi5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBiYWNrR3JvdW5kSW1hZ2UoXCIvaW1hZ2VzL2JhY2tncm91bmQvYmcyLmpwZ1wiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlcy9zd2l0Y2hlci9zd2l0Y2hlci1iZy9iZzMuanBnXCJcclxuICAgICAgICAgICAgICAgICAgZGlyPVwiaW1hZ2VzL2JhY2tncm91bmQvYmczLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGJhY2tHcm91bmRJbWFnZShcIi9pbWFnZXMvYmFja2dyb3VuZC9iZzMuanBnXCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzL3N3aXRjaGVyL3N3aXRjaGVyLWJnL2JnNC5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICBkaXI9XCJpbWFnZXMvYmFja2dyb3VuZC9iZzQuanBnXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYmFja0dyb3VuZEltYWdlKFwiL2ltYWdlcy9iYWNrZ3JvdW5kL2JnNC5qcGdcIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJzd2l0Y2hlci10aXRsZVwiPlBhdHRlcm48L2g2PlxyXG4gICAgICAgICAgICA8dWwgdmFsPVwiYmdQYXR0ZW5cIiBjbGFzc05hbWU9XCJwYXR0ZXJuLXN3aXRjaGVyIHRoZW1lLXBhbmVsLXNhdmVcIj5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlcy9zd2l0Y2hlci9zd2l0Y2hlci1wYXR0ZXJucy9iZzEuanBnXCJcclxuICAgICAgICAgICAgICAgICAgZGlyPVwiaW1hZ2VzL3BhdHRlcm4vcHQxLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGJhY2tHcm91bmRJbWFnZShcIi9pbWFnZXMvcGF0dGVybi9wdDEuanBnXCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzL3N3aXRjaGVyL3N3aXRjaGVyLXBhdHRlcm5zL2JnMi5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICBkaXI9XCJpbWFnZXMvcGF0dGVybi9wdDIuanBnXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYmFja0dyb3VuZEltYWdlKFwiL2ltYWdlcy9wYXR0ZXJuL3B0Mi5qcGdcIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvc3dpdGNoZXIvc3dpdGNoZXItcGF0dGVybnMvYmczLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGRpcj1cImltYWdlcy9wYXR0ZXJuL3B0My5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBiYWNrR3JvdW5kSW1hZ2UoXCIvaW1hZ2VzL3BhdHRlcm4vcHQzLmpwZ1wiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlcy9zd2l0Y2hlci9zd2l0Y2hlci1wYXR0ZXJucy9iZzQuanBnXCJcclxuICAgICAgICAgICAgICAgICAgZGlyPVwiaW1hZ2VzL3BhdHRlcm4vcHQ0LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGJhY2tHcm91bmRJbWFnZShcIi9pbWFnZXMvcGF0dGVybi9wdDQuanBnXCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzL3N3aXRjaGVyL3N3aXRjaGVyLXBhdHRlcm5zL2JnNS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICBkaXI9XCJpbWFnZXMvcGF0dGVybi9wdDUuanBnXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYmFja0dyb3VuZEltYWdlKFwiL2ltYWdlcy9wYXR0ZXJuL3B0NS5qcGdcIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvc3dpdGNoZXIvc3dpdGNoZXItcGF0dGVybnMvYmc2LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGRpcj1cImltYWdlcy9wYXR0ZXJuL3B0Ni5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBiYWNrR3JvdW5kSW1hZ2UoXCIvaW1hZ2VzL3BhdHRlcm4vcHQ2LmpwZ1wiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlcy9zd2l0Y2hlci9zd2l0Y2hlci1wYXR0ZXJucy9iZzcuanBnXCJcclxuICAgICAgICAgICAgICAgICAgZGlyPVwiaW1hZ2VzL3BhdHRlcm4vcHQ3LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGJhY2tHcm91bmRJbWFnZShcIi9pbWFnZXMvcGF0dGVybi9wdDcuanBnXCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzL3N3aXRjaGVyL3N3aXRjaGVyLXBhdHRlcm5zL2JnOC5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICBkaXI9XCJpbWFnZXMvcGF0dGVybi9wdDguanBnXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYmFja0dyb3VuZEltYWdlKFwiL2ltYWdlcy9wYXR0ZXJuL3B0OC5qcGdcIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvc3dpdGNoZXIvc3dpdGNoZXItcGF0dGVybnMvYmc5LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGRpcj1cImltYWdlcy9wYXR0ZXJuL3B0OS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBiYWNrR3JvdW5kSW1hZ2UoXCIvaW1hZ2VzL3BhdHRlcm4vcHQ5LmpwZ1wiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cImltYWdlcy9zd2l0Y2hlci9zd2l0Y2hlci1wYXR0ZXJucy9iZzEwLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGRpcj1cImltYWdlcy9wYXR0ZXJuL3B0MTAuanBnXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYmFja0dyb3VuZEltYWdlKFwiL2ltYWdlcy9wYXR0ZXJuL3B0MTAuanBnXCIpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiaW1hZ2VzL3N3aXRjaGVyL3N3aXRjaGVyLXBhdHRlcm5zL2JnMTEuanBnXCJcclxuICAgICAgICAgICAgICAgICAgZGlyPVwiaW1hZ2VzL3BhdHRlcm4vcHQxMS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBiYWNrR3JvdW5kSW1hZ2UoXCIvaW1hZ2VzL3BhdHRlcm4vcHQxMS5qcGdcIil9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJpbWFnZXMvc3dpdGNoZXIvc3dpdGNoZXItcGF0dGVybnMvYmcxMi5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICBkaXI9XCJpbWFnZXMvcGF0dGVybi9wdDEyLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGJhY2tHcm91bmRJbWFnZShcIi9pbWFnZXMvcGF0dGVybi9wdDEyLmpwZ1wiKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vMS5lbnZhdG8ubWFya2V0L1ZMTVZPXCJcclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJ0LWJ1eS1ub3cgdGhlbWUtYnRuXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cInRpLXNob3BwaW5nLWNhcnRcIiAvPlxyXG4gICAgICAgIDxzcGFuPkJ1eSBOb3c8L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGFcclxuICAgICAgICBocmVmPVwiaHR0cHM6Ly93M2l0ZXhwZXJ0cy50aWNrc3kuY29tXCJcclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJ0LXN1cHBvcnQtbm93IHRoZW1lLWJ0blwiXHJcbiAgICAgID5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJ0aS1oZWFkcGhvbmUtYWx0XCIgLz5cclxuICAgICAgICA8c3Bhbj5TdXBwb3J0PC9zcGFuPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxhIGhyZWY9XCIjdG9wXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2Nyb2x0b3AgaWNvbi11cFwiXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy11cFwiIC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yYW5nZXNsaWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXNlLXNjcm9sbC1wb3NpdGlvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9