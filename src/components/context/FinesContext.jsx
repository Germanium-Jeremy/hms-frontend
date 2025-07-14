import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";
import { toast } from "react-toastify";
const backendApi = import.meta.env.VITE_BACKEND_URL

export const FinesContext = createContext(null)

export const FinesProvider = ({ children }) => {
     const [userFines, setUserFines] = useState([])
     const [userFinesLoading, setUserFinesLoading] = useState(true)
     const [unpaidFines, setUnpaidFines] = useState([])
     const [finesUnpaidLoading, setFinesUnpaidLoading] = useState(false)
     const [markLoading, setMarkLoading] = useState(false)
     const [integer, setInteger] = useState(1)

     const getUnpaidFines = async () => {
          setFinesUnpaidLoading(true);
          axios.get(`${backendApi}/api/fines/unpaidUsers`).then(response => {
               setFinesUnpaidLoading(false);
               setUnpaidFines(response.data)
               // console.log("Fines: ", response.data)
          }).catch(error => {
               setFinesUnpaidLoading(false);
               console.error(error)
          });
     }

     const getUserFines = async () => {
          setUserFinesLoading; (true)
          axios.get(`${backendApi}/api/fines/user/${JSON.parse(localStorage.getItem("HMS_USER"))._id}`).then(response => {
               const unpaidFinesForUser = response.data.filter(fine => !fine.paid)
               if (unpaidFinesForUser.length > 0) {
                    const summary = unpaidFinesForUser.map(fine => `${fine.amount} FRW for ${fine.reason}`).join(', ')
                    setUserFines(summary)
               } else {
                    setUserFines('You have paid all fines')
               }
               setUserFinesLoading(false)
          }).catch(error => {
               if (error?.response.status == 500) toast.warn("Can not get your fines")
               if (error.response.status == 404 && error.response.data.message == "No fines found for this user.") setUserFines(error.response.data.message)
               setUserFinesLoading(false)
          })
     }

     const markFinePaid = async (id) => {
          setMarkLoading(true)
          axios.put(`${backendApi}/api/fines/${id}/mark-as-paid`).then(response => {
               setMarkLoading(false)
               setInteger(integer + 1)
               toast.success("Ubu yishyuye")
          }).catch(error => {
               setMarkLoading(false)
               toast.warn("Hari akabazo")
               console.error("Fines not paid: ", error)
          });
     }

     return (
          <FinesContext.Provider value={{userFines, getUserFines, getUnpaidFines, finesUnpaidLoading, unpaidFines, markFinePaid, userFinesLoading, markLoading, integer}}>
               {children}
          </FinesContext.Provider>
     )
}