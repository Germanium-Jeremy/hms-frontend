import React, { useContext, useEffect, useState } from 'react'
import { FaSearch, FaSortDown } from 'react-icons/fa'
import Popups from './Popups'
import { PopopContext } from './context/popup'
import SortBtn from './SortBtn'
import { UserContext } from './context/UserContext'
import { SearchBar } from './subComponents/SearchBar'

const Members = () => {
     const { allUsers, getAllMembers, allUsersLoading } = useContext(UserContext)
     const { setPopup, setPopupDetails, setPopupType, popup, popupType, popupDetails } = useContext(PopopContext)
     const [searchQuery, setSearchQuery] = useState('');
     let user = JSON.parse(localStorage.getItem("HMS_USER"));
     const [userRole, setUserRole] = useState('')

     useEffect(() => {
          getAllMembers();
          console.log("All Users: ", allUsers);

          if (user != null || user != undefined) {
               user = user._id || user.id
               setUserRole(JSON.parse(localStorage.getItem("HMS_USER")).role);
          } else {
               user = null
          }
     }, []);

     const filteredMembers = allUsers.filter(member =>
          member.username.toLowerCase().includes(searchQuery.toLowerCase()) || member.role.toLowerCase().includes(searchQuery.toLowerCase()) || member.email.toLowerCase().includes(searchQuery.toLowerCase()) || member.name.toLowerCase().includes(searchQuery.toLowerCase())
     );

     const handleSearchChange = (e) => {
          setSearchQuery(e.target.value)
     }

     return (
          <>
               <SearchBar item={"Abantu"} itemFunction={handleSearchChange} itemValue={searchQuery} />
               <h2 className={`text-center text-xl font-bold my-[1rem]`}>Abavandimwe ba chorali</h2>
               {/* <h2 className={`text-center text-xl font-bold my-[1rem]`}>Choir Members</h2> */}
               <p className={`text-white bg-[#301B84] mx-[1rem] rounded-lg py-[.5rem] px-[2rem]`}>Izina</p>
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
                         <div className={`min-h-[4rem] bg-gray-400 rounded shadow shadow-gray-500 flex items-center justify-center`}>Nta muntu urimo</div>
                    ) : filteredMembers.length <= 0 ? (
                         <div className={`min-h-[4rem] bg-gray-400 rounded shadow shadow-gray-500 break-words px-[1rem] py-[2rem]`}>Nta muntu ufite &quot; { searchQuery } &quot;</div>
                    ) : filteredMembers.map((member, index) => {
                         return (
                              <div className={`bg-white px-[1rem] py-[.7rem] rounded-lg shadow-md shadow-gray-400 border-b-4 border-[#301B84] flex justify-between items-center`} key={index}>
                                   <p className={`text-lg`}> <span>{index + 1}</span>. <span>{member.name}</span> </p>
                                   {userRole !== 'Choir Member' && 
                                        <button className={`px-[1rem] py-[.5rem] rounded-lg bg-[#301B84] text-white`} onClick={() => {
                                             setPopup(true);
                                             setPopupDetails({
                                                  member: {
                                                       email: member.email || "none",
                                                       role: member.role || "none"
                                                  }
                                             });
                                             setPopupType(1);
                                             }}>Amakuru
                                        </button>
                                   }
                              </div>
                         )
                    })}
                         {(userRole !== 'Choir Member' || userRole !== 'secretary' || userRole !== 'accountant') &&
                              <button className={`px-[2rem] py-[.7rem] rounded-lg bg-[#301B84] text-white mx-[3rem]`}>
                                   Ongeramo umuririmbyi
                              </button>
                         }
               </div>
               {popup && <Popups setPopup={setPopup} popupType={popupType} popupDetails={popupDetails} />}
          </>
     )
}

export default Members
