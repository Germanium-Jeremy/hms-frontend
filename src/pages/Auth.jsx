import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Auth = () => {
     // const [login, setLogin] = useState(true)
     // const navigate = useNavigate()
     // const user = JSON.parse(localStorage.getItem("HMS_USER"))
     // if (user || user != undefined) navigate('/user')
     return (
          <>
          {/* <div className={`w-screen h-screen px-[1rem] text-black flex items-center justify-center`}> */}
               {/* <form className={`rounded-lg shadow-2xl shadow-gray-400 px-[1rem] py-[2rem] w-full`}> */}
                    <Outlet />
                    {/* {!login ? <p>Have an account? <Link className={`text-[#301B84] font-bold`} to={''} onClick={() => setLogin(true)}>Log in</Link> </p> : */}
                    {/* <p>Don't have account? <Link className={`text-[#301B84] font-bold`} to={'signup'} onClick={() => setLogin(false)}>Sign up</Link> </p>} */}
               {/* </form> */}
          {/* </div> */}
          </>
     )
}

export default Auth
