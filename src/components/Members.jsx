import React, { useContext, useEffect, useState } from 'react'
import { FaSearch, FaSortDown } from 'react-icons/fa'
import Popups from './Popups'
import { PopopContext } from './context/popup'
import SortBtn from './SortBtn'
import { UserContext } from './context/UserContext'

const Members = () => {
     const { allUsers, getAllMembers, allUsersLoading } = useContext(UserContext)
     const { setPopup, setPopupDetails, setPopupType, popup, popupType, popupDetails } = useContext(PopopContext)
     const [searchQuery, setSearchQuery] = useState('');

     useEffect(() => {
          getAllMembers();
          console.log("All Users: ", allUsers);
     }, []);

     const filteredMembers = allUsers.filter(member =>
          member.username.toLowerCase().includes(searchQuery.toLowerCase()) || member.role.toLowerCase().includes(searchQuery.toLowerCase()) || member.email.toLowerCase().includes(searchQuery.toLowerCase()) || member.name.toLowerCase().includes(searchQuery.toLowerCase())
     );

     return (
          <>
          <div className={`w-full mt-[5rem] px-[1rem] py-[.5rem] flex gap-[1rem]`}>
               <div className={`flex rounded-2xl items-center justify-between gap-[.5rem] border-2 border-black overflow-hidden bg-white px-[.6rem] w-full`}>
                    <input type="text" placeholder='search by name' className={`outline-none border-none indent-[1rem] py-[.5rem] w-full`} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    <FaSearch />
               </div>
               <SortBtn />
          </div>
          <h2 className={`text-center text-xl font-bold my-[1rem]`}>Choir Members</h2>
          <p className={`text-white bg-[#301B84] mx-[1rem] rounded-lg py-[.5rem] px-[2rem]`}>Name</p>
          <div className={`mx-[1rem] px-[1rem] mb-[5rem] py-[2rem] rounded-lg shadow-lg shadow-gray-400 bg-gray-200 flex flex-col gap-[1rem]`}>
               {allUsersLoading ? (
                    <>
                    <div className={`min-h-[4rem] bg-gray-400 animate-pulse rounded shadow shadow-gray-500`}></div>
                    <div className={`min-h-[4rem] bg-gray-400 animate-pulse rounded shadow shadow-gray-500`}></div>
                    <div className={`min-h-[4rem] bg-gray-400 animate-pulse rounded shadow shadow-gray-500`}></div>
                    <div className={`min-h-[4rem] bg-gray-400 animate-pulse rounded shadow shadow-gray-500`}></div>
                    <div className={`min-h-[4rem] bg-gray-400 animate-pulse rounded shadow shadow-gray-500`}></div>
                    </>
               ) : allUsers.length <= 0 ? (
                    <div className={`min-h-[4rem] bg-gray-400 rounded shadow shadow-gray-500 flex items-center justify-center`}>There are no users</div>
               ) : filteredMembers.length <= 0 ? (
                    <div className={`min-h-[4rem] bg-gray-400 rounded shadow shadow-gray-500 break-words px-[1rem] py-[2rem]`}>There is no user with &quot; { searchQuery } &quot;</div>
               ) : filteredMembers.map((member, index) => {
                    return (
                         <div className={`bg-white px-[1rem] py-[.7rem] rounded-lg shadow-md shadow-gray-400 border-b-4 border-[#301B84] flex justify-between items-center`} key={index}>
                              <p className={`font-semibold text-lg`}> <span>{index + 1}</span> <span>{member.username}</span> </p>
                              <button className={`px-[1rem] py-[.5rem] rounded-lg bg-[#301B84] text-white`} onClick={() => {
                                   setPopup(true);
                                   setPopupDetails({
                                        member: {
                                             email: member.email || "none",
                                             role: member.role || "none"
                                        }
                                   });
                                   setPopupType(1);
                                   }}>Details
                              </button>
                         </div>
                    )
               })}
               <button className={`px-[2rem] py-[.7rem] rounded-lg bg-[#301B84] text-white mx-[3rem]`}>Add Choir Member</button>
          </div>
          {popup && <Popups setPopup={setPopup} popupType={popupType} popupDetails={popupDetails} />}
          </>
     )
}

export default Members
