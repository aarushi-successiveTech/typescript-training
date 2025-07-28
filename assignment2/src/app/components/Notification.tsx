'use client'
import { useState, useEffect } from "react";

export const Notification = () =>{
    let [message, setMessage] = useState<string>('');

    useEffect(() => {
        if(message){
            const timer = setTimeout(() =>{
                setMessage('');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [message]);


    return (
        <div>
            <button onClick={() =>setMessage('This is a Notification')}>Show Notification</button>
            {message && <h2>{message}</h2>}
        </div>
    );
}