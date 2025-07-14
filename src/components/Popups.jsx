const Popups = ({ setPopup, popupType, popupDetails }) => {
     // console.log("Lyrics songs", popupDetails.song.lyrics);
     return (
          <>
          <div className={`fixed top-0 bottom-0 left-0 right-0 z-[1] bg-gray-600 opacity-50`} onClick={() => setPopup(false)}></div>
               {popupType == 1 ? (
                    <div className={`fixed right-[1rem] left-[1rem] top-1/3 bg-white rounded-lg z-[2] p-[2rem]`}>
                         <div className={`flex flex-col gap-[.5rem]`}>
                              <p className={`text-lg`}> <span className={`font-semibold`}>Imeli:</span> <span className={`text-gray-600`}>{popupDetails.member.email}</span></p>
                              <p className={`text-lg`}> <span className={`font-semibold`}>Inshingano:</span> <span className={`text-gray-600`}>{popupDetails.member.role}</span></p>
                         </div>
                         <div className={`flex justify-center pt-[1rem] items-center`}>
                              <button className={`px-[2rem] py-[.5rem] rounded-lg bg-[#301B84] text-white`} onClick={() => setPopup(false)}>Wasoje</button>
                              {/* <button className={`px-[2rem] py-[.5rem] rounded-lg bg-[#301B84] text-white`} onClick={() => setPopup(false)}>Done</button> */}
                         </div>
                    </div>
               ) : popupType == 2 ? (
                    <div className={`fixed right-[1rem] left-[1rem] top-[5rem] bottom-[5rem] overflow-hidden bg-white rounded-lg z-[2] p-[2rem] overflow-y-auto`}>
                         <h2 className={`text-lg text-center font-semibold`}>{popupDetails.song.title}</h2>
                         {popupDetails.song.lyrics.chorus.map((chorus1, index) => (<p className={`py-[.25rem]`} key={index}> {chorus1} </p>)) }
                         {popupDetails.song.lyrics.ref.map((ref, index) => (<p className={`py-[.25rem]`} key={index}> {ref} </p>)) }
               </div>
          ) : popupType == 3 ? (
               <div className={`fixed right-[1rem] left-[1rem] top-1/3 bg-white rounded-lg z-[2] p-[2rem]`}>
                    <h2 className={`text-lg font-semibold text-center`}>{popupDetails.announcement.title}</h2>
                    <p className={`text-sm`}>{popupDetails.announcement.desc}</p>
                    <p className={`text-sm`}>{popupDetails.announcement.timeAt}</p>
                    <p className={`text-sm`}>{popupDetails.announcement.place}</p>
                    <p className={`text-sm`}>{popupDetails.announcement.dateOn}</p>
               </div>
          ) : <p>No Popup</p>}
          </>
     )
}

export default Popups
