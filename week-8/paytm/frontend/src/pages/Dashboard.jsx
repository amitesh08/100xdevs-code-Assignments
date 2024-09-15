import React from "react"
import AppBar from "../components/AppBar"
import Users from "../components/Users"
import Balance from "../components/Balance"

export default function Dashboard(){

    return (
        <div className="bg-payTMBlue h-screen">
            <AppBar />
            <div className="m-8">
                <Balance value={"10,000"} />
                <Users />
            </div>
        </div>
    )
}