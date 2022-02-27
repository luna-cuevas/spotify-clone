"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "@heroicons/react/outline"
const outline_namespaceObject = require("@heroicons/react/outline");
;// CONCATENATED MODULE: external "@heroicons/react/solid"
const solid_namespaceObject = require("@heroicons/react/solid");
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(649);
;// CONCATENATED MODULE: external "spotify-web-api-node"
const external_spotify_web_api_node_namespaceObject = require("spotify-web-api-node");
var external_spotify_web_api_node_default = /*#__PURE__*/__webpack_require__.n(external_spotify_web_api_node_namespaceObject);
;// CONCATENATED MODULE: ./hooks/useSpotify.js



const spotifyApi = new (external_spotify_web_api_node_default())({
    clientId: "d292540e570d4d22b57f58539336c62b",
    clientSecret: "3658db533a1747b9a0cfc20cd6764243"
});
const useSpotify = ()=>{
    const { data: session , status  } = (0,react_.useSession)();
    (0,external_react_.useEffect)(()=>{
        if (session) {
            if (session.error === 'RefreshAccessTokenError') {
                (0,react_.signIn)();
            }
            spotifyApi.setAccessToken(session.user.accessToken);
        }
    }, [
        session
    ]);
    return spotifyApi;
};
/* harmony default export */ const hooks_useSpotify = (useSpotify);

// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(755);
;// CONCATENATED MODULE: ./atoms/playlistAtom.js

const playlistIdState = (0,external_recoil_.atom)({
    key: "playlistIdState",
    default: "37i9dQZEVXcQ4US7rcT7rn"
});
const playlistState = (0,external_recoil_.atom)({
    key: "playlistState",
    default: null
});

;// CONCATENATED MODULE: ./components/Sidebar.jsx








const Sidebar = ()=>{
    const spotifyApi = hooks_useSpotify();
    const { data: session , status  } = (0,react_.useSession)();
    const { 0: playlists , 1: setPlaylists  } = (0,external_react_.useState)([]);
    const [playlistId, setPlaylistId] = (0,external_recoil_.useRecoilState)(playlistIdState);
    console.log('you picked playlist', playlistId);
    (0,external_react_.useEffect)(()=>{
        if (spotifyApi.getAccessToken()) {
            spotifyApi.getUserPlaylists().then((data)=>{
                setPlaylists(data.body.items);
            });
        }
    }, [
        session,
        spotifyApi
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "text-gray-500 p-5 text-xs lg:text-sm sm:max-w-[12rem] lg:max-w-[15rem] border-r border-gray-900 overflow-y-scroll h-screen scrollbar-hide hidden md:inline-flex pb-36",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    className: "flex items-center space-x-2 hover:text-white",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(outline_namespaceObject.HomeIcon, {
                            className: "h-5 w-5"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "home"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    className: "flex items-center space-x-2 hover:text-white",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(outline_namespaceObject.SearchIcon, {
                            className: "h-5 w-5"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Search"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    className: "flex items-center space-x-2 hover:text-white",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(outline_namespaceObject.LibraryIcon, {
                            className: "h-5 w-5"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Library"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                    className: "border-top-[0.1x] border-gray-900"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    className: "flex items-center space-x-2 hover:text-white",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(outline_namespaceObject.PlusCircleIcon, {
                            className: "h-5 w-5"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Create Playlist"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    className: "flex items-center space-x-2 hover:text-white",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.HeartIcon, {
                            className: "h-5 w-5 text-blue-500"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Liked Songs"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    className: "flex items-center space-x-2 hover:text-white",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(outline_namespaceObject.RssIcon, {
                            className: "h-5 w-5 text-green-500"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Your Episodes"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                    className: "border-top-[0.1x] border-gray-900"
                }),
                playlists.map((playlist)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "cursor-pointer hover:text-white",
                        onClick: ()=>setPlaylistId(playlist.id)
                        ,
                        children: playlist.name
                    }, playlist.id)
                )
            ]
        })
    }));
};
/* harmony default export */ const components_Sidebar = (Sidebar);

;// CONCATENATED MODULE: external "lodash"
const external_lodash_namespaceObject = require("lodash");
;// CONCATENATED MODULE: ./lib/time.js
function millisToMinutesAndSeconds(millis) {
    const minutes = Math.floor(millis / 60000);
    const seconds = (millis % 60000 / 1000).toFixed(0);
    return seconds == 60 ? minutes + 1 + ":00" : minutes + ":" + (seconds < 10 ? "e" : "") + seconds;
}

;// CONCATENATED MODULE: ./atoms/songAtom.js

const currentTrackIdState = (0,external_recoil_.atom)({
    key: "currentTrackIdState",
    default: null
});
const isPlayingState = (0,external_recoil_.atom)({
    key: "isPlayingState",
    default: false
});

