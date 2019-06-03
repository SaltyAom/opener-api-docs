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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-names.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-names.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-names */ "core-js/library/fn/object/get-own-property-names");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_component_snippet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../react/component/snippet */ "./react/component/snippet.js");
/* harmony import */ var _react_component_return__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../react/component/return */ "./react/component/return.js");
/* harmony import */ var _static_css_init_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/css/init.css */ "./static/css/init.css");
/* harmony import */ var _static_css_init_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_css_init_css__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "D:\\web\\opener-api-doc\\pages\\index.js";







var Documentation = function Documentation() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("axios"),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      type = _useState2[0],
      setType = _useState2[1];

  var _setPreference = function setPreference() {
    var prefer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "axios";

    switch (prefer) {
      case "axios":
        setType("axios");
        break;

      case "fetch":
        setType("fetch");
        break;

      case "module":
        setType("module");
        break;

      default:
        setType("axios");
        break;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if ('serviceWorker' in navigator) {
      window.onload = function () {
        navigator.serviceWorker.register('/static/service-worker.js', {
          scope: "/"
        }).then(function (registration) {
          console.info('Registered:', registration);
        }).catch(function (err) {
          console.error('Registration failed: ', err);
        });
      };
    }
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Opener API")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    "aria-label": "Floating Action Button: Go to navigation",
    id: "fab",
    href: "#getting-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    id: "fab-icon",
    style: {
      fill: "#fff"
    },
    xmlns: "http://www.w3.org/2000/svg",
    width: "36",
    height: "36",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    "aria-label": "Getting start",
    id: "banner",
    href: "#what-is",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    id: "banner-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Opener-API"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    id: "banner-detail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Opener-API documentation, usage and example")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "what-is",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "What is"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Opener API is an API service for fetching data from nhentai as middleware (since nhentai api can only be fetched on a serverside). ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Opener API is free services and is open-source on ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://github.com/aomkirby123/opener-api",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Github"), ".")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "getting-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Getting started"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "As an RESTful API, Opener API endpoint is at ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://opener.now.sh",
    rel: "noreferrer",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "opener.now.sh"), "."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Fetch API or Axios is recommended for fetching data."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Opener API also has module as shorten function for fetching data name ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.npmjs.com/package/opener-api",
    rel: "noreferrer",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "opener-api"), "."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#data",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Data")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#open-graph",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Open Graph")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#relate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Relate")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#tag",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Tag")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#generate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Generate")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Image"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "* Based on 1.3.0 API version")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "Setup"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "This section will help you setup with your preference method:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_react_component_snippet__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fetch: "// With fetch\n\n                    No setup require, rely on browser API.\n\n                    It's not recommended to use fetch on old browser.\n                    Some old Browser might not support.\n                    \n                    Using an Axios is recommended instead.\n                    \n                    But there's also a polyfill for fetch APIwith XMLHttpRequest\n                    \n                    Add this to your <head> tag:\n\n                    <script async src=\"https://cdnjs.cloudflare.com/ajax/libs/fetch/3.0.0/fetch.min.js\"></script>",
    axios: "// With Axios\n                    \n                    Install module:\n\n                    // With npm\n                    npm install axios --save\n                    \n                    // With yarn\n                    yarn add axios\n                    \n                    Import Axios Module:\n\n                    // With import \n                    import Axios from 'axios'\n                    \n                    // With require \n                    const Axios = require('axios')\n                    ",
    module: "// With opener-api\n                    \n                    Install module:\n\n                    // With npm\n                    npm install opener-api --save\n                    \n                    // With yarn\n                    yarn add opener-api\n                    \n                    Import opener-api Module:\n\n                    // With import\n                    import OpenerAPI from 'opener-api'\n                    \n                    // With require \n                    const OpenerAPI = require('opener-api')\n                    ",
    type: type,
    setPreference: function setPreference(prefer) {
      return _setPreference(prefer);
    },
    index: 999,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "data",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "Data"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "Get doujinshi's detail can be retrieve from nhentai based on 6 digits code (Actually can be from 1-6 digits)."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_react_component_snippet__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fetch: "fetch('https://opener.now.sh/api/data/:id')\n                    .then(res => res.json())\n                    .then(data => console.log(data.data));",
    axios: "axios('https://opener.now.sh/api/data/:id')\n                    .then(data => console.log(data.data));",
    module: "OpenerAPI.getData(:id)\n                    .then(data => console.log(data));",
    type: type,
    setPreference: function setPreference(prefer) {
      return _setPreference(prefer);
    },
    index: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_react_component_return__WEBPACK_IMPORTED_MODULE_4__["default"], {
    endPoint: "data/273172",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "opengraph",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, "Open Graph ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "deprecated",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, "Deprecated")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, "Get doujinshi's opengraph data."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, "Is deprecated, use ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#data",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, "data"), " instead."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_react_component_snippet__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fetch: "fetch('https://opener.now.sh/api/g/:id')\n                    .then(res => res.json())\n                    .then(data => console.log(data.data));",
    axios: "axios('https://opener.now.sh/api/g/:id')\n                    .then(data => console.log(data.data));",
    module: "OpenerAPI.getOpenGraph(:id)\n                    .then(data => console.log(data));",
    type: type,
    setPreference: function setPreference(prefer) {
      return _setPreference(prefer);
    },
    index: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "relate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, "Relate"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, "Retreive 5 most related doujinshi."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_react_component_snippet__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fetch: "fetch('https://opener.now.sh/api/relate/:id')\n                    .then(res => res.json())\n                    .then(data => console.log(data.data));",
    axios: "axios('https://opener.now.sh/api/relate/:id')\n                    .then(data => console.log(data.data));",
    module: "OpenerAPI.getRelate(:id)\n                    .then(data => console.log(data));",
    type: type,
    setPreference: function setPreference(prefer) {
      return _setPreference(prefer);
    },
    index: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_react_component_return__WEBPACK_IMPORTED_MODULE_4__["default"], {
    endPoint: "relate/273172",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "tag",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, "Tag"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, "Get doujinshi's tag related. Can be guide by page as second parameter."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, "There's 25 object per page."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, "* If no page provided, provided page value will be 1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_react_component_snippet__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fetch: "fetch('https://opener.now.sh/api/tag/:tag/:page')\n                    .then(res => res.json())\n                    .then(data => console.log(data.data));",
    axios: "axios('https://opener.now.sh/api/tag/:tag/:page')\n                    .then(data => console.log(data.data));",
    module: "OpenerAPI.getTag(:tag, :page)\n                    .then(data => console.log(data));",
    type: type,
    setPreference: function setPreference(prefer) {
      return _setPreference(prefer);
    },
    index: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_react_component_return__WEBPACK_IMPORTED_MODULE_4__["default"], {
    endPoint: "tag/crossdressing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "generate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, "Generate"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, "Get generate's image of doujinshi, can be used with decrpyt on ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://opener.mystiar.com/drop",
    target: "_blank",
    rel: "noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, "opener.mystiar.com/drop")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, "* If no page provided, provided page value will be 1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_react_component_snippet__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fetch: "fetch('https://opener.now.sh/api/generate/:id/')\n                    .then(res => res.json())\n                    .then(data => console.log(data.data));",
    axios: "axios('https://opener.now.sh/api/generate/:id')\n                    .then(data => console.log(data.data));",
    module: "OpenerAPI.getGenerate(:id)\n                    .then(data => console.log(data));",
    type: type,
    setPreference: function setPreference(prefer) {
      return _setPreference(prefer);
    },
    index: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, "Return"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, "success: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "type",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, "boolean")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, "error: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "type",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, "boolean")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }, "dataURL: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "type",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }, "string")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, "Image"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, "Get pages' image as result."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }, "* If no page provided, will return all pages's image including cover's image."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_react_component_snippet__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fetch: "fetch('https://opener.now.sh/api/image/:id/:page')\n                    .then(res => res.json())\n                    .then(data => console.log(data.data));",
    axios: "axios('https://opener.now.sh/api/image/:id/:page')\n                    .then(data => console.log(data.data));",
    module: "OpenerAPI.getImage(:id, :page)\n                    .then(data => console.log(data));",
    type: type,
    setPreference: function setPreference(prefer) {
      return _setPreference(prefer);
    },
    index: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_react_component_return__WEBPACK_IMPORTED_MODULE_4__["default"], {
    endPoint: "image/273172",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "closing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: this
  }, "Conclusion"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, "Opener API is free service provided as a bridge to fetching data from NHentai and is open-source."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  }, "You can help contribute on ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://github.com/aomkirby123/opener-api",
    rel: "noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: this
  }, "Github"), ".")));
};

