import React, { useContext, useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaSortDown } from 'react-icons/fa6'
import SortBtn from './SortBtn'
import { FinesContext } from './context/FinesContext'

const Services = () => {
     const { getUnpaidFines, finesUnpaidLoading, unpaidFines, markFinePaid } = useContext(FinesContext);
     const [searchQuery, setSearchQuery] = useState('');

     useEffect(() => {
          getUnpaidFines()
     }, [])

     const filteredFInes = unpaidFines.filter(fine =>
          fine.userId.name.toLowerCase().includes(searchQuery.toLowerCase()) || fine.reason.toLowerCase().includes(searchQuery.toLowerCase()) || fine.amount.toString().toLowerCase().includes(searchQuery.toLowerCase())
     );

     return (
          <>
          <div className={`w-full mt-[5rem] px-[1rem] py-[.5rem] flex gap-[1rem]`}>
               <div className={`flex rounded-2xl items-center justify-between gap-[.5rem] border-2 border-black overflow-hidden bg-white px-[.6rem] w-full`}>
                    <input type="text" placeholder='search by date' className={`outline-none border-none indent-[1rem] py-[.5rem] w-full`} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    <FaSearch />
               </div>
               <SortBtn />
          </div>
          <h2 className={`text-center text-xl font-bold my-[1rem]`}>Payment Status</h2>
          <div className={`mx-[1rem] px-[1rem] mb-[5rem] py-[2rem] rounded-lg shadow-lg shadow-gray-400 bg-gray-200 flex flex-col gap-[1rem]`}>
               {filteredFInes.map((fine, index) => {
                    return (
                         <div className={`bg-white p-[1rem] flex flex-col gap-[.5rem] rounded-lg shadow-md shadow-gray-400 last-of-type:mb-[1rem] border-l-4 border-[#301B84]`} key={index}>
                              <p className={`font-semibold text-xl`}><span>{index + 1}</span>.&nbsp;&nbsp;<span>{fine.userId.name}</span></p>
                              <div className={`flex justify-between px-[1rem]`}>
                                   <p className={`text-gray-600 text-sm`}>{fine.date}</p>
                                   <p className={`text-sm ${fine.fineStatus ? "text-green-600" : "text-red-600"} font-semibold`}>{fine.fineStatus ? "Paid" : "Unpaid"}</p>
                              </div>
                              <p className={`text-gray-800 text-md`}>{fine.reason}</p>
                              <div className={`flex justify-between px-[1rem] items-center`}>
                                   <button className={`px-[1rem] py-[.4rem] rounded-lg text-white bg-[#301B84]`} onClick={() => markFinePaid(fine._id)}>Mark as Paid</button>
                                   <span className={`px-[1rem] py-[.4rem] text-white bg-[#301B84] rounded-lg`}>{fine.amount}</span>
                              </div>
                         </div>
                    )
               })}
          </div>
          </>
     )
}

export default Services
