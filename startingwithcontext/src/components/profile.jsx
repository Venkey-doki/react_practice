import React from "react";
import { useContext } from "react";
// import UserContextProvider from "../context/UserContextProvider";
import UserContext from "../context/UserContext";

function Profile(){
    const {user} = useContext(UserContext)
    
    if (!user) return <div>no user</div>

    return(
        <div>
            <h1> hello user {user.userName}</h1>
            <h1> hello password {user.password}</h1>
        </div>
    )
}

export default Profile;