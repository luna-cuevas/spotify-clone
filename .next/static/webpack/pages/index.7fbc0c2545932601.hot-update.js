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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _atoms_songAtom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../atoms/songAtom */ \"./atoms/songAtom.js\");\n/* harmony import */ var _hooks_useSpotify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useSpotify */ \"./hooks/useSpotify.js\");\n/* harmony import */ var _hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useSongInfo */ \"./hooks/useSongInfo.jsx\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Player = function() {\n    var ref9, ref1, ref2, ref3;\n    _s();\n    var ref4 = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)(), session = ref4.data, status = ref4.status;\n    var ref5 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_atoms_songAtom__WEBPACK_IMPORTED_MODULE_4__.currentTrackIdState), 2), currentTrackId = ref5[0], setCurrentIdTrack = ref5[1];\n    var ref6 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_atoms_songAtom__WEBPACK_IMPORTED_MODULE_4__.isPlayingState), 2), isPlaying = ref6[0], setIsPlaying = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(50), volume1 = ref7[0], setVolume = ref7[1];\n    var songInfo = (0,_hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    var spotifyApi = (0,_hooks_useSpotify__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    var fetchCurrentSong = function() {\n        if (!songInfo) {\n            spotifyApi.getMyCurrentPlayingTrack().then(function(data1) {\n                var ref10, ref8;\n                setCurrentIdTrack((ref10 = data1.body) === null || ref10 === void 0 ? void 0 : (ref8 = ref10.item) === null || ref8 === void 0 ? void 0 : ref8.id);\n                spotifyApi.getMyCurrentPlaybackState().then(function(data) {\n                    var ref;\n                    setIsPlaying((ref = data.boy) === null || ref === void 0 ? void 0 : ref.is_playing);\n                });\n            });\n        }\n    };\n    var handlePlayPause = function() {\n        spotifyApi.getMyCurrentPlaybackState().then(function(data) {\n            if (data.body.is_playing) {\n                spotifyApi.pause();\n                setIsPlaying(false);\n            } else {\n                spotifyApi.play();\n                setIsPlaying(true);\n            }\n            ;\n        });\n    };\n    var debouncedAdjustVolume = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((0,lodash__WEBPACK_IMPORTED_MODULE_7__.debounce)(function(volume) {\n        spotifyApi.setVolume(volume);\n    }, 500), []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (spotifyApi.getAccessToken() && !currentTrackId) {\n            fetchCurrentSong();\n            setVolume(50);\n        }\n    }, [\n        currentTrackId,\n        spotifyApi,\n        session\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (volume1 > 0 && volume1 < 100) {\n            debouncedAdjustVolume(volume1);\n        }\n    }, [\n        volume1\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-24 bg-gradient-to-b from-black to-gray-900 text-white grid grid-cols-3 text-xs md:text-base px-2 md:px-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center space-x-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"hidden md:inline h-10 w-10\",\n                        src: (ref9 = songInfo === null || songInfo === void 0 ? void 0 : songInfo.album.images) === null || ref9 === void 0 ? void 0 : (ref1 = ref9[0]) === null || ref1 === void 0 ? void 0 : ref1.url,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: songInfo === null || songInfo === void 0 ? void 0 : songInfo.name\n                            }, void 0, false, {\n                                fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: songInfo === null || songInfo === void 0 ? void 0 : (ref2 = songInfo.artists) === null || ref2 === void 0 ? void 0 : (ref3 = ref2[0]) === null || ref3 === void 0 ? void 0 : ref3.name\n                            }, void 0, false, {\n                                fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-evenly\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__.SwitchHorizontalIcon, {\n                        className: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__.RewindIcon, {\n                        // onclick={() => spotifyApi.skipToPrevious()} \n                        className: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, _this),\n                    isPlaying ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__.PauseIcon, {\n                        onClick: handlePlayPause,\n                        className: \"button w-10 h-10\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 90,\n                        columnNumber: 21\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__.PlayIcon, {\n                        onClick: handlePlayPause,\n                        className: \"button w-10 h-10\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__.FastForwardIcon, {\n                        // onClick={ spotifyApi.skipToNext()} \n                        className: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 94,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__.ReplyIcon, {\n                        className: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 97,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center space-x-3 md:space-x-4 justify-end pr-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.VolumeUpIcon, {\n                        className: \"button\",\n                        onClick: function() {\n                            return volume1 > 0 && setVolume(volume1 - 10);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 101,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"w-14 md:w-28\",\n                        type: \"range\",\n                        value: volume1,\n                        onChange: function(e) {\n                            return setVolume(Number(e.target.value));\n                        },\n                        min: \"0\",\n                        max: \"100\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 102,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__.VolumeUpIcon, {\n                        className: \"button\",\n                        onClick: function() {\n                            return volume1 < 100 && setVolume(volume1 + 10);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 110,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                lineNumber: 100,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n        lineNumber: 75,\n        columnNumber: 9\n    }, _this));\n};\n_s(Player, \"CLQP5ZfyW9uXDBwrwpqbPYeNf6o=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState,\n        _hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        _hooks_useSpotify__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Player;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\nvar _c;\n$RefreshReg$(_c, \"Player\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLENBQVBDLENBQUM7NEJBQUtqQyxNQUFNLENBQU5BLFNBQVMsQ0FBQ2tDLE1BQU0sQ0FBQ0QsQ0FBQyxDQUFDRSxNQUFNLENBQUNKLEtBQUs7O3dCQUNoREssR0FBRyxFQUFDLENBQUc7d0JBQ1BDLEdBQUcsRUFBQyxDQUFLOzs7Ozs7Z0dBRVp2RCxnRUFBWTt3QkFBQ21DLFNBQVMsRUFBQyxDQUFRO3dCQUFDVyxPQUFPLEVBQUUsUUFBUTs0QkFBRjdCLE1BQU0sQ0FBTkEsT0FBTSxHQUFHLEdBQUcsSUFBSUMsU0FBUyxDQUFDRCxPQUFNLEdBQUcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtyRyxDQUFDO0dBN0ZLVCxNQUFNOztRQUMwQnBCLHVEQUFVO1FBQ0NLLGtEQUFjO1FBQ3pCQSxrREFBYztRQUcvQkksMERBQVc7UUFDVEQseURBQVU7OztLQVAzQlksTUFBTTtBQStGWiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BsYXllci5qc3g/M2NhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tICdyZWNvaWwnO1xuaW1wb3J0IHsgY3VycmVudFRyYWNrSWRTdGF0ZSwgaXNQbGF5aW5nU3RhdGUgfSBmcm9tICcuLi9hdG9tcy9zb25nQXRvbSc7XG5pbXBvcnQgdXNlU3BvdGlmeSBmcm9tICcuLi9ob29rcy91c2VTcG90aWZ5J1xuaW1wb3J0IHVzZVNvbmdJbmZvIGZyb20gJy4uL2hvb2tzL3VzZVNvbmdJbmZvJ1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnXG5pbXBvcnQge1xuICAgIEhlYXJ0SWNvbixcbiAgICBWb2x1bWVVcEljb24gYXMgVm9sdW1lRG93bkljb24sXG4gICAgfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XG5pbXBvcnQge1xuICAgIEZhc3RGb3J3YXJkSWNvbixcbiAgICBQYXVzZUljb24sXG4gICAgUGxheUljb24sXG4gICAgUmVwbHlJY29uLFxuICAgIFJld2luZEljb24sXG4gICAgVm9sdW1lVXBJY29uLFxuICAgIFN3aXRjaEhvcml6b250YWxJY29uLFxuICAgfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiO1xuXG5jb25zdCBQbGF5ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKTtcbiAgICBjb25zdCBbIGN1cnJlbnRUcmFja0lkLCBzZXRDdXJyZW50SWRUcmFja10gPSB1c2VSZWNvaWxTdGF0ZShjdXJyZW50VHJhY2tJZFN0YXRlKTtcbiAgICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlUmVjb2lsU3RhdGUoaXNQbGF5aW5nU3RhdGUpXG4gICAgY29uc3QgWyB2b2x1bWUsIHNldFZvbHVtZSBdID0gdXNlU3RhdGUoNTApO1xuXG4gICAgY29uc3Qgc29uZ0luZm8gPSB1c2VTb25nSW5mbygpO1xuICAgIGNvbnN0IHNwb3RpZnlBcGkgPSB1c2VTcG90aWZ5KCk7XG5cbiAgICBjb25zdCBmZXRjaEN1cnJlbnRTb25nID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXNvbmdJbmZvKSB7XG4gICAgICAgICAgICBzcG90aWZ5QXBpLmdldE15Q3VycmVudFBsYXlpbmdUcmFjaygpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudElkVHJhY2soZGF0YS5ib2R5Py5pdGVtPy5pZCk7XG5cbiAgICAgICAgICAgICAgICBzcG90aWZ5QXBpLmdldE15Q3VycmVudFBsYXliYWNrU3RhdGUoKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRJc1BsYXlpbmcoZGF0YS5ib3k/LmlzX3BsYXlpbmcpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlUGxheVBhdXNlID0gKCkgPT4ge1xuICAgICAgICBzcG90aWZ5QXBpLmdldE15Q3VycmVudFBsYXliYWNrU3RhdGUoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YS5ib2R5LmlzX3BsYXlpbmcpIHtcbiAgICAgICAgICAgICAgICBzcG90aWZ5QXBpLnBhdXNlKClcbiAgICAgICAgICAgICAgICBzZXRJc1BsYXlpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcG90aWZ5QXBpLnBsYXkoKVxuICAgICAgICAgICAgICAgIHNldElzUGxheWluZyh0cnVlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBkZWJvdW5jZWRBZGp1c3RWb2x1bWUgPSB1c2VDYWxsYmFjayhcbiAgICAgICAgZGVib3VuY2UoKHZvbHVtZSkgPT4ge1xuICAgICAgICAgICAgc3BvdGlmeUFwaS5zZXRWb2x1bWUodm9sdW1lKTtcbiAgICAgICAgfSwgNTAwKSwgW11cbiAgICApXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoc3BvdGlmeUFwaS5nZXRBY2Nlc3NUb2tlbigpICYmICFjdXJyZW50VHJhY2tJZCkge1xuICAgICAgICAgICAgZmV0Y2hDdXJyZW50U29uZygpO1xuICAgICAgICAgICAgc2V0Vm9sdW1lKDUwKTtcbiAgICAgICAgfVxuICAgIH0sIFtjdXJyZW50VHJhY2tJZCwgc3BvdGlmeUFwaSwgc2Vzc2lvbl0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHZvbHVtZSA+IDAgJiYgdm9sdW1lIDwgMTAwKSB7XG4gICAgICAgICAgICBkZWJvdW5jZWRBZGp1c3RWb2x1bWUodm9sdW1lKTtcbiAgICAgICAgfVxuICAgIH0sIFt2b2x1bWVdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtMjQgYmctZ3JhZGllbnQtdG8tYiBmcm9tLWJsYWNrIHRvLWdyYXktOTAwIHRleHQtd2hpdGUgZ3JpZCBncmlkLWNvbHMtMyB0ZXh0LXhzIG1kOnRleHQtYmFzZSBweC0yIG1kOnB4LTgnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNCc+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2hpZGRlbiBtZDppbmxpbmUgaC0xMCB3LTEwJyBzcmM9e3NvbmdJbmZvPy5hbGJ1bS5pbWFnZXM/LlswXT8udXJsfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMz57c29uZ0luZm8/Lm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3NvbmdJbmZvPy5hcnRpc3RzPy5bMF0/Lm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWV2ZW5seSc+XG4gICAgICAgICAgICAgICAgPFN3aXRjaEhvcml6b250YWxJY29uIGNsYXNzTmFtZT0nYnV0dG9uJyAvPlxuICAgICAgICAgICAgICAgIDxSZXdpbmRJY29uIFxuICAgICAgICAgICAgICAgICAgICAvLyBvbmNsaWNrPXsoKSA9PiBzcG90aWZ5QXBpLnNraXBUb1ByZXZpb3VzKCl9IFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J1dHRvbicgLz5cbiAgICAgICAgICAgICAgICB7aXNQbGF5aW5nID8gKFxuICAgICAgICAgICAgICAgICAgICA8UGF1c2VJY29uIG9uQ2xpY2s9e2hhbmRsZVBsYXlQYXVzZX0gY2xhc3NOYW1lPSdidXR0b24gdy0xMCBoLTEwJy8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPFBsYXlJY29uIG9uQ2xpY2s9e2hhbmRsZVBsYXlQYXVzZX0gY2xhc3NOYW1lPSdidXR0b24gdy0xMCBoLTEwJyAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPEZhc3RGb3J3YXJkSWNvbiBcbiAgICAgICAgICAgICAgICAgICAgLy8gb25DbGljaz17IHNwb3RpZnlBcGkuc2tpcFRvTmV4dCgpfSBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCIgLz5cbiAgICAgICAgICAgICAgICA8UmVwbHlJY29uIGNsYXNzTmFtZT1cImJ1dHRvblwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMyBtZDpzcGFjZS14LTQganVzdGlmeS1lbmQgcHItNSc+XG4gICAgICAgICAgICAgICAgPFZvbHVtZURvd25JY29uIGNsYXNzTmFtZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiB2b2x1bWUgPiAwICYmIHNldFZvbHVtZSh2b2x1bWUgLSAxMCl9IC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctMTQgbWQ6dy0yOCcgXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiIFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dm9sdW1lfSBcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRWb2x1bWUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9IFxuICAgICAgICAgICAgICAgICAgICBtaW49XCIwXCIgXG4gICAgICAgICAgICAgICAgICAgIG1heD1cIjEwMFwiIFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFZvbHVtZVVwSWNvbiBjbGFzc05hbWU9J2J1dHRvbicgb25DbGljaz17KCkgPT4gdm9sdW1lIDwgMTAwICYmIHNldFZvbHVtZSh2b2x1bWUgKyAxMCl9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXIiXSwibmFtZXMiOlsidXNlU2Vzc2lvbiIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlY29pbFN0YXRlIiwiY3VycmVudFRyYWNrSWRTdGF0ZSIsImlzUGxheWluZ1N0YXRlIiwidXNlU3BvdGlmeSIsInVzZVNvbmdJbmZvIiwiZGVib3VuY2UiLCJIZWFydEljb24iLCJWb2x1bWVVcEljb24iLCJWb2x1bWVEb3duSWNvbiIsIkZhc3RGb3J3YXJkSWNvbiIsIlBhdXNlSWNvbiIsIlBsYXlJY29uIiwiUmVwbHlJY29uIiwiUmV3aW5kSWNvbiIsIlN3aXRjaEhvcml6b250YWxJY29uIiwiUGxheWVyIiwic29uZ0luZm8iLCJzZXNzaW9uIiwiZGF0YSIsInN0YXR1cyIsImN1cnJlbnRUcmFja0lkIiwic2V0Q3VycmVudElkVHJhY2siLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJ2b2x1bWUiLCJzZXRWb2x1bWUiLCJzcG90aWZ5QXBpIiwiZmV0Y2hDdXJyZW50U29uZyIsImdldE15Q3VycmVudFBsYXlpbmdUcmFjayIsInRoZW4iLCJib2R5IiwiaXRlbSIsImlkIiwiZ2V0TXlDdXJyZW50UGxheWJhY2tTdGF0ZSIsImJveSIsImlzX3BsYXlpbmciLCJoYW5kbGVQbGF5UGF1c2UiLCJwYXVzZSIsInBsYXkiLCJkZWJvdW5jZWRBZGp1c3RWb2x1bWUiLCJnZXRBY2Nlc3NUb2tlbiIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsYnVtIiwiaW1hZ2VzIiwidXJsIiwiYWx0IiwiaDMiLCJuYW1lIiwicCIsImFydGlzdHMiLCJvbkNsaWNrIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJOdW1iZXIiLCJ0YXJnZXQiLCJtaW4iLCJtYXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Player.jsx\n");

/***/ })

});