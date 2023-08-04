import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  return (
      <div>
          <h1>Login To Your Account</h1>
          <form>
              <div>
                  <label>Email:</label>
                  <input 
                    type="text" 
                    value={email} 
                    onChange={(e)=> setEmail(e.target.value)} 
                    id=""></input>
              </div>
              <div>
                <label>Password:</label>
                  <input 
                    type="password" 
                    value={password} 
                    onChange={(e)=> setPassword(e.target.value)} 
                    id=""></input>
              </div>
          </form>
      </div>
  )
}

export default LoginPage;