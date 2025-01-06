import React, { useContext, useEffect } from 'react'
import ReactSvg from '../assets/react.svg'
import { UserContext } from './context/UserContext'
import User from '../assets/User.png'
const backendApi = import.meta.env.VITE_BACKEND_URL;

const UserData = () => {
     const { loggedInUser, setUpdateUsername, setEmailU, usernameU, updateEmail, handleEditUser, updateLoading, loggedInUserProfile } = useContext(UserContext)
     const userImage = loggedInUserProfile != "" ? `${backendApi}/${loggedInUserProfile}` : `${backendApi}/${JSON.parse(localStorage.getItem("HMS_USER")).profileImageUrl}`
     console.log("User Image", userImage)
     return (
          <div className={`mt-[6rem] rounded-xl shadow-md shadow-gray-400 px-[1rem] py-[2rem] mx-[2rem] flex flex-col items-center justify-center`}>
               <img src={userImage || User} alt="User" className={`w-[2cm] h-[2cm] rounded-full border-4 p-1 border-gray-600`} />
               <form className={`flex flex-col pt-[1rem] w-full`} onSubmit={handleEditUser}>
                    <div className={`px-4 border-l-4 pt-[1rem] border-[#301B84] w-full`}>
                         <article className={`flex w-full gap-3 items-center`}>
                              <label htmlFor="username" className={`font-semibold text-lg`}>username:</label>
                              <input type="text" id='username' className={`border-none outline-none text-gray-700 py-1`} placeholder='John Doe' value={usernameU} onChange={(e) => setUpdateUsername(e.target.value)} />
                         </article>
                         <article className={`flex w-full gap-3 items-center`}>
                              <label htmlFor="email" className={`font-semibold text-lg`}>email:</label>
                              <input type="email" id='email' className={`border-none outline-none text-gray-700 py-1`} placeholder='jogndoe@email.com' value={updateEmail} onChange={(e) => setEmailU(e.target.value)} />
                         </article>
                         <article className={`flex w-full gap-3 items-center`}>
                              <span className={`font-semibold text-lg`}>from:</span>
                              <div className={`border-none outline-none text-gray-700 py-1`}>{(new Date(loggedInUser.memberSince)).toDateString() || "waiting..."}</div>
                         </article>
                         <article className={`flex w-full gap-3 items-center`}>
                              <span className={`font-semibold text-lg`}>role:</span>
                              {loggedInUser == [] ? (<span className={`border-none outline-none bg-gray-300 h-[.8rem] w-full rounded animate-pulse`}></span>) : (
                                   <div className={`border-none outline-none text-gray-700 py-1`}>{loggedInUser.role || "Waiting..."}</div>
                              )}                              
                         </article>
                    </div>
                    {updateLoading ? (<button disabled className={`px-[2rem] py-[.6rem] bg-gray-600 rounded-lg text-white mt-[2rem]`}>Wait</button>) : (
                         <button className={`px-[2rem] py-[.6rem] bg-[#301B84] rounded-lg text-white mt-[2rem]`}>Update</button>
                    )}
               </form>
          </div>
     )
}

export default UserData
