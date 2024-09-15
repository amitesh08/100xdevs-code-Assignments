import React from "react"
import Heading from "../components/Heading"
import SubHeading from "../components/SubHeading"
import InputBox from "../components/InputBox"
import Button from "../components/Button"
import BottomWarning from "../components/BottomWarning"

export default function Signup(){

    return (
        <div className="bg-sky-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="bg-white w-80 h-max p-2 px-4 rounded-lg text-center">
                <Heading label={"Sign Up"}/>
                <SubHeading label={"Enter your information to create an account."}/>
                <InputBox label={"FirstName"} placeholder={"John"}/>
                <InputBox label={"LastName"} placeholder={"Doe"}/>
                <InputBox label={"Email"} placeholder={"john@gmail.com"}/>
                <InputBox label={"Password"} placeholder={"123456"}/>
                <div className="pt-4">
                    <Button label = {"Signup"}/>
                </div>
                <BottomWarning label={"Already have an account?"} to={"/signin"} buttonText={"Sign in"} /> 
                </div>

            </div>
        </div>
    )
}