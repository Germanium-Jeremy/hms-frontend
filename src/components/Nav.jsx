import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './context/UserContext'

const Nav = ({isMenu, setIsMenu}) => {
     const [activeLink, setActiveLink] = useState('')
     let user = JSON.parse(localStorage.getItem("HMS_USER"));
     const [userRole, setUserRole] = useState('')
     
     useEffect(() => {
          if (user != null || user != undefined) {
               user = user._id || user.id
               setUserRole(JSON.parse(localStorage.getItem("HMS_USER")).role);
          } else {
               user = null
          }
     }, [])
     
     const { logout } = useContext(UserContext)

     const allMenuLinks = {
          "Choir Leader": [
               { text: "Ahatangira", ancor: "" },
               { text: "Indirimbo", ancor: "songs" },
               { text: "Amatangazo", ancor: "ann" },
               { text: "Imimerere yo kwishyura", ancor: "unpaid" },
               { text: "Abaririmbyi", ancor: "members" },
               { text: "Guhana", ancor: "punish" },
               { text: "Abitabiriye", ancor: "attand" },
               { text: "Gucunga amande", ancor: "manage" },
          ],
          "Choir discipline": [
               { text: "Ahatangira", ancor: "" },
               { text: "Indirimbo", ancor: "songs" },
               { text: "Amatangazo", ancor: "ann" },
               { text: "Imimerere yo kwishyura", ancor: "unpaid" },
               { text: "Gucunga amande", ancor: "manage" },
               { text: "Abaririmbyi", ancor: "members" },
               { text: "Abitabiriye", ancor: "attend" },
          ],
          "Choir Accountant": [
               { text: "Ahatangira", ancor: "" },
               { text: "Indirimbo", ancor: "songs" },
               { text: "Amatangazo", ancor: "ann" },
               { text: "Guhana", ancor: "punish" },
               { text: "Gucunga amande", ancor: "manage" },
               { text: "Abaririmbyi", ancor: "members" },
          ],
          "Choir secretary": [
               { text: "Ahatangira", ancor: "" },
               { text: "Indirimbo", ancor: "songs" },
               { text: "Amatangazo", ancor: "ann" },
               { text: "Abaririmbyi", ancor: "members" },
               { text: "Abitabiriye", ancor: "attend" },
          ],
          "Choir Member": [
               { text: "Ahatangira", ancor: "" },
               { text: "Indirimbo", ancor: "songs" },
               { text: "Amatangazo", ancor: "ann" },
               { text: "Abaririmbyi", ancor: "members" },
          ],
          "Choir coach": [
               { text: "Ahatangira", ancor: "" },
               { text: "Indirimbo", ancor: "songs" },
               { text: "Amatangazo", ancor: "ann" },
               { text: "Abaririmbyi", ancor: "members" },
          ],
     };
     const menuLinks = userRole ? allMenuLinks[userRole] : [];

     return (
          <>
          <div className={`fixed top-0 bottom-0 right-0 z-[6] flex transition ${isMenu ? 'left-0 right-0' : 'left-[-100%] right-[100%]'}`}>
               <div className={`flex flex-col gap-[2rem] w-full h-full bg-white px-[2rem] py-[3rem] justify-center`}>
                    {menuLinks.map((link, index) => {
                         return (
                              <Link to={link.ancor} key={index}
                                   className={`text-lg indent-[3rem] font-semibold 
                                        ${activeLink == link.ancor ? "border-b-4 border-[#301B84]" : ''}`} onClick={() => {
                                   setActiveLink(link.ancor)
                                   setIsMenu(false)
                              }}>{link.text}</Link>
                         )
                    })}
                    <button className={`text-lg indent-[3rem] font-semibold text-left`} onClick={logout}>Sohoka</button>
               </div>
               <div className={`w-1/3 h-full bg-gray-600 opacity-50`} onClick={() => setIsMenu(false)}></div>
          </div>
          </>
     )
}

export default Nav
