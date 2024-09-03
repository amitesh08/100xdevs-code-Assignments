import React from "react";
import { useParams } from "react-router-dom";

export default function User(){
    const {userId} = useParams()  //to access the data from url 

    return(
        <>
            <div className="bg-gray-300 text-white text-3xl p-4 ">
                User: {userId}
            </div>
        </>
    )
}