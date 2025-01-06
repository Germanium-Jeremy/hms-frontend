import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";
import { toast } from "react-toastify";
const backendApi = import.meta.env.VITE_BACKEND_URL

export const FinesContext = createContext(null)

export const FinesProvider = ({ children }) => {
     const { loggedInUser } = useContext(UserContext)
     const [userFines, setUserFines] = useState([])
     const getUserFines = async () => {
          axios.get(`${backendApi}/api/fines/user/${loggedInUser._id || JSON.parse(localStorage.getItem("HMS_USER")).userId || JSON.parse(localStorage.getItem("HMS_USER"))._id}`).then(response => {
               console.log("Got user fines", response.data)
          }).catch(error => {
               // console.log("Error getting user fines", error)
               if (error?.response.status == 500) toast.warn("Can not get your fines")
               if (error.response.status == 404 && error.response.data.message == "No fines found for this user.") setUserFines(error.response.data.message)
          })
     }
     return (
          <FinesContext.Provider value={{userFines, getUserFines}}>
               {children}
          </FinesContext.Provider>
     )
}