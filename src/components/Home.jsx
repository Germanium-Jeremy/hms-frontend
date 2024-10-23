import React from 'react'
import UserData from './UserData'
import UserFinesLittle from './UserFinesLittle'
import Verse from './Verse'

const Home = () => {
     let user = null
     if (JSON.parse(localStorage.getItem("HMS_USER"))) {
          user = JSON.parse(localStorage.getItem("HMS_USER"))
          console.log(user)
     }
     return (
          <>
          {user && <UserData />}
          {user && <UserFinesLittle />}
          <Verse />
          </>
     )
}

export default Home
