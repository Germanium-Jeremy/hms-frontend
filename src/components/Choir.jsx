import React, { useContext, useState } from 'react'
import { FaPlay, FaSearch, FaSortDown } from 'react-icons/fa'
import Popups from './Popups'
import { PopopContext } from './context/popup'
import SortBtn from './SortBtn'
import AddSong from './forms/AddSong'

const Choir = () => {
     const songs = [
          { title: "Song 1", dateCreated: "Mon, 21 Jun 2020", lylics: ["This are the lylics of the song. This are the lylics of the song", "This are the lylics of the song. This are the lylics of the song"] },
          { title: "Song 2", dateCreated: "Mon, 22 Jul 2020", lylics: ["This are the lylics of the song. This are the lylics of the song", "This are the lylics of the song. This are the lylics of the song", "This are the lylics of the song. This are the lylics of the song"] },
          { title: "Song 3", dateCreated: "Mon, 23 Aug 2020", lylics: ["This are the lylics of the song. This are the lylics of the song", "This are the lylics of the song. This are the lylics of the song", "This are the lylics of the song. This are the lylics of the song"] },
          { title: "Song 4", dateCreated: "Mon, 24 Sept 2020", lylics: ["This are the lylics of the song. This are the lylics of the song", "This are the lylics of the song. This are the lylics of the song", "This are the lylics of the song. This are the lylics of the song"] },
          { title: "Song 5", dateCreated: "Mon, 25 Oct 2020", lylics: ["This are the lylics of the song. This are the lylics of the song", "This are the lylics of the song. This are the lylics of the song", "This are the lylics of the song. This are the lylics of the song"] },
          { title: "Song 6", dateCreated: "Mon, 26 Nov 2020", lylics: ["This are the lylics of the song. This are the lylics of the song", "This are the lylics of the song. This are the lylics of the song", "This are the lylics of the song. This are the lylics of the song"] },
     ]
     const { setPopup, setPopupDetails, setPopupType, popup, popupType, popupDetails } = useContext(PopopContext)
     const [songForm, setSongForm] = useState(false)
     return (
          <>
          <div className={`w-full mt-[5rem] px-[1rem] py-[.5rem] flex gap-[1rem]`}>
               <div className={`flex rounded-2xl items-center justify-between gap-[.5rem] border-2 border-black overflow-hidden bg-white px-[.6rem] w-full`}>
                    <input type="text" placeholder='search for a song' className={`outline-none border-none indent-[1rem] py-[.5rem] w-full`} />
                    <FaSearch />
               </div>
               <SortBtn />
          </div>
          <h2 className={`text-center text-xl font-bold my-[1rem]`}>Choir Songs</h2>
          <div className={`mx-[1rem] px-[1rem] mb-[5rem] py-[1rem] rounded-lg shadow-lg shadow-gray-400 bg-gray-200 flex flex-col gap-[1rem]`}>
               {songs.map((song, index) => {
                    return (
                         <div className={`bg-white px-[1rem] py-[1rem] flex shadow shadow-gray-400 rounded-lg items-center justify-between`} key={index}>
                              <div className={`flex flex-col gap-2`}>
                                   <p className={`font-bold text-lg`}>{song.title}</p>
                                   <span className={`text-xs text-gray-500 font-light`}>{song.dateCreated}</span>
                              </div>
                              <div className={`flex gap-[1rem] items-center`}>
                                   <button className={`px-[1rem] py-[.5rem] bg-[#301B84] rounded-lg text-white`} onClick={() => {
                                        setPopup(true)
                                        setPopupType(2)
                                        setPopupDetails({
                                             song: {
                                                  title: song.title,
                                                  lyrics: song.lylics,
                                                  audio: "none",
                                                  addedAt: song.dateCreated
                                             }
                                        })
                                   }}>Lyrics</button>
                                   <FaPlay className={`rounded-full text-white text-3xl bg-gray-600 p-1`} />
                              </div>
                         </div>
                    )
               })}
               <button className={`px-[2rem] py-[.7rem] rounded-lg bg-[#301B84] text-white mx-[5rem]`} onClick={() => setSongForm(true)}>Add Song</button>
          </div>
          {popup && <Popups setPopup={setPopup} popupType={popupType} popupDetails={popupDetails} />}
          {songForm && <AddSong setSongForm={setSongForm} /> }
          </>
     )
}

export default Choir
