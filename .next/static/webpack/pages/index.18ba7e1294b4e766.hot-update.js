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

/***/ "./components/Player.jsx":
/*!*******************************!*\
  !*** ./components/Player.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _atoms_songAtom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../atoms/songAtom */ \"./atoms/songAtom.js\");\n/* harmony import */ var _hooks_useSpotify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useSpotify */ \"./hooks/useSpotify.js\");\n/* harmony import */ var _hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useSongInfo */ \"./hooks/useSongInfo.jsx\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Player = function() {\n    var ref9, ref1, ref2, ref3;\n    _s();\n    var spotifyApi = (0,_hooks_useSpotify__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    var ref4 = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)(), session = ref4.data, status = ref4.status;\n    var ref5 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_atoms_songAtom__WEBPACK_IMPORTED_MODULE_4__.currentTrackIdState), 2), currentTrackId = ref5[0], setCurrentIdTrack = ref5[1];\n    var ref6 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_atoms_songAtom__WEBPACK_IMPORTED_MODULE_4__.isPlayingState), 2), isPlaying = ref6[0], setIsPlaying = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(50), volume = ref7[0], setVolume = ref7[1];\n    var songInfo = (0,_hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    var fetchCurrentSong = function() {\n        if (!songInfo) {\n            spotifyApi.getMyCurrentPlayingTrack().then(function(data1) {\n                var ref10, ref8;\n                setCurrentIdTrack((ref10 = data1.body) === null || ref10 === void 0 ? void 0 : (ref8 = ref10.item) === null || ref8 === void 0 ? void 0 : ref8.id);\n                spotifyApi.getMyCurrentPlaybackState().then(function(data) {\n                    var ref;\n                    setIsPlaying((ref = data.boy) === null || ref === void 0 ? void 0 : ref.is_playing);\n                });\n            });\n        }\n    };\n    var handlePlayPause = function() {\n        spotifyApi.getMyCurrentPlaybackState().then(function(data) {\n            if (data.body.is_playing) {\n                spotifyApi.pause();\n                setIsPlaying(false);\n            } else {\n                spotifyApi.play();\n                setIsPlaying(true);\n            }\n            ;\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (spotifyApi.getAccessToken() && !currentTrackId) {\n            fetchCurrentSong();\n            setVolume(50);\n        }\n    }, [\n        currentTrackId,\n        spotifyApi,\n        session\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-24 bg-gradient-to-b from-black to-gray-900 text-white grid grid-cols-3 text-xs md:text-base px-2 md:px-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center space-x-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"hidden md:inline h-10 w-10\",\n                        src: (ref9 = songInfo === null || songInfo === void 0 ? void 0 : songInfo.album.images) === null || ref9 === void 0 ? void 0 : (ref1 = ref9[0]) === null || ref1 === void 0 ? void 0 : ref1.url,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: songInfo === null || songInfo === void 0 ? void 0 : songInfo.name\n                            }, void 0, false, {\n                                fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: songInfo === null || songInfo === void 0 ? void 0 : (ref2 = songInfo.artists) === null || ref2 === void 0 ? void 0 : (ref3 = ref2[0]) === null || ref3 === void 0 ? void 0 : ref3.name\n                            }, void 0, false, {\n                                fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-evenly\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_8__.SwitchHorizontalIcon, {\n                        className: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_8__.RewindIcon, {\n                        // onclick={() => spotifyApi.skipToPrevious()} \n                        className: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 13\n                    }, _this),\n                    isPlaying ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_8__.PauseIcon, {\n                        onClick: handlePlayPause,\n                        className: \"button w-10 h-10\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_8__.PlayIcon, {\n                        onClick: handlePlayPause,\n                        className: \"button w-10 h-10\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_8__.FastForwardIcon, {\n                        // onClick={ spotifyApi.skipToNext()} \n                        className: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_8__.ReplyIcon, {\n                        className: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center space-x-3 md:space-x-4 justify-end pr-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__.VolumeUpIcon, {\n                        className: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"w-14 md:w-28\",\n                        type: \"range\",\n                        value: \"\",\n                        min: \"0\",\n                        max: \"100\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 89,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_8__.VolumeUpIcon, {\n                        className: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 90,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                lineNumber: 87,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, _this));\n};\n_s(Player, \"IIqVB8bQkLw3hzB48UOHIGuR/Uc=\", false, function() {\n    return [\n        _hooks_useSpotify__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState,\n        _hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = Player;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\nvar _c;\n$RefreshReg$(_c, \"Player\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VTt3QkFDUCxFQUErQzt3QkFDL0M0QixTQUFTLEVBQUMsQ0FBUTs7Ozs7O29CQUNyQmxCLFNBQVMsK0VBQ0xiLDZEQUFTO3dCQUFDMEMsT0FBTyxFQUFFaEIsZUFBZTt3QkFBRUssU0FBUyxFQUFDLENBQWtCOzs7Ozs0R0FFaEU5Qiw0REFBUTt3QkFBQ3lDLE9BQU8sRUFBRWhCLGVBQWU7d0JBQUVLLFNBQVMsRUFBQyxDQUFrQjs7Ozs7O2dHQUduRWhDLG1FQUFlO3dCQUNaLEVBQXNDO3dCQUN0Q2dDLFNBQVMsRUFBQyxDQUFROzs7Ozs7Z0dBQ3JCN0IsNkRBQVM7d0JBQUM2QixTQUFTLEVBQUMsQ0FBUTs7Ozs7Ozs7Ozs7O3dGQUdoQ0QsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQTJEOztnR0FDckVqQyxrRUFBYzt3QkFBQ2lDLFNBQVMsRUFBQyxDQUFROzs7Ozs7Z0dBQ2pDWSxDQUFLO3dCQUFDWixTQUFTLEVBQUMsQ0FBYzt3QkFBQ2EsSUFBSSxFQUFDLENBQU87d0JBQUNDLEtBQUssRUFBQyxDQUFFO3dCQUFDQyxHQUFHLEVBQUMsQ0FBRzt3QkFBQ0MsR0FBRyxFQUFDLENBQUs7Ozs7OztnR0FDdEVsRCxnRUFBWTt3QkFBQ2tDLFNBQVMsRUFBQyxDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLNUMsQ0FBQztHQTFFSzFCLE1BQU07O1FBQ1dYLHlEQUFVO1FBQ0tQLHVEQUFVO1FBQ0NJLGtEQUFjO1FBQ3pCQSxrREFBYztRQUcvQkksMERBQVc7OztLQVAxQlUsTUFBTTtBQTRFWiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BsYXllci5qc3g/M2NhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gJ3JlY29pbCc7XG5pbXBvcnQgeyBjdXJyZW50VHJhY2tJZFN0YXRlLCBpc1BsYXlpbmdTdGF0ZSB9IGZyb20gJy4uL2F0b21zL3NvbmdBdG9tJztcbmltcG9ydCB1c2VTcG90aWZ5IGZyb20gJy4uL2hvb2tzL3VzZVNwb3RpZnknXG5pbXBvcnQgdXNlU29uZ0luZm8gZnJvbSAnLi4vaG9va3MvdXNlU29uZ0luZm8nXG5pbXBvcnQge1xuICAgIEhlYXJ0SWNvbixcbiAgICBWb2x1bWVVcEljb24gYXMgVm9sdW1lRG93bkljb24sXG4gICAgfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XG5pbXBvcnQge1xuICAgIEZhc3RGb3J3YXJkSWNvbixcbiAgICBQYXVzZUljb24sXG4gICAgUGxheUljb24sXG4gICAgUmVwbHlJY29uLFxuICAgIFJld2luZEljb24sXG4gICAgVm9sdW1lVXBJY29uLFxuICAgIFN3aXRjaEhvcml6b250YWxJY29uLFxuICAgfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiO1xuXG5jb25zdCBQbGF5ZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3BvdGlmeUFwaSA9IHVzZVNwb3RpZnkoKTtcbiAgICBjb25zdCB7IGRhdGE6IHNlc3Npb24sIHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpO1xuICAgIGNvbnN0IFsgY3VycmVudFRyYWNrSWQsIHNldEN1cnJlbnRJZFRyYWNrXSA9IHVzZVJlY29pbFN0YXRlKGN1cnJlbnRUcmFja0lkU3RhdGUpO1xuICAgIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VSZWNvaWxTdGF0ZShpc1BsYXlpbmdTdGF0ZSlcbiAgICBjb25zdCBbIHZvbHVtZSwgc2V0Vm9sdW1lIF0gPSB1c2VTdGF0ZSg1MCk7XG5cbiAgICBjb25zdCBzb25nSW5mbyA9IHVzZVNvbmdJbmZvKCk7XG4gICAgY29uc3QgZmV0Y2hDdXJyZW50U29uZyA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFzb25nSW5mbykge1xuICAgICAgICAgICAgc3BvdGlmeUFwaS5nZXRNeUN1cnJlbnRQbGF5aW5nVHJhY2soKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRJZFRyYWNrKGRhdGEuYm9keT8uaXRlbT8uaWQpO1xuXG4gICAgICAgICAgICAgICAgc3BvdGlmeUFwaS5nZXRNeUN1cnJlbnRQbGF5YmFja1N0YXRlKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNQbGF5aW5nKGRhdGEuYm95Py5pc19wbGF5aW5nKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVBsYXlQYXVzZSA9ICgpID0+IHtcbiAgICAgICAgc3BvdGlmeUFwaS5nZXRNeUN1cnJlbnRQbGF5YmFja1N0YXRlKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEuYm9keS5pc19wbGF5aW5nKSB7XG4gICAgICAgICAgICAgICAgc3BvdGlmeUFwaS5wYXVzZSgpXG4gICAgICAgICAgICAgICAgc2V0SXNQbGF5aW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3BvdGlmeUFwaS5wbGF5KClcbiAgICAgICAgICAgICAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHNwb3RpZnlBcGkuZ2V0QWNjZXNzVG9rZW4oKSAmJiAhY3VycmVudFRyYWNrSWQpIHtcbiAgICAgICAgICAgIGZldGNoQ3VycmVudFNvbmcoKTtcbiAgICAgICAgICAgIHNldFZvbHVtZSg1MCk7XG4gICAgICAgIH1cbiAgICB9LCBbY3VycmVudFRyYWNrSWQsIHNwb3RpZnlBcGksIHNlc3Npb25dKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdoLTI0IGJnLWdyYWRpZW50LXRvLWIgZnJvbS1ibGFjayB0by1ncmF5LTkwMCB0ZXh0LXdoaXRlIGdyaWQgZ3JpZC1jb2xzLTMgdGV4dC14cyBtZDp0ZXh0LWJhc2UgcHgtMiBtZDpweC04Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNCc+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0naGlkZGVuIG1kOmlubGluZSBoLTEwIHctMTAnIHNyYz17c29uZ0luZm8/LmFsYnVtLmltYWdlcz8uWzBdPy51cmx9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMz57c29uZ0luZm8/Lm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICA8cD57c29uZ0luZm8/LmFydGlzdHM/LlswXT8ubmFtZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZXZlbmx5Jz5cbiAgICAgICAgICAgIDxTd2l0Y2hIb3Jpem9udGFsSWNvbiBjbGFzc05hbWU9J2J1dHRvbicgLz5cbiAgICAgICAgICAgIDxSZXdpbmRJY29uIFxuICAgICAgICAgICAgICAgIC8vIG9uY2xpY2s9eygpID0+IHNwb3RpZnlBcGkuc2tpcFRvUHJldmlvdXMoKX0gXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidXR0b24nIC8+XG4gICAgICAgICAgICB7aXNQbGF5aW5nID8gKFxuICAgICAgICAgICAgICAgIDxQYXVzZUljb24gb25DbGljaz17aGFuZGxlUGxheVBhdXNlfSBjbGFzc05hbWU9J2J1dHRvbiB3LTEwIGgtMTAnLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPFBsYXlJY29uIG9uQ2xpY2s9e2hhbmRsZVBsYXlQYXVzZX0gY2xhc3NOYW1lPSdidXR0b24gdy0xMCBoLTEwJyAvPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPEZhc3RGb3J3YXJkSWNvbiBcbiAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXsgc3BvdGlmeUFwaS5za2lwVG9OZXh0KCl9IFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiIC8+XG4gICAgICAgICAgICA8UmVwbHlJY29uIGNsYXNzTmFtZT1cImJ1dHRvblwiIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTMgbWQ6c3BhY2UteC00IGp1c3RpZnktZW5kIHByLTUnPlxuICAgICAgICAgICAgPFZvbHVtZURvd25JY29uIGNsYXNzTmFtZT0nYnV0dG9uJyAvPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ndy0xNCBtZDp3LTI4JyB0eXBlPVwicmFuZ2VcIiB2YWx1ZT1cIlwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiAvPlxuICAgICAgICAgICAgPFZvbHVtZVVwSWNvbiBjbGFzc05hbWU9J2J1dHRvbicgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXIiXSwibmFtZXMiOlsidXNlU2Vzc2lvbiIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWNvaWxTdGF0ZSIsImN1cnJlbnRUcmFja0lkU3RhdGUiLCJpc1BsYXlpbmdTdGF0ZSIsInVzZVNwb3RpZnkiLCJ1c2VTb25nSW5mbyIsIkhlYXJ0SWNvbiIsIlZvbHVtZVVwSWNvbiIsIlZvbHVtZURvd25JY29uIiwiRmFzdEZvcndhcmRJY29uIiwiUGF1c2VJY29uIiwiUGxheUljb24iLCJSZXBseUljb24iLCJSZXdpbmRJY29uIiwiU3dpdGNoSG9yaXpvbnRhbEljb24iLCJQbGF5ZXIiLCJzb25nSW5mbyIsInNwb3RpZnlBcGkiLCJzZXNzaW9uIiwiZGF0YSIsInN0YXR1cyIsImN1cnJlbnRUcmFja0lkIiwic2V0Q3VycmVudElkVHJhY2siLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJ2b2x1bWUiLCJzZXRWb2x1bWUiLCJmZXRjaEN1cnJlbnRTb25nIiwiZ2V0TXlDdXJyZW50UGxheWluZ1RyYWNrIiwidGhlbiIsImJvZHkiLCJpdGVtIiwiaWQiLCJnZXRNeUN1cnJlbnRQbGF5YmFja1N0YXRlIiwiYm95IiwiaXNfcGxheWluZyIsImhhbmRsZVBsYXlQYXVzZSIsInBhdXNlIiwicGxheSIsImdldEFjY2Vzc1Rva2VuIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWxidW0iLCJpbWFnZXMiLCJ1cmwiLCJhbHQiLCJoMyIsIm5hbWUiLCJwIiwiYXJ0aXN0cyIsIm9uQ2xpY2siLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm1pbiIsIm1heCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Player.jsx\n");

/***/ })

});