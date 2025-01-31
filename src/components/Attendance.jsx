import React, { useContext, useEffect, useState } from 'react'
import { FaCalendarAlt, FaSearch, FaSortDown } from 'react-icons/fa'
import SortBtn from './SortBtn'
import { UserContext } from './context/UserContext'
import { toast } from 'react-toastify';
import axios from 'axios';
import { SearchBar } from './subComponents/SearchBar';
import { Link } from 'react-router-dom';
const backendApi = import.meta.env.VITE_BACKEND_URL;

const Attendance = () => {
     const { allUsers, getAllMembers, allUsersLoading } = useContext(UserContext)
     const [searchQuery, setSearchQuery] = useState('');
     const [selectedDate, setSelectedDate] = useState("");
     const [attendanceData, setAttendanceData] = useState({});
     const [submitLoading, setSubmitLoading] = useState(false)

     const truncateText = (fullNames, limit) => {
          if (fullNames.length > limit) {
               return fullNames.substring(0, limit) + '...'
          }
          return fullNames
     }

     useEffect(() => {
          getAllMembers();
     }, [])

     const filteredMembers = allUsers.filter(member =>
          member.username.toLowerCase().includes(searchQuery.toLowerCase()) || member.role.toLowerCase().includes(searchQuery.toLowerCase()) || member.email.toLowerCase().includes(searchQuery.toLowerCase()) || member.name.toLowerCase().includes(searchQuery.toLowerCase())
     );

     const handleCheckboxChange = (memberId) => {
          setAttendanceData((prevState) => ({
               ...prevState,
               [memberId]: !prevState[memberId],
          }));
     }

     const handleSubmit = async (e) => {
          e.preventDefault();
          setSubmitLoading(true);
          const presentMembers = Object.keys(attendanceData).filter(memberId => attendanceData[memberId]);
        
          const payload = {
               date: selectedDate,
               presentMembers,
          };

          try {
               const response = await axios.post(`${backendApi}/api/attendance/create`, { date: payload.date, users: payload.presentMembers });
               console.log('Attendance submitted:', response.data);
               toast.success("Attendance submitted successfully")
               setSubmitLoading(false);
          } catch (error) {
               setSubmitLoading(false);
               console.error('Error submitting attendance:', error.response);
               if (error.response.data.error.toLowerCase().includes("duplicate key")) {
                    toast.warn("Already submitted this attendance");
               } else if (error.response.data.message.toLowerCase().includes("invalid date format")) {
                    toast.warn("Check your date and resubmit");
               } else {
                    toast.warn("Unable to submit attendance");
               }
          }
     };

     const handleSearchChange = (e) => {
          setSearchQuery(e.target.value)
     }

     return (
          <>
          <SearchBar item={"for a member"} itemFunction={handleSearchChange} itemValue={searchQuery} />
          <h2 className={`text-center text-xl font-bold my-[1rem]`}>Attendance</h2>
          
          <div className={`flex flex-row justify-between items-center px-[1rem]`}>
               <Link to={'../attend'}>View Today Attendace</Link>
               <Link to={'/'}>View Overall Attendace</Link>
          </div>
               
          <div className={`text-white bg-[#301B84] mx-[1rem] rounded-lg py-[.5rem] px-[2rem] flex justify-between`}>
               <i>Name</i> 
               <span className={`flex gap-[.5rem] items-center`}>
                    <input type="date" className={`text-black px-[.5rem]`} value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />  Date 
               </span>
          </div>
          <form onSubmit={handleSubmit} className={`mx-[1rem] px-[1rem] mb-[5rem] py-[2rem] rounded-lg shadow-lg shadow-gray-400 bg-gray-200 flex flex-col gap-[1rem]`}>
               {allUsersLoading ? (
                    <>
                    <div className={`w-full min-h-[5rem] rounded bg-gray-500 animate-pulse`}></div>
                    <div className={`w-full min-h-[5rem] rounded bg-gray-500 animate-pulse`}></div>
                    <div className={`w-full min-h-[5rem] rounded bg-gray-500 animate-pulse`}></div>
                    <div className={`w-full min-h-[5rem] rounded bg-gray-500 animate-pulse`}></div>
                    </>
               ) : filteredMembers.length <= 0 ? (
                    <div className={`break-words p-[1rem] min-h-[5rem] rounded bg-gray-500`}>There is no Choir member with &quot; { searchQuery } &quot;</div>
               ) : filteredMembers.map((member, index) => {
                    return(
                         <div className={`bg-white p-[1rem] rounded-lg shadow-md shadow-gray-400 flex justify-between border-b-4 border-[#301B84]`} key={member._id}>
                              <label htmlFor={member._id} className={`font-semibold text-lg`}>{index + 1}.&nbsp;&nbsp;{truncateText(member.username, 15)}</label>
                              <input type="checkbox" className={`border-4 border-[#301B84] w-[2rem]`} id={member._id} onChange={() => handleCheckboxChange(member._id)} />
                         </div>
                    )
               })}
               {submitLoading ? (
                    <button className={`px-[2rem] py-[.7rem] rounded-lg bg-gray-500 text-white mx-[3rem] mt-[1rem]`}>Submitting...</button>
                    ) : (
                    <button className={`px-[2rem] py-[.7rem] rounded-lg bg-[#301B84] text-white mx-[3rem] mt-[1rem]`}>Submit Attendance</button>
               )}
          </form>
          </>
     )
}

export default Attendance