;// CONCATENATED MODULE: ./components/Song.jsx






const Song = ({ order , track  })=>{
    const spotifyApi = hooks_useSpotify();
    const [currentTrackId, setCurrentTrackId] = (0,external_recoil_.useRecoilState)(currentTrackIdState);
    const [isPlaying, setIsPlaying] = (0,external_recoil_.useRecoilState)(isPlayingState);
    const playSong = ()=>{
        setCurrentTrackId(track.track.id);
        setIsPlaying(true);
        spotifyApi.play({
            uris: [
                track.track.uri
            ]
        });
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "grid grid-cols-2 text-gray-500 py-4 px-5 hover:bg-gray-900 rounded-lg cursor-pointer",
        onClick: playSong,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center space-x-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: order + 1
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "h-10 w-10",
                        src: track.track.album.images[0].url,
                        alt: ""
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "w-36 lg:w-64 xl:w-80 truncate text-white",
                                children: track.track.name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "w-40",
                                children: track.track.artists[0].name
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-between ml-auto md:ml-0",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "hidden md:inline w-40",
                        children: track.track.album.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: millisToMinutesAndSeconds(track.track.duration_ms)
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_Song = (Song);

;// CONCATENATED MODULE: ./components/Songs.js





const Songs = ()=>{
    const playlist = (0,external_recoil_.useRecoilValue)(playlistState);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "px-8 flex flex-col space space-y-1 pb-28 text-white",
        children: playlist === null || playlist === void 0 ? void 0 : playlist.tracks.items.map((track, i)=>/*#__PURE__*/ jsx_runtime_.jsx(components_Song, {
                track: track,
                order: i
            }, track.track.id)
        )
    }));
};
/* harmony default export */ const components_Songs = (Songs);

;// CONCATENATED MODULE: ./components/Center.jsx









const colors = [
    "from-indigo-500",
    "from-blue-500",
    "from-green-500",
    "from-red-500",
    "from-yellow-500",
    "from-pink-500",
    "from-purple-500", 
];
const Center = ()=>{
    var ref, ref1, ref2;
    const { data: session  } = (0,react_.useSession)();
    const { 0: color , 1: setColor  } = (0,external_react_.useState)();
    const spotifyApi = hooks_useSpotify();
    const playlistId = (0,external_recoil_.useRecoilValue)(playlistIdState);
    const [playlist, setPlaylist] = (0,external_recoil_.useRecoilState)(playlistState);
    (0,external_react_.useEffect)(()=>{
        setColor((0,external_lodash_namespaceObject.shuffle)(colors).pop());
    }, [
        playlistId
    ]);
    (0,external_react_.useEffect)(()=>{
        spotifyApi.getPlaylist(playlistId).then((data)=>{
            setPlaylist(data.body);
        }).catch((err)=>console.log("Something went wrong!", err)
        );
    }, [
        spotifyApi,
        playlistId
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex-grow h-screen overflow-y-scroll scrollbar-hide",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: "absolute top-5 right-8 ",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2 text-white",
                    onClick: react_.signOut,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "rounded-full w-10 h-10",
                            src: session === null || session === void 0 ? void 0 : (ref = session.user) === null || ref === void 0 ? void 0 : ref.image,
                            alt: ""
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            children: session === null || session === void 0 ? void 0 : session.user.name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(outline_namespaceObject.ChevronDownIcon, {
                            className: "h-5 w-5"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: `flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "h-44 w-44 shadow-2xl",
                        src: playlist === null || playlist === void 0 ? void 0 : (ref1 = playlist.images) === null || ref1 === void 0 ? void 0 : (ref2 = ref1[0]) === null || ref2 === void 0 ? void 0 : ref2.url,
                        alt: ""
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "PLAYLIST"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-2xl md:text-3xl xl:text-5xl font-bold",
                                children: playlist === null || playlist === void 0 ? void 0 : playlist.name
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_Songs, {})
            })
        ]
    }));
};
/* harmony default export */ const components_Center = (Center);

;// CONCATENATED MODULE: ./hooks/useSongInfo.jsx





const useSongInfo = ()=>{
    const spotifyApi = hooks_useSpotify();
    const [currentIdTrack, setCurrentIdTrack] = (0,external_recoil_.useRecoilState)(currentTrackIdState);
    const { 0: songInfo , 1: setSongInfo  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        const fetchSongInfo = async ()=>{
            if (currentIdTrack) {
                const trackInfo = await fetch(`https://api.spotify.com/v1/tracks/${currentIdTrack}`, {
                    headers: {
                        Authorization: `Bearer ${spotifyApi.getAccessToken()}`
                    }
                }).then((res)=>res.json()
                );
                setSongInfo(trackInfo);
            }
        };
        fetchSongInfo();
    }, [
        currentIdTrack,
        spotifyApi
    ]);
    return songInfo;
};
/* harmony default export */ const hooks_useSongInfo = (useSongInfo);

