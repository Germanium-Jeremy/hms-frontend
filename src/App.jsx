import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { PopupProvider } from './components/context/popup'
import { UserProvider } from './components/context/UserContext'
import { ToastContainer } from 'react-toastify'
import { FinesProvider } from './components/context/FinesContext'
import AnimatedRoutes from './components/AnimatedRoutes'

function App() {
  return (
    <>
        <BrowserRouter>
          <div>
              <UserProvider>
                <FinesProvider>
                  <PopupProvider>
                    <AnimatedRoutes />
                  </PopupProvider>
                </FinesProvider>
              </UserProvider>
          </div>
        </BrowserRouter>
        <ToastContainer hideProgressBar={true} pauseOnHover autoClose={2000} />
    </>
  )
}

export default App
