import React, { useState } from 'react'
import { FaSortDown } from 'react-icons/fa'

const SortBtn = () => {
     const [showSort, setShowSort] = useState(false)
     return (
     <>
     <div className={`px-[1rem] py-[.6rem] rounded-lg bg-[#301B84] text-white flex gap-3`} onMouseOver={() => setShowSort(true)} onMouseLeave={() => setShowSort(false)}>Tondeka <FaSortDown />
          <div className={`relative`}>
               <div className={`${!showSort && "hidden"} flex flex-col gap-1 bg-[#301B84] rounded-lg shadow-md shadow-gray-400 absolute top-[2rem] p-[1rem] w-full left-[-6rem] min-w-[7rem]`}>
                    <button>Kwitariki</button>
                    <button>Kwizina</button>
               </div>
          </div>
     </div>
     </>
     )
}

export default SortBtn
