import React from "react";
import UserContext from "../context/UserContext";
import { useState,  useContext } from "react";

export default function Profile(){


    const {user} = useContext(UserContext)

    if(!user) 
        return <div>
            please login
        </div>
    return <div>
        welcome {user.username}
    </div>
}