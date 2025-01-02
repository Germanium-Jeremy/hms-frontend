import axios from "axios";
import { createContext, useEffect, useState } from "react";
const backendApi = import.meta.env.VITE_BACKEND_URL

export const SongsContext = createContext(null)

export const SongsProvider = ({ children }) => {
     const [songs, setSongs] = useState([])
     const getSongs = async () => {
          axios.get(`${backendApi}/api/songs`).then(response => {
               return response.data
          }).catch(error => {
               console.log(error)
               return error.message && error.status
          })
     }

     // useEffect( async () => {
     //      setSongs( await getSongs())
     // }, [])

     return (
          <SongsProvider value={{ songs }}>
               {children}
          </SongsProvider>
     )
}