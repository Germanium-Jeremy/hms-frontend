import React, { useContext, useState } from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { UserContext } from '../components/context/UserContext'

const Signup = () => {
     const [fillingData, setFillingData] = useState(true)
     const { setName, setEmailSign, setUsername, setPasswordSign, setRole, setProfile, name, emailSign, username, passwordSign, role, profileImageUrl, handleRegister, loading } = useContext(UserContext)
     return (
          <form className={`w-screen h-screen px-[1rem] text-black flex items-center justify-center relative`} onSubmit={handleRegister}>
               <div className={`rounded-lg shadow-2xl shadow-gray-400 px-[1rem] py-[2rem] absolute  ${fillingData ? "left-[1rem] right-[1rem]" : "right-[100%] left-[-100%]"}`}>   
                    <h2 className={`font-bold text-xl text-center`}>Sign up</h2>
                    <div className={`flex flex-col gap-[1rem] my-[1rem]`}>
                         <article className={`flex flex-col gap-1`}>
                              <label htmlFor="name">Your Name</label>
                              <input className={`rounded-lg border outline-none border-gray-400 text-gray-700 indent-3 py-2 px-1`} type="text" id='name' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                              {}
                         </article>
                         <article className={`flex flex-col gap-1`}>
                              <label htmlFor="email">Your Email</label>
                              <input className={`rounded-lg border outline-none border-gray-400 text-gray-700 indent-3 py-2 px-1`} type="email" id='email' placeholder='email' value={emailSign} onChange={(e) => setEmailSign(e.target.value)} />
                              {}
                         </article>
                         <article className={`flex flex-col gap-1`}>
                              <label htmlFor="username">Your Username</label>
                              <input className={`rounded-lg border outline-none border-gray-400 text-gray-700 indent-3 py-2 px-1`} type="text" id='username' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                              {}
                         </article>
                         <article className={`flex flex-col gap-1`}>
                              <label htmlFor="password">Your Password</label>
                              <input className={`rounded-lg border outline-none border-gray-400 text-gray-700 indent-3 py-2 px-1`} type="password" id='password' placeholder='password' value={passwordSign} onChange={(e) => setPasswordSign(e.target.value)} />
                              {}
                         </article>
                         <article className={`flex flex-col gap-1`}>
                              <label htmlFor="profile">Select Your Profile</label>
                              <input className={`rounded-lg border outline-none border-gray-400 text-gray-700 indent-3 py-2 px-1`} type="file" id='profile' onChange={(e) => setProfile(e.target.files[0])} />
                              {}
                         </article>
                    </div>
                    <button type='button' className={`bg-[#40a] rounded-lg relative w-full text-white py-[.5rem] px-[2rem] mb-5`} onClick={() => setFillingData(false)}>
                         <span>Continue</span>
                         <FaAngleRight className={`right-2 absolute top-1/3`} />
                    </button>
               </div>

               <div className={`absolute ${!fillingData ? "left-[1rem] right-[1rem]" : "right-[100%] left-[-100%]"}`}>
                    <h2 className={`font-bold text-xl text-center`}>Select Your Role</h2>
                    <section className={`flex flex-col gap-[1rem] py-[3rem]`}>
                         <button type='button' value={"Choir Member"} className={`bg-[#301B84] rounded-lg py-[.7rem] text-white font-bold px-[2rem]]`} onClick={() => setRole("Choir Member")}>Member</button>
                         <button type='button' value={"Disciplinary"} className={`bg-[#301B84] rounded-lg py-[.7rem] text-white font-bold px-[2rem]]`} onClick={() => setRole("Disciplinary")}>Disciplinary</button>
                         <button type='button' value={"President"} className={`bg-[#301B84] rounded-lg py-[.7rem] text-white font-bold px-[2rem]]`} onClick={() => setRole("President")}>President</button>
                         <button type='button' value={"Accountant"} className={`bg-[#301B84] rounded-lg py-[.7rem] text-white font-bold px-[2rem]]`} onClick={() => setRole("Accountant")}>Accountant</button>
                         <button type='button' value={"Secretary"} className={`bg-[#301B84] rounded-lg py-[.7rem] text-white font-bold px-[2rem]]`} onClick={() => setRole("Secretary")}>Secretary</button>
                    </section>

                    {loading ? (
                         <button disabled className={`bg-gray-700 rounded-lg w-full text-white py-[.5rem] px-[2rem] mb-5 flex gap-[1rem] justify-center items-center`}>
                              <span>Wait</span>
                              <p className={`rounded-full border-b-2 border-t-2 animate-spin w-[1.5rem] h-[1.5rem]`}></p>
                         </button>
                    ) : (
                         <button type='submit' className={`bg-[#40a] rounded-lg relative w-full text-white py-[.5rem] px-[2rem] mb-5`}>
                              <span>Register</span>
                              <FaAngleRight className={`right-2 absolute top-1/3`} />
                         </button>
                    )}               
               </div>
          </form>
     )
}

export default Signup
