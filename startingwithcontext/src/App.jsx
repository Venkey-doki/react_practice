import React, { useContext } from "react"
import UserContextProvider from "./context/UserContextProvider"
import Profile from "./components/profile"
import Login from "./components/Login"

function App() {
  const user = useContext(UserContextProvider)

  return (
    <UserContextProvider>
      {/* <h1> hello user {user.user}</h1>  */}
      <Login />
      <Profile />     
    </UserContextProvider>
  )
}

export default App
