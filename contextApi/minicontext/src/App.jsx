import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {

  return (
    <>
    {/* andar wale sb children */}
    <UserContextProvider> 
      <h1>Ready with chai aur code </h1>
      <Login/>
      <Profile/>
    </UserContextProvider>

    </>
  )
}

export default App
