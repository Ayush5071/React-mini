import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';

function Login() {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username,password})
        console.log(user)
    }
  return (
    <div>
      <h2>Login</h2>
      <input type="text"placeholder='username' onChange={(e)=>setusername(e.target.value)} value={username} />
      {"  "}
      <input type="password"placeholder='password' onChange={(e)=>setpassword(e.target.value)} value={password} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
