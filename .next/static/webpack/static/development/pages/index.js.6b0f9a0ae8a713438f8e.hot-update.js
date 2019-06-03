webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
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

/***/ })

})
//# sourceMappingURL=index.js.6b0f9a0ae8a713438f8e.hot-update.js.map