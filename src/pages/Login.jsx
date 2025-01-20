import React, { useContext } from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import { UserContext } from '../components/context/UserContext'
import { Link } from 'react-router-dom'

const Login = () => {
     const { loginUsername, loginPassword, handleLogin, setLoginUsername, setLoginPassword, loading } = useContext(UserContext)
     return (
          <div className={`w-screen h-screen px-[1rem] text-black flex items-center justify-center`}>
               <form className={`rounded-lg shadow-2xl shadow-gray-400 px-[1rem] py-[2rem] w-full`} onSubmit={handleLogin}>
                    <h2 className={`font-bold text-xl text-center`}>Log in</h2>
                    <div className={`flex flex-col gap-[1rem] my-[3rem]`}>
                         <article className={`flex flex-col gap-1`}>
                              <label htmlFor="username">Your Username</label>
                              <input className={`rounded-lg border outline-none border-gray-400 text-gray-700 indent-3 py-2 px-1`} type="text" value={loginUsername} 
                              id='username' placeholder='username' onChange={(e) => setLoginUsername(e.target.value)} />
                         </article>
                         <article className={`flex flex-col gap-1`}>
                              <label htmlFor="password">Your Password</label>
                              <input className={`rounded-lg border outline-none border-gray-400 text-gray-700 indent-3 py-2 px-1`} type="password" id='password' 
                              value={loginPassword} placeholder='password' onChange={(e) => setLoginPassword(e.target.value)} />
                         </article>
                    </div>
                    {loading ? (
                         <button disabled className={`bg-gray-700 rounded-lg w-full text-white py-[.5rem] px-[2rem] mb-5 flex gap-[1rem] justify-center items-center`}>
                              <span>Wait</span>
                              <p className={`rounded-full border-b-2 border-t-2 animate-spin w-[1.5rem] h-[1.5rem]`}></p>
                         </button>
                    ) : (
                         <button className={`bg-[#301B84] rounded-lg relative w-full text-white py-[.5rem] px-[2rem] mb-5`}>
                              <span>Login</span>
                              <FaAngleRight className={`right-2 absolute top-1/3`} />
                         </button>
                    )}
                    <p>Don't have account? <Link className={`text-[#301B84] font-bold`} to={'/signup'}>Sign up</Link> </p>
               </form>
          </div>
     )
}

export default Login
