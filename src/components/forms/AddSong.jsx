import axios from 'axios';
import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
const backendApi = import.meta.env.VITE_BACKEND_URL;

const AddSong = ({ setSongForm }) => {
     const [refs, setRefs] = useState(['']);
     const [colus, setColus] = useState(['']);
     const [songTitle, setSongTitle] = useState('')
     const [audioUrl, setAudioUrl] = useState('')
     const [audioFile, setAudioFile] = useState(null)
     const fileInputRef = useRef(null)
     const [loadingSubmit, setLoadingSubmit] = useState(false)

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

     const handleFileChange = (event) => {
          const file = event.target.files[0]
          if (file) setAudioFile(file)
     }
     
     const handleButtonCLick = () => {
          fileInputRef.current.onClick()
     }

     const handleColusChange = (index, value) => {
          const newColus = [...colus];
          newColus[index] = value;
          setColus(newColus);
     };

     const generateRandomSixDigitNumber = () => {
          return Math.floor(100000 + Math.random() * 900000);
     };

     const handleAddSong = async (event) => {
          event.preventDefault()
          setLoadingSubmit(true);

          if (!audioFile) {
               toast.warn("Hitamo audio yawe")
               return
          }

         const songData = {
               songId: generateRandomSixDigitNumber(),
               songTitle,
               songUrlAudio: audioFile,
               songLyrics: {
                    chorus: colus,
                    ref: refs
               }
          };

          axios.post(`${backendApi}/api/songs`, songData).then(response => {
               setLoadingSubmit(false);
               toast.success("Byakunze")
               console.log("Song added successfully", response.data)
          }).catch(error => {
               setLoadingSubmit(false);
               toast.warn("Habaye akabazo")
               console.error("Unable to add song: ", error.response.data)
          })
     }

     return (
          <>
          <div className={`fixed top-0 bottom-0 left-0 right-0 z-[1] bg-gray-600 opacity-50`} onClick={() => setSongForm(false)}></div>
          <form className={`rounded-lg bg-white px-[1rem] py-[2rem] fixed top-[6rem] bottom-[6rem] left-[1rem] right-[1rem] z-[2] overflow-hidden overflow-y-auto`} onSubmit={handleAddSong}>
               <h2 className={`text-xl font-semibold text-center`}>Ongeramo indirimbo</h2>
               <div className={`flex flex-col gap-2 my-[2rem]`}>
                    <div className={`flex flex-col gap-1`}>
                         <label htmlFor="title" className={`font-semibold`}>Andika izina ry'indirimbo</label>
                         <input type="text" className={`rounded-lg outline-none border border-[#301B84] py-1 px-[1rem]`} placeholder='Umusozi muremure' onChange={(e) => setSongTitle(e.target.value)} value={songTitle} />
                    </div>
                    <div className={`flex flex-col gap-1`}>
                         <label htmlFor="audio" className={`font-semibold`}>Shyiramo audio</label>
                         <input type="file" ref={fileInputRef} accept='audio/*' className={`rounded-lg outline-none border border-[#301B84] py-1 px-[1rem]`} placeholder='https://randomsite.com/song.mp3' onChange={handleFileChange} />
                         <button type='button' className={`px-[1rem]`} onClick={handleButtonCLick}>{ audioFile ? audioFile.name : "Shyiramo audio" }</button>
                    </div>
                    <div className={`flex flex-col gap-1`}>
                         <label htmlFor="lyrics" className={`font-semibold`}>Andika amagambo</label>

                         <label htmlFor="refs" className={`font-medium indent-5`}>Andika inyikirizo</label>
                         {refs.map((ref, index) => (
                              <div key={index} className={`flex flex-col gap-1`}>
                                   <textarea className={`rounded-lg outline-none border border-[#301B84] py-1 px-[1rem] min-h-[4rem]`} placeholder='Write the ref'
                                   value={ref} onChange={(e) => handleRefChange(index, e.target.value)} />
                              </div>
                         ))}
                         <button type='button' onClick={addRefField} className={`text-[#301B84]`}>+ Ongeramo inyikirizo</button>

                         <label htmlFor="colus" className={`font-medium indent-5`}>Andika ibika</label>
                         {colus.map((colusItem, index) => (
                         <div key={index} className={`flex flex-col gap-1`}>
                              <textarea className={`rounded-lg outline-none border border-[#301B84] py-1 px-[1rem] min-h-[4rem]`} placeholder='Write the colus'
                              value={colusItem} onChange={(e) => handleColusChange(index, e.target.value)} />
                         </div>
                         ))}
                         <button type='button' onClick={addColusField} className={`text-[#301B84]`}>+ Ongeramo igika</button>
                    </div>
               </div>
               {loadingSubmit ? <button type='submit' className={`px-[2rem] py-[.7rem] w-full rounded-lg bg-gray-500 text-white`}>Tegereza...</button> :
               <button type='submit' className={`px-[2rem] py-[.7rem] w-full rounded-lg bg-[#301B84] text-white`}>Ongeramo indirimbo</button>
               }
          </form>
          </>
     );
};

export default AddSong;
