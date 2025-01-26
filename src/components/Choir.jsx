import React, { useContext, useEffect, useState } from 'react';
import { FaPlay, FaSearch } from 'react-icons/fa';
import Popups from './Popups';
import { PopopContext } from './context/popup';
import AddSong from './forms/AddSong';
import axios from 'axios';
import { SearchBar } from './subComponents/SearchBar';

const backendApi = import.meta.env.VITE_BACKEND_URL;

const Choir = () => {
     const { setPopup, setPopupDetails, setPopupType, popup, popupType, popupDetails } = useContext(PopopContext);
     const [songForm, setSongForm] = useState(false);
     const [songs, setSongs] = useState([]);
     const [searchQuery, setSearchQuery] = useState('');
     const [loadingSongs, setLoadingSongs] = useState(true)

     const getSongs = async () => {
          setLoadingSongs(true);
          try {
               const response = await axios.get(`${backendApi}/api/songs`);
               setSongs(response.data);
               setLoadingSongs(false)
          } catch (error) {
               setLoadingSongs(false);
               console.log(error);
          }
     };

     const hideLongText = (text) => {
          if (text.length < 10) return text;
          return text.slice(0, 10) + "...";
     };

     const handleSearchChange = (e) => {
          setSearchQuery(e.target.value)
     }

     useEffect(() => {
          getSongs();
     }, []);

    // Filter songs based on search query
     const filteredSongs = songs.filter(song =>
          song.songTitle.toLowerCase().includes(searchQuery.toLowerCase())
     );

     return (
          <>
               <SearchBar item={"for a song"} itemFunction={handleSearchChange} itemValue={searchQuery} />
               <h2 className={`text-center text-xl font-bold my-[1rem]`}>Choir Songs</h2>
               {loadingSongs ? (<div className={`flex flex-col gap-[1rem] px-[1rem]`}>
                    <div className={`w-full min-h-[5rem] rounded bg-gray-500 animate-pulse`}></div>
                    <div className={`w-full min-h-[5rem] rounded bg-gray-500 animate-pulse`}></div>
                    <div className={`w-full min-h-[5rem] rounded bg-gray-500 animate-pulse`}></div>
                    <div className={`w-full min-h-[5rem] rounded bg-gray-500 animate-pulse`}></div>
                    <div className={`w-full min-h-[5rem] rounded bg-gray-500 animate-pulse`}></div>
               </div>):  (
                    <div className={`mx-[1rem] px-[1rem] mb-[5rem] py-[1rem] rounded-lg shadow-lg shadow-gray-400 bg-gray-200 flex flex-col gap-[1rem]`}>
                         {songs.length <= 0 ? (<div>There are no songs yet</div>) : filteredSongs.length === 0 ? (
                                   <div className={`break-words`}>There is no song named &quot;{ searchQuery }!&quot;</div>
                         ) : (filteredSongs.map((song, index) => (
                              <div className={`bg-white px-[1rem] py-[1rem] gap-3 flex flex-col shadow shadow-gray-400 rounded-lg`} key={index}>
                                   <div className={`flex justify-between items-center`}>
                                   <div className={`flex flex-col gap-2`}>
                                        <p className={`font-bold text-lg`}>{hideLongText(song.songTitle)}</p>
                                   </div>
                                        {
     console.log("Song Url: ", song.songUrlAudio)

                                        }
                                   <div className={`flex gap-[1rem] items-center`}>
                                        <button className={`px-[1rem] py-[.5rem] bg-[#301B84] rounded-lg text-white`} onClick={() => {
                                             setPopup(true);
                                             setPopupType(2);
                                             setPopupDetails({
                                                  song: {
                                                       title: song.songTitle,
                                                       lyrics: song.songLyrics,
                                                       audio: song.songUrlAudio,
                                                  },
                                             });
                                        }}>Lyrics</button>
                                        {/* { song.songUrlAudio != null && <FaPlay className={`rounded-full text-white text-3xl bg-gray-600 p-1`} /> } */}
                                        </div>
                                   </div>
                                   {song.songUrlAudio != null && <audio className={`rounded-full text-white text-3xl bg-gray-600 p-1`} controls>
                                        <source src="https://artlist.io/royalty-free-music/album/roar/6322" type='audio/mp3' />
                                   </audio> }

                              </div>
                              ))
                         )}
                         <button className={`px-[2rem] py-[.7rem] rounded-lg bg-[#301B84] text-white mx-[5rem]`} onClick={() => setSongForm(true)}>Add Song</button>
                    </div>
               )}
               {popup && <Popups setPopup={setPopup} popupType={popupType} popupDetails={popupDetails} />}
               {songForm && <AddSong setSongForm={setSongForm} />}
          </>
     );
};

export default Choir;
