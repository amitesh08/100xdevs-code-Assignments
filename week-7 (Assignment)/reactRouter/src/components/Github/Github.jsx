import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github(){
    const data = useLoaderData()

    // const [data, setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/amitesh08')  //github api
    //     .then(response => response.json())
    //     .then((data)=> {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

    return(
        <>
            <div className="bg-gray-600 text-3xl text-center m-4 text-white p-4">
                Github Followers: {data.followers}
                <img src={data.avatar_url} alt="" />
            </div>
        </>
    )
}

export const githubLoader = async ()=> {
    const response = await fetch('https://api.github.com/users/amitesh08')

    return response.json()

    
}