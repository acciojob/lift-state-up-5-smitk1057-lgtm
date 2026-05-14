
import React, { useState } from "react";
import './../styles/App.css';
import LoggedIn from "./LoggedIn";
const App = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  return (
    <div>
          <h3>Prarent Component</h3>
          {
            isLoggedIn 
            ? <h4>You are Logged in!</h4>
            : <LoggedIn setIsLoggedIn={setIsLoggedIn} />
          }

    </div>
  )
}

export default App
