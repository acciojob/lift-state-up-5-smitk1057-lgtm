
import React from "react"

const LoggedIn = ({setIsLoggedIn})=>{
     

    function handleSubmit(e){
        e.preventDefault()
        setIsLoggedIn(true)
    }
     
    return (

        <div>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text"></input>
                <br></br> <br></br>
                <label>Password:</label>
                <input type="password"></input>
                <br></br> <br></br>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default LoggedIn