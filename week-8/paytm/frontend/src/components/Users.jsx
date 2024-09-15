import { useState } from "react";
import Button from "./Button";


export default function Users(){
    const [users, setUsers] = useState([{
        firstName: "Amitesh",
        lastName: "Gupta",
        _id: 1
    }]);
    
    return (
        <>
            <div className="font-bold mt-6 text-lg">
                Users
            </div>
            <div className="my-2">
                <input type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
            </div>
            <div>
                {users.map(user => <User user={user} />)}
            </div>
        </>
    )
}

function User({user}) {
    return (
    <div className="bg-white flex justify-between rounded-lg">
        <div className="flex ml-2">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful font-semibold">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful mt-1 mr-2">
            <Button label={"Send Money"} />
        </div>
    </div>
    )
}