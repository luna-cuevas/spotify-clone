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
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.jsx":
/*!*************************!*\
  !*** ./pages/login.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Login({ providers  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center bg-black min-h-screen w-full justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-52 mb-5\",\n                src: \"https://links.papareact.com/9xl\",\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/pages/login.jsx\",\n                lineNumber: 5,\n                columnNumber: 7\n            }, this),\n            Object.values(providers).map((provider)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-[#18D860] text-white p-5 rounded-full\",\n                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(provider.id, {\n                                callbackUrl: '/'\n                            })\n                        ,\n                        children: [\n                            \"Login with \",\n                            provider.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/pages/login.jsx\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    }, this)\n                }, provider.name, false, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/pages/login.jsx\",\n                    lineNumber: 7,\n                    columnNumber: 9\n                }, this)\n            )\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/pages/login.jsx\",\n        lineNumber: 4,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\nasync function getServerSideProps() {\n    const providers = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getProviders)();\n    return {\n        props: {\n            providers\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFzRDtTQUM3Q0UsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQzdCLE1BQU0sNkVBQ0hDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQXdFOzt3RkFDcEZDLENBQUc7Z0JBQUNELFNBQVMsRUFBQyxDQUFXO2dCQUFDRSxHQUFHLEVBQUMsQ0FBaUM7Z0JBQUNDLEdBQUcsRUFBQyxDQUFFOzs7Ozs7WUFDdEVDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFFUCxTQUFTLEVBQUVRLEdBQUcsRUFBRUMsUUFBUSwrRUFDckNSLENBQUc7MEdBQ0hTLENBQU07d0JBQ1hSLFNBQVMsRUFBQyxDQUEwQzt3QkFDckRTLE9BQU8sTUFBUWIsdURBQU0sQ0FBQ1csUUFBUSxDQUFDRyxFQUFFLEVBQUUsQ0FBQztnQ0FBQ0MsV0FBVyxFQUFFLENBQUc7NEJBQUMsQ0FBQzs7OzRCQUFHLENBQzlDOzRCQUFDSixRQUFRLENBQUNLLElBQUk7Ozs7Ozs7bUJBSlhMLFFBQVEsQ0FBQ0ssSUFBSTs7Ozs7Ozs7Ozs7O0FBVS9CLENBQUM7QUFDRCxpRUFBZWYsS0FBSyxFQUFDO0FBRWQsZUFBZWdCLGtCQUFrQixHQUFHLENBQUM7SUFDMUMsS0FBSyxDQUFDZixTQUFTLEdBQUcsS0FBSyxDQUFDSCw2REFBWTtJQUNwQyxNQUFNLENBQUMsQ0FBQztRQUNObUIsS0FBSyxFQUFFLENBQUM7WUFDTmhCLFNBQVM7UUFDWCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qc3g/OWVlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQcm92aWRlcnMsIHNpZ25JbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmZ1bmN0aW9uIExvZ2luKHsgcHJvdmlkZXJzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGJnLWJsYWNrIG1pbi1oLXNjcmVlbiB3LWZ1bGwganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy01MiBtYi01XCIgc3JjPVwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tLzl4bFwiIGFsdD1cIlwiIC8+XG4gICAgICB7T2JqZWN0LnZhbHVlcyAocHJvdmlkZXJzKS5tYXAoKHByb3ZpZGVyKSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtwcm92aWRlci5uYW1lfT5cbiAgICAgICAgPGJ1dHRvbiBcblx0XHQgXHRjbGFzc05hbWU9J2JnLVsjMThEODYwXSB0ZXh0LXdoaXRlIHAtNSByb3VuZGVkLWZ1bGwnXG5cdFx0XHRvbkNsaWNrPXsoKSA9PiBzaWduSW4ocHJvdmlkZXIuaWQsIHsgY2FsbGJhY2tVcmw6ICcvJyB9KX0+XG5cdFx0XHRcdExvZ2luIHdpdGgge3Byb3ZpZGVyLm5hbWV9XG5cdFx0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgY29uc3QgcHJvdmlkZXJzID0gYXdhaXQgZ2V0UHJvdmlkZXJzKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb3ZpZGVycyxcbiAgICB9LFxuICB9O1xufSJdLCJuYW1lcyI6WyJnZXRQcm92aWRlcnMiLCJzaWduSW4iLCJMb2dpbiIsInByb3ZpZGVycyIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsInByb3ZpZGVyIiwiYnV0dG9uIiwib25DbGljayIsImlkIiwiY2FsbGJhY2tVcmwiLCJuYW1lIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.jsx\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.jsx"));
module.exports = __webpack_exports__;

})();