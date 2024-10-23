import React from 'react'

const Role = () => {
     return (
          <>
          <div className={`w-screen h-screen px-[1rem] text-black flex items-center justify-center`}>
               <div className={`rounded-lg shadow-2xl shadow-gray-400 px-[1rem] py-[3rem] w-full`}>
                    <h2 className={`font-bold text-xl text-center`}>Select Your Role</h2>
                    <section className={`flex flex-col gap-[1rem] pt-[3rem]`}>
                         <button className={`bg-[#301B84] rounded-lg py-[.7rem] text-white font-bold px-[2rem]]`}>Members</button>
                         <button className={`bg-[#301B84] rounded-lg py-[.7rem] text-white font-bold px-[2rem]]`}>Disciplinary</button>
                         <button className={`bg-[#301B84] rounded-lg py-[.7rem] text-white font-bold px-[2rem]]`}>President</button>
                         <button className={`bg-[#301B84] rounded-lg py-[.7rem] text-white font-bold px-[2rem]]`}>Accountant</button>
                         <button className={`bg-[#301B84] rounded-lg py-[.7rem] text-white font-bold px-[2rem]]`}>Secretary</button>
                    </section>
               </div>
          </div>
          </>
     )
}

export default Role
