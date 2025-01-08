import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";
import { toast } from "react-toastify";
const backendApi = import.meta.env.VITE_BACKEND_URL

export const FinesContext = createContext(null)

export const FinesProvider = ({ children }) => {
     const { loggedInUser } = useContext(UserContext)
     const [userFines, setUserFines] = useState([])
     const [userFinesLoading, setUserFinesLoading] = useState(true)
     const [unpaidFines, setUnpaidFines] = useState([])
     const [finesUnpaidLoading, setFinesUnpaidLoading] = useState(false)

     const getUnpaidFines = async () => {
          setFinesUnpaidLoading(true);
          axios.get(`${backendApi}/api/fines/unpaidUsers`).then(response => {
               setFinesUnpaidLoading(false);
               setUnpaidFines(response.data)
               console.log("Fines: ", response.data)
          }).catch(error => {
               setFinesUnpaidLoading(false);
               console.error(error)
          });
     }

     const getUserFines = async () => {
          setUserFinesLoading;(true)
          axios.get(`${backendApi}/api/fines/user/${loggedInUser._id || JSON.parse(localStorage.getItem("HMS_USER")).userId || JSON.parse(localStorage.getItem("HMS_USER"))._id}`).then(response => {
               console.log("Got user fines", response.data)
               setUserFinesLoading(false)
          }).catch(error => {
               // console.log("Error getting user fines", error)
               if (error?.response.status == 500) toast.warn("Can not get your fines")
               if (error.response.status == 404 && error.response.data.message == "No fines found for this user.") setUserFines(error.response.data.message)
               setUserFinesLoading(false)
          })
     }

     const markFinePaid = async (id) => {
          axios.put(`${backendApi}/api/fines/${id}/mark-as-paid`).then(response => {
               console.log(response.data)
               toast.success("Fine is now paid")
          }).catch(error => {
               toast.warn("Unable to mark fine as paid")
               console.error("Fines not paid: ", error)
          });
     }

     return (
          <FinesContext.Provider value={{userFines, getUserFines, getUnpaidFines, finesUnpaidLoading, unpaidFines, markFinePaid, userFinesLoading}}>
               {children}
          </FinesContext.Provider>
     )
}