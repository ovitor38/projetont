"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/createAccountPage",{

/***/ "./pages/createAccountPage.js":
/*!************************************!*\
  !*** ./pages/createAccountPage.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_ovito_Desktop_Projetos_projnt_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_ovito_Desktop_Projetos_projnt_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ovito_Desktop_Projetos_projnt_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_BackBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/BackBtn */ \"./components/BackBtn.js\");\n/* harmony import */ var _components_InputForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/InputForm */ \"./components/InputForm.js\");\n/* harmony import */ var _components_CreateAccountForms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CreateAccountForms */ \"./components/CreateAccountForms.js\");\n/* harmony import */ var _components_ProceedBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ProceedBtn */ \"./components/ProceedBtn.js\");\n/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Logo */ \"./components/Logo.js\");\n/* harmony import */ var _public_image_1_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/image-1.png */ \"./public/image-1.png\");\n/* harmony import */ var _components_TitleNDesc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/TitleNDesc */ \"./components/TitleNDesc.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction createAccountPage() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n    }), formLogin = ref[0], setFormLogin = ref[1];\n    var handleInput = function(event) {\n        var key = event.target.getAttribute('username');\n        var value = event.target.value;\n        setFormLogin(_objectSpread({\n        }, formLogin, _defineProperty({\n        }, key, value)));\n    };\n    var onSubmit = _asyncToGenerator(C_Users_ovito_Desktop_Projetos_projnt_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n        return C_Users_ovito_Desktop_Projetos_projnt_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    event.preventDefault();\n                    console.log(formLogin);\n                    _ctx.prev = 2;\n                    _ctx.next = 5;\n                    return fetch(\"http://localhost:3333/register\", {\n                        method: \"POST\",\n                        body: JSON.stringify(formLogin),\n                        headers: {\n                            'Content-Type': 'application/json'\n                        }\n                    });\n                case 5:\n                    _ctx.next = 10;\n                    break;\n                case 7:\n                    _ctx.prev = 7;\n                    _ctx.t0 = _ctx[\"catch\"](2);\n                    console.log(\"N\\xe3o foi poss\\xedvel conectar\");\n                case 10:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                2,\n                7\n            ]\n        ]);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\ovito\\\\Desktop\\\\Projetos\\\\projnt\\\\pages\\\\createAccountPage.js\",\n            lineNumber: 49,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\ovito\\\\Desktop\\\\Projetos\\\\projnt\\\\pages\\\\createAccountPage.js\",\n                    lineNumber: 50,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\ovito\\\\Desktop\\\\Projetos\\\\projnt\\\\pages\\\\createAccountPage.js\",\n                            lineNumber: 51,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: \"Create Account\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\ovito\\\\Desktop\\\\Projetos\\\\projnt\\\\pages\\\\createAccountPage.js\",\n                            lineNumber: 52,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"meta\", {\n                        charset: \"UTF-8\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\ovito\\\\Desktop\\\\Projetos\\\\projnt\\\\pages\\\\createAccountPage.js\",\n                            lineNumber: 53,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"meta\", {\n                        \"http-equiv\": \"X-UA-Compatible\",\n                        content: \"IE=edge\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\ovito\\\\Desktop\\\\Projetos\\\\projnt\\\\pages\\\\createAccountPage.js\",\n                            lineNumber: 54,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\ovito\\\\Desktop\\\\Projetos\\\\projnt\\\\pages\\\\createAccountPage.js\",\n                            lineNumber: 55,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                className: \"contatiner-createPage\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\ovito\\\\Desktop\\\\Projetos\\\\projnt\\\\pages\\\\createAccountPage.js\",\n                    lineNumber: 58,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_BackBtn__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\ovito\\\\Desktop\\\\Projetos\\\\projnt\\\\pages\\\\createAccountPage.js\",\n                            lineNumber: 60,\n                            columnNumber: 9\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_CreateAccountForms__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\ovito\\\\Desktop\\\\Projetos\\\\projnt\\\\pages\\\\createAccountPage.js\",\n                            lineNumber: 61,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_TitleNDesc__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                className: \"register-head\",\n                                title: \"Register\",\n                                description: \"Create your account right now! It's fast and easy!\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\ovito\\\\Desktop\\\\Projetos\\\\projnt\\\\pages\\\\createAccountPage.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 11\n                                },\n                                __self: this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_InputForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                className: \"input-form-create\",\n                                id: \"username-create\",\n                                name: \"username-create\",\n                                label: \"Username\",\n                                handleInput: handleInput,\n                                value: formLogin.username,\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\ovito\\\\Desktop\\\\Projetos\\\\projnt\\\\pages\\\\createAccountPage.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 11\n                                },\n                                __self: this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_InputForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                className: \"input-form-create\",\n                                id: \"email-create\",\n                                type: \"email\",\n                                name: \"email\",\n                                label: \"Email\",\n                                handleInput: handleInput,\n                                value: formLogin.email,\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\ovito\\\\Desktop\\\\Projetos\\\\projnt\\\\pages\\\\createAccountPage.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 11\n                                },\n                                __self: this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_InputForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                className: \"input-form-create\",\n                                id: \"password-create\",\n                                type: \"password\",\n                                name: \"password-create\",\n                                label: \"Password\",\n                                handleInput: handleInput,\n                                value: formLogin.password,\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\ovito\\\\Desktop\\\\Projetos\\\\projnt\\\\pages\\\\createAccountPage.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 11\n                                },\n                                __self: this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_InputForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                className: \"input-form-create\",\n                                id: \"passwor-confirmation\",\n                                type: \"password\",\n                                name: \"passwor-confirmation\",\n                                label: \"Repeat Password\",\n                                handleInput: handleInput,\n                                value: formLogin.confirmPassword,\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\ovito\\\\Desktop\\\\Projetos\\\\projnt\\\\pages\\\\createAccountPage.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 11\n                                },\n                                __self: this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_ProceedBtn__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                btnId: \"btn-register\",\n                                text: \"Register\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\ovito\\\\Desktop\\\\Projetos\\\\projnt\\\\pages\\\\createAccountPage.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 11\n                                },\n                                __self: this\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_Logo__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        logoType: \"create-page-logo\",\n                        classDiv: \"register-img\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\ovito\\\\Desktop\\\\Projetos\\\\projnt\\\\pages\\\\createAccountPage.js\",\n                            lineNumber: 69,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _public_image_1_png__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\ovito\\\\Desktop\\\\Projetos\\\\projnt\\\\pages\\\\createAccountPage.js\",\n                                lineNumber: 70,\n                                columnNumber: 9\n                            },\n                            __self: this\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n}\n_s(createAccountPage, \"BKBLI19f89LXrwX8b3KtH3R8uGQ=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (createAccountPage);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFtQjtnQ0FBQ0UsRUFBRSxFQUFDLENBQWlCO2dDQUFDRyxJQUFJLEVBQUMsQ0FBVTtnQ0FBQ1osSUFBSSxFQUFDLENBQWlCO2dDQUFDVSxLQUFLLEVBQUMsQ0FBVTtnQ0FBRTdCLFdBQVcsRUFBRUEsV0FBVztnQ0FBRUssS0FBSyxFQUFFUCxTQUFTLENBQUNtQyxRQUFROzs7Ozs7OztpR0FDeksxQyw2REFBUztnQ0FBQ21DLFNBQVMsRUFBQyxDQUFtQjtnQ0FBQ0UsRUFBRSxFQUFDLENBQXNCO2dDQUFDRyxJQUFJLEVBQUMsQ0FBVTtnQ0FBQ1osSUFBSSxFQUFDLENBQXNCO2dDQUFDVSxLQUFLLEVBQUMsQ0FBaUI7Z0NBQUU3QixXQUFXLEVBQUVBLFdBQVc7Z0NBQUVLLEtBQUssRUFBRVAsU0FBUyxDQUFDb0MsZUFBZTs7Ozs7Ozs7aUdBQ2pNekMsOERBQVU7Z0NBQUMwQyxLQUFLLEVBQUMsQ0FBYztnQ0FBQ0MsSUFBSSxFQUFDLENBQVU7Ozs7Ozs7Ozs7eUZBRWpEMUMsd0RBQUk7d0JBQUMyQyxRQUFRLEVBQUMsQ0FBa0I7d0JBQUNDLFFBQVEsRUFBQyxDQUFjOzs7Ozs7O3VHQUN4RG5ELG1EQUFLOzRCQUFFb0QsR0FBRyxFQUFFNUMsNERBQUs7Ozs7Ozs7Ozs7Ozs7QUFXMUIsQ0FBQztHQW5FUUUsaUJBQWlCO0FBcUUxQiwrREFBZUEsaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NyZWF0ZUFjY291bnRQYWdlLmpzPzI0ZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYWNrQnRuIGZyb20gJy4uL2NvbXBvbmVudHMvQmFja0J0bic7XHJcbmltcG9ydCBJbnB1dEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9JbnB1dEZvcm0nO1xyXG5pbXBvcnQgQ3JlYXRlQWNjb3VudEZvcm1zIGZyb20gJy4uL2NvbXBvbmVudHMvQ3JlYXRlQWNjb3VudEZvcm1zJztcclxuaW1wb3J0IFByb2NlZWRCdG4gZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9jZWVkQnRuJztcclxuaW1wb3J0IExvZ28gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dvJztcclxuaW1wb3J0IGNhcGljIGZyb20gJy4uL3B1YmxpYy9pbWFnZS0xLnBuZydcclxuaW1wb3J0IFRpdGxlTkRlc2MgZnJvbSAnLi4vY29tcG9uZW50cy9UaXRsZU5EZXNjJztcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQWNjb3VudFBhZ2UoKSB7XHJcblxyXG4gIGNvbnN0IFtmb3JtTG9naW4sIHNldEZvcm1Mb2dpbl0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBrZXkgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCd1c2VybmFtZScpO1xyXG4gICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgc2V0Rm9ybUxvZ2luKHtcclxuICAgICAgLi4uZm9ybUxvZ2luLFxyXG4gICAgICBba2V5XTogdmFsdWVcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhmb3JtTG9naW4pO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMzMzL3JlZ2lzdGVyXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1Mb2dpbiksXHJcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cclxuXHJcbiAgICAgIH0pXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJOw6NvIGZvaSBwb3Nzw612ZWwgY29uZWN0YXJcIilcclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcblxyXG4gICAgIFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBBY2NvdW50PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCIgLz5cclxuICAgICAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPSdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNS40L2Nzcy9hbGwubWluLmNzcycgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhdGluZXItY3JlYXRlUGFnZSc+XHJcblxyXG4gICAgICAgIDxCYWNrQnRuIC8+XHJcbiAgICAgICAgPENyZWF0ZUFjY291bnRGb3Jtcz5cclxuICAgICAgICAgIDxUaXRsZU5EZXNjIGNsYXNzTmFtZT0gXCJyZWdpc3Rlci1oZWFkXCIgdGl0bGU9XCJSZWdpc3RlclwiIGRlc2NyaXB0aW9uPVwiQ3JlYXRlIHlvdXIgYWNjb3VudCByaWdodCBub3chIEl0J3MgZmFzdCBhbmQgZWFzeSFcIi8+XHJcbiAgICAgICAgICA8SW5wdXRGb3JtIGNsYXNzTmFtZT1cImlucHV0LWZvcm0tY3JlYXRlXCIgaWQ9XCJ1c2VybmFtZS1jcmVhdGVcIiBuYW1lPVwidXNlcm5hbWUtY3JlYXRlXCIgbGFiZWw9XCJVc2VybmFtZVwiICBoYW5kbGVJbnB1dD17aGFuZGxlSW5wdXR9IHZhbHVlPXtmb3JtTG9naW4udXNlcm5hbWV9Lz5cclxuICAgICAgICAgIDxJbnB1dEZvcm0gY2xhc3NOYW1lPVwiaW5wdXQtZm9ybS1jcmVhdGVcIiBpZD1cImVtYWlsLWNyZWF0ZVwiIHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGxhYmVsPVwiRW1haWxcIiAgaGFuZGxlSW5wdXQ9e2hhbmRsZUlucHV0fSB2YWx1ZT17Zm9ybUxvZ2luLmVtYWlsfS8+XHJcbiAgICAgICAgICA8SW5wdXRGb3JtIGNsYXNzTmFtZT1cImlucHV0LWZvcm0tY3JlYXRlXCIgaWQ9XCJwYXNzd29yZC1jcmVhdGVcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmQtY3JlYXRlXCIgbGFiZWw9XCJQYXNzd29yZFwiICBoYW5kbGVJbnB1dD17aGFuZGxlSW5wdXR9IHZhbHVlPXtmb3JtTG9naW4ucGFzc3dvcmR9IC8+XHJcbiAgICAgICAgICA8SW5wdXRGb3JtIGNsYXNzTmFtZT1cImlucHV0LWZvcm0tY3JlYXRlXCIgaWQ9XCJwYXNzd29yLWNvbmZpcm1hdGlvblwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yLWNvbmZpcm1hdGlvblwiIGxhYmVsPVwiUmVwZWF0IFBhc3N3b3JkXCIgIGhhbmRsZUlucHV0PXtoYW5kbGVJbnB1dH0gdmFsdWU9e2Zvcm1Mb2dpbi5jb25maXJtUGFzc3dvcmR9Lz5cclxuICAgICAgICAgIDxQcm9jZWVkQnRuIGJ0bklkPVwiYnRuLXJlZ2lzdGVyXCIgdGV4dD1cIlJlZ2lzdGVyXCIgLz5cclxuICAgICAgICA8L0NyZWF0ZUFjY291bnRGb3Jtcz5cclxuICAgICAgICA8TG9nbyBsb2dvVHlwZT1cImNyZWF0ZS1wYWdlLWxvZ29cIiBjbGFzc0Rpdj0ncmVnaXN0ZXItaW1nJz5cclxuICAgICAgICA8SW1hZ2UgIHNyYz17Y2FwaWN9Lz5cclxuICAgICAgICA8L0xvZ28+XHJcblxyXG5cclxuXHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBY2NvdW50UGFnZVxyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJIZWFkIiwidXNlU3RhdGUiLCJCYWNrQnRuIiwiSW5wdXRGb3JtIiwiQ3JlYXRlQWNjb3VudEZvcm1zIiwiUHJvY2VlZEJ0biIsIkxvZ28iLCJjYXBpYyIsIlRpdGxlTkRlc2MiLCJjcmVhdGVBY2NvdW50UGFnZSIsImZvcm1Mb2dpbiIsInNldEZvcm1Mb2dpbiIsImhhbmRsZUlucHV0IiwiZXZlbnQiLCJrZXkiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJ2YWx1ZSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJkaXYiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImNoYXJzZXQiLCJodHRwLWVxdWl2IiwibGluayIsInJlbCIsImhyZWYiLCJjbGFzc05hbWUiLCJkZXNjcmlwdGlvbiIsImlkIiwibGFiZWwiLCJ1c2VybmFtZSIsInR5cGUiLCJlbWFpbCIsInBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiYnRuSWQiLCJ0ZXh0IiwibG9nb1R5cGUiLCJjbGFzc0RpdiIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/createAccountPage.js\n");

/***/ })

});