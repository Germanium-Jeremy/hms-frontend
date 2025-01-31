import React, { useContext, useEffect, useState } from 'react'
import { PopopContext } from './context/popup'
import Popups from './Popups'
import AddAnnounce from './forms/AddAnnounce'
import axios from 'axios'
import { toast } from 'react-toastify'
import { SearchBar } from './subComponents/SearchBar'
import { truncateText } from "../data/neededFunctions";
const backendApi = import.meta.env.VITE_BACKEND_URL;

const Announcements = () => {
     const [announcs, setAnnouncs] = useState([])
     const { setPopup, setPopupDetails, setPopupType, popup, popupType, popupDetails } = useContext(PopopContext)
     const [annForm, setAnnForm] = useState(false)
     const [searchQuery, setSearchQuery] = useState('');
     const [loadingAnnouncs, setLoadingAnnouncs] = useState(true)

     useEffect(() => {
          axios.get(`${backendApi}/api/announcements`).then(response => {
               response.data.sort((a, b) => b.createdAt - a.createdAt);
               setAnnouncs(response.data)
               setLoadingAnnouncs(false);
          }).catch(error => {
               console.error(error)
               setLoadingAnnouncs(false);
               toast.warn("Unable to reach server")
          })
     }, [])

     const filteredAnnouncs = announcs.filter((announce) =>
          announce.title.toLowerCase().includes(searchQuery.toLowerCase()) || announce.details.toLowerCase().includes(searchQuery.toLowerCase())
     );

     const handleSearchChange = (e) => {
          setSearchQuery(e.target.value)
     }


     return (
          <>
          <SearchBar item={"announcement"} itemFunction={handleSearchChange} itemValue={searchQuery} />
          <h2 className={`text-center text-xl font-bold my-[1rem]`}>Announcements</h2>
          <div className={`mx-[1rem] px-[1rem] mb-[5rem] py-[2rem] rounded-lg shadow-lg shadow-gray-400 bg-gray-200 flex flex-col gap-[1rem]`}>
               {loadingAnnouncs ? (
                    <>
                    <div className={`min-h-[4rem] rounded bg-gray-400 animate-pulse`}></div>
                    <div className={`min-h-[4rem] rounded bg-gray-400 animate-pulse`}></div>
                    <div className={`min-h-[4rem] rounded bg-gray-400 animate-pulse`}></div>
                    <div className={`min-h-[4rem] rounded bg-gray-400 animate-pulse`}></div>
                    <div className={`min-h-[4rem] rounded bg-gray-400 animate-pulse`}></div>
                    <div className={`min-h-[4rem] rounded bg-gray-400 animate-pulse`}></div>
                         </>
                    ) : announcs.length <= 0 ? (
                              <div className={`text-center`}>No Announcement Here</div>
                         ) : filteredAnnouncs.length <= 0 ? (
                         <div className={`bg-white p-[1rem] rounded-lg shadow-md shadow-gray-400 min-h-[4rem] break-words`}>
                              There is no announcement with &quot;{ searchQuery }&quot; !
                         </div>
                    ) : filteredAnnouncs.map((announcement, index) => {
                    return (
                         <div className={`bg-white p-[1rem] flex flex-col gap-[1rem] rounded-lg shadow-md shadow-gray-400 last-of-type:mb-[1rem]`} key={index}>
                              <p className={`font-bold text-xl`}><span>{index + 1}.</span>&nbsp;&nbsp;<span>{announcement.title}</span></p>
                              <div className={`flex justify-between items-center text-gray-600 text-sm w-full`}>
                                   <p className={`text-md`}>{announcement.time}</p>
                                   <p className={`text-md`}>{announcement.date}</p>
                                   <p className={`text-gray-500 font-semibold`}>{truncateText(announcement.location, 10)}</p>
                              </div>
                              <button className={`px-[2rem] py-[.5rem] bg-[#301B84] text-white rounded-lg mx-[5rem]`} onClick={() => {
                                   setPopup(true)
                                   setPopupType(3)
                                   setPopupDetails({ announcement: {
                                        title: announcement.title, desc: announcement.details, dateOn: announcement.time, timeAt: announcement.createdAt, place: announcement.location
                                   }})
                              }}>Details</button>
                         </div>
                    )
               })}
               <button className={`px-[2rem] py-[.7rem] rounded-lg bg-[#301B84] text-white mx-[5rem]`} onClick={() => setAnnForm(true)}>Add Announcement</button>
          </div>
          {popup && <Popups setPopup={setPopup} popupType={popupType} popupDetails={popupDetails} />}
          {annForm && <AddAnnounce setAnnForm={setAnnForm} />}
          </>
     )
}

export default Announcements
