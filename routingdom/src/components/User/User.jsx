import React from "react";
import { useParams } from "react-router-dom";
function User() {
    const { userid } = useParams();
    return (
        <div>
            <h1 className="bg-black text-white text-4xl rounded-lg text-center ">UserId : {userid}</h1>
        </div>
    );
}

export default User;