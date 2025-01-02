import axios from "axios"
import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
const backendApi = import.meta.env.VITE_BACKEND_URL

export const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
     const [loginUsername, setLoginUsername] = useState('')
     const [loginPassword, setLoginPassword] = useState('')

     const [name, setName] = useState('')
     const [emailSign, setEmailSign] = useState('')
     const [username, setUsername] = useState('')
     const [passwordSign, setPasswordSign] = useState('')
     const [role, setRole] = useState('Choir Member')
     const [profileImageUrl, setProfile] = useState(null)

     const [loading, setLoading] = useState(false)
     const [updateLoading, setUpdateLoading] = useState(false)

     const [loggedInUser, setLoggedInUser] = useState([])

     const [usernameU, setUpdateUsername] = useState("")
     const [updateEmail, setEmailU] = useState("")
     const navigate = useNavigate()

     // const handleRegister = async (event) => {
     //      event.preventDefault()
     //      setLoading(true)
     //      console.log("User Data", name, emailSign, username, passwordSign, role, profileImageUrl)

     //      axios.post(`${backendApi}/api/auth/register`, { name: name, email: emailSign, username: username, password: passwordSign, role: role, profileImageUrl: profileImageUrl ? profileImageUrl : null }, {
     //           headers: { "Content-Type": "multipart/form-data", }
     //      }).then(response => {
     //           setLoading(false)
     //           localStorage.setItem("HMS_USER", JSON.stringify(response.data))
     //           toast.success("Account created Successfully")
     //           setTimeout(() => {
     //                navigate('/user')
     //           }, 3000);
     //      }).catch(error => {
     //           setLoading(false)
     //           if (error.response && error.response.data) {
     //                toast.warn(error.response.data.message);
     //           } else {
     //                toast.error('Unable to reach server');
     //           }
     //      })
     // }

     const handleRegister = async (e) => {
          e.preventDefault();
          const formData = {
               name: name,
               email: emailSign,
               username: username,
               password: passwordSign,
               role: role,
               profileImage: profileImageUrl,
          }
          console.log(formData)
      
          try {
               await axios.post(`${apiUrl}/api/auth/register`, formData, {
                    headers: {
                         "Content-Type": "multipart/form-data",
                    },
               });
               setIsAuthenticated(true);
               navigate("/roles");
          } catch (error) {
               // Safely access error response data
               const errorMessage = error.response?.data?.message || "An unknown error occurred";
               alert("Registration failed: " + errorMessage);
          }
     }

     const handleLogin = async (event) => {
          event.preventDefault(), 
          setLoading(true)
          axios.post(`${backendApi}/api/auth/login`, { username: loginUsername, password: loginPassword }).then(response => {
               setLoading(false)
               localStorage.setItem("HMS_USER", JSON.stringify(response.data))
               toast.success("Login Successful")
               setTimeout(() => {
                    navigate('/user')
               }, 3000);
          }).catch(error => {
               setLoading(false)
               if (error.response && error.response.data) {
                    toast.warn(error.response.data.message);
               } else {
                    toast.error('Unable to reach server');
               }
          })
     }

     const handleEditUser = async (event) => {
          event.preventDefault()
          setUpdateLoading(true)
          axios.put(`${backendApi}/api/users/user/${JSON.parse(localStorage.getItem("HMS_USER")).userId}`, { username: usernameU, email: updateEmail }).then(response => {
               toast.success("Update Successfully")
               setUpdateLoading(false)
          }).catch(error => {
               setUpdateLoading(false)
               console.error(error)
          })
     }

     const getUserInfo = async() => {
          setLoggedInUser([])
          axios.get(`${backendApi}/api/users/user/${JSON.parse(localStorage.getItem("HMS_USER")).userId}`).then(response => {
               setLoggedInUser(response.data)
               setUpdateUsername(response.data.username)
               setEmailU(response.data.email)
          }).catch(error => {
               setLoggedInUser([])
               console.error(error)
               if (error.response.data.error == "User not found") navigate("/")
          })
     }

     const logout = () => {
          localStorage.removeItem("HMS_USER")
          window.location = '/'
     }

     useEffect(() => {
          JSON.parse(localStorage.getItem("HMS_USER")) ? getUserInfo() : navigate('/')
     }, [])

     return (
          <UserContext.Provider value={{ loginUsername, loginPassword, loading, loggedInUser, usernameU, updateEmail, updateLoading, setLoginUsername, 
               setLoginPassword, handleLogin, logout, setUpdateUsername, setEmailU, handleEditUser, setName, setEmailSign, setUsername, setPasswordSign, 
               setRole, setProfile, name, emailSign, username, passwordSign, role, profileImageUrl, handleRegister }}>
               { children }
          </UserContext.Provider>
     )
}