/* harmony default export */ __webpack_exports__["default"] = (Documentation);

/***/ }),

/***/ "./react/component/return.js":
/*!***********************************!*\
  !*** ./react/component/return.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-names */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-names.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "D:\\web\\opener-api-doc\\react\\component\\return.js";




var Return = function Return(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("Fetching..."),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1],
      endPointSplit = props.endPoint.split("/"),
      id = endPointSplit[endPointSplit.length - 1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_5___default()("https://opener.now.sh/api/".concat(props.endPoint)).then(function (data) {
      setData(data.data);
    });
  }, []);

  if (data === "Fetching...") {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "Return"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "* This return value is based on ", id), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "Fetching...")));
  } else {
    var arrName = _babel_runtime_corejs2_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_2___default()(data);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "Return"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "* This return value is based on ", id), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, arrName.map(function (name, index) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, name, ": ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        className: "type",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, typeof data[name])), typeof data[name] === "object" ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_2___default()(data[name]).map(function (detail, index) {
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, detail, ": ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
          className: "type",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, typeof data[name][detail])), typeof data[name][detail] === "object" && !props.shallow ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, _babel_runtime_corejs2_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_2___default()(data[name][detail]).map(function (doc, index) {
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
            key: index,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          }, doc, ": ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
            className: "type",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          }, typeof data[name][detail][doc]));
        })) : null);
      })) : null);
    })));
  }
};

