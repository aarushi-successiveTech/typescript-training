'use client'
import { useState } from "react"; 

export const PersonForm = () => {

    let [firstName , setFirstName] = useState<string>(""); 
    let [lastName , setLastName] = useState<string>("");
    let [age , setAge] = useState<string>("");

    return(
        <div>
            <input 
            type = 'text'
            placeholder="enter first name: "
            value = {firstName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}>
            </input>
            <br/>
            <input
            type = 'text'
            placeholder="enter last name: "
            value = {lastName}
            onChange = {(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}>
            </input>
            <br/>
            <input
            type = 'text'
            placeholder="enter age: "
            value = {age}
            onChange = {(e: React.ChangeEvent<HTMLInputElement>) => setAge(e.target.value)}></input>

            <br/>
            <h2>First Name : {firstName}</h2>
            <h2>Last Name : {lastName}</h2>
            <h2>Age : {age}</h2>
        </div>
    );
}