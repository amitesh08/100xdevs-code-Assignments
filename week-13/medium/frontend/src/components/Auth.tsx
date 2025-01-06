import { signupInput } from "@amitesh25/medium-common"
import { ChangeEvent, useState } from "react"
import { Link } from "react-router-dom"

export const Auth = ({type}: {type: "signup" | "signin"}) => { 
    const [postInputs, setPostInputs] = useState<signupInput>({
        name: "",
        email: "",
        password: ""
    })

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-extrabold">
                        Create an Account 
                    </div>
                    <div className="text-slate-600">
                        {type == "signup" ? "Already have an account?" : "Don't have an account?" }
                        <Link className="underline pl-2" to={type == "signup" ? "/signin" : "/signup"}>
                        {type == "signup" ? "Login" : "Signup"}
                        </Link>
                    </div>
                </div>
                <div className="pt-4">
                    {type == "signup" ? <LabelledInput label = "Name" placeholder= "Name" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            name: e.target.value,
                        })
                    }} /> : null}
                    <LabelledInput label = "Email" placeholder= "name@gmail.com" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            email: e.target.value,
                        })
                    }} />
                    <LabelledInput type={"password"} label = "Password" placeholder= "123456" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value,
                        })
                    }} />
                    <button type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type == "signup" ? "Sign Up" : "Sign In"}</button>
                </div>
            </div>
        </div>
    </div>
}

interface LabelledInputType {
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void 
    type?: string;
}

function LabelledInput({label, placeholder, onChange, type}: LabelledInputType){
    return <div>
    <label className="block mb-2 text-sm font-semibold pt-4 text-gray-900 dark:text-black">{label}</label>
    <input onChange={onChange} type = {type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
</div>
}