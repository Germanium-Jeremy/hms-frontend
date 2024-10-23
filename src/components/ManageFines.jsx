import React from 'react'
import { FaSearch, FaSortDown } from 'react-icons/fa'
import SortBtn from './SortBtn'

const ManageFines = () => {
     const fines = [
          { title: "Punishment title", dateOn: "Mon, 20 Jun 2020", details: "This is a punishment", fineStatus: false, amount: "500 Frw", fullnames: "Ngwije version2" },
          { title: "Punishment title", dateOn: "Mon, 20 Jun 2020", details: "This is a punishment", fineStatus: false, amount: "500 Frw", fullnames: "Ngwije version2" },
          { title: "Punishment title", dateOn: "Mon, 20 Jun 2020", details: "This is a punishment", fineStatus: true, amount: "500 Frw", fullnames: "Ngwije version2" },
          { title: "Punishment title", dateOn: "Mon, 20 Jun 2020", details: "This is a punishment", fineStatus: false, amount: "500 Frw", fullnames: "Ngwije version2" },
          { title: "Punishment title", dateOn: "Mon, 20 Jun 2020", details: "This is a punishment", fineStatus: false, amount: "500 Frw", fullnames: "Ngwije version2" },
          { title: "Punishment title", dateOn: "Mon, 20 Jun 2020", details: "This is a punishment", fineStatus: true, amount: "500 Frw", fullnames: "Ngwije version2" },
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
                    <input type="text" placeholder='search by name' className={`outline-none border-none indent-[1rem] py-[.5rem] w-full`} />
                    <FaSearch />
               </div>
               <SortBtn />
          </div>
          <h2 className={`text-center text-xl font-bold my-[1rem]`}>Manage Fines</h2>
          <p className={`text-white bg-[#301B84] mx-[1rem] rounded-lg py-[.5rem] px-[1rem] flex justify-between`}> <i>Name</i> <i>Amount</i> <i>Reason</i> <i>Action</i> </p>
          <div className={`mx-[1rem] px-[1rem] mb-[5rem] py-[2rem] rounded-lg shadow-lg shadow-gray-400 bg-gray-200 flex flex-col gap-[1rem]`}>
               {fines.map((fine, index) => {
                    return (
                         <div className={`px-[.5rem] py-[1rem] rounded-lg shadow-md shadow-gray-400 border-b-4 border-[#301B84] bg-white flex justify-between items-center`}>
                              <p className={`font-semibold`}>{index + 1}.&nbsp;&nbsp;{truncateText(fine.fullnames, 5)}</p>
                              <p className={`font-semibold text-sm`}>{fine.amount}</p>
                              <p className={`font-normal text-md`} title={fine.details}>{truncateText(fine.details, 10)}</p>
                              <p className={`font-semibold text-md ${fine.fineStatus ? "text-green-600" : "text-red-600"}`}>{fine.fineStatus ? 'Paid' : 'Unpaid'}</p>
                         </div>
                    )
               })}
               <button className={`px-[2rem] py-[.7rem] rounded-lg bg-[#301B84] text-white mx-[3rem] mt-[1rem]`}>Add Choir Member</button>
          </div>
          </>
     )
}

export default ManageFines
