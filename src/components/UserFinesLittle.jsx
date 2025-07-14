import React, { useContext, useEffect } from 'react'
import { FinesContext } from './context/FinesContext'

const UserFinesLittle = () => {
     const { userFines, getUserFines, userFinesLoading } = useContext(FinesContext);

     useEffect(() => {
          getUserFines()
     }, [])
     
     return (
          <>
          <div className={`rounded-lg shadow-md shadow-gray-400 px-[1rem] py-[.6rem] mt-[2rem] mx-[2rem]`}>
               <h2 className={`text-center font-bold mb-[1rem]`}>Ibihano</h2>
               {userFinesLoading ? (<div className={`w-full min-h-[3rem] max-h-[4rem] bg-gray-500 animate-pulse`}></div>) : (
                    <div className={`min-h-[3rem] bg-gray-400 p-[1rem] text-center`}>
                         <p>{userFines || "Nta gihano ufite."}</p>
                    </div>
               )}
          </div>
          </>
     )
}

export default UserFinesLittle
