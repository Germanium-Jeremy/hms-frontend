import React, { useContext } from 'react'
import { FaSearch, FaSortDown } from 'react-icons/fa'
import Popups from './Popups'
import { PopopContext } from './context/popup'
import SortBtn from './SortBtn'

const Members = () => {
     const members = [
          { fullNames: "Ngwije Version2", email: "ngwije@gmail.com", dateOn: "Mon, 20 Jan 2020", role: "Member" },
          { fullNames: "Ngwije Version2", email: "ngwije@gmail.com", dateOn: "Mon, 20 Jan 2020", role: "Member" },
          { fullNames: "Ngwije Version2", email: "ngwije@gmail.com", dateOn: "Mon, 20 Jan 2020", role: "Member" },
          { fullNames: "Ngwije Version2", email: "ngwije@gmail.com", dateOn: "Mon, 20 Jan 2020", role: "Accountant" },
          { fullNames: "Ngwije Version2", email: "ngwije@gmail.com", dateOn: "Mon, 20 Jan 2020", role: "Member" },
     ]
     const { setPopup, setPopupDetails, setPopupType, popup, popupType, popupDetails } = useContext(PopopContext)
     return (
          <>
          <div className={`w-full mt-[5rem] px-[1rem] py-[.5rem] flex gap-[1rem]`}>
               <div className={`flex rounded-2xl items-center justify-between gap-[.5rem] border-2 border-black overflow-hidden bg-white px-[.6rem] w-full`}>
                    <input type="text" placeholder='search by name' className={`outline-none border-none indent-[1rem] py-[.5rem] w-full`} />
                    <FaSearch />
               </div>
               <SortBtn />
          </div>
          <h2 className={`text-center text-xl font-bold my-[1rem]`}>Choir Members</h2>
          <p className={`text-white bg-[#301B84] mx-[1rem] rounded-lg py-[.5rem] px-[2rem]`}>Name</p>
          <div className={`mx-[1rem] px-[1rem] mb-[5rem] py-[2rem] rounded-lg shadow-lg shadow-gray-400 bg-gray-200 flex flex-col gap-[1rem]`}>
               {members.map((member, index) => {
                    return (
                         <div className={`bg-white px-[1rem] py-[.7rem] rounded-lg shadow-md shadow-gray-400 border-b-4 border-[#301B84] flex justify-between items-center`} key={index}>
                              <p className={`font-semibold text-lg`}> <span>{index + 1}</span> <span>{member.fullNames}</span> </p>
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
