import React from 'react'

const UserFinesLittle = () => {
     return (
          <>
          <div className={`rounded-lg shadow-md shadow-gray-400 px-[1rem] py-[.6rem] mt-[2rem] mx-[2rem]`}>
               <h2 className={`text-center font-bold mb-[1rem]`}>Fines</h2>
               <div className={`min-h-[3rem] bg-gray-400 p-[1rem] text-center`}>
                    <p>You don't have any Fines</p>
               </div>
          </div>
          </>
     )
}

export default UserFinesLittle
