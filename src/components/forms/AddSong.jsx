import React, { useState } from 'react';

const AddSong = ({ setSongForm }) => {
     const [refs, setRefs] = useState(['']);
     const [colus, setColus] = useState(['']);

     const addRefField = () => {
          setRefs([...refs, '']);
     };

     const addColusField = () => {
          setColus([...colus, '']);
     };

     const handleRefChange = (index, value) => {
          const newRefs = [...refs];
          newRefs[index] = value;
          setRefs(newRefs);
     };

     const handleColusChange = (index, value) => {
          const newColus = [...colus];
          newColus[index] = value;
          setColus(newColus);
     };

     return (
          <>
          <div className={`fixed top-0 bottom-0 left-0 right-0 z-[1] bg-gray-600 opacity-50`} onClick={() => setSongForm(false)}></div>
          <form className={`rounded-lg bg-white px-[1rem] py-[2rem] fixed top-[6rem] bottom-[6rem] left-[1rem] right-[1rem] z-[2] overflow-hidden overflow-y-auto`}>
               <h2 className={`text-xl font-semibold text-center`}>Add Song</h2>
               <div className={`flex flex-col gap-2 my-[2rem]`}>
                    <div className={`flex flex-col gap-1`}>
                         <label htmlFor="title" className={`font-semibold`}>Enter the song title</label>
                         <input type="text" className={`rounded-lg outline-none border border-[#301B84] py-1 px-[1rem]`} placeholder='Umusozi muremure' />
                    </div>
                    <div className={`flex flex-col gap-1`}>
                         <label htmlFor="audio" className={`font-semibold`}>Select the audio</label>
                         <button type='button' className={`rounded-lg outline-none border border-[#301B84] py-1 px-[1rem]`}>Upload the audio</button>
                    </div>
                    <div className={`flex flex-col gap-1`}>
                         <label htmlFor="lyrics" className={`font-semibold`}>Type the lyrics</label>

                         <label htmlFor="refs" className={`font-medium indent-5`}>Type the Ref</label>
                         {refs.map((ref, index) => (
                              <div key={index} className={`flex flex-col gap-1`}>
                                   <textarea
                                   className={`rounded-lg outline-none border border-[#301B84] py-1 px-[1rem] min-h-[4rem]`}
                                   placeholder='Write the ref'
                                   value={ref}
                                   onChange={(e) => handleRefChange(index, e.target.value)}
                                   />
                              </div>
                         ))}
                         <button type='button' onClick={addRefField} className={`text-[#301B84]`}>+ Add Ref</button>

                         <label htmlFor="colus" className={`font-medium indent-5`}>Type the colus</label>
                         {colus.map((colusItem, index) => (
                         <div key={index} className={`flex flex-col gap-1`}>
                              <textarea
                              className={`rounded-lg outline-none border border-[#301B84] py-1 px-[1rem] min-h-[4rem]`}
                              placeholder='Write the colus'
                              value={colusItem}
                              onChange={(e) => handleColusChange(index, e.target.value)}
                              />
                         </div>
                         ))}
                         <button type='button' onClick={addColusField} className={`text-[#301B84]`}>+ Add Colus</button>
                    </div>
               </div>
               <button type='submit' className={`px-[2rem] py-[.7rem] w-full rounded-lg bg-[#301B84] text-white`}>Add Song</button>
          </form>
          </>
     );
};

export default AddSong;
