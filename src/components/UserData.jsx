import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './context/UserContext'
import User from '../assets/User.png'
const backendApi = import.meta.env.VITE_BACKEND_URL;
import { makeDateReadable } from '../data/neededFunctions';

const UserData = () => {
     const { setUpdateUsername, setEmailU, usernameU, updateEmail, handleEditUser, updateLoading } = useContext(UserContext)

     const [loggedInAccount, setLogedInAccount] = useState([])
     const [viewProfile, setViewProfile] = useState(false)
     const user = JSON.parse(localStorage.getItem("HMS_USER"));

     console.log(user.profileImageUrl);

     useEffect(() => {
          if (user || user != undefined) {
               setLogedInAccount(user)
               setEmailU(user.email)
               setUpdateUsername(user.username)
          } else {
               setLogedInAccount([])
          }
     }, [])

     // const viewProfile = () => {}
     
     return (
          <div className={`mt-[6rem] rounded-xl shadow-md shadow-gray-400 px-[1rem] py-[2rem] mx-[2rem] flex flex-col items-center justify-center`}>
               <img src={`${backendApi}/${user.profileImageUrl}` || User} alt={user.name} className={`w-[2cm] h-[2cm] rounded-full border-4 p-1 border-gray-600`} onClick={() => setViewProfile(true)} />
               {viewProfile && <div className={`z-[5] bg-[#3338] fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center`} onClick={() => setViewProfile(false)} >
                    <img src={`${backendApi}/${user.profileImageUrl}` || User} alt={user.name} className={`max-w-[80%] w-full max-h-[70%] h-full rounded-lg`} />
               </div>}
               
               <form className={`flex flex-col pt-[1rem] w-full`} onSubmit={handleEditUser}>
                    <div className={`px-4 border-l-4 pt-[1rem] border-[#301B84] w-full`}>
                         <article className={`flex w-full gap-3 items-center`}>
                              <label htmlFor="username" className={`font-semibold text-lg`}>Izina:&nbsp;</label>
                              <input type="text" id='username' className={`border-none outline-none text-gray-700 py-1`} placeholder='John Doe' value={usernameU} onChange={(e) => setUpdateUsername(e.target.value)} />
                         </article>
                         <article className={`flex w-full gap-3 items-center`}>
                              <label htmlFor="email" className={`font-semibold text-lg`}>Imeli:&nbsp;</label>
                              <input type="email" id='email' className={`border-none outline-none text-gray-700 py-1`} placeholder='jogndoe@email.com' value={updateEmail} onChange={(e) => setEmailU(e.target.value)} />
                         </article>
                         <article className={`flex w-full gap-3 items-center`}>
                              <span className={`font-semibold text-lg`}>Kuva:</span>
                              <div className={`border-none outline-none text-gray-700 py-1`}>
                                   {loggedInAccount.memberSince ? makeDateReadable(loggedInAccount.memberSince) : "Tegereza..."}
                              </div>
                         </article>
                         <article className={`flex w-full gap-3 items-center`}>
                              <span className={`font-semibold text-lg`}>Uruhare:</span>
                              {loggedInAccount == [] ? (<span className={`border-none outline-none bg-gray-300 h-[.8rem] w-full rounded animate-pulse`}></span>) : (
                                   <div className={`border-none outline-none text-gray-700 py-1`}>{loggedInAccount.role || "Tegereza..."}</div>
                              )}                              
                         </article>
                    </div>
                    {updateLoading ? (<button disabled className={`px-[2rem] py-[.6rem] bg-gray-600 rounded-lg text-white mt-[2rem]`}>Tegereza</button>) : (
                         <button className={`px-[2rem] py-[.6rem] bg-[#301B84] rounded-lg text-white mt-[2rem]`}>Hindura</button>
                    )}
               </form>
          </div>
     )
}

export default UserData
