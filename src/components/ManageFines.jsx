import React, { useContext, useEffect, useState } from 'react'
import { FaSearch, FaSortDown } from 'react-icons/fa'
import SortBtn from './SortBtn'
import { FinesContext } from './context/FinesContext'
import { SearchBar } from './subComponents/SearchBar'

const ManageFines = () => {
     const { getUnpaidFines, finesUnpaidLoading, unpaidFines } = useContext(FinesContext);
     const [searchQuery, setSearchQuery] = useState('');

     useEffect(() => {
          getUnpaidFines()
     }, [])

     const filteredFInes = unpaidFines.filter(fine =>
          fine.userId.name.toLowerCase().includes(searchQuery.toLowerCase()) || fine.reason.toLowerCase().includes(searchQuery.toLowerCase()) || fine.amount.toString().toLowerCase().includes(searchQuery.toLowerCase())
     );

     const truncateText = (fullNames, limit) => {
          if (fullNames.length > limit) {
               return fullNames.substring(0, limit) + '...'
          }
          return fullNames
     }

     const handleSearchChange = (e) => {
          setSearchQuery(e.target.value)
     }

     return (
          <>
          <SearchBar item={"kwizina"} itemFunction={handleSearchChange} itemValue={searchQuery} />
          <h2 className={`text-center text-xl font-bold my-[1rem]`}>Gucunga amande</h2>
          <p className={`text-white bg-[#301B84] mx-[1rem] rounded-lg py-[.5rem] px-[1rem] flex justify-between`}> <i>Izina</i> <i>Amande</i> <i>Impamvu</i> <i>Icyakozwe</i> </p>
          <div className={`mx-[1rem] px-[1rem] mb-[5rem] py-[2rem] rounded-lg shadow-lg shadow-gray-400 bg-gray-200 flex flex-col gap-[1rem]`}>
               {finesUnpaidLoading ? (
                    <>
                    <div className={`min-h-[3rem] rounded-md bg-gray-400 animate-pulse`}></div>     
                    <div className={`min-h-[3rem] rounded-md bg-gray-400 animate-pulse`}></div>     
                    <div className={`min-h-[3rem] rounded-md bg-gray-400 animate-pulse`}></div>     
                    <div className={`min-h-[3rem] rounded-md bg-gray-400 animate-pulse`}></div>     
                    </>
               ) : unpaidFines.length <= 0 ? (
                    <div className={`min-h-[4rem] bg-gray-50 flex items-center justify-center`}> Nta bihano bitarishyurwa</div>
               ) : filteredFInes.length <= 0 ? (
                    <div className={`min-h-[3rem] rounded-md bg-gray-400 p-[1rem]`}>Nta bihano bifite &quot; { searchQuery } &quot;</div>
               ) : filteredFInes.map((fine, index) => {
                    return (
                         <div className={`px-[.5rem] py-[1rem] rounded-lg shadow-md shadow-gray-400 border-b-4 border-[#301B84] bg-white flex justify-between items-center`}>
                              <p className={`font-semibold`}>{index + 1}.&nbsp;&nbsp;{truncateText(fine.userId.name, 5)}</p>
                              <p className={`font-semibold text-sm`}>{fine.amount}</p>
                              <p className={`font-normal text-md`} title={fine.reason}>{truncateText(fine.reason, 10)}</p>
                              <p className={`font-semibold text-md ${fine.fineStatus ? "text-green-600" : "text-red-600"}`}>{fine.fineStatus ? 'Yarushyuye' : 'Ntiyishyuye'}</p>
                         </div>
                    )
               })}
               {/* <button className={`px-[2rem] py-[.7rem] rounded-lg bg-[#301B84] text-white mx-[3rem] mt-[1rem]`}>Add Choir Member</button> */}
          </div>
          </>
     )
}

export default ManageFines
