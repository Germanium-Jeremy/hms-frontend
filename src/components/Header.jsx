import React from 'react'
import { FaBars, FaFontAwesomeLogoFull } from 'react-icons/fa'

const Header = () => {
     return (
          <>
          <header className={`flex justify-between px-[5rem] py-[1rem] bg-[#40a] text-white fixed top-0 left-0 right-0 z-[1]`}>
               <FaFontAwesomeLogoFull />
               <h3>Holy mountains singers</h3>
               <FaBars />
          </header>
          </>
     )
}

export default Header
