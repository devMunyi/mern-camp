"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": function() { return /* binding */ UserContext; },\n/* harmony export */   \"UserProvider\": function() { return /* binding */ UserProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar UserProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        user: {},\n        token: \"\"\n    }), state = ref[0], setState = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (window.localStorage.getItem(\"auth\")) {\n            setState(JSON.parse(window.localStorage.getItem(\"auth\")));\n        }\n    }, []);\n    //to be reused in making api request\n    var token = state && state.token ? state.token : \"\";\n    (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.baseURL) = \"http://localhost:8000/api\";\n    (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.common.Authorization) = \"Bearer \".concat(token);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    axios__WEBPACK_IMPORTED_MODULE_2___default().interceptors.response.use(function(response) {\n        //do something before request is sent\n        return response;\n    }, function(error) {\n        //do something with request error\n        var res = error.response;\n        if (res.status === 401 && res.config && !res.config.__isRetryRequest) {\n            setState(null);\n            window.localStorage.removeItem(\"auth\");\n            router.push(\"/login\");\n        } else {\n            if (res.status === 400 && res.config && !res.config.__isRetryRequest) {\n                return response;\n            }\n        }\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: [\n            state,\n            setState\n        ],\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\web_dev\\\\MERN\\\\projects\\\\social-network-app\\\\client\\\\context\\\\index.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, _this));\n};\n_s(UserProvider, \"QD/uwx2uR6dZ5guTTGOMBbT8ivU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = UserProvider;\n\nvar _c;\n$RefreshReg$(_c, \"UserProvider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwRDtBQUNqQztBQUNjOzs7QUFFdkMsR0FBSyxDQUFDSyxXQUFXLGlCQUFHSixvREFBYTtBQUVqQyxHQUFLLENBQUNLLFlBQVksR0FBRyxRQUFRLFFBQVUsQ0FBQztRQUFoQkMsUUFBUSxTQUFSQSxRQUFROztJQUM5QixHQUFLLENBQXFCUCxHQUd4QixHQUh3QkEsK0NBQVEsQ0FBQyxDQUFDO1FBQ2xDUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ1JDLEtBQUssRUFBRSxDQUFFO0lBQ1gsQ0FBQyxHQUhNQyxLQUFLLEdBQWNWLEdBR3hCLEtBSFlXLFFBQVEsR0FBSVgsR0FHeEI7SUFFRkUsZ0RBQVMsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNmLEVBQUUsRUFBRVUsTUFBTSxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFNLFFBQUcsQ0FBQztZQUN4Q0gsUUFBUSxDQUFDSSxJQUFJLENBQUNDLEtBQUssQ0FBQ0osTUFBTSxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFNO1FBQ3hELENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsRUFBb0M7SUFDcEMsR0FBSyxDQUFDTCxLQUFLLEdBQUdDLEtBQUssSUFBSUEsS0FBSyxDQUFDRCxLQUFLLEdBQUdDLEtBQUssQ0FBQ0QsS0FBSyxHQUFHLENBQUU7SUFDckROLCtEQUFzQixHQUFHZ0IsMkJBQTJCO0lBQ3BEaEIsb0ZBQTZDLEdBQUssQ0FBTyxTQUFRLE9BQU5NLEtBQUs7SUFFaEUsR0FBSyxDQUFDZSxNQUFNLEdBQUdwQixzREFBUztJQUN4QkQsc0VBQStCLENBQzdCLFFBQVEsQ0FBRXVCLFFBQVEsRUFBRSxDQUFDO1FBQ25CLEVBQXFDO1FBQ3JDLE1BQU0sQ0FBQ0EsUUFBUTtJQUNqQixDQUFDLEVBQ0QsUUFBUSxDQUFFRSxLQUFLLEVBQUUsQ0FBQztRQUNoQixFQUFpQztRQUNqQyxHQUFHLENBQUNDLEdBQUcsR0FBR0QsS0FBSyxDQUFDRixRQUFRO1FBRXhCLEVBQUUsRUFBRUcsR0FBRyxDQUFDQyxNQUFNLEtBQUssR0FBRyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBS0YsR0FBRyxDQUFDRSxNQUFNLENBQUNDLGdCQUFnQixFQUFFLENBQUM7WUFDckVyQixRQUFRLENBQUMsSUFBSTtZQUNiQyxNQUFNLENBQUNDLFlBQVksQ0FBQ29CLFVBQVUsQ0FBQyxDQUFNO1lBQ3JDVCxNQUFNLENBQUNVLElBQUksQ0FBQyxDQUFRO1FBQ3RCLENBQUMsTUFBTSxDQUFDO1lBQ04sRUFBRSxFQUFFTCxHQUFHLENBQUNDLE1BQU0sS0FBSyxHQUFHLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLRixHQUFHLENBQUNFLE1BQU0sQ0FBQ0MsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDckUsTUFBTSxDQUFDTixRQUFRO1lBQ2pCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUdILE1BQU0sNkVBQ0hyQixXQUFXLENBQUM4QixRQUFRO1FBQUNDLEtBQUssRUFBRSxDQUFDMUI7WUFBQUEsS0FBSztZQUFFQyxRQUFRO1FBQUEsQ0FBQztrQkFDM0NKLFFBQVE7Ozs7OztBQUdmLENBQUM7R0E1Q0tELFlBQVk7O1FBaUJERixrREFBUzs7O0tBakJwQkUsWUFBWTtBQThDbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9pbmRleC5qcz81ZDI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgVXNlclByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgdXNlcjoge30sXHJcbiAgICB0b2tlbjogXCJcIixcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoXCIpKSB7XHJcbiAgICAgIHNldFN0YXRlKEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aFwiKSkpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy90byBiZSByZXVzZWQgaW4gbWFraW5nIGFwaSByZXF1ZXN0XHJcbiAgY29uc3QgdG9rZW4gPSBzdGF0ZSAmJiBzdGF0ZS50b2tlbiA/IHN0YXRlLnRva2VuIDogXCJcIjtcclxuICBheGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJO1xyXG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uW1wiQXV0aG9yaXphdGlvblwiXSA9IGBCZWFyZXIgJHt0b2tlbn1gO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBheGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxyXG4gICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIC8vZG8gc29tZXRoaW5nIGJlZm9yZSByZXF1ZXN0IGlzIHNlbnRcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfSxcclxuICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAvL2RvIHNvbWV0aGluZyB3aXRoIHJlcXVlc3QgZXJyb3JcclxuICAgICAgbGV0IHJlcyA9IGVycm9yLnJlc3BvbnNlO1xyXG5cclxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwMSAmJiByZXMuY29uZmlnICYmICFyZXMuY29uZmlnLl9faXNSZXRyeVJlcXVlc3QpIHtcclxuICAgICAgICBzZXRTdGF0ZShudWxsKTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdXRoXCIpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDAgJiYgcmVzLmNvbmZpZyAmJiAhcmVzLmNvbmZpZy5fX2lzUmV0cnlSZXF1ZXN0KSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W3N0YXRlLCBzZXRTdGF0ZV19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBVc2VyQ29udGV4dCwgVXNlclByb3ZpZGVyIH07XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInVzZVJvdXRlciIsIlVzZXJDb250ZXh0IiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwidG9rZW4iLCJzdGF0ZSIsInNldFN0YXRlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImRlZmF1bHRzIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUEkiLCJoZWFkZXJzIiwiY29tbW9uIiwicm91dGVyIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJlcnJvciIsInJlcyIsInN0YXR1cyIsImNvbmZpZyIsIl9faXNSZXRyeVJlcXVlc3QiLCJyZW1vdmVJdGVtIiwicHVzaCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ })

});