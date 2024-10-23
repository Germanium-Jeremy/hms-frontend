import React, { useState } from 'react'
import ReactSvg from '../assets/react.svg'
import { FaBars } from 'react-icons/fa6'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

const UserDashBoard = () => {
  const [isMenu, setIsMenu] = useState(false)
  return (
    <>
    <header className={`fixed top-0 left-0 right-0 bg-[#301B84] flex justify-between py-[.7rem] px-[2rem] items-center rounded-b-xl`}>
      <div className={`relative rounded-full border-2 border-white p-1 overflow-hidden h-[3rem] w-[3rem]`}>
        <img src={ReactSvg} alt="HMS" loading='lazy' className={`w-full h-full`} />
        <div className={`absolute bg-gray-300 opacity-80 w-[120%] h-[120%] animate-pulse -top-2 -left-2`}></div>
      </div>
      <h2 className={`text-white text-lg font-semibold`}>Holy Mountain Singers</h2>
      <FaBars className={`text-white text-2xl`} onClick={() => setIsMenu(true)} />
    </header>
    <Outlet />
    <footer className={`px-[5rem] py-[.5rem] fixed bottom-0 flex justify-center left-0 right-0 items-center bg-white`}>
      <div className={`border-2 border-[#301B84] w-full mx-auto`}></div>
    </footer>
    <Nav isMenu={isMenu} setIsMenu={setIsMenu} />
    </>
  )
}

export default UserDashBoard
