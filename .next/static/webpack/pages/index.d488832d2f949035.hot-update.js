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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _atoms_songAtom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../atoms/songAtom */ \"./atoms/songAtom.js\");\n/* harmony import */ var _hooks_useSpotify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useSpotify */ \"./hooks/useSpotify.js\");\n/* harmony import */ var _hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useSongInfo */ \"./hooks/useSongInfo.jsx\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Player = function() {\n    var ref9, ref1, ref2, ref3;\n    _s();\n    var spotifyApi = (0,_hooks_useSpotify__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    var ref4 = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)(), session = ref4.data, status = ref4.status;\n    var ref5 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_atoms_songAtom__WEBPACK_IMPORTED_MODULE_4__.currentTrackIdState), 2), currentTrackId = ref5[0], setCurrentIdTrack = ref5[1];\n    var ref6 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_atoms_songAtom__WEBPACK_IMPORTED_MODULE_4__.isPlayingState), 2), isPlaying = ref6[0], setIsPlaying = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(50), volume = ref7[0], setVolume = ref7[1];\n    var songInfo = (0,_hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    var fetchCurrentSong = function() {\n        if (!songInfo) {\n            spotifyApi.getMyCurrentPlayingTrack().then(function(data1) {\n                var ref10, ref8;\n                setCurrentIdTrack((ref10 = data1.body) === null || ref10 === void 0 ? void 0 : (ref8 = ref10.item) === null || ref8 === void 0 ? void 0 : ref8.id);\n                spotifyApi.getMyCurrentPlaybackState().then(function(data) {\n                    var ref;\n                    setIsPlaying((ref = data.boy) === null || ref === void 0 ? void 0 : ref.is_playing);\n                });\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (spotifyApi.getAccessToken() && !currentTrackId) {\n            fetchCurrentSong();\n            setVolume(50);\n        }\n    }, [\n        currentTrackId,\n        spotifyApi,\n        session\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-24 bg-gradient-to-b from-black to-gray-900 text-white grid grid-cols-3 text-xs md:text-base px-2 md:px-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center space-x-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"hidden md:inline h-10 w-10\",\n                        src: (ref9 = songInfo === null || songInfo === void 0 ? void 0 : songInfo.album.images) === null || ref9 === void 0 ? void 0 : (ref1 = ref9[0]) === null || ref1 === void 0 ? void 0 : ref1.url,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: songInfo === null || songInfo === void 0 ? void 0 : songInfo.name\n                            }, void 0, false, {\n                                fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: songInfo === null || songInfo === void 0 ? void 0 : (ref2 = songInfo.artists) === null || ref2 === void 0 ? void 0 : (ref3 = ref2[0]) === null || ref3 === void 0 ? void 0 : ref3.name\n                            }, void 0, false, {\n                                fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-evenly\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_8__.SwitchHorizontalIcon, {\n                        className: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_8__.RewindIcon, {\n                        // onclick={() => spotifyApi.skipToPrevious()} \n                        className: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, _this),\n                    isPlaying ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_8__.PauseIcon, {\n                        onClick: handlePlayPause,\n                        className: \"button w-10 h-10\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_8__.PlayIcon, {\n                        onClick: handlePlayPause,\n                        className: \"button w-10 h-10\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_8__.FastForwardIcon, {\n                        // onClick={ spotifyApi.skipToNext()} \n                        className: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_8__.ReplyIcon, {\n                        className: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, _this));\n};\n_s(Player, \"IIqVB8bQkLw3hzB48UOHIGuR/Uc=\", false, function() {\n    return [\n        _hooks_useSpotify__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState,\n        _hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = Player;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\nvar _c;\n$RefreshReg$(_c, \"Player\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixNQUFNOztRQUNXWix5REFBVTtRQUNLUCx1REFBVTtRQUNDSSxrREFBYztRQUN6QkEsa0RBQWM7UUFHL0JJLDBEQUFXOzs7S0FQMUJXLE1BQU07QUF5RFosK0RBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QbGF5ZXIuanN4PzNjYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tICdyZWNvaWwnO1xuaW1wb3J0IHsgY3VycmVudFRyYWNrSWRTdGF0ZSwgaXNQbGF5aW5nU3RhdGUgfSBmcm9tICcuLi9hdG9tcy9zb25nQXRvbSc7XG5pbXBvcnQgdXNlU3BvdGlmeSBmcm9tICcuLi9ob29rcy91c2VTcG90aWZ5J1xuaW1wb3J0IHVzZVNvbmdJbmZvIGZyb20gJy4uL2hvb2tzL3VzZVNvbmdJbmZvJ1xuaW1wb3J0IHtcbiAgICBIZWFydEljb24sXG4gICAgVm9sdW1ldXBJY29uIGFzIFZvbHVtZURvd25JY29uLFxuICAgIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xuaW1wb3J0IHtcbiAgICBGYXN0Rm9yd2FyZEljb24sXG4gICAgUGF1c2VJY29uLFxuICAgIFBsYXlJY29uLFxuICAgIFJlcGx5SWNvbixcbiAgICBSZXdpbmRJY29uLFxuICAgIFZvbHVtZVVwSWNvbixcbiAgICBTd2l0Y2hIb3Jpem9udGFsSWNvbixcbiAgIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcblxuY29uc3QgUGxheWVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHNwb3RpZnlBcGkgPSB1c2VTcG90aWZ5KCk7XG4gICAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKTtcbiAgICBjb25zdCBbIGN1cnJlbnRUcmFja0lkLCBzZXRDdXJyZW50SWRUcmFja10gPSB1c2VSZWNvaWxTdGF0ZShjdXJyZW50VHJhY2tJZFN0YXRlKTtcbiAgICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlUmVjb2lsU3RhdGUoaXNQbGF5aW5nU3RhdGUpXG4gICAgY29uc3QgWyB2b2x1bWUsIHNldFZvbHVtZSBdID0gdXNlU3RhdGUoNTApO1xuXG4gICAgY29uc3Qgc29uZ0luZm8gPSB1c2VTb25nSW5mbygpO1xuICAgIGNvbnN0IGZldGNoQ3VycmVudFNvbmcgPSAoKSA9PiB7XG4gICAgICAgIGlmICghc29uZ0luZm8pIHtcbiAgICAgICAgICAgIHNwb3RpZnlBcGkuZ2V0TXlDdXJyZW50UGxheWluZ1RyYWNrKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50SWRUcmFjayhkYXRhLmJvZHk/Lml0ZW0/LmlkKTtcblxuICAgICAgICAgICAgICAgIHNwb3RpZnlBcGkuZ2V0TXlDdXJyZW50UGxheWJhY2tTdGF0ZSgpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldElzUGxheWluZyhkYXRhLmJveT8uaXNfcGxheWluZyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoc3BvdGlmeUFwaS5nZXRBY2Nlc3NUb2tlbigpICYmICFjdXJyZW50VHJhY2tJZCkge1xuICAgICAgICAgICAgZmV0Y2hDdXJyZW50U29uZygpO1xuICAgICAgICAgICAgc2V0Vm9sdW1lKDUwKTtcbiAgICAgICAgfVxuICAgIH0sIFtjdXJyZW50VHJhY2tJZCwgc3BvdGlmeUFwaSwgc2Vzc2lvbl0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0naC0yNCBiZy1ncmFkaWVudC10by1iIGZyb20tYmxhY2sgdG8tZ3JheS05MDAgdGV4dC13aGl0ZSBncmlkIGdyaWQtY29scy0zIHRleHQteHMgbWQ6dGV4dC1iYXNlIHB4LTIgbWQ6cHgtOCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTQnPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2hpZGRlbiBtZDppbmxpbmUgaC0xMCB3LTEwJyBzcmM9e3NvbmdJbmZvPy5hbGJ1bS5pbWFnZXM/LlswXT8udXJsfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDM+e3NvbmdJbmZvPy5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgPHA+e3NvbmdJbmZvPy5hcnRpc3RzPy5bMF0/Lm5hbWV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWV2ZW5seSc+XG4gICAgICAgICAgICA8U3dpdGNoSG9yaXpvbnRhbEljb24gY2xhc3NOYW1lPSdidXR0b24nIC8+XG4gICAgICAgICAgICA8UmV3aW5kSWNvbiBcbiAgICAgICAgICAgICAgICAvLyBvbmNsaWNrPXsoKSA9PiBzcG90aWZ5QXBpLnNraXBUb1ByZXZpb3VzKCl9IFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uJyAvPlxuICAgICAgICAgICAge2lzUGxheWluZyA/IChcbiAgICAgICAgICAgICAgICA8UGF1c2VJY29uIG9uQ2xpY2s9e2hhbmRsZVBsYXlQYXVzZX0gY2xhc3NOYW1lPSdidXR0b24gdy0xMCBoLTEwJy8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxQbGF5SWNvbiBvbkNsaWNrPXtoYW5kbGVQbGF5UGF1c2V9IGNsYXNzTmFtZT0nYnV0dG9uIHctMTAgaC0xMCcgLz5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxGYXN0Rm9yd2FyZEljb24gXG4gICAgICAgICAgICAgICAgLy8gb25DbGljaz17IHNwb3RpZnlBcGkuc2tpcFRvTmV4dCgpfSBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIiAvPlxuICAgICAgICAgICAgPFJlcGx5SWNvbiBjbGFzc05hbWU9XCJidXR0b25cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXIiXSwibmFtZXMiOlsidXNlU2Vzc2lvbiIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWNvaWxTdGF0ZSIsImN1cnJlbnRUcmFja0lkU3RhdGUiLCJpc1BsYXlpbmdTdGF0ZSIsInVzZVNwb3RpZnkiLCJ1c2VTb25nSW5mbyIsIkhlYXJ0SWNvbiIsIlZvbHVtZXVwSWNvbiIsIlZvbHVtZURvd25JY29uIiwiRmFzdEZvcndhcmRJY29uIiwiUGF1c2VJY29uIiwiUGxheUljb24iLCJSZXBseUljb24iLCJSZXdpbmRJY29uIiwiVm9sdW1lVXBJY29uIiwiU3dpdGNoSG9yaXpvbnRhbEljb24iLCJQbGF5ZXIiLCJzb25nSW5mbyIsInNwb3RpZnlBcGkiLCJzZXNzaW9uIiwiZGF0YSIsInN0YXR1cyIsImN1cnJlbnRUcmFja0lkIiwic2V0Q3VycmVudElkVHJhY2siLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJ2b2x1bWUiLCJzZXRWb2x1bWUiLCJmZXRjaEN1cnJlbnRTb25nIiwiZ2V0TXlDdXJyZW50UGxheWluZ1RyYWNrIiwidGhlbiIsImJvZHkiLCJpdGVtIiwiaWQiLCJnZXRNeUN1cnJlbnRQbGF5YmFja1N0YXRlIiwiYm95IiwiaXNfcGxheWluZyIsImdldEFjY2Vzc1Rva2VuIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWxidW0iLCJpbWFnZXMiLCJ1cmwiLCJhbHQiLCJoMyIsIm5hbWUiLCJwIiwiYXJ0aXN0cyIsIm9uQ2xpY2siLCJoYW5kbGVQbGF5UGF1c2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Player.jsx\n");

/***/ })

});