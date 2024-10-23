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
     const [loading, setLoading] = useState(false)
     const navigate = useNavigate()

     const handleLogin = (event) => {
          event.preventDefault()
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
                    toast.error('Low Connections');
               }
          })
     }

     const logout = () => {
          localStorage.removeItem("HMS_USER")
          window.location = '/'
     }

     return (
          <UserContext.Provider value={{ loginUsername, loginPassword, loading, setLoginUsername, setLoginPassword, handleLogin, logout}}>
               { children }
          </UserContext.Provider>
     )
}