import React from 'react'
import { FaSearch, FaSortDown } from 'react-icons/fa'
import SortBtn from './SortBtn'

const Punish = () => {
     const members = [
          { fullNames: "Ngwije Version2", dateOn: "Mon, 20 Jan 2020", role: "Member" },
          { fullNames: "Ngwije Version2", dateOn: "Mon, 20 Jan 2020", role: "Member" },
          { fullNames: "Ngwije Version2", dateOn: "Mon, 20 Jan 2020", role: "Member" },
          { fullNames: "Ngwije Version2", dateOn: "Mon, 20 Jan 2020", role: "Member" },
          { fullNames: "Ngwije Version2", dateOn: "Mon, 20 Jan 2020", role: "Member" },
     ]

     const truncateText = (fullNames, limit) => {
          if (fullNames.length > limit) {
               return fullNames.substring(0, limit) + '...'
          }
          return fullNames
     }

     return (
          <>
          <div className={`w-full mt-[5rem] px-[1rem] py-[.5rem] flex gap-[1rem]`}>
               <div className={`flex rounded-2xl items-center justify-between gap-[.5rem] border-2 border-black overflow-hidden bg-white px-[.6rem] w-full`}>
                    <input type="text" placeholder='search by date' className={`outline-none border-none indent-[1rem] py-[.5rem] w-full`} />
                    <FaSearch />
               </div>
               <SortBtn />
          </div>
          <h2 className={`text-center text-xl font-bold my-[1rem]`}>Add Fines</h2>
          <p className={`text-white bg-[#301B84] mx-[1rem] rounded-lg py-[.5rem] px-[2rem] flex justify-between`}> <i>Name</i> <i>Reason</i> <i>Amount</i> </p>
          <div className={`mx-[1rem] px-[1rem] mb-[5rem] py-[2rem] rounded-lg shadow-lg shadow-gray-400 bg-gray-200 flex flex-col gap-[1rem]`}>
               {members.map((member, index) => {
                    return (
                         <div className={`p-[1rem] rounded-lg shadow-md shadow-gray-400 bg-white flex justify-between border-b-4 border-[#301B84]`}>
                              <p className={`font-semibold text-lg`}> <span>{index + 1}.</span> <span>{truncateText(member.fullNames, 7)}</span></p>
                              <button className={`px-[.8rem] py-[.2rem] text-white bg-[#301B84] rounded-md`}><FaSortDown /></button>
                              <p className={`font-semibold text-lg`}>{"500Frw"}</p>
                         </div>
                    )
               })}
               <button className={`px-[2rem] py-[.7rem] rounded-lg bg-[#301B84] text-white mx-[3rem]`}>Add Choir Member</button>
          </div>
          </>
     )
}

export default Punish
