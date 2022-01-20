"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/welcomePage";
exports.ids = ["pages/welcomePage"];
exports.modules = {

/***/ "./pages/welcomePage.js":
/*!******************************!*\
  !*** ./pages/welcomePage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction welcomePage() {\n    const ISSERVER = \"undefined\" === \"undefined\";\n    if (!ISSERVER) {\n        const token = localStorage.getItem(\"token\");\n        console.log(\"Aqui\", token);\n        if (!token) {\n            return false;\n        }\n        try {\n            const response = fetch(\"http://localhost:3333/users\", {\n                method: \"GET\",\n                headers: {\n                    'Content-Type': 'application/json',\n                    Authorization: `Bearer ${token}`\n                }\n            }).then(response.json());\n            console.log(response);\n        } catch  {\n        }\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            __source: {\n                fileName: \"C:\\\\Users\\\\ovito\\\\Desktop\\\\Projetos\\\\projnt\\\\pages\\\\welcomePage.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            },\n            __self: this,\n            children: \"Welcome Page\"\n        }));\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (welcomePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93ZWxjb21lUGFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBdUM7U0FFN0JFLFdBQVcsR0FBRyxDQUFDO0lBRXZCLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLENBQWEsZUFBSyxDQUFXO0lBQzlDLEVBQUUsR0FBR0EsUUFBUSxFQUFFLENBQUM7UUFFZCxLQUFLLENBQUNDLEtBQUssR0FBR0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBTztRQUMxQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBTSxPQUFFSixLQUFLO1FBQ3pCLEVBQUUsR0FBR0EsS0FBSyxFQUFFLENBQUM7WUFDWCxNQUFNLENBQUMsS0FBSztRQUNkLENBQUM7UUFFRCxHQUFHLENBQUMsQ0FBQztZQUNILEtBQUssQ0FBQ0ssUUFBUSxHQUFHQyxLQUFLLENBQUMsQ0FBNkIsOEJBQUUsQ0FBQztnQkFDckRDLE1BQU0sRUFBRSxDQUFLO2dCQUNiQyxPQUFPLEVBQUUsQ0FBQztvQkFDUixDQUFjLGVBQUUsQ0FBa0I7b0JBQ2xDQyxhQUFhLEdBQUcsT0FBTyxFQUFFVCxLQUFLO2dCQUNoQyxDQUFDO1lBRUgsQ0FBQyxFQUFFVSxJQUFJLENBQUNMLFFBQVEsQ0FBQ00sSUFBSTtZQUN6QlIsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFFBQVE7UUFDbEIsQ0FBQyxDQUFDLEtBQUssRUFBQyxDQUFDO1FBRVQsQ0FBQztRQUVELE1BQU0sc0VBR0hPLENBQUc7Ozs7Ozs7c0JBQUMsQ0FBWTs7SUFHckIsQ0FBQztBQUNILENBQUM7QUFDQyxpRUFBZWQsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2pudC8uL3BhZ2VzL3dlbGNvbWVQYWdlLmpzP2E1MTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4gZnVuY3Rpb24gd2VsY29tZVBhZ2UoKSB7XHJcblxyXG4gIGNvbnN0IElTU0VSVkVSID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIlxyXG4gIGlmICghSVNTRVJWRVIpIHtcclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBjb25zb2xlLmxvZyhcIkFxdWlcIiwgdG9rZW4pO1xyXG4gICAgaWYgKCF0b2tlbikge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzMzMy91c2Vyc1wiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0pLnRoZW4ocmVzcG9uc2UuanNvbigpKVxyXG4gIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgfSBjYXRjaCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG5cclxuICAgICAgPGRpdj5XZWxjb21lIFBhZ2U8L2Rpdj5cclxuXHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiAgZXhwb3J0IGRlZmF1bHQgd2VsY29tZVBhZ2UiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIndlbGNvbWVQYWdlIiwiSVNTRVJWRVIiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsImpzb24iLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/welcomePage.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/welcomePage.js"));
module.exports = __webpack_exports__;

})();