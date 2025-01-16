import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function login(){
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const {setUser} = useContext(UserContext);
    const handleContext = () => {
        setUser({userName, password});
    }
    return(
        <div>
            <input type="text" value={userName} placeholder="username" onChange={(e) => setUserName(e.target.value)} />
            <input type="password" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleContext}>Login</button>
        </div>
    )
}

export default login;