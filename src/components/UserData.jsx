import React from 'react'
import ReactSvg from '../assets/react.svg'

const UserData = () => {
     return (
          <div className={`mt-[6rem] rounded-xl shadow-md shadow-gray-400 px-[1rem] py-[2rem] mx-[2rem] flex flex-col items-center justify-center`}>
               <img src={ReactSvg} alt="User" className={`w-[2cm] h-[2cm] rounded-full border-4 p-1 border-gray-600`} />
               <form className={`flex flex-col pt-[1rem] w-full`}>
                    <div className={`px-4 border-l-4 pt-[1rem] border-[#301B84] w-full`}>
                         <article className={`flex w-full gap-3`}>
                              <label htmlFor="username" className={`font-semibold text-lg`}>username:</label>
                              <input type="text" id='username' className={`border-none outline-none text-gray-700 py-1`} placeholder='Nelson' />
                         </article>
                         <article className={`flex w-full gap-3`}>
                              <label htmlFor="email" className={`font-semibold text-lg`}>email:</label>
                              <input type="email" id='email' className={`border-none outline-none text-gray-700 py-1`} placeholder='Nelson@ngwije.sally' />
                         </article>
                         <article className={`flex w-full gap-3`}>
                              <label htmlFor="from" className={`font-semibold text-lg`}>from:</label>
                              <input type="text" id='from' className={`border-none outline-none text-gray-700 py-1`} readOnly placeholder='Wed, 0 Zero 2000' />
                         </article>
                         <article className={`flex w-full gap-3`}>
                              <label htmlFor="role" className={`font-semibold text-lg`}>role:</label>
                              <input type="text" id='role' className={`border-none outline-none text-gray-700 py-1`} readOnly placeholder='Member' />
                         </article>
                    </div>
                    <button className={`px-[2rem] py-[.6rem] bg-[#301B84] rounded-lg text-white mt-[2rem]`}>Update</button>
               </form>
          </div>
     )
}

export default UserData
