import React, { useContext, useEffect, useState } from 'react'
import { FaSearch, FaSortDown } from 'react-icons/fa'
import SortBtn from './SortBtn'
import { UserContext } from './context/UserContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const backendApi = import.meta.env.VITE_BACKEND_URL;

const Punish = () => {
     const { allUsers, getAllMembers, allUsersLoading } = useContext(UserContext)
     const [searchQuery, setSearchQuery] = useState('');
     const [selectedFines, setSelectedFines] = useState([]);
     const [loading, setLoading] = useState(false)
     const [isDisabled, setIsDisabled] = useState(false)

     const fines = [
          { id: 12, title: "Late", amount: 100 },
          { id: 13, title: "Noise", amount: 200 },
          { id: 14, title: "Absent", amount: 500 },
          { id: 15, title: "Betrayed", amount: 5000 },
     ]

     useEffect(() => {
          getAllMembers();

          const lastClicked = localStorage.getItem("FinesButtonClicked")
          if (lastClicked) {
               const clickedTime = new Date(lastClicked)
               const now = new Date()
               const oneWeekLater = new Date(clickedTime)
               oneWeekLater.setDate(clickedTime.getDate() + 7)

               if (now >= oneWeekLater) {
                    setIsDisabled(false)
                    localStorage.removeItem("FinesButtonClicked");
               } else {
                    setIsDisabled(true)
               }
          }
     }, [])

     const truncateText = (fullNames, limit) => {
          if (fullNames.length > limit) {
               return fullNames.substring(0, limit) + '...'
          }
          return fullNames
     }

     const filteredMembers = allUsers.filter(member =>
          member.username.toLowerCase().includes(searchQuery.toLowerCase()) || member.role.toLowerCase().includes(searchQuery.toLowerCase()) || member.email.toLowerCase().includes(searchQuery.toLowerCase()) || member.name.toLowerCase().includes(searchQuery.toLowerCase())
     );

     const handleFineChange = (e, index) => {
          const selectedFine = e.target.value;
          const fineData = fines.find((fine) => fine.title === selectedFine);

          setSelectedFines((prevFines) => {
               const newFines = [...prevFines];
               newFines[index] = fineData ? fineData.amount : 0; // Store the amount
               return newFines;
          });
     };

     const handleSubmitFines = async (event) => {
          event.preventDefault()
          setLoading(true);

          if (isDisabled) {
               toast.warn("You can only submit fines once a week.")
               setLoading(false)
               return
          }

          const finesToSubmit = filteredMembers.map((member, index) => {
               const selectedFineAmount = selectedFines[index];
               const selectedFineTitle = fines.find(fine => fine.amount === selectedFineAmount)?.title || '';

               return {
                    userId: member._id,
                    reason: selectedFineTitle,
                    amount: selectedFineAmount,
               };
          }).filter(fine => fine.amount > 0);
          
          axios.post(`${backendApi}/api/fines`, finesToSubmit).then(response => {
               toast.success("Submitted successfully");
               setLoading(false)
               setIsDisabled(true)
               localStorage.setItem("FinesButtonClicked", new Date().toISOString());
          }).catch(error => {
               toast.warn(error.response.data.message ? error.response.data.message : "There is an error sibmitting fines")
               setLoading(false)
               console.error("Errors ", error.response.data.message)
          })
     }

     return (
          <>
          <div className={`w-full mt-[5rem] px-[1rem] py-[.5rem] flex gap-[1rem]`}>
               <div className={`flex rounded-2xl items-center justify-between gap-[.5rem] border-2 border-black overflow-hidden bg-white px-[.6rem] w-full`}>
                    <input type="text" placeholder='search by date' className={`outline-none border-none indent-[1rem] py-[.5rem] w-full`} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    <FaSearch />
               </div>
               <SortBtn />
          </div>
          <h2 className={`text-center text-xl font-bold my-[1rem]`}>Add Fines</h2>
          <p className={`text-white bg-[#301B84] mx-[1rem] rounded-lg py-[.5rem] px-[2rem] flex justify-between`}> <i>Name</i> <i>Reason</i> <i>Amount</i> </p>
          <form className={`mx-[1rem] px-[1rem] mb-[5rem] py-[2rem] rounded-lg shadow-lg shadow-gray-400 bg-gray-200 flex flex-col gap-[1rem]`} onSubmit={handleSubmitFines}>
               {allUsersLoading ? (<>
                         <div className={`p-[1rem] rounded-lg shadow-md shadow-gray-400 bg-gray-400 flex`}></div>
                         <div className={`p-[1rem] rounded-lg shadow-md shadow-gray-400 bg-gray-400 flex`}></div>
                         <div className={`p-[1rem] rounded-lg shadow-md shadow-gray-400 bg-gray-400 flex`}></div>
                         <div className={`p-[1rem] rounded-lg shadow-md shadow-gray-400 bg-gray-400 flex`}></div>
                         <div className={`p-[1rem] rounded-lg shadow-md shadow-gray-400 bg-gray-400 flex`}></div>
                    </>
               ) : allUsers.length <= 0 ? (
                    <div className={`p-[1rem] rounded-lg shadow-md shadow-gray-400 bg-white flex justify-between border-b-4 border-[#301B84]`}>
                         There is not user
                    </div>
               ) : filteredMembers.length <= 0 ? (
                    <div className={`p-[1rem] rounded-lg shadow-md shadow-gray-400 bg-white flex justify-between border-b-4 border-[#301B84] flex-wrap`}>
                         There are not user with: { searchQuery }
                    </div>
               ) : filteredMembers.map((member, index) => {
                    let amount = selectedFines[index] || 0;
                    return (
                         <div className={`p-[1rem] rounded-lg shadow-md shadow-gray-400 bg-white flex justify-between border-b-4 border-[#301B84]`}>
                              <p className={`font-semibold text-lg`}> <span>{index + 1}.</span> <span>{truncateText(member.username, 7)}</span></p>
                              <input type="hidden" value={member._id} />
                              <select className={`px-[.8rem] py-[.2rem] text-white bg-[#301B84] rounded-md`} onChange={(e) => handleFineChange(e, index)}>
                                   <option value="">Select Fine</option>
                                   {fines.map((fine) => (
                                        <option key={fine.id} value={fine.title}>{fine.title}</option>)
                                   )}
                              </select>
                              <p className={`font-semibold text-lg`}>{amount}</p>
                         </div>
                    )
               })}
               {loading ? 
                    <button type='disabled' disabled className={`px-[2rem] py-[.7rem] rounded-lg bg-gray-500 text-white mx-[3rem]`}>Submitting...</button> : 
                    <button className={`px-[2rem] py-[.7rem] rounded-lg bg-[#301B84] text-white mx-[3rem]`}>Submit Changes</button>
               }
          </form>
          </>
     )
}

export default Punish
