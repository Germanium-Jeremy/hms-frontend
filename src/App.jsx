import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Role from './pages/Role'
import Pin from './pages/Pin'
import UserDashBoard from './pages/UserDashBoard'
import Auth from './pages/Auth'
import Home from './components/Home'
import Choir from './components/Choir'
import Announcements from './components/Announcements'
import Services from './components/Services'
import Members from './components/Members'
import Events from './components/Events'
import Punish from './components/Punish'
import Attendance from './components/Attendance'
import ManageFines from './components/ManageFines'
import { PopupProvider } from './components/context/popup'
import { UserProvider } from './components/context/UserContext'
import { ToastContainer } from 'react-toastify'
import Logout from './components/Logout'

function App() {
  let user = null
  if (JSON.parse(localStorage.getItem("HMS_USER"))) {
    user = JSON.parse(localStorage.getItem("HMS_USER"))
    console.log(user)
  }
  return (
    <>
        <BrowserRouter>
          <div>
          <UserProvider>
            <PopupProvider>
              <Routes>
                <Route path='/' element={ <Auth /> }>
                  <Route path='' element={ <Login /> } />
                  <Route path='signup' element={ <Signup /> } />
                </Route>
                <Route path='/role' element={ <Role /> } />
                <Route path='/pin' element={ <Pin /> } />
                <Route path='/user' element={ <UserDashBoard /> }>
                  <Route path='' element={ <Home /> } />
                  <Route path='songs' element={ user != null || user != undefined ? <Choir /> : <Logout /> } />
                  <Route path='ann' element={ user != null || user != undefined ? <Announcements /> : <Logout /> } />
                  <Route path='unpaid' element={ user != null || user != undefined ? <Services /> : <Logout /> } />
                  <Route path='members' element={ user != null || user != undefined ? <Members /> : <Logout /> } />
                  <Route path='events' element={ user != null || user != undefined ? <Events /> : <Logout /> } />
                  <Route path='punish' element={ user != null || user != undefined ? <Punish /> : <Logout /> } />
                  <Route path='attand' element={ user != null || user != undefined ? <Attendance /> : <Logout /> } />
                  <Route path='manage' element={ user != null || user != undefined ? <ManageFines /> : <Logout /> } />
                </Route>
                <Route path='/logout' element={ <Logout /> } />
              </Routes>
            </PopupProvider>
          </UserProvider>
          </div>
        </BrowserRouter>
        <ToastContainer hideProgressBar={true} pauseOnHover autoClose={2000} />
    </>
  )
}

export default App
