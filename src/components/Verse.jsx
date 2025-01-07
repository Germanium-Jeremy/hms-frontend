import React from 'react'
import { bibleVersers } from '../data/verses'

const Verse = () => {
     const getCurrentVerse = () => {
          const today = new Date();
          const startOfYear = new Date(today.getFullYear(), 0, 0);
          const diff = today - startOfYear;
          const oneDay = 1000 * 60 * 60 * 24;
          const dayOfYear = Math.floor(diff / oneDay);

          // Use modulo to loop through verses if there are fewer than 365
          const verseIndex = dayOfYear % bibleVersers.length;
          return bibleVersers[verseIndex];
     };

     const currentVerse = getCurrentVerse();

     return (
          <>
          <div className={`px-[1rem] py-[1rem] rounded-lg shadow-md shadow-gray-400 mx-[1rem] mt-[5rem] mb-[5rem]`}>
               <div className="border-l-4 pl-[1rem] flex flex-col gap-3 items-center border-[#301B84]">
                    <p className={`text-gray-600`}>{currentVerse.content}</p>
                    <p className={`font-bold`}>Verse : {currentVerse.verse} </p>
               </div>
          </div>
          </>
     )
}

export default Verse
