import React, { useState } from "react";
import httpClient from "../httpClient";

const LoginPage = () => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const logInUser = async () => {
    const resp = await httpClient.post("//localhost:5000/login", {
      email,
      password,
    });
    
    if (resp.status === 200) {
      window.location.href = "/"
    }

  }
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
              <button type="button" onClick={()=> logInUser()}>Submit</button>
          </form>
      </div>
  )
}

export default LoginPage;