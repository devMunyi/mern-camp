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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_web_dev_MERN_projects_social_network_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_web_dev_MERN_projects_social_network_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_web_dev_MERN_projects_social_network_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context */ \"./context/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Following = function() {\n    _s();\n    //states\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__.UserContext), state = ref[0];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), people = ref1[0], setPeople = ref1[1];\n    //router\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (state && state.token) fetchFollowing();\n    }, [\n        state && state.token\n    ]);\n    var fetchFollowing = function() {\n        var _ref = _asyncToGenerator(C_web_dev_MERN_projects_social_network_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data;\n            return C_web_dev_MERN_projects_social_network_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_6___default().get(\"/user-following\");\n                    case 3:\n                        data = _ctx.sent.data;\n                        setPeople(data);\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return function fetchFollowing() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    //handle image retrival\n    var imageSource = function(person) {\n        if (person.image) {\n            return person.image.url;\n        } else {\n            return \"/images/logo/logo.png\";\n        }\n    };\n    var handleUnfollow = function() {\n        var _ref = _asyncToGenerator(C_web_dev_MERN_projects_social_network_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(person) {\n            var data, auth, filtered_arr;\n            return C_web_dev_MERN_projects_social_network_app_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_6___default().put(\"/user-unfollow\", {\n                            _id: person._id\n                        });\n                    case 3:\n                        data = _ctx.sent.data;\n                        //update local storage, update user, keep token\n                        console.log(data);\n                        auth = JSON.parse(localStorage.getItem(\"auth\"));\n                        auth.user = data;\n                        localStorage.setItem(\"auth\", JSON.stringify(auth));\n                        //update context\n                        setState(_objectSpread({}, state, {\n                            user: data\n                        }));\n                        _ctx.next = 11;\n                        return people.filter(function(p) {\n                            return p._id !== person._id;\n                        });\n                    case 11:\n                        filtered_arr = _ctx.sent;\n                        setPeople(filtered_arr);\n                        react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.success(\"Unfollwed \".concat(user.name));\n                        _ctx.next = 19;\n                        break;\n                    case 16:\n                        _ctx.prev = 16;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 19:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    16\n                ]\n            ]);\n        }));\n        return function handleUnfollow(person) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"row col-md-6 offset-md-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_9__.List, {\n                itemLayout: \"horizontal\",\n                dataSource: people,\n                renderItem: function(person) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_9__.List.Item, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_9__.List.Item.Meta, {\n                            avatar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_9__.Avatar, {\n                                src: imageSource(person)\n                            }, void 0, false, void 0, void 0),\n                            title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"d-flex justify-content-between\",\n                                children: [\n                                    person.username,\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        onClick: function() {\n                                            return handleUnfollow(person);\n                                        },\n                                        className: \"text-primary pointer\",\n                                        children: \"Unfollow\"\n                                    }, void 0, false, void 0, void 0)\n                                ]\n                            }, void 0, true, void 0, void 0)\n                        }, void 0, false, void 0, void 0)\n                    }, void 0, false, void 0, void 0);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\web_dev\\\\MERN\\\\projects\\\\social-network-app\\\\client\\\\pages\\\\user\\\\following.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                href: \"/user/dashboard\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                    title: \"go back\",\n                    className: \"d-flex justify-content-center pt-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__.RollbackOutlined, {}, void 0, false, {\n                        fileName: \"C:\\\\web_dev\\\\MERN\\\\projects\\\\social-network-app\\\\client\\\\pages\\\\user\\\\following.js\",\n                        lineNumber: 90,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\web_dev\\\\MERN\\\\projects\\\\social-network-app\\\\client\\\\pages\\\\user\\\\following.js\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\web_dev\\\\MERN\\\\projects\\\\social-network-app\\\\client\\\\pages\\\\user\\\\following.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\web_dev\\\\MERN\\\\projects\\\\social-network-app\\\\client\\\\pages\\\\user\\\\following.js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, _this));\n};\n_s(Following, \"BUV/ivELUpA8kC99iabUkya82Gs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Following;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Following);\nvar _c;\n$RefreshReg$(_c, \"Following\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0MsU0FBUyxFQUFDLENBQTBCOzt3RkFDdEN4QyxzQ0FBSTtnQkFDSHlDLFVBQVUsRUFBQyxDQUFZO2dCQUN2QkMsVUFBVSxFQUFFakMsTUFBTTtnQkFDbEJrQyxVQUFVLEVBQUUsUUFBUSxDQUFQeEIsTUFBTTtrQ0FDakIsTUFBTXlCLENBQUFBLDZEQUFBQSxDQUFMNUMsMkNBQVM7OEdBQ1BBLGdEQUFjOzRCQUNiOEMsTUFBTSw4RUFBRy9DLHdDQUFNO2dDQUFDZ0QsR0FBRyxFQUFFN0IsV0FBVyxDQUFDQyxNQUFNOzs0QkFDdkM2QixLQUFLLDhFQUNGVCxDQUFHO2dDQUFDQyxTQUFTLEVBQUMsQ0FBZ0M7O29DQUM1Q3JCLE1BQU0sQ0FBQzhCLFFBQVE7b0NBQUUsQ0FBRztnSEFDcEJDLENBQUk7d0NBQ0hDLE9BQU8sRUFBRSxRQUFROzRDQUFGN0IsTUFBTSxDQUFOQSxjQUFjLENBQUNILE1BQU07O3dDQUNwQ3FCLFNBQVMsRUFBQyxDQUFzQjtrREFDakMsQ0FFRDs7Ozs7Ozs7Ozs7O3dGQVFYbkMsa0RBQUk7Z0JBQUMrQyxJQUFJLEVBQUcsQ0FBZTtzR0FDekJDLENBQUM7b0JBQUNMLEtBQUssRUFBQyxDQUFTO29CQUFDUixTQUFTLEVBQUMsQ0FBb0M7MEdBQzlEcEMsZ0VBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLM0IsQ0FBQztHQXBGS0csU0FBUzs7UUFNRU4sa0RBQVM7OztLQU5wQk0sU0FBUztBQXNGZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXIvZm9sbG93aW5nLmpzPzkwMzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0XCI7XHJcbmltcG9ydCB7IEF2YXRhciwgTGlzdCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBSb2xsYmFja091dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuXHJcbmNvbnN0IEZvbGxvd2luZyA9ICgpID0+IHtcclxuICAvL3N0YXRlc1xyXG4gIGNvbnN0IFtzdGF0ZV0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICBjb25zdCBbcGVvcGxlLCBzZXRQZW9wbGVdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAvL3JvdXRlclxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHN0YXRlICYmIHN0YXRlLnRva2VuKSBmZXRjaEZvbGxvd2luZygpO1xyXG4gIH0sIFtzdGF0ZSAmJiBzdGF0ZS50b2tlbl0pO1xyXG5cclxuICBjb25zdCBmZXRjaEZvbGxvd2luZyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL3VzZXItZm9sbG93aW5nXCIpO1xyXG4gICAgICBzZXRQZW9wbGUoZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvL2hhbmRsZSBpbWFnZSByZXRyaXZhbFxyXG4gIGNvbnN0IGltYWdlU291cmNlID0gKHBlcnNvbikgPT4ge1xyXG4gICAgaWYgKHBlcnNvbi5pbWFnZSkge1xyXG4gICAgICByZXR1cm4gcGVyc29uLmltYWdlLnVybDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBcIi9pbWFnZXMvbG9nby9sb2dvLnBuZ1wiO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVVuZm9sbG93ID0gYXN5bmMgKHBlcnNvbikgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wdXQoXCIvdXNlci11bmZvbGxvd1wiLCB7IF9pZDogcGVyc29uLl9pZCB9KTtcclxuICAgICAgLy91cGRhdGUgbG9jYWwgc3RvcmFnZSwgdXBkYXRlIHVzZXIsIGtlZXAgdG9rZW5cclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIGxldCBhdXRoID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhcIikpO1xyXG4gICAgICBhdXRoLnVzZXIgPSBkYXRhO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImF1dGhcIiwgSlNPTi5zdHJpbmdpZnkoYXV0aCkpO1xyXG5cclxuICAgICAgLy91cGRhdGUgY29udGV4dFxyXG4gICAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCB1c2VyOiBkYXRhIH0pO1xyXG5cclxuICAgICAgLy9VcGRhdGUgcGVvcGxlIHN0YXRlIHRvIHJlLXJlbmRlciBpbW1lZGlhdGVseSB3aXRob3V0IGhhdmluZyB0byB3YWl0IGZvciBwYWdlIHJlZnJlc2hcclxuICAgICAgbGV0IGZpbHRlcmVkX2FyciA9IGF3YWl0IHBlb3BsZS5maWx0ZXIoKHApID0+IHAuX2lkICE9PSBwZXJzb24uX2lkKTtcclxuICAgICAgc2V0UGVvcGxlKGZpbHRlcmVkX2Fycik7XHJcblxyXG4gICAgICB0b2FzdC5zdWNjZXNzKGBVbmZvbGx3ZWQgJHt1c2VyLm5hbWV9YCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgY29sLW1kLTYgb2Zmc2V0LW1kLTNcIj5cclxuICAgICAgPExpc3RcclxuICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgZGF0YVNvdXJjZT17cGVvcGxlfVxyXG4gICAgICAgIHJlbmRlckl0ZW09eyhwZXJzb24pID0+IChcclxuICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxyXG4gICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhciBzcmM9e2ltYWdlU291cmNlKHBlcnNvbil9IC8+fVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtwZXJzb24udXNlcm5hbWV9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVVuZm9sbG93KHBlcnNvbil9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IHBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgVW5mb2xsb3dcclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgKX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxMaW5rIGhyZWY9e2AvdXNlci9kYXNoYm9hcmRgfT5cclxuICAgICAgICA8YSB0aXRsZT1cImdvIGJhY2tcIiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBwdC01XCI+XHJcbiAgICAgICAgICA8Um9sbGJhY2tPdXRsaW5lZCAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd2luZztcclxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlVzZXJDb250ZXh0IiwiQXZhdGFyIiwiTGlzdCIsInVzZVJvdXRlciIsIm1vbWVudCIsImF4aW9zIiwiUm9sbGJhY2tPdXRsaW5lZCIsIkxpbmsiLCJ0b2FzdCIsIkZvbGxvd2luZyIsInN0YXRlIiwicGVvcGxlIiwic2V0UGVvcGxlIiwicm91dGVyIiwidG9rZW4iLCJmZXRjaEZvbGxvd2luZyIsImRhdGEiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiaW1hZ2VTb3VyY2UiLCJwZXJzb24iLCJpbWFnZSIsInVybCIsImhhbmRsZVVuZm9sbG93IiwiYXV0aCIsImZpbHRlcmVkX2FyciIsInB1dCIsIl9pZCIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VyIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInNldFN0YXRlIiwiZmlsdGVyIiwicCIsInN1Y2Nlc3MiLCJuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaXRlbUxheW91dCIsImRhdGFTb3VyY2UiLCJyZW5kZXJJdGVtIiwiSXRlbSIsIk1ldGEiLCJhdmF0YXIiLCJzcmMiLCJ0aXRsZSIsInVzZXJuYW1lIiwic3BhbiIsIm9uQ2xpY2siLCJocmVmIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/user/following.js\n");

/***/ })

});