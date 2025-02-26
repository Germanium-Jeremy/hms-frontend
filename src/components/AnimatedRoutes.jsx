import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Role from '../pages/Role'
import Pin from '../pages/Pin'
import UserDashBoard from '../pages/UserDashBoard'
import Auth from '../pages/Auth'
import Home from '../components/Home'
import Choir from '../components/Choir'
import Announcements from '../components/Announcements'
import Services from '../components/Services'
import Members from '../components/Members'
import Events from '../components/Events'
import Punish from '../components/Punish'
import Attendance from '../components/Attendance'
import ManageFines from '../components/ManageFines'
import Logout from "../components/Logout";
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Today from './Today'


const AnimatedRoutes = () => {
     const navigate = useNavigate();
     let user = JSON.parse(localStorage.getItem("HMS_USER"));
     const [userRole, setUserRole] = useState('')

     useEffect(() => {
          if (user != null || user != undefined) {
               user = user._id || user.id
               setUserRole(JSON.parse(localStorage.getItem("HMS_USER")).role);
               // navigate("/user");
          } else {
               user = null
               // navigate("/");
          }
     }, [])

     return (
          <Routes>
               <Route path='/' element={ <Auth /> }>
                    <Route path='' element={ <Login /> } />
                    <Route path='signup' element={ <Signup /> } />
               </Route>
               <Route path='/role' element={ <Role /> } />
               <Route path='/pin' element={<Pin />} />
               <Route path='/user' element={ user ? <UserDashBoard /> : <Auth /> }>
                    <Route path='' element={ <Home /> } />
                    <Route path='songs'  element={ <Choir /> } />
                    <Route path='ann' element={ <Announcements /> } />
                    <Route path='unpaid' element={ <Services /> } />
                    <Route path='members' element={ <Members /> } />
                    <Route path='events' element={ <Events /> } />
                    <Route path='punish' element={<Punish /> } />
                    <Route path='attand' element={<Attendance /> } />
                    <Route path='manage' element={<ManageFines /> } />
                    <Route path='attend' element={<Today /> } />
               </Route>
               <Route path='/logout' element={ <Logout /> } />
          </Routes>
     )
}

export default AnimatedRoutes