;// CONCATENATED MODULE: ./components/Player.jsx










const Player = ()=>{
    var ref5, ref1, ref2, ref3;
    const { data: session , status  } = (0,react_.useSession)();
    const [currentTrackId, setCurrentIdTrack] = (0,external_recoil_.useRecoilState)(currentTrackIdState);
    const [isPlaying, setIsPlaying] = (0,external_recoil_.useRecoilState)(isPlayingState);
    const { 0: volume1 , 1: setVolume  } = (0,external_react_.useState)(50);
    const songInfo = hooks_useSongInfo();
    const spotifyApi = hooks_useSpotify();
    const fetchCurrentSong = ()=>{
        if (!songInfo) {
            spotifyApi.getMyCurrentPlayingTrack().then((data1)=>{
                var ref6, ref4;
                setCurrentIdTrack((ref6 = data1.body) === null || ref6 === void 0 ? void 0 : (ref4 = ref6.item) === null || ref4 === void 0 ? void 0 : ref4.id);
                spotifyApi.getMyCurrentPlaybackState().then((data)=>{
                    var ref;
                    setIsPlaying((ref = data.boy) === null || ref === void 0 ? void 0 : ref.is_playing);
                });
            });
        }
    };
    const handlePlayPause = ()=>{
        spotifyApi.getMyCurrentPlaybackState().then((data)=>{
            if (data.body.is_playing) {
                spotifyApi.pause();
                setIsPlaying(false);
            } else {
                spotifyApi.play();
                setIsPlaying(true);
            }
            ;
        });
    };
    const debouncedAdjustVolume = (0,external_react_.useCallback)((0,external_lodash_namespaceObject.debounce)((volume)=>{
        spotifyApi.setVolume(volume).catch((err)=>{});
    }, 200), []);
    (0,external_react_.useEffect)(()=>{
        if (spotifyApi.getAccessToken() && !currentTrackId) {
            fetchCurrentSong();
            setVolume(50);
        }
    }, [
        currentTrackId,
        spotifyApi,
        session
    ]);
    (0,external_react_.useEffect)(()=>{
        if (volume1 > 0 && volume1 < 100) {
            debouncedAdjustVolume(volume1);
        }
    }, [
        volume1
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "h-24 bg-gradient-to-b from-black to-gray-900 text-white grid grid-cols-3 text-xs md:text-base px-2 md:px-8",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center space-x-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "hidden md:inline h-10 w-10",
                        src: (ref5 = songInfo === null || songInfo === void 0 ? void 0 : songInfo.album.images) === null || ref5 === void 0 ? void 0 : (ref1 = ref5[0]) === null || ref1 === void 0 ? void 0 : ref1.url,
                        alt: ""
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: songInfo === null || songInfo === void 0 ? void 0 : songInfo.name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: songInfo === null || songInfo === void 0 ? void 0 : (ref2 = songInfo.artists) === null || ref2 === void 0 ? void 0 : (ref3 = ref2[0]) === null || ref3 === void 0 ? void 0 : ref3.name
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-evenly",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.SwitchHorizontalIcon, {
                        className: "button"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.RewindIcon, {
                        // onclick={() => spotifyApi.skipToPrevious()} 
                        className: "button"
                    }),
                    isPlaying ? /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.PauseIcon, {
                        onClick: handlePlayPause,
                        className: "button w-10 h-10"
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.PlayIcon, {
                        onClick: handlePlayPause,
                        className: "button w-10 h-10"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.FastForwardIcon, {
                        // onClick={ spotifyApi.skipToNext()} 
                        className: "button"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.ReplyIcon, {
                        className: "button"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center space-x-3 md:space-x-4 justify-end pr-5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(outline_namespaceObject.VolumeUpIcon, {
                        className: "button",
                        onClick: ()=>volume1 > 0 && setVolume(volume1 - 10)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        className: "w-14 md:w-28",
                        type: "range",
                        value: volume1,
                        onChange: (e)=>setVolume(Number(e.target.value))
                        ,
                        min: "0",
                        max: "100"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.VolumeUpIcon, {
                        className: "button",
                        onClick: ()=>volume1 < 100 && setVolume(volume1 + 10)
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_Player = (Player);

;// CONCATENATED MODULE: ./pages/index.tsx





const Home = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-black h-screen overflow-hidden",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "flex",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Sidebar, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Center, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "sticky bottom-0",
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_Player, {})
            })
        ]
    }));
};
/* harmony default export */ const pages = (Home);
async function getServerSideProps(context) {
    const session = await (0,react_.getSession)(context);
    return {
        props: {
            session
        }
    };
}


/***/ }),

/***/ 649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 755:
/***/ ((module) => {

module.exports = require("recoil");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(522));
module.exports = __webpack_exports__;

})();