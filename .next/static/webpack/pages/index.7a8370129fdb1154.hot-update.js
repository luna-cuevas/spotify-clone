"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Sidebar.jsx":
/*!********************************!*\
  !*** ./components/Sidebar.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks_useSpotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useSpotify */ \"./hooks/useSpotify.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _atoms_playlistAtom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../atoms/playlistAtom */ \"./atoms/playlistAtom.js\");\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Sidebar = function() {\n    var _this1 = _this;\n    _s();\n    var spotifyApi = (0,_hooks_useSpotify__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)(), session = ref.data, status = ref.status;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), playlists = ref1[0], setPlaylists = ref1[1];\n    var ref2 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(_atoms_playlistAtom__WEBPACK_IMPORTED_MODULE_6__.playlistIdState), 2), playlistId = ref2[0], setPlaylistId = ref2[1];\n    console.log('you picked playlist', playlistId);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (spotifyApi.getAccessToken()) {\n            spotifyApi.getUserPlaylists().then(function(data) {\n                setPlaylists(data.body.items);\n            });\n        }\n    }, [\n        session,\n        spotifyApi\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-gray-500 p-5 text-xs lg:text-sm sm:max-w-[12rem] lg:max-w-[15rem] border-r border-gray-900 overflow-y-scroll h-screen scrollbar-hide hidden md:inline-flex pb-36\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"space-y-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"flex items-center space-x-2 hover:text-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.HomeIcon, {\n                            className: \"h-5 w-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"home\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"flex items-center space-x-2 hover:text-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.SearchIcon, {\n                            className: \"h-5 w-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"flex items-center space-x-2 hover:text-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.LibraryIcon, {\n                            className: \"h-5 w-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Library\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                    className: \"border-top-[0.1x] border-gray-900\"\n                }, void 0, false, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"flex items-center space-x-2 hover:text-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.PlusCircleIcon, {\n                            className: \"h-5 w-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Create Playlist\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"flex items-center space-x-2 hover:text-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.HeartIcon, {\n                            className: \"h-5 w-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Liked Songs\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"flex items-center space-x-2 hover:text-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.RssIcon, {\n                            className: \"h-5 w-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Your Episodes\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                    className: \"border-top-[0.1x] border-gray-900\"\n                }, void 0, false, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                    lineNumber: 61,\n                    columnNumber: 17\n                }, _this),\n                playlists.map(function(playlist) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"cursor-pointer hover:text-white\",\n                        onClick: function() {\n                            return setPlaylistId(playlist.id);\n                        },\n                        children: playlist.name\n                    }, playlist.id, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 21\n                    }, _this1);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n            lineNumber: 35,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, _this));\n};\n_s(Sidebar, \"RM7i8GBZTskMj9fJ7YdXY9FbNOQ=\", false, function() {\n    return [\n        _hooks_useSpotify__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession,\n        recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDM0NNLE9BQU8sRUFBRSxRQUFROzRCQUFGZixNQUFNLENBQU5BLGFBQWEsQ0FBQ2MsUUFBUSxDQUFDRSxFQUFFOztrQ0FFdkNGLFFBQVEsQ0FBQ0csSUFBSTt1QkFKVEgsUUFBUSxDQUFDRSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQVd4QyxDQUFDO0dBN0RLeEIsT0FBTzs7UUFDVUgseURBQVU7UUFDSUQsdURBQVU7UUFFUEUsa0RBQWM7OztLQUpoREUsT0FBTztBQStEYiwrREFBZUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpZGViYXIuanN4PzRjYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gICAgSG9tZUljb24sXG4gICAgU2VhcmNoSWNvbixcbiAgICBMaWJyYXJ5SWNvbixcbiAgICBQbHVzQ2lyY2xlSWNvbixcbiAgICBSc3NJY29uLFxuICAgIEhlYXJ0SWNvbixcbiAgICB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcbmltcG9ydCB7IHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXG5pbXBvcnQgdXNlU3BvdGlmeSBmcm9tICcuLi9ob29rcy91c2VTcG90aWZ5JztcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSAncmVjb2lsJztcbmltcG9ydCB7IHBsYXlsaXN0SWRTdGF0ZSB9IGZyb20gJy4uL2F0b21zL3BsYXlsaXN0QXRvbSdcblxuY29uc3QgU2lkZWJhciA9ICgpID0+IHtcbiAgICBjb25zdCBzcG90aWZ5QXBpID0gdXNlU3BvdGlmeSgpO1xuICAgIGNvbnN0IHtkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKTtcbiAgICBjb25zdCBbcGxheWxpc3RzLCBzZXRQbGF5bGlzdHNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtwbGF5bGlzdElkLCBzZXRQbGF5bGlzdElkXSA9IHVzZVJlY29pbFN0YXRlKHBsYXlsaXN0SWRTdGF0ZSlcblxuICAgIGNvbnNvbGUubG9nKCd5b3UgcGlja2VkIHBsYXlsaXN0JywgcGxheWxpc3RJZClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmKHNwb3RpZnlBcGkuZ2V0QWNjZXNzVG9rZW4oKSkge1xuICAgICAgICAgICAgc3BvdGlmeUFwaS5nZXRVc2VyUGxheWxpc3RzKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFBsYXlsaXN0cyhkYXRhLmJvZHkuaXRlbXMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sIFtzZXNzaW9uLCBzcG90aWZ5QXBpXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNTAwIHAtNSB0ZXh0LXhzIGxnOnRleHQtc20gc206bWF4LXctWzEycmVtXSBcbiAgICAgICAgbGc6bWF4LXctWzE1cmVtXSBib3JkZXItciBib3JkZXItZ3JheS05MDAgb3ZlcmZsb3cteS1zY3JvbGwgaC1zY3JlZW4gXG4gICAgICAgIHNjcm9sbGJhci1oaWRlIGhpZGRlbiBtZDppbmxpbmUtZmxleCBwYi0zNic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BhY2UteS00Jz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIGhvdmVyOnRleHQtd2hpdGUnPlxuICAgICAgICAgICAgICAgICAgICA8SG9tZUljb24gY2xhc3NOYW1lPSdoLTUgdy01JyAvPlxuICAgICAgICAgICAgICAgICAgICA8cD5ob21lPC9wPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgaG92ZXI6dGV4dC13aGl0ZSc+XG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIGNsYXNzTmFtZT0naC01IHctNScgLz5cbiAgICAgICAgICAgICAgICAgICAgPHA+U2VhcmNoPC9wPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgaG92ZXI6dGV4dC13aGl0ZSc+XG4gICAgICAgICAgICAgICAgICAgIDxMaWJyYXJ5SWNvbiBjbGFzc05hbWU9J2gtNSB3LTUnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwPkxpYnJhcnk8L3A+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT0nYm9yZGVyLXRvcC1bMC4xeF0gYm9yZGVyLWdyYXktOTAwJyAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgaG92ZXI6dGV4dC13aGl0ZSc+XG4gICAgICAgICAgICAgICAgICAgIDxQbHVzQ2lyY2xlSWNvbiBjbGFzc05hbWU9J2gtNSB3LTUnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwPkNyZWF0ZSBQbGF5bGlzdDwvcD5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIGhvdmVyOnRleHQtd2hpdGUnPlxuICAgICAgICAgICAgICAgICAgICA8SGVhcnRJY29uIGNsYXNzTmFtZT0naC01IHctNScgLz5cbiAgICAgICAgICAgICAgICAgICAgPHA+TGlrZWQgU29uZ3M8L3A+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBob3Zlcjp0ZXh0LXdoaXRlJz5cbiAgICAgICAgICAgICAgICAgICAgPFJzc0ljb24gY2xhc3NOYW1lPSdoLTUgdy01JyAvPlxuICAgICAgICAgICAgICAgICAgICA8cD5Zb3VyIEVwaXNvZGVzPC9wPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9J2JvcmRlci10b3AtWzAuMXhdIGJvcmRlci1ncmF5LTkwMCcgLz5cblxuICAgICAgICAgICAgICAgIHtwbGF5bGlzdHMubWFwKChwbGF5bGlzdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8cCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cGxheWxpc3QuaWR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LXdoaXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGxheWxpc3RJZChwbGF5bGlzdC5pZCl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwbGF5bGlzdC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIb21lSWNvbiIsIlNlYXJjaEljb24iLCJMaWJyYXJ5SWNvbiIsIlBsdXNDaXJjbGVJY29uIiwiUnNzSWNvbiIsIkhlYXJ0SWNvbiIsInNpZ25PdXQiLCJ1c2VTZXNzaW9uIiwidXNlU3BvdGlmeSIsInVzZVJlY29pbFN0YXRlIiwicGxheWxpc3RJZFN0YXRlIiwiU2lkZWJhciIsInNwb3RpZnlBcGkiLCJzZXNzaW9uIiwiZGF0YSIsInN0YXR1cyIsInBsYXlsaXN0cyIsInNldFBsYXlsaXN0cyIsInBsYXlsaXN0SWQiLCJzZXRQbGF5bGlzdElkIiwiY29uc29sZSIsImxvZyIsImdldEFjY2Vzc1Rva2VuIiwiZ2V0VXNlclBsYXlsaXN0cyIsInRoZW4iLCJib2R5IiwiaXRlbXMiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJwIiwiaHIiLCJtYXAiLCJwbGF5bGlzdCIsIm9uQ2xpY2siLCJpZCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Sidebar.jsx\n");

/***/ })

});