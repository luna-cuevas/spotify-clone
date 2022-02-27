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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hooks_useSpotify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useSpotify */ \"./hooks/useSpotify.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _atoms_playlistAtom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../atoms/playlistAtom */ \"./atoms/playlistAtom.js\");\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Sidebar = function() {\n    var _this1 = _this;\n    _s();\n    var spotifyApi = (0,_hooks_useSpotify__WEBPACK_IMPORTED_MODULE_5__.useSpotify)();\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)(), session = ref.data, status = ref.status;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), playlists = ref1[0], setPlaylists = ref1[1];\n    var ref2 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_atoms_playlistAtom__WEBPACK_IMPORTED_MODULE_7__.playlistIdState), 2), playlistId = ref2[0], setPlaylistId = ref2[1];\n    console.log('you picked playlist', playlistId);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (spotifyApi.getAccessToken()) {\n            spotifyApi.getUserPlaylists().then(function(data) {\n                setPlaylists(data.body.items);\n            });\n        }\n    }, [\n        session,\n        spotifyApi\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-gray-500 p-5 text-xs lg:text-sm sm:max-w-[12rem] lg:max-w-[15rem] border-r border-gray-900 overflow-y-scroll h-screen scrollbar-hide hidden md:inline-flex pb-36\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"space-y-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"flex items-center space-x-2 hover:text-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.HomeIcon, {\n                            className: \"h-5 w-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"home\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"flex items-center space-x-2 hover:text-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.SearchIcon, {\n                            className: \"h-5 w-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Search\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"flex items-center space-x-2 hover:text-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.LibraryIcon, {\n                            className: \"h-5 w-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Library\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                    className: \"border-top-[0.1x] border-gray-900\"\n                }, void 0, false, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"flex items-center space-x-2 hover:text-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.PlusCircleIcon, {\n                            className: \"h-5 w-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Create Playlist\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"flex items-center space-x-2 hover:text-white text-blue-500\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.HeartIcon, {\n                            className: \"h-5 w-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Liked Songs\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"flex items-center space-x-2 hover:text-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.RssIcon, {\n                            className: \"h-5 w-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Your Episodes\"\n                        }, void 0, false, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                    className: \"border-top-[0.1x] border-gray-900\"\n                }, void 0, false, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                    lineNumber: 61,\n                    columnNumber: 17\n                }, _this),\n                playlists.map(function(playlist) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"cursor-pointer hover:text-white\",\n                        onClick: function() {\n                            return setPlaylistId(playlist.id);\n                        },\n                        children: playlist.name\n                    }, playlist.id, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 21\n                    }, _this1);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n            lineNumber: 35,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Sidebar.jsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, _this));\n};\n_s(Sidebar, \"RM7i8GBZTskMj9fJ7YdXY9FbNOQ=\", false, function() {\n    return [\n        _hooks_useSpotify__WEBPACK_IMPORTED_MODULE_5__.useSpotify,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession,\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWlDO3dCQUMzQ00sT0FBTyxFQUFFLFFBQVE7NEJBQUZmLE1BQU0sQ0FBTkEsYUFBYSxDQUFDYyxRQUFRLENBQUNFLEVBQUU7O2tDQUV2Q0YsUUFBUSxDQUFDRyxJQUFJO3VCQUpUSCxRQUFRLENBQUNFLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV3hDLENBQUM7R0E3REt4QixPQUFPOztRQUNVSCx5REFBVTtRQUNJRCx1REFBVTtRQUVQRSxrREFBYzs7O0tBSmhERSxPQUFPO0FBK0RiLCtEQUFlQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2lkZWJhci5qc3g/NGNiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgICBIb21lSWNvbixcbiAgICBTZWFyY2hJY29uLFxuICAgIExpYnJhcnlJY29uLFxuICAgIFBsdXNDaXJjbGVJY29uLFxuICAgIFJzc0ljb24sXG4gICAgfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XG5pbXBvcnQgeyBIZWFydEljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJ1xuaW1wb3J0IHsgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcbmltcG9ydCB7IHVzZVNwb3RpZnkgfSBmcm9tICcuLi9ob29rcy91c2VTcG90aWZ5JztcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSAncmVjb2lsJztcbmltcG9ydCB7IHBsYXlsaXN0SWRTdGF0ZSB9IGZyb20gJy4uL2F0b21zL3BsYXlsaXN0QXRvbSdcblxuY29uc3QgU2lkZWJhciA9ICgpID0+IHtcbiAgICBjb25zdCBzcG90aWZ5QXBpID0gdXNlU3BvdGlmeSgpO1xuICAgIGNvbnN0IHtkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKTtcbiAgICBjb25zdCBbcGxheWxpc3RzLCBzZXRQbGF5bGlzdHNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtwbGF5bGlzdElkLCBzZXRQbGF5bGlzdElkXSA9IHVzZVJlY29pbFN0YXRlKHBsYXlsaXN0SWRTdGF0ZSlcblxuICAgIGNvbnNvbGUubG9nKCd5b3UgcGlja2VkIHBsYXlsaXN0JywgcGxheWxpc3RJZClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmKHNwb3RpZnlBcGkuZ2V0QWNjZXNzVG9rZW4oKSkge1xuICAgICAgICAgICAgc3BvdGlmeUFwaS5nZXRVc2VyUGxheWxpc3RzKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFBsYXlsaXN0cyhkYXRhLmJvZHkuaXRlbXMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sIFtzZXNzaW9uLCBzcG90aWZ5QXBpXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNTAwIHAtNSB0ZXh0LXhzIGxnOnRleHQtc20gc206bWF4LXctWzEycmVtXSBcbiAgICAgICAgbGc6bWF4LXctWzE1cmVtXSBib3JkZXItciBib3JkZXItZ3JheS05MDAgb3ZlcmZsb3cteS1zY3JvbGwgaC1zY3JlZW4gXG4gICAgICAgIHNjcm9sbGJhci1oaWRlIGhpZGRlbiBtZDppbmxpbmUtZmxleCBwYi0zNic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BhY2UteS00Jz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIGhvdmVyOnRleHQtd2hpdGUnPlxuICAgICAgICAgICAgICAgICAgICA8SG9tZUljb24gY2xhc3NOYW1lPSdoLTUgdy01JyAvPlxuICAgICAgICAgICAgICAgICAgICA8cD5ob21lPC9wPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgaG92ZXI6dGV4dC13aGl0ZSc+XG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIGNsYXNzTmFtZT0naC01IHctNScgLz5cbiAgICAgICAgICAgICAgICAgICAgPHA+U2VhcmNoPC9wPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgaG92ZXI6dGV4dC13aGl0ZSc+XG4gICAgICAgICAgICAgICAgICAgIDxMaWJyYXJ5SWNvbiBjbGFzc05hbWU9J2gtNSB3LTUnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwPkxpYnJhcnk8L3A+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT0nYm9yZGVyLXRvcC1bMC4xeF0gYm9yZGVyLWdyYXktOTAwJyAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgaG92ZXI6dGV4dC13aGl0ZSc+XG4gICAgICAgICAgICAgICAgICAgIDxQbHVzQ2lyY2xlSWNvbiBjbGFzc05hbWU9J2gtNSB3LTUnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwPkNyZWF0ZSBQbGF5bGlzdDwvcD5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIGhvdmVyOnRleHQtd2hpdGUgdGV4dC1ibHVlLTUwMCc+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFydEljb24gY2xhc3NOYW1lPSdoLTUgdy01JyAvPlxuICAgICAgICAgICAgICAgICAgICA8cD5MaWtlZCBTb25nczwvcD5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIGhvdmVyOnRleHQtd2hpdGUnPlxuICAgICAgICAgICAgICAgICAgICA8UnNzSWNvbiBjbGFzc05hbWU9J2gtNSB3LTUnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwPllvdXIgRXBpc29kZXM8L3A+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT0nYm9yZGVyLXRvcC1bMC4xeF0gYm9yZGVyLWdyYXktOTAwJyAvPlxuXG4gICAgICAgICAgICAgICAge3BsYXlsaXN0cy5tYXAoKHBsYXlsaXN0KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxwIFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwbGF5bGlzdC5pZH0gXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2N1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtd2hpdGUnXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQbGF5bGlzdElkKHBsYXlsaXN0LmlkKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3BsYXlsaXN0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWVJY29uIiwiU2VhcmNoSWNvbiIsIkxpYnJhcnlJY29uIiwiUGx1c0NpcmNsZUljb24iLCJSc3NJY29uIiwiSGVhcnRJY29uIiwic2lnbk91dCIsInVzZVNlc3Npb24iLCJ1c2VTcG90aWZ5IiwidXNlUmVjb2lsU3RhdGUiLCJwbGF5bGlzdElkU3RhdGUiLCJTaWRlYmFyIiwic3BvdGlmeUFwaSIsInNlc3Npb24iLCJkYXRhIiwic3RhdHVzIiwicGxheWxpc3RzIiwic2V0UGxheWxpc3RzIiwicGxheWxpc3RJZCIsInNldFBsYXlsaXN0SWQiLCJjb25zb2xlIiwibG9nIiwiZ2V0QWNjZXNzVG9rZW4iLCJnZXRVc2VyUGxheWxpc3RzIiwidGhlbiIsImJvZHkiLCJpdGVtcyIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsInAiLCJociIsIm1hcCIsInBsYXlsaXN0Iiwib25DbGljayIsImlkIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Sidebar.jsx\n");

/***/ })

});