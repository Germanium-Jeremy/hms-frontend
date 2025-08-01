import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const backendApi = import.meta.env.VITE_BACKEND_URL;

const Today = () => {
     const [attendances, setAttendances] = useState([]);
     const [loading, setLoading] = useState(false);
     const [userDataLoading, setUserDataLoading] = useState(false);
     const [dateAt, setDateAt] = useState(null);
     const [userData, setUserData] = useState({}); // To store user data

     const getAttendanceByDate = async () => {
          if (dateAt == null) {
               toast.warn("Hitamo itariki");
               return;
          }

          setLoading(true);
          try {
               const response = await axios.get(`${backendApi}/api/attendance/date/${dateAt}`);
               setLoading(false);
               console.log("Date attendance got", response.data[0].users);
               setAttendances(response.data[0].users);
               // Fetch user data for each user ID
               await Promise.all(response.data[0].users.map(userId => getUserData(userId)));
          } catch (error) {
               setLoading(false);
               if (error.response.data.message.toLowerCase().includes("no attendance records found")) {
                    toast.warn("Ntitubashije kubona abitabiriye!");
               } else {
                    toast.warn("Habayemo akabazo!");
               }
               console.error("Unable to get attendance: ", error);
          }
     };

     const getUserData = async (userId) => {
          setUserDataLoading(true);
          try {
               const response = await axios.get(`${backendApi}/api/users/user/${userId}`);
               setUserDataLoading(false);
               console.log("Got user data attendance", response.data);
               // Store user data in state
               setUserData(prevData => ({ ...prevData, [userId]: response.data }));
          } catch (error) {
               setUserDataLoading(false);
               console.log("Error getting attendance users data", error.response.data);
          }
     };

     return (
          <>
               <div className={`px-[1rem] py-[2rem] flex flex-row justify-between pt-[5rem]`}>
                    <input type="date" className={`px-[.3rem] border border-[#301B84] rounded-md`} value={dateAt} onChange={(e) => setDateAt(e.target.value)} />
                    <button className={`px-[1rem] py-[.3rem] text-white bg-[#301B84] rounded-md`} onClick={getAttendanceByDate}>Reba</button>
               </div>
               <div className={`px-[2rem] py-[1rem] flex flex-col items-center`}>
                    {dateAt === null ? (
                         <div className={`text-center text-lg font-semibold`}>
                              Hitamo itariki kugirango urebe abitabiriye.
                         </div>
                    ) : (
                         attendances.length > 0 ? (
                              <ul>
                                   {attendances.map((individual, index) => (
                                        <li key={index} className={`py-[.5rem]`}>
                                             {userData[individual] ? (
                                                  <div>
                                                       <strong>UID:</strong> {individual} <br />
                                                       <strong>Izina ry'ukoresha:</strong> {userData[individual].name} <br />
                                                       <strong>Imeli:</strong> {userData[individual].email} <br />
                                                       {/* Add more fields as needed */}
                                                  </div>
                                             ) : (
                                                  <div>Turacyari gushaka ufite UID: {individual}...</div>
                                             )}
                                        </li>
                                   ))}
                              </ul>
                         ) : (
                              <div className={`text-center text-lg font-semibold`}>
                                   Nta bitabiriye kuri iyo tariki mwahisemo!
                              </div>
                         )
                    )}
               </div>
          </>
     );
}

export default Today;