Return.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return axios__WEBPACK_IMPORTED_MODULE_5___default()("https://opener.now.sh/api/".concat(props.endPoint));

        case 2:
          data = _context.sent;
          return _context.abrupt("return", {
            data: data
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Return);

/***/ }),

/***/ "./react/component/snippet.js":
/*!************************************!*\
  !*** ./react/component/snippet.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\web\\opener-api-doc\\react\\component\\snippet.js";


var Snippet = function Snippet(props) {
  var setCopy = function setCopy() {
    document.getElementById("code-".concat(props.index)).select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "code-snippet-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "code-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "code-heading-type",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    "aria-label": "Set preference to Axios",
    onClick: function onClick() {
      return props.setPreference("axios");
    },
    className: "code-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Axios"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    "aria-label": "Set preference to Fetch",
    onClick: function onClick() {
      return props.setPreference("fetch");
    },
    className: "code-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Fetch"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    "aria-label": "Set preference to Opener API module",
    onClick: function onClick() {
      return props.setPreference("module");
    },
    className: "code-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Module")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "code-tools",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "code-heading-copy code-heading",
    onClick: function onClick() {
      return setCopy();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Copy"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "code-snippet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, props.type === "fetch" ? props.fetch.replace(/  /g, "") : null, props.type === "axios" ? props.axios.replace(/  /g, "") : null, props.type === "module" ? props.module.replace(/  /g, "") : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "hidden-input",
    for: "code-".concat(props.index),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Preference"), props.type === "axios" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    tabIndex: -1,
    readOnly: true,
    type: "text",
    value: props.axios.replace(/  /g, ""),
    id: "code-".concat(props.index),
    className: "hidden-input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }) : null, props.type === "fetch" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    tabIndex: -1,
    readOnly: true,
    type: "text",
    value: props.fetch.replace(/  /g, ""),
    id: "code-".concat(props.index),
    className: "hidden-input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }) : null, props.type === "module" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    tabIndex: -1,
    readOnly: true,
    type: "text",
    value: props.module.replace(/  /g, ""),
    id: "code-".concat(props.index),
    className: "hidden-input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Snippet);

/***/ }),

/***/ "./static/css/init.css":
/*!*****************************!*\
  !*** ./static/css/init.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\web\opener-api-doc\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-names":
/*!*******************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-names" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-names");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map