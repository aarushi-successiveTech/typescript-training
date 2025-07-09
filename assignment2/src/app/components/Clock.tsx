'use client'
import { useState, useEffect } from "react"; 

export const Clock = () => {
    let [time , setTime] = useState<string>('');

    useEffect (()=>{
        const Intervalid = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(Intervalid); 
    }, []); 

    return (
        <div>
            <h1>Current Time : </h1>
            <h1>{time}</h1>

        </div>
    );
}