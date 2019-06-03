webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./react/component/snippet.js":
/*!************************************!*\
  !*** ./react/component/snippet.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
  }, props.type === "fetch" ? props.fetch.replace(/  /g, "") : null, props.type === "axios" ? props.axios.replace(/  /g, "") : null, props.type === "module" ? props.module.replace(/  /g, "") : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("template", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, props.type === "axios" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    tabIndex: -1,
    readOnly: true,
    type: "text",
    value: props.axios.replace(/  /g, ""),
    id: "code-".concat(props.index),
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }) : null));
};

/* harmony default export */ __webpack_exports__["default"] = (Snippet);

/***/ })

})
//# sourceMappingURL=index.js.9ff8920faeb3e769a597.hot-update.js.map