import React, { useContext, useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaSortDown } from 'react-icons/fa6'
import SortBtn from './SortBtn'
import { FinesContext } from './context/FinesContext'
import { SearchBar } from './subComponents/SearchBar'

const Services = () => {
     const { getUnpaidFines, finesUnpaidLoading, unpaidFines, markFinePaid, markLoading, integer } = useContext(FinesContext);
     const [searchQuery, setSearchQuery] = useState('');
     
     useEffect(() => {
          getUnpaidFines()
     }, [integer, ])

     const filteredFInes = unpaidFines.filter(fine =>
          fine.reason.toLowerCase().includes(searchQuery.toLowerCase()) || fine.amount.toString().toLowerCase().includes(searchQuery.toLowerCase())
     );

     const handleSearchChange = (e) => {
          setSearchQuery(e.target.value)
     }

     return (
          <>
          <SearchBar item={"for fines"} itemFunction={handleSearchChange} itemValue={searchQuery} />
          <h2 className={`text-center text-xl font-bold my-[1rem]`}>Payment Status</h2>
          <div className={`mx-[1rem] px-[1rem] mb-[5rem] py-[2rem] rounded-lg shadow-lg shadow-gray-400 bg-gray-200 flex flex-col gap-[1rem]`}>
               {finesUnpaidLoading ? (
                    <>
                    <div className={`min-h-[3rem] rounded bg-gray-400 animate-pulse`}></div>
                    <div className={`min-h-[3rem] rounded bg-gray-400 animate-pulse`}></div>
                    <div className={`min-h-[3rem] rounded bg-gray-400 animate-pulse`}></div>
                    <div className={`min-h-[3rem] rounded bg-gray-400 animate-pulse`}></div>
                    <div className={`min-h-[3rem] rounded bg-gray-400 animate-pulse`}></div>
                    <div className={`min-h-[3rem] rounded bg-gray-400 animate-pulse`}></div>
                    </>
               ) : unpaidFines.length <= 0 ? (
                    <div className={`text-lg font-semibold min-h-[5rem] flex justify-center items-center`}>There is no Unpaid Fine To Any User</div>
               ) : filteredFInes.length <= 0 ? (
                    <div className={`text-wrap break-words`}>There is no unpaid fine with &quot; { searchQuery } &quot;</div>
               ) : filteredFInes.map((fine, index) => {
                    console.log(fine._id)
                    return (
                         <div className={`bg-white p-[1rem] flex flex-col gap-[.5rem] rounded-lg shadow-md shadow-gray-400 last-of-type:mb-[1rem] border-l-4 border-[#301B84]`} key={index}>
                              <p className={`font-semibold text-xl`}><span>{index + 1}</span>.&nbsp;&nbsp;<span>{fine.userId?.name || "No username"}</span></p>
                              <div className={`flex justify-between px-[1rem]`}>
                                   <p className={`text-gray-600 text-sm`}>{fine.date}</p>
                                   <p className={`text-sm ${fine.fineStatus ? "text-green-600" : "text-red-600"} font-semibold`}>{fine.fineStatus ? "Paid" : "Unpaid"}</p>
                              </div>
                              <p className={`text-gray-800 text-md`}>{fine.reason}</p>
                              <div className={`flex justify-between px-[1rem] items-center`}>
                                   {markLoading ? <button className={`px-[1rem] py-[.4rem] rounded-lg text-white bg-gray-400`}>Pending...</button> : 
                                        <button className={`px-[1rem] py-[.4rem] rounded-lg text-white bg-[#301B84]`} onClick={async() => await markFinePaid(fine._id)}>Mark as paid</button>
                                   }
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
