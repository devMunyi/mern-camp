"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/following",{

/***/ "./pages/user/following.js":
/*!*********************************!*\
  !*** ./pages/user/following.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_web_dev_MERN_projects_social_network_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_web_dev_MERN_projects_social_network_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_web_dev_MERN_projects_social_network_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context */ \"./context/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Following = function() {\n    _s();\n    //states\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__.UserContext), state = ref[0], setState = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), people = ref1[0], setPeople = ref1[1];\n    //router\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (state && state.token) fetchFollowing();\n    }, [\n        state && state.token\n    ]);\n    var fetchFollowing = function() {\n        var _ref = _asyncToGenerator(C_web_dev_MERN_projects_social_network_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data;\n            return C_web_dev_MERN_projects_social_network_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_6___default().get(\"/user-following\");\n                    case 3:\n                        data = _ctx.sent.data;\n                        setPeople(data);\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return function fetchFollowing() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    //handle image retrival\n    var imageSource = function(person) {\n        if (person.image) {\n            return person.image.url;\n        } else {\n            return \"/images/logo/logo.png\";\n        }\n    };\n    var handleUnfollow = function() {\n        var _ref = _asyncToGenerator(C_web_dev_MERN_projects_social_network_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(person) {\n            var data, auth, filtered_arr;\n            return C_web_dev_MERN_projects_social_network_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_6___default().put(\"/user-unfollow\", {\n                            _id: person._id\n                        });\n                    case 3:\n                        data = _ctx.sent.data;\n                        auth = JSON.parse(localStorage.getItem(\"auth\"));\n                        auth.user = data;\n                        localStorage.setItem(\"auth\", JSON.stringify(auth));\n                        //update context\n                        setState(_objectSpread({}, state, {\n                            user: data\n                        }));\n                        filtered_arr = people.filter(function(p) {\n                            return p._id !== person._id;\n                        });\n                        setPeople(filtered_arr);\n                        react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.warning(\"Unfollwed \".concat(person.name));\n                        _ctx.next = 16;\n                        break;\n                    case 13:\n                        _ctx.prev = 13;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    13\n                ]\n            ]);\n        }));\n        return function handleUnfollow(person) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"row col-md-6 offset-md-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_9__.List, {\n                itemLayout: \"horizontal\",\n                dataSource: people,\n                renderItem: function(person) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_9__.List.Item, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_9__.List.Item.Meta, {\n                            avatar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_9__.Avatar, {\n                                src: imageSource(person)\n                            }, void 0, false, void 0, void 0),\n                            title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"d-flex justify-content-between\",\n                                children: [\n                                    person.username,\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        onClick: function() {\n                                            return handleUnfollow(person);\n                                        },\n                                        className: \"text-primary pointer\",\n                                        children: \"Unfollow\"\n                                    }, void 0, false, void 0, void 0)\n                                ]\n                            }, void 0, true, void 0, void 0)\n                        }, void 0, false, void 0, void 0)\n                    }, void 0, false, void 0, void 0);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\web_dev\\\\MERN\\\\projects\\\\social-network-app\\\\client\\\\pages\\\\user\\\\following.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                href: \"/user/dashboard\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                    title: \"go back\",\n                    className: \"d-flex justify-content-center pt-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__.RollbackOutlined, {}, void 0, false, {\n                        fileName: \"C:\\\\web_dev\\\\MERN\\\\projects\\\\social-network-app\\\\client\\\\pages\\\\user\\\\following.js\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\web_dev\\\\MERN\\\\projects\\\\social-network-app\\\\client\\\\pages\\\\user\\\\following.js\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\web_dev\\\\MERN\\\\projects\\\\social-network-app\\\\client\\\\pages\\\\user\\\\following.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\web_dev\\\\MERN\\\\projects\\\\social-network-app\\\\client\\\\pages\\\\user\\\\following.js\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, _this));\n};\n_s(Following, \"BUV/ivELUpA8kC99iabUkya82Gs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Following;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Following);\nvar _c;\n$RefreshReg$(_c, \"Following\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dEN4QyxzQ0FBSTtnQkFDSHlDLFVBQVUsRUFBQyxDQUFZO2dCQUN2QkMsVUFBVSxFQUFFaEMsTUFBTTtnQkFDbEJpQyxVQUFVLEVBQUUsUUFBUSxDQUFQdkIsTUFBTTtrQ0FDakIsTUFBTXdCLENBQUFBLDZEQUFBQSxDQUFMNUMsMkNBQVM7OEdBQ1BBLGdEQUFjOzRCQUNiOEMsTUFBTSw4RUFBRy9DLHdDQUFNO2dDQUFDZ0QsR0FBRyxFQUFFNUIsV0FBVyxDQUFDQyxNQUFNOzs0QkFDdkM0QixLQUFLLDhFQUNGVCxDQUFHO2dDQUFDQyxTQUFTLEVBQUMsQ0FBZ0M7O29DQUM1Q3BCLE1BQU0sQ0FBQzZCLFFBQVE7b0NBQUUsQ0FBRztnSEFDcEJDLENBQUk7d0NBQ0hDLE9BQU8sRUFBRSxRQUFROzRDQUFGNUIsTUFBTSxDQUFOQSxjQUFjLENBQUNILE1BQU07O3dDQUNwQ29CLFNBQVMsRUFBQyxDQUFzQjtrREFDakMsQ0FFRDs7Ozs7Ozs7Ozs7O3dGQVFYbkMsa0RBQUk7Z0JBQUMrQyxJQUFJLEVBQUcsQ0FBZTtzR0FDekJDLENBQUM7b0JBQUNMLEtBQUssRUFBQyxDQUFTO29CQUFDUixTQUFTLEVBQUMsQ0FBb0M7MEdBQzlEcEMsZ0VBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLM0IsQ0FBQztHQW5GS0csU0FBUzs7UUFNRU4sa0RBQVM7OztLQU5wQk0sU0FBUztBQXFGZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXIvZm9sbG93aW5nLmpzPzkwMzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0XCI7XHJcbmltcG9ydCB7IEF2YXRhciwgTGlzdCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBSb2xsYmFja091dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuXHJcbmNvbnN0IEZvbGxvd2luZyA9ICgpID0+IHtcclxuICAvL3N0YXRlc1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgY29uc3QgW3Blb3BsZSwgc2V0UGVvcGxlXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgLy9yb3V0ZXJcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS50b2tlbikgZmV0Y2hGb2xsb3dpbmcoKTtcclxuICB9LCBbc3RhdGUgJiYgc3RhdGUudG9rZW5dKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hGb2xsb3dpbmcgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcIi91c2VyLWZvbGxvd2luZ1wiKTtcclxuICAgICAgc2V0UGVvcGxlKGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy9oYW5kbGUgaW1hZ2UgcmV0cml2YWxcclxuICBjb25zdCBpbWFnZVNvdXJjZSA9IChwZXJzb24pID0+IHtcclxuICAgIGlmIChwZXJzb24uaW1hZ2UpIHtcclxuICAgICAgcmV0dXJuIHBlcnNvbi5pbWFnZS51cmw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gXCIvaW1hZ2VzL2xvZ28vbG9nby5wbmdcIjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVVbmZvbGxvdyA9IGFzeW5jIChwZXJzb24pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucHV0KFwiL3VzZXItdW5mb2xsb3dcIiwgeyBfaWQ6IHBlcnNvbi5faWQgfSk7XHJcbiAgICAgIC8vdXBkYXRlIGxvY2FsIHN0b3JhZ2UsIHVwZGF0ZSB1c2VyLCBrZWVwIHRva2VuXHJcbiAgICAgIGxldCBhdXRoID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhcIikpO1xyXG4gICAgICBhdXRoLnVzZXIgPSBkYXRhO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImF1dGhcIiwgSlNPTi5zdHJpbmdpZnkoYXV0aCkpO1xyXG5cclxuICAgICAgLy91cGRhdGUgY29udGV4dFxyXG4gICAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCB1c2VyOiBkYXRhIH0pO1xyXG5cclxuICAgICAgLy9VcGRhdGUgcGVvcGxlIHN0YXRlIHRvIHJlLXJlbmRlciBpbW1lZGlhdGVseSB3aXRob3V0IGhhdmluZyB0byB3YWl0IGZvciBwYWdlIHJlZnJlc2hcclxuICAgICAgbGV0IGZpbHRlcmVkX2FyciA9IHBlb3BsZS5maWx0ZXIoKHApID0+IHAuX2lkICE9PSBwZXJzb24uX2lkKTtcclxuICAgICAgc2V0UGVvcGxlKGZpbHRlcmVkX2Fycik7XHJcblxyXG4gICAgICB0b2FzdC53YXJuaW5nKGBVbmZvbGx3ZWQgJHtwZXJzb24ubmFtZX1gKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjb2wtbWQtNiBvZmZzZXQtbWQtM1wiPlxyXG4gICAgICA8TGlzdFxyXG4gICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICBkYXRhU291cmNlPXtwZW9wbGV9XHJcbiAgICAgICAgcmVuZGVySXRlbT17KHBlcnNvbikgPT4gKFxyXG4gICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXHJcbiAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyIHNyYz17aW1hZ2VTb3VyY2UocGVyc29uKX0gLz59XHJcbiAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAge3BlcnNvbi51c2VybmFtZX17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVW5mb2xsb3cocGVyc29uKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBVbmZvbGxvd1xyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICApfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPExpbmsgaHJlZj17YC91c2VyL2Rhc2hib2FyZGB9PlxyXG4gICAgICAgIDxhIHRpdGxlPVwiZ28gYmFja1wiIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHB0LTVcIj5cclxuICAgICAgICAgIDxSb2xsYmFja091dGxpbmVkIC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9sbG93aW5nO1xyXG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVXNlckNvbnRleHQiLCJBdmF0YXIiLCJMaXN0IiwidXNlUm91dGVyIiwibW9tZW50IiwiYXhpb3MiLCJSb2xsYmFja091dGxpbmVkIiwiTGluayIsInRvYXN0IiwiRm9sbG93aW5nIiwic3RhdGUiLCJzZXRTdGF0ZSIsInBlb3BsZSIsInNldFBlb3BsZSIsInJvdXRlciIsInRva2VuIiwiZmV0Y2hGb2xsb3dpbmciLCJkYXRhIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImltYWdlU291cmNlIiwicGVyc29uIiwiaW1hZ2UiLCJ1cmwiLCJoYW5kbGVVbmZvbGxvdyIsImF1dGgiLCJmaWx0ZXJlZF9hcnIiLCJwdXQiLCJfaWQiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlciIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJmaWx0ZXIiLCJwIiwid2FybmluZyIsIm5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJpdGVtTGF5b3V0IiwiZGF0YVNvdXJjZSIsInJlbmRlckl0ZW0iLCJJdGVtIiwiTWV0YSIsImF2YXRhciIsInNyYyIsInRpdGxlIiwidXNlcm5hbWUiLCJzcGFuIiwib25DbGljayIsImhyZWYiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/user/following.js\n");

/***/ })

});