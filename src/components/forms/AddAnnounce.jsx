import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
const backendApi = import.meta.env.VITE_BACKEND_URL;

const AddAnnounce = ({ setAnnForm }) => {
     const [title, setTitle] = useState("")
     const [details, setDetails] = useState('')
     const [time, setTime] = useState('')
     const [location, setLocation] = useState('')
     const [date, setDate] = useState('')
     const [loading, setLoading] = useState(false)

     const handleAddAnnouncement = async (event) => {
          event.preventDefault()
          setLoading(true)
          axios.post(`${backendApi}/api/announcements`, { title, details, location, time, date }).then(response => {
               setLoading(false)
               console.log("Announcement added", response)
               setAnnForm(false)
               toast.success("Announcement Added")
          }).catch(error => {
               setLoading(false);
               toast.warn("Unable to add Announcement, try again")
               console.error("Error Creating announcement: ", error)
          })
     }
     return (
          <>
          <div className={`fixed top-0 bottom-0 left-0 right-0 z-[1] bg-gray-600 opacity-50`} onClick={() => setAnnForm(false)}></div>
          <form className={`rounded-lg bg-white px-[1rem] py-[2rem] fixed top-[7rem] bottom-[7rem] left-[1rem] right-[1rem] z-[2] overflow-hidden overflow-y-auto`} onSubmit={handleAddAnnouncement}>
               <h2 className={`text-xl font-semibold text-center`}>Add Announcement</h2>
               <div className={`flex flex-col gap-2 my-[2rem]`}>
                    <div className={`flex flex-col gap-1`}>
                         <label htmlFor="title" className={`font-semibold`}>Enter the title of the announcement</label>
                         <input type="text" className={`rounded-lg outline-none border border-[#301B84] py-1 px-[1rem]`} placeholder='Igitaramo' required value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className={`flex flex-col gap-1`}>
                         <label className={`font-semibold`}>Enter the details</label>
                         <textarea className={`rounded-lg outline-none border border-[#301B84] py-1 px-[1rem] min-h-[4rem]`} placeholder='Write the details' required value={details} onChange={(e) => setDetails(e.target.value)} />
                    </div>
                    <div className={`flex flex-col gap-1`}>
                         <label className={`font-semibold`}>Enter the precise time</label>
                         <input type='time' className={`rounded-lg outline-none border border-[#301B84] py-1 px-[1rem] min-h-[4rem]`} placeholder='Write the details' value={time} onChange={(e) => setTime(e.target.value)} />
                    </div>
                    <div className={`flex flex-col gap-1`}>
                         <label className={`font-semibold`}>Enter the location</label>
                         <input type='text' className={`rounded-lg outline-none border border-[#301B84] py-1 px-[1rem] min-h-[4rem]`} placeholder='Write the details' value={location} onChange={(e) => setLocation(e.target.value)} />
                    </div>
                    <div className={`flex flex-col gap-1`}>
                         <label className={`font-semibold`}>Enter the final date</label>
                         <input type='date' className={`rounded-lg outline-none border border-[#301B84] py-1 px-[1rem] min-h-[4rem]`} placeholder='Write the details' value={date}  onChange={(e) => setDate(e.target.value)}/>
                    </div>
                    
               </div>
               {loading ? <button disabled className={`px-[2rem] py-[.7rem] w-full rounded-lg bg-gray-600 text-white`}>Adding...</button> : <button type='submit' className={`px-[2rem] py-[.7rem] w-full rounded-lg bg-[#301B84] text-white`}>Add Announcement</button>}
          </form>
          </>
     )
}

export default AddAnnounce
