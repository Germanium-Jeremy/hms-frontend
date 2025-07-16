import axios from 'axios';
import React, {  useState } from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"

const backendApi = import.meta.env.VITE_BACKEND_URL;

const Signup = () => {
     const [name, setName] = useState("");
     const [emailSign, setEmailSign] = useState("");
     const [username, setUsername] = useState("");
     const [passwordSign, setPasswordSign] = useState("");
     const [role, setRole] = useState("Choir Member");
     const [profileImageUrl, setProfile] = useState(null);
     const [loading, setLoading] = useState(false);
     const navigate = useNavigate()

     const handleFileChange = (e) => {
          setProfile(e.target.files[0]);
     };

     const handleRegister = async (event) => {
          event.preventDefault()
          setLoading(true)
          console.log("User Data", name, emailSign, username, passwordSign, role, profileImageUrl)

          const formData = new FormData();
          formData.append("name", name)
          formData.append("email", emailSign)
          formData.append("username", username)
          formData.append("password", passwordSign)
          formData.append("role", role)
          formData.append("profileImage", profileImageUrl);
      
          try {
               const response = await axios.post(`${backendApi}/api/auth/register`, formData, {
                    headers: {
                         "Content-Type": "multipart/form-data",
                    },
               });
               setLoading(false);
               toast.success("Byakunze");
               setTimeout(() => {
                 navigate("/");
               }, 3000);
          } catch (error) {
               setLoading(false)
               console.log(error)
               if (error.response.data) {
                    console.log("Error response data", error.response.data)
                    error.response.data?.error ? toast.warn(error.response.data.error.message) : toast.warn(error.response.data.message)
               } else {
                    toast.error('Unable to reach server');
               }
               if (error) {
                    console.log(error);
                    toast.warn("Unkown error occured, Please Try Again");
               }
          }
     }

     return (
          <div className={`w-screen h-screen px-[1rem] text-black flex items-center justify-center`}>
               <form className={`rounded-lg shadow-2xl shadow-gray-400 px-[1rem] py-[2rem] w-full`} onSubmit={handleRegister}>
                    <h2 className={`font-bold text-xl text-center pt-[5rem]`}>Sign up</h2>
                    <div className={`flex flex-col gap-[1rem] py-[2rem]`}>
                         <article className={`flex flex-col gap-1`}>
                              <label htmlFor="name">Amazina yawe</label>
                              <input className={`rounded-lg border outline-none border-gray-400 text-gray-700 indent-3 py-2 px-1`} type="text" id="name" placeholder="Amazina yawe" value={name} onChange={(e) => setName(e.target.value)} required />
                              {}
                         </article>
                         <article className={`flex flex-col gap-1`}>
                              <label htmlFor="email">Imeli</label>
                              <input className={`rounded-lg border outline-none border-gray-400 text-gray-700 indent-3 py-2 px-1`} type="email" id="email" placeholder="email" value={emailSign} onChange={(e) => setEmailSign(e.target.value)} required />
                              {}
                         </article>
                         <article className={`flex flex-col gap-1`}>
                              <label htmlFor="username">Izina ry'ukoresha</label>
                              <input className={`rounded-lg border outline-none border-gray-400 text-gray-700 indent-3 py-2 px-1`} type="text" id="username" placeholder="Izina ry'ukoresha" value={username} onChange={(e) => setUsername(e.target.value)} required />
                              {}
                         </article>
                         <article className={`flex flex-col gap-1`}>
                              <label htmlFor="password">Ijambo ry'ibanga</label>
                              <input className={`rounded-lg border outline-none border-gray-400 text-gray-700 indent-3 py-2 px-1`} type="password" id="password" placeholder="Ijambo ry'ibanga" value={passwordSign} onChange={(e) => setPasswordSign(e.target.value)} required />
                              {}
                         </article>
                         <article className={`flex flex-col gap-1`}>
                              <label htmlFor="profile">Hitamo ifoto</label>
                              <input className={`rounded-lg border outline-none border-gray-400 text-gray-700 indent-3 py-2 px-1`} type="file" id="profile" onChange={handleFileChange} />
                              {}
                         </article>
                         <article className={`flex flex-col gap-1`}>
                              <label htmlFor="role">Hitamo uruhare rwawe</label>
                              <select className={`rounded-lg border outline-none border-gray-400 text-gray-700 indent-3 py-2 px-1`} id="role" onChange={(e) => setRole(e.target.value)} >
                                   <option value="Choir Member">Umuririmbyi</option>
                                   <option value="Choir secretary">Umunyamabanga</option>
                                   <option value="Choir accountant">Umucungamari</option>
                                   <option value="Choir Leader">Umuyobozi wa Korali</option>
                                   <option value="Choir discipline">Ushinzwe imwitwarire</option>
                                   <option value="Choir coach">Umutoza</option>
                              </select>
                              {}
                         </article>
                    </div>
                    {loading ? (
                         <button disabled className={`bg-gray-700 rounded-lg w-full text-white py-[.5rem] px-[2rem] mb-5 flex gap-[1rem] justify-center items-center`} >
                              <span>Tegereza</span>
                              <p className={`rounded-full border-b-2 border-t-2 animate-spin w-[1.5rem] h-[1.5rem]`}></p>
                         </button>
                    ) : (
                         <button type="submit" className={`bg-[#40a] rounded-lg relative w-full text-white py-[.5rem] px-[2rem] mb-5`}>
                              <span>Kora konti</span>
                              <FaAngleRight className={`right-2 absolute top-1/3`} />
                         </button>
                    )}
                    <p>Ufite konti? <Link className={`text-[#301B84] font-bold`} to={'/'}>Injira</Link> </p>
               </form>
          </div>
     );
}

export default Signup
