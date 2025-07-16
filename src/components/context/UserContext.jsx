import axios, { all } from "axios"
import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
const backendApi = import.meta.env.VITE_BACKEND_URL

export const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
     const [loginUsername, setLoginUsername] = useState('')
     const [loginPassword, setLoginPassword] = useState('')
     const [loading, setLoading] = useState(false)

     const [usernameU, setUpdateUsername] = useState("")
     const [updateEmail, setEmailU] = useState("")
     const [updateLoading, setUpdateLoading] = useState(false)
     
     const [allUsers, setAllUsers] = useState([])
     const [allUsersLoading, setAllUsersLoading] = useState(true)

     const navigate = useNavigate()

     const handleLogin = async (event) => {
          event.preventDefault(), 
          setLoading(true)
          axios.post(`${backendApi}/api/auth/login`, { username: loginUsername, password: loginPassword }).then(response => {
               setLoading(false)
               console.log(response.data.user)
               localStorage.setItem("HMS_USER", JSON.stringify(response.data.user))
               toast.success("Byakunze")
               setTimeout(() => {
                    navigate('/user')
               }, 3000);
          }).catch(error => {
               setLoading(false)
               if (error.response && error.response.data) {
                    toast.warn(error.response.data.message);
               } else {
                    toast.error('Kari akabazo');
               }
          })
     }

     const handleEditUser = async (event) => {
          event.preventDefault()
          setUpdateLoading(true)
          axios.put(`${backendApi}/api/users/user/${JSON.parse(localStorage.getItem("HMS_USER"))._id}`, { username: usernameU, email: updateEmail }).then(response => {
               toast.success("Byakunze")
               localStorage.setItem("HMS_USER", JSON.stringify(response.data));
               setUpdateLoading(false)
          }).catch(error => {
               setUpdateLoading(false)
               console.error(error)
               toast.warn("Hari akabazo")
          })
     }

     const getUserInfo = async() => {
          setLoggedInUser([])
          axios.get(`${backendApi}/api/users/user/${JSON.parse(localStorage.getItem("HMS_USER")).userId || JSON.parse(localStorage.getItem("HMS_USER"))._id}`).then(response => {
               setLoggedInUser(response.data)
               setUpdateUsername(response.data.username)
               setEmailU(response.data.email)
               setLoggedInUserProfile(response.data.profileImageUrl);
               localStorage.setItem("HMS_USER", JSON.stringify(response.data));
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

     const getAllMembers = async () => {
          axios.get(`${backendApi}/api/users`).then(response => {
               setAllUsers(response.data)
               setAllUsersLoading(false);
          }).catch(error => {
               toast.warn("Ntidushoboye kubona abamambre")
               console.error("Unable to get all members: ", error)
               setAllUsersLoading(false);
          });
     }

     return (
          <UserContext.Provider value={{ loginUsername, loginPassword, loading, usernameU, updateEmail, updateLoading, setLoginUsername, setLoginPassword, handleLogin, logout, setUpdateUsername, setEmailU, handleEditUser, allUsers, getAllMembers, allUsersLoading }}>
               { children }
          </UserContext.Provider>
     )
}