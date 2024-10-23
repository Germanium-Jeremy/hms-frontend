import React from 'react'

const AddEvents = ({ setEventForm }) => {
     return (
          <>
          <div className={`fixed top-0 bottom-0 left-0 right-0 z-[1] bg-gray-600 opacity-50`} onClick={() => setEventForm(false)}></div>
          <form className={`rounded-lg bg-white px-[1rem] py-[2rem] fixed top-[4rem] bottom-[4rem] left-[1rem] right-[1rem] z-[2] overflow-hidden overflow-y-auto`}>
               <h2 className={`text-xl font-semibold text-center`}>Add Announcement</h2>
               <div className={`flex flex-col gap-2 my-[2rem]`}>
                    <div className={`flex flex-col gap-1`}>
                         <label htmlFor="title" className={`font-semibold`}>Enter the title of the Event</label>
                         <input type="text" className={`rounded-lg outline-none border border-[#301B84] py-1 px-[1rem]`} placeholder='Igitaramo' />
                    </div>
                    <div className={`flex flex-col gap-1`}>
                         <label htmlFor="audio" className={`font-semibold`}>Enter the details</label>
                         <textarea className={`rounded-lg outline-none border border-[#301B84] py-1 px-[1rem] min-h-[4rem]`} placeholder='Write the details' />
                    </div>
                    <div className={`flex flex-col gap-1`}>
                         <label htmlFor="title" className={`font-semibold`}>Enter the Date</label>
                         <input type="date" className={`rounded-lg outline-none border border-[#301B84] py-1 px-[1rem]`} />
                    </div>
                    <div className={`flex gap-[1rem] justify-between`}>
                         <div className={`flex flex-col gap-1 w-full`}>
                              <label htmlFor="title" className={`font-semibold`}>Start Time</label>
                              <input type="time" className={`rounded-lg outline-none border border-[#301B84] py-1 px-[1rem]`} />
                         </div>
                         <div className={`flex flex-col gap-1 w-full`}>
                              <label htmlFor="title" className={`font-semibold`}>End Time</label>
                              <input type="time" className={`rounded-lg outline-none border border-[#301B84] py-1 px-[1rem]`} />
                         </div>
                    </div>
                    <div className={`flex flex-col gap-1`}>
                         <label htmlFor="title" className={`font-semibold`}>Enter the Revenue</label>
                         <input type="text" className={`rounded-lg outline-none border border-[#301B84] py-1 px-[1rem]`} />
                    </div>
               </div>
               <button type='submit' className={`px-[2rem] py-[.7rem] w-full rounded-lg bg-[#301B84] text-white`}>Add Song</button>
          </form>
          </>
     )
}

export default AddEvents
