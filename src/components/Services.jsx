import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaSortDown } from 'react-icons/fa6'
import SortBtn from './SortBtn'

const Services = () => {
     const fines = [
          { title: "Punishment title", dateOn: "Mon, 20 Jun 2020", details: "This is a punishment", fineStatus: false, amount: "500 Frw", fullnames: "Ngwije version2" },
          { title: "Punishment title", dateOn: "Mon, 20 Jun 2020", details: "This is a punishment", fineStatus: false, amount: "500 Frw", fullnames: "Ngwije version2" },
          { title: "Punishment title", dateOn: "Mon, 20 Jun 2020", details: "This is a punishment", fineStatus: true, amount: "500 Frw", fullnames: "Ngwije version2" },
          { title: "Punishment title", dateOn: "Mon, 20 Jun 2020", details: "This is a punishment", fineStatus: false, amount: "500 Frw", fullnames: "Ngwije version2" },
          { title: "Punishment title", dateOn: "Mon, 20 Jun 2020", details: "This is a punishment", fineStatus: false, amount: "500 Frw", fullnames: "Ngwije version2" },
          { title: "Punishment title", dateOn: "Mon, 20 Jun 2020", details: "This is a punishment", fineStatus: true, amount: "500 Frw", fullnames: "Ngwije version2" },
     ]
     return (
          <>
          <div className={`w-full mt-[5rem] px-[1rem] py-[.5rem] flex gap-[1rem]`}>
               <div className={`flex rounded-2xl items-center justify-between gap-[.5rem] border-2 border-black overflow-hidden bg-white px-[.6rem] w-full`}>
                    <input type="text" placeholder='search by date' className={`outline-none border-none indent-[1rem] py-[.5rem] w-full`} />
                    <FaSearch />
               </div>
               <SortBtn />
          </div>
          <h2 className={`text-center text-xl font-bold my-[1rem]`}>Payment Status</h2>
          <div className={`mx-[1rem] px-[1rem] mb-[5rem] py-[2rem] rounded-lg shadow-lg shadow-gray-400 bg-gray-200 flex flex-col gap-[1rem]`}>
               {fines.map((fine, index) => {
                    return (
                         <div className={`bg-white p-[1rem] flex flex-col gap-[.5rem] rounded-lg shadow-md shadow-gray-400 last-of-type:mb-[1rem] border-l-4 border-[#301B84]`} key={index}>
                              <p className={`font-semibold text-xl`}><span>{index + 1}</span>.&nbsp;&nbsp;<span>{fine.title}</span></p>
                              <div className={`flex justify-between px-[1rem]`}>
                                   <p className={`text-gray-600 text-sm`}>{fine.dateOn}</p>
                                   <p className={`text-sm ${fine.fineStatus ? "text-green-600" : "text-red-600"} font-semibold`}>{fine.fineStatus ? "Paid" : "Unpaid"}</p>
                              </div>
                              <p className={`text-gray-800 text-md`}>{fine.details}</p>
                              <div className={`flex justify-between px-[1rem] items-center`}>
                                   <button className={`px-[1rem] py-[.4rem] rounded-lg text-white bg-[#301B84]`}>Mark as Paid</button>
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
