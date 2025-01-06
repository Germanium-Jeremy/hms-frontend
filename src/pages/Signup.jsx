import axios from 'axios';
import React, {  useState } from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"

const backendApi = import.meta.env.VITE_BACKEND_URL;

const Signup = () => {
     const [fillingData, setFillingData] = useState(true);
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

          // axios.post(`${backendApi}/api/auth/register`, { name: name, email: emailSign, username: username, password: passwordSign, role: role, profileImageUrl: profileImageUrl ? profileImageUrl : null }, {
          //      headers: { "Content-Type": "multipart/form-data", }
          // }).then(response => {
          //      setLoading(false)
          //      localStorage.setItem("HMS_USER", JSON.stringify(response.data))
          //      toast.success("Account created Successfully")
          // }).catch(error => {
          //      setLoading(false)
          //      if (error) {
          //           console.log(error)
          //      }
          //      if (error.response.data) {
          //           console.log("Error response data", error.response.data)
          //           error.response.data?.error ? toast.warn(error.response.data.error.message) : toast.warn(error.response.data.message)
          //      } else {
          //           toast.error('Unable to reach server');
          //      }
          // })


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
               toast.success("Account created Successfully");
               setTimeout(() => {
                 navigate("/user");
               }, 3000);
          } catch (error) {
               setLoading(false)
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
     <form className={`w-screen h-screen px-[1rem] text-black flex items-center justify-center relative`} onSubmit={handleRegister}>
          <div className={`rounded-lg shadow-2xl shadow-gray-400 px-[1rem] py-[2rem] absolute ${fillingData ? "left-[1rem] right-[1rem]" : "right-[100%] left-[-100%]"}`}>
          <h2 className={`font-bold text-xl text-center`}>Sign up</h2>
               <div className={`flex flex-col gap-[1rem] my-[1rem]`}>
                    <article className={`flex flex-col gap-1`}>
                         <label htmlFor="name">Your Name</label>
                         <input className={`rounded-lg border outline-none border-gray-400 text-gray-700 indent-3 py-2 px-1`} type="text" id="name" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} required />
                         {}
                    </article>
                    <article className={`flex flex-col gap-1`}>
                         <label htmlFor="email">Your Email</label>
                         <input className={`rounded-lg border outline-none border-gray-400 text-gray-700 indent-3 py-2 px-1`} type="email" id="email" placeholder="email" value={emailSign} onChange={(e) => setEmailSign(e.target.value)} required />
                         {}
                    </article>
                    <article className={`flex flex-col gap-1`}>
                         <label htmlFor="username">Your Username</label>
                         <input className={`rounded-lg border outline-none border-gray-400 text-gray-700 indent-3 py-2 px-1`} type="text" id="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                         {}
                    </article>
                    <article className={`flex flex-col gap-1`}>
                         <label htmlFor="password">Your Password</label>
                         <input className={`rounded-lg border outline-none border-gray-400 text-gray-700 indent-3 py-2 px-1`} type="password" id="password" placeholder="password" value={passwordSign} onChange={(e) => setPasswordSign(e.target.value)} required />
                         {}
                    </article>
                    <article className={`flex flex-col gap-1`}>
                         <label htmlFor="profile">Select Your Profile</label>
                         <input className={`rounded-lg border outline-none border-gray-400 text-gray-700 indent-3 py-2 px-1`} type="file" id="profile" onChange={handleFileChange} />
                         {}
                    </article>
                    <article className={`flex flex-col gap-1`}>
                         <label htmlFor="role">Select Your Role</label>
                         <select className={`rounded-lg border outline-none border-gray-400 text-gray-700 indent-3 py-2 px-1`} id="role" onChange={(e) => setRole(e.target.value)} >
                                   <option value="Choir Member">Choir Member</option>
                                   <option value="Choir Leader">President</option>
                         </select>
                         {}
                    </article>
               </div>
               {loading ? (
                    <button disabled className={`bg-gray-700 rounded-lg w-full text-white py-[.5rem] px-[2rem] mb-5 flex gap-[1rem] justify-center items-center`} >
                         <span>Wait</span>
                         <p className={`rounded-full border-b-2 border-t-2 animate-spin w-[1.5rem] h-[1.5rem]`}></p>
                    </button>
               ) : (
                    <button type="submit" className={`bg-[#40a] rounded-lg relative w-full text-white py-[.5rem] px-[2rem] mb-5`}>
                         <span>Register</span>
                         <FaAngleRight className={`right-2 absolute top-1/3`} />
                    </button>
               )}
          </div>
     </form>
     );
}

export default Signup
