import { createContext, useState } from "react";

export const PopopContext = createContext(null)

export const PopupProvider = ({ children }) => {
     const [popup, setPopup] = useState(false)
     const [popupType, setPopupType] = useState(0)
     const [popupDetails, setPopupDetails] = useState({
          member: {
               email: "none",
               role: "none",
          },
          song: {
               title: "none",
               lyrics: [],
               audio: "",
               addedAt: "Mon, 12 Dec 2012"
          },
          announcements: {
               title: "none",
               desc: "none",
               dateOn: "none",
               timeAt: "none",
               place: "none"
          }

     })

     return (
          <PopopContext.Provider value={{ setPopup, setPopupDetails, setPopupType, popup, popupType, popupDetails }}>
               {children}
          </PopopContext.Provider>
     )
}