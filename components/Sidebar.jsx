import React, { useEffect, useState } from 'react'
import {
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    PlusCircleIcon,
    RssIcon,
    } from "@heroicons/react/outline";
import { HeartIcon } from '@heroicons/react/solid'
import { signOut, useSession } from 'next-auth/react'
import useSpotify from '../hooks/useSpotify';
import { useRecoilState } from 'recoil';
import { playlistIdState } from '../atoms/playlistAtom'

const Sidebar = () => {
    const spotifyApi = useSpotify();
    const {data: session, status } = useSession();
    const [playlists, setPlaylists] = useState([]);
    const [playlistId, setPlaylistId] = useRecoilState(playlistIdState)

    console.log('you picked playlist', playlistId)

    useEffect(() => {
        if(spotifyApi.getAccessToken()) {
            spotifyApi.getUserPlaylists().then((data) => {
                setPlaylists(data.body.items);
            })
        }
    }, [session, spotifyApi])

    return (
        <div className='text-gray-500 p-5 text-xs lg:text-sm sm:max-w-[12rem] 
        lg:max-w-[15rem] border-r border-gray-900 overflow-y-scroll h-screen 
        scrollbar-hide hidden md:inline-flex pb-36'>
            <div className='space-y-4'>
                <button className='flex items-center space-x-2 hover:text-white'>
                    <HomeIcon className='h-5 w-5' />
                    <p>home</p>
                </button>
                <button className='flex items-center space-x-2 hover:text-white'>
                    <SearchIcon className='h-5 w-5' />
                    <p>Search</p>
                </button>
                <button className='flex items-center space-x-2 hover:text-white'>
                    <LibraryIcon className='h-5 w-5' />
                    <p>Library</p>
                </button>
                <hr className='border-top-[0.1x] border-gray-900' />
                <button className='flex items-center space-x-2 hover:text-white'>
                    <PlusCircleIcon className='h-5 w-5' />
                    <p>Create Playlist</p>
                </button>
                <button className='flex items-center space-x-2 hover:text-white'>
                    <HeartIcon className='h-5 w-5 text-blue-500' />
                    <p>Liked Songs</p>
                </button>
                <button className='flex items-center space-x-2 hover:text-white'>
                    <RssIcon className='h-5 w-5 text-green-500' />
                    <p>Your Episodes</p>
                </button>
                <hr className='border-top-[0.1x] border-gray-900' />

                {playlists.map((playlist) => (
                    <p 
                        key={playlist.id} 
                        className='cursor-pointer hover:text-white'
                        onClick={() => setPlaylistId(playlist.id)}
                    >
                        {playlist.name}
                    </p>
                ))}
                
            </div>
        </div>
    )
}

export default Sidebar