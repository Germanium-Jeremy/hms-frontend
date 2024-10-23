import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'

const Pin = () => {
     return (
          <>
          <div className={`w-screen h-screen px-[1rem] text-black flex items-center justify-center`}>
               <form className={`rounded-lg shadow-2xl shadow-gray-400 px-[1rem] py-[3rem] w-full`}>
                    <h2 className={`font-bold text-xl text-center mb-4`}>Enter Pin</h2>
                    <article className={`flex flex-col gap-1 my-[2rem]`}>
                         <label htmlFor="pin">Your pin</label>
                         <input type="text" className={`rounded-lg border outline-none border-gray-400 text-gray-700 indent-3 py-2 px-1`} placeholder='****' />
                    </article>
                    <button className={`bg-[#301B84] rounded-lg relative w-full text-white py-[.5rem] px-[2rem] mb-5`}>
                         <span>Register</span>
                         <FaAngleRight className={`right-2 absolute top-1/3`} />
                    </button>
                    {/* <button disabled className={`bg-gray-700 rounded-lg w-full text-white py-[.5rem] px-[2rem] mb-5 flex gap-[1rem] justify-center items-center`}>
                         <span>Wait</span>
                         <p className={`rounded-full border-b-2 border-t-2 animate-spin w-[1.5rem] h-[1.5rem]`}></p>
                    </button> */}
               </form>
          </div>
          </>
     )
}

export default Pin
