import React, { useContext, useState } from 'react'
import { FaSearch, FaSortDown } from 'react-icons/fa'
import { PopopContext } from './context/popup'
import Popups from './Popups'
import SortBtn from './SortBtn'
import AddAnnounce from './forms/AddAnnounce'

const Announcements = () => {
     const announcs = [
          { title: "Igitaramo", desc: "Iki ni igitaramo", dateOn: "Mon, 28 Jun 2020", timeAt: "20h 20min", place: "church" },
          { title: "Igitaramo", desc: "Iki ni igitaramo", dateOn: "Mon, 28 Jun 2020", timeAt: "20h 20min", place: "church" },
          { title: "Igitaramo", desc: "Iki ni igitaramo", dateOn: "Mon, 28 Jun 2020", timeAt: "20h 20min", place: "church" },
          { title: "Igitaramo", desc: "Iki ni igitaramo", dateOn: "Mon, 28 Jun 2020", timeAt: "20h 20min", place: "church" },
          { title: "Igitaramo", desc: "Iki ni igitaramo", dateOn: "Mon, 28 Jun 2020", timeAt: "20h 20min", place: "church" },
          { title: "Igitaramo", desc: "Iki ni igitaramo", dateOn: "Mon, 28 Jun 2020", timeAt: "20h 20min", place: "church" },
     ]
     const { setPopup, setPopupDetails, setPopupType, popup, popupType, popupDetails } = useContext(PopopContext)
     const [annForm, setAnnForm] = useState(false)
     return (
          <>
          <div className={`w-full mt-[5rem] px-[1rem] py-[.5rem] flex gap-[1rem]`}>
               <div className={`flex rounded-2xl items-center justify-between gap-[.5rem] border-2 border-black overflow-hidden bg-white px-[.6rem] w-full`}>
                    <input type="text" placeholder='search by date' className={`outline-none border-none indent-[1rem] py-[.5rem] w-full`} />
                    <FaSearch />
               </div>
               <SortBtn />
          </div>
          <h2 className={`text-center text-xl font-bold my-[1rem]`}>Announcements</h2>
          <div className={`mx-[1rem] px-[1rem] mb-[5rem] py-[2rem] rounded-lg shadow-lg shadow-gray-400 bg-gray-200 flex flex-col gap-[1rem]`}>
               {announcs.map((announcement, index) => {
                    return (
                         <div className={`bg-white p-[1rem] flex flex-col gap-[1rem] rounded-lg shadow-md shadow-gray-400 last-of-type:mb-[1rem]`} key={index}>
                              <p className={`font-bold text-xl`}><span>{index + 1}.</span>&nbsp;&nbsp;<span>{announcement.title}</span></p>
                              <div className={`flex justify-between items-center text-gray-600 text-sm w-full`}>
                                   <p className={`text-md`}>{announcement.dateOn}</p>
                                   <p className={`text-md`}>{announcement.timeAt}</p>
                                   <p className={`text-gray-500 font-semibold`}>{announcement.place}</p>
                              </div>
                              <button className={`px-[2rem] py-[.5rem] bg-[#301B84] text-white rounded-lg mx-[5rem]`} onClick={() => {
                                   setPopup(true)
                                   setPopupType(3)
                                   setPopupDetails({ announcement: {
                                        title: announcement.title, desc: announcement.desc, dateOn: announcement.dateOn, timeAt: announcement.timeAt, place: announcement.place
                                   }})
                              }}>Details</button>
                         </div>
                    )
               })}
               <button className={`px-[2rem] py-[.7rem] rounded-lg bg-[#301B84] text-white mx-[5rem]`} onClick={() => setAnnForm(true)}>Add Song</button>
          </div>
          {popup && <Popups setPopup={setPopup} popupType={popupType} popupDetails={popupDetails} />}
          {annForm && <AddAnnounce setAnnForm={setAnnForm} />}
          </>
     )
}

export default Announcements