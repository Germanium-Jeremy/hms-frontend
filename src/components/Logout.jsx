const Logout = () => {
     if (!JSON.parse(localStorage.getItem("HMS_USER"))) {
          window.location = '/'
     }
     return null
}

export default Logout
