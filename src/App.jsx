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
// import { FinesProvider } from './components/context/FinesContext'
// import { SongsProvider } from './components/context/SongsContext'

function App() {
  return (
    <>
        <BrowserRouter>
          <div>
            {/* <SongsProvider> */}
              <UserProvider>
                {/* <FinesProvider> */}
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
                        {/* <Route path='songs'  element={ <Choir /> } />
                        <Route path='ann' element={ <Announcements /> } />
                        <Route path='unpaid' element={ <Services /> } />
                        <Route path='members' element={ <Members /> } />
                        <Route path='events' element={ <Events /> } />
                        <Route path='punish' element={ <Punish /> } />
                        <Route path='attand' element={ <Attendance /> } />
                        <Route path='manage' element={ <ManageFines /> } /> */}
                      </Route>
                      <Route path='/logout' element={ <Logout /> } />
                    </Routes>
                  </PopupProvider>
                {/* </FinesProvider> */}
              </UserProvider>
            {/* </SongsProvider> */}
          </div>
        </BrowserRouter>
        <ToastContainer hideProgressBar={true} pauseOnHover autoClose={2000} />
    </>
  )
}

export default App
