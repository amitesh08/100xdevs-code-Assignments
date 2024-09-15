import React from "react"
import Heading from "../components/Heading"
import SubHeading from "../components/SubHeading"
import InputBox from "../components/InputBox"
import Button from "../components/Button"
import ButtonWarning from "../components/BottomWarning"
import BottomWarning from "../components/BottomWarning"

export default function Signin(){

    return (
        <div className="bg-sky-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign in"}/>
                <SubHeading label={"Enter your credentials to access your account"} />
                <InputBox label={"Email"} placeholder={"john@gmail.com"} />
                <InputBox label={"Password"} placeholder={"123456"} />
                <div className="pt-4">
                    <Button label={"Sign in"} /> 
                </div>
                <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
                </div>
            </div>
        </div>
    )
}