import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Signup = () => {
     return (
          <>
               
          <h2 className={`font-bold text-xl text-center`}>Sign up</h2>
          <div className={`flex flex-col gap-[1rem] my-[1rem]`}>
               <article className={`flex flex-col gap-1`}>
                    <label htmlFor="name">Your Name</label>
                    <input className={`rounded-lg border outline-none border-gray-400 text-gray-700 indent-3 py-2 px-1`} type="text" id='name' placeholder='name' />
                    {}
               </article>
               <article className={`flex flex-col gap-1`}>
                    <label htmlFor="email">Your Email</label>
                    <input className={`rounded-lg border outline-none border-gray-400 text-gray-700 indent-3 py-2 px-1`} type="email" id='email' placeholder='email' />
                    {}
               </article>
               <article className={`flex flex-col gap-1`}>
                    <label htmlFor="username">Your Username</label>
                    <input className={`rounded-lg border outline-none border-gray-400 text-gray-700 indent-3 py-2 px-1`} type="text" id='username' placeholder='username' />
                    {}
               </article>
               <article className={`flex flex-col gap-1`}>
                    <label htmlFor="password">Your Password</label>
                    <input className={`rounded-lg border outline-none border-gray-400 text-gray-700 indent-3 py-2 px-1`} type="password" id='password' placeholder='password' />
                    {}
               </article>
          </div>
          <button className={`bg-[#40a] rounded-lg relative w-full text-white py-[.5rem] px-[2rem] mb-5`}>
               <span>Register</span>
               <FaAngleRight className={`right-2 absolute top-1/3`} />
          </button>
          {/* <button disabled className={`bg-gray-700 rounded-lg w-full text-white py-[.5rem] px-[2rem] mb-5 flex gap-[1rem] justify-center items-center`}>
               <span>Wait</span>
               <p className={`rounded-full border-b-2 border-t-2 animate-spin w-[1.5rem] h-[1.5rem]`}></p>
          </button> */}
          </>
     )
}

export default Signup
