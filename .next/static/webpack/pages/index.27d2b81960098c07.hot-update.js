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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _atoms_songAtom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../atoms/songAtom */ \"./atoms/songAtom.js\");\n/* harmony import */ var _hooks_useSpotify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useSpotify */ \"./hooks/useSpotify.js\");\n/* harmony import */ var _hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useSongInfo */ \"./hooks/useSongInfo.jsx\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Player = function() {\n    var ref9, ref1, ref2, ref3;\n    _s();\n    var ref4 = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)(), session = ref4.data, status = ref4.status;\n    var ref5 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_atoms_songAtom__WEBPACK_IMPORTED_MODULE_4__.currentTrackIdState), 2), currentTrackId = ref5[0], setCurrentIdTrack = ref5[1];\n    var ref6 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_atoms_songAtom__WEBPACK_IMPORTED_MODULE_4__.isPlayingState), 2), isPlaying = ref6[0], setIsPlaying = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(50), volume1 = ref7[0], setVolume = ref7[1];\n    var songInfo = (0,_hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    var spotifyApi = (0,_hooks_useSpotify__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    var fetchCurrentSong = function() {\n        if (!songInfo) {\n            spotifyApi.getMyCurrentPlayingTrack().then(function(data1) {\n                var ref10, ref8;\n                setCurrentIdTrack((ref10 = data1.body) === null || ref10 === void 0 ? void 0 : (ref8 = ref10.item) === null || ref8 === void 0 ? void 0 : ref8.id);\n                spotifyApi.getMyCurrentPlaybackState().then(function(data) {\n                    var ref;\n                    setIsPlaying((ref = data.boy) === null || ref === void 0 ? void 0 : ref.is_playing);\n                });\n            });\n        }\n    };\n    var handlePlayPause = function() {\n        spotifyApi.getMyCurrentPlaybackState().then(function(data) {\n            if (data.body.is_playing) {\n                spotifyApi.pause();\n                setIsPlaying(false);\n            } else {\n                spotifyApi.play();\n                setIsPlaying(true);\n            }\n            ;\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (spotifyApi.getAccessToken() && !currentTrackId) {\n            fetchCurrentSong();\n            setVolume(50);\n        }\n    }, [\n        currentTrackId,\n        spotifyApi,\n        session\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (volume1 > 0 && volume1 < 100) {\n            debouncedAdjustVolume(volume1);\n        }\n    }, [\n        volume1\n    ]);\n    var debouncedAdjustVolume = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(lodash__WEBPACK_IMPORTED_MODULE_7___default()(function(volume) {\n        spotifyApi.setVolume(volume);\n    }, 500), []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-24 bg-gradient-to-b from-black to-gray-900 text-white grid grid-cols-3 text-xs md:text-base px-2 md:px-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center space-x-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"hidden md:inline h-10 w-10\",\n                        src: (ref9 = songInfo === null || songInfo === void 0 ? void 0 : songInfo.album.images) === null || ref9 === void 0 ? void 0 : (ref1 = ref9[0]) === null || ref1 === void 0 ? void 0 : ref1.url,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: songInfo === null || songInfo === void 0 ? void 0 : songInfo.name\n                            }, void 0, false, {\n                                fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: songInfo === null || songInfo === void 0 ? void 0 : (ref2 = songInfo.artists) === null || ref2 === void 0 ? void 0 : (ref3 = ref2[0]) === null || ref3 === void 0 ? void 0 : ref3.name\n                            }, void 0, false, {\n                                fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-evenly\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__.SwitchHorizontalIcon, {\n                        className: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__.RewindIcon, {\n                        // onclick={() => spotifyApi.skipToPrevious()} \n                        className: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, _this),\n                    isPlaying ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__.PauseIcon, {\n                        onClick: handlePlayPause,\n                        className: \"button w-10 h-10\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 90,\n                        columnNumber: 21\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__.PlayIcon, {\n                        onClick: handlePlayPause,\n                        className: \"button w-10 h-10\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__.FastForwardIcon, {\n                        // onClick={ spotifyApi.skipToNext()} \n                        className: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 94,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__.ReplyIcon, {\n                        className: \"button\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 97,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center space-x-3 md:space-x-4 justify-end pr-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.VolumeUpIcon, {\n                        className: \"button\",\n                        onClick: function() {\n                            return volume1 > 0 && setVolume(volume1 - 10);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 101,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"w-14 md:w-28\",\n                        type: \"range\",\n                        value: volume1,\n                        onChange: function(e) {\n                            return setVolume(Number(e.target.value));\n                        },\n                        min: \"0\",\n                        max: \"100\"\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 102,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__.VolumeUpIcon, {\n                        className: \"button\",\n                        onClick: function() {\n                            return volume1 < 100 && setVolume(volume1 + 10);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                        lineNumber: 110,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n                lineNumber: 100,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/luna.c/Documents/GitHub/spotify-clone/components/Player.jsx\",\n        lineNumber: 75,\n        columnNumber: 9\n    }, _this));\n};\n_s(Player, \"rVJWGfgfHRU4IRtCRSlqNvnYlDs=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState,\n        _hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        _hooks_useSpotify__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Player;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\nvar _c;\n$RefreshReg$(_c, \"Player\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxRQUFRLENBQVBDLENBQUM7NEJBQUtqQyxNQUFNLENBQU5BLFNBQVMsQ0FBQ2tDLE1BQU0sQ0FBQ0QsQ0FBQyxDQUFDRSxNQUFNLENBQUNKLEtBQUs7O3dCQUNoREssR0FBRyxFQUFDLENBQUc7d0JBQ1BDLEdBQUcsRUFBQyxDQUFLOzs7Ozs7Z0dBRVp2RCxnRUFBWTt3QkFBQ21DLFNBQVMsRUFBQyxDQUFRO3dCQUFDVyxPQUFPLEVBQUUsUUFBUTs0QkFBRjdCLE1BQU0sQ0FBTkEsT0FBTSxHQUFHLEdBQUcsSUFBSUMsU0FBUyxDQUFDRCxPQUFNLEdBQUcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtyRyxDQUFDO0dBN0ZLVCxNQUFNOztRQUMwQnBCLHVEQUFVO1FBQ0NLLGtEQUFjO1FBQ3pCQSxrREFBYztRQUcvQkksMERBQVc7UUFDVEQseURBQVU7OztLQVAzQlksTUFBTTtBQStGWiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BsYXllci5qc3g/M2NhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tICdyZWNvaWwnO1xuaW1wb3J0IHsgY3VycmVudFRyYWNrSWRTdGF0ZSwgaXNQbGF5aW5nU3RhdGUgfSBmcm9tICcuLi9hdG9tcy9zb25nQXRvbSc7XG5pbXBvcnQgdXNlU3BvdGlmeSBmcm9tICcuLi9ob29rcy91c2VTcG90aWZ5J1xuaW1wb3J0IHVzZVNvbmdJbmZvIGZyb20gJy4uL2hvb2tzL3VzZVNvbmdJbmZvJ1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7XG4gICAgSGVhcnRJY29uLFxuICAgIFZvbHVtZVVwSWNvbiBhcyBWb2x1bWVEb3duSWNvbixcbiAgICB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcbmltcG9ydCB7XG4gICAgRmFzdEZvcndhcmRJY29uLFxuICAgIFBhdXNlSWNvbixcbiAgICBQbGF5SWNvbixcbiAgICBSZXBseUljb24sXG4gICAgUmV3aW5kSWNvbixcbiAgICBWb2x1bWVVcEljb24sXG4gICAgU3dpdGNoSG9yaXpvbnRhbEljb24sXG4gICB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCI7XG5cbmNvbnN0IFBsYXllciA9ICgpID0+IHtcbiAgICBjb25zdCB7IGRhdGE6IHNlc3Npb24sIHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpO1xuICAgIGNvbnN0IFsgY3VycmVudFRyYWNrSWQsIHNldEN1cnJlbnRJZFRyYWNrXSA9IHVzZVJlY29pbFN0YXRlKGN1cnJlbnRUcmFja0lkU3RhdGUpO1xuICAgIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VSZWNvaWxTdGF0ZShpc1BsYXlpbmdTdGF0ZSlcbiAgICBjb25zdCBbIHZvbHVtZSwgc2V0Vm9sdW1lIF0gPSB1c2VTdGF0ZSg1MCk7XG5cbiAgICBjb25zdCBzb25nSW5mbyA9IHVzZVNvbmdJbmZvKCk7XG4gICAgY29uc3Qgc3BvdGlmeUFwaSA9IHVzZVNwb3RpZnkoKTtcblxuICAgIGNvbnN0IGZldGNoQ3VycmVudFNvbmcgPSAoKSA9PiB7XG4gICAgICAgIGlmICghc29uZ0luZm8pIHtcbiAgICAgICAgICAgIHNwb3RpZnlBcGkuZ2V0TXlDdXJyZW50UGxheWluZ1RyYWNrKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50SWRUcmFjayhkYXRhLmJvZHk/Lml0ZW0/LmlkKTtcblxuICAgICAgICAgICAgICAgIHNwb3RpZnlBcGkuZ2V0TXlDdXJyZW50UGxheWJhY2tTdGF0ZSgpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldElzUGxheWluZyhkYXRhLmJveT8uaXNfcGxheWluZyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVQbGF5UGF1c2UgPSAoKSA9PiB7XG4gICAgICAgIHNwb3RpZnlBcGkuZ2V0TXlDdXJyZW50UGxheWJhY2tTdGF0ZSgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhLmJvZHkuaXNfcGxheWluZykge1xuICAgICAgICAgICAgICAgIHNwb3RpZnlBcGkucGF1c2UoKVxuICAgICAgICAgICAgICAgIHNldElzUGxheWluZyhmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNwb3RpZnlBcGkucGxheSgpXG4gICAgICAgICAgICAgICAgc2V0SXNQbGF5aW5nKHRydWUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChzcG90aWZ5QXBpLmdldEFjY2Vzc1Rva2VuKCkgJiYgIWN1cnJlbnRUcmFja0lkKSB7XG4gICAgICAgICAgICBmZXRjaEN1cnJlbnRTb25nKCk7XG4gICAgICAgICAgICBzZXRWb2x1bWUoNTApO1xuICAgICAgICB9XG4gICAgfSwgW2N1cnJlbnRUcmFja0lkLCBzcG90aWZ5QXBpLCBzZXNzaW9uXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAodm9sdW1lID4gMCAmJiB2b2x1bWUgPCAxMDApIHtcbiAgICAgICAgICAgIGRlYm91bmNlZEFkanVzdFZvbHVtZSh2b2x1bWUpO1xuICAgICAgICB9XG4gICAgfSwgW3ZvbHVtZV0pXG5cbiAgICBjb25zdCBkZWJvdW5jZWRBZGp1c3RWb2x1bWUgPSB1c2VDYWxsYmFjayhcbiAgICAgICAgZGVib3VuY2UoKHZvbHVtZSkgPT4ge1xuICAgICAgICAgICAgc3BvdGlmeUFwaS5zZXRWb2x1bWUodm9sdW1lKTtcbiAgICAgICAgfSwgNTAwKSwgW11cbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naC0yNCBiZy1ncmFkaWVudC10by1iIGZyb20tYmxhY2sgdG8tZ3JheS05MDAgdGV4dC13aGl0ZSBncmlkIGdyaWQtY29scy0zIHRleHQteHMgbWQ6dGV4dC1iYXNlIHB4LTIgbWQ6cHgtOCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00Jz5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0naGlkZGVuIG1kOmlubGluZSBoLTEwIHctMTAnIHNyYz17c29uZ0luZm8/LmFsYnVtLmltYWdlcz8uWzBdPy51cmx9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPntzb25nSW5mbz8ubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cD57c29uZ0luZm8/LmFydGlzdHM/LlswXT8ubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZXZlbmx5Jz5cbiAgICAgICAgICAgICAgICA8U3dpdGNoSG9yaXpvbnRhbEljb24gY2xhc3NOYW1lPSdidXR0b24nIC8+XG4gICAgICAgICAgICAgICAgPFJld2luZEljb24gXG4gICAgICAgICAgICAgICAgICAgIC8vIG9uY2xpY2s9eygpID0+IHNwb3RpZnlBcGkuc2tpcFRvUHJldmlvdXMoKX0gXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uJyAvPlxuICAgICAgICAgICAgICAgIHtpc1BsYXlpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxQYXVzZUljb24gb25DbGljaz17aGFuZGxlUGxheVBhdXNlfSBjbGFzc05hbWU9J2J1dHRvbiB3LTEwIGgtMTAnLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8UGxheUljb24gb25DbGljaz17aGFuZGxlUGxheVBhdXNlfSBjbGFzc05hbWU9J2J1dHRvbiB3LTEwIGgtMTAnIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8RmFzdEZvcndhcmRJY29uIFxuICAgICAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXsgc3BvdGlmeUFwaS5za2lwVG9OZXh0KCl9IFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIiAvPlxuICAgICAgICAgICAgICAgIDxSZXBseUljb24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0zIG1kOnNwYWNlLXgtNCBqdXN0aWZ5LWVuZCBwci01Jz5cbiAgICAgICAgICAgICAgICA8Vm9sdW1lRG93bkljb24gY2xhc3NOYW1lPSdidXR0b24nIG9uQ2xpY2s9eygpID0+IHZvbHVtZSA+IDAgJiYgc2V0Vm9sdW1lKHZvbHVtZSAtIDEwKX0gLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy0xNCBtZDp3LTI4JyBcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCIgXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2b2x1bWV9IFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZvbHVtZShOdW1iZXIoZS50YXJnZXQudmFsdWUpKX0gXG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjBcIiBcbiAgICAgICAgICAgICAgICAgICAgbWF4PVwiMTAwXCIgXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Vm9sdW1lVXBJY29uIGNsYXNzTmFtZT0nYnV0dG9uJyBvbkNsaWNrPXsoKSA9PiB2b2x1bWUgPCAxMDAgJiYgc2V0Vm9sdW1lKHZvbHVtZSArIDEwKX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllciJdLCJuYW1lcyI6WyJ1c2VTZXNzaW9uIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVjb2lsU3RhdGUiLCJjdXJyZW50VHJhY2tJZFN0YXRlIiwiaXNQbGF5aW5nU3RhdGUiLCJ1c2VTcG90aWZ5IiwidXNlU29uZ0luZm8iLCJkZWJvdW5jZSIsIkhlYXJ0SWNvbiIsIlZvbHVtZVVwSWNvbiIsIlZvbHVtZURvd25JY29uIiwiRmFzdEZvcndhcmRJY29uIiwiUGF1c2VJY29uIiwiUGxheUljb24iLCJSZXBseUljb24iLCJSZXdpbmRJY29uIiwiU3dpdGNoSG9yaXpvbnRhbEljb24iLCJQbGF5ZXIiLCJzb25nSW5mbyIsInNlc3Npb24iLCJkYXRhIiwic3RhdHVzIiwiY3VycmVudFRyYWNrSWQiLCJzZXRDdXJyZW50SWRUcmFjayIsImlzUGxheWluZyIsInNldElzUGxheWluZyIsInZvbHVtZSIsInNldFZvbHVtZSIsInNwb3RpZnlBcGkiLCJmZXRjaEN1cnJlbnRTb25nIiwiZ2V0TXlDdXJyZW50UGxheWluZ1RyYWNrIiwidGhlbiIsImJvZHkiLCJpdGVtIiwiaWQiLCJnZXRNeUN1cnJlbnRQbGF5YmFja1N0YXRlIiwiYm95IiwiaXNfcGxheWluZyIsImhhbmRsZVBsYXlQYXVzZSIsInBhdXNlIiwicGxheSIsImdldEFjY2Vzc1Rva2VuIiwiZGVib3VuY2VkQWRqdXN0Vm9sdW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWxidW0iLCJpbWFnZXMiLCJ1cmwiLCJhbHQiLCJoMyIsIm5hbWUiLCJwIiwiYXJ0aXN0cyIsIm9uQ2xpY2siLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsIk51bWJlciIsInRhcmdldCIsIm1pbiIsIm1heCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Player.jsx\n");

/***/ })

});