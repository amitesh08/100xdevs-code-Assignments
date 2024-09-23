import { useEffect } from "react";


export default function useInterval(fn, timeout){

    useEffect(()=>{
        const interval = setInterval(()=>{
                            fn()
                        },timeout)
        return ()=>{
            clearInterval(interval)
        }
    },[])

}