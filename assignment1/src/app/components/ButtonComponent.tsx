'use client'; 
import { useState } from "react";

type ButtonProps = {
    text : string,
    color : string
}

const ButtonFunction = ({text,color} : ButtonProps) => {

    const [current, setCurrent] = useState<string>(color); 

    const onClick = () => {
        setCurrent((prevColor) => 
            prevColor === color ?  'pink' : color )
    };


    const buttonStyle = {
        backgroundColor : current , 
        color : 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '5px'
    }
    return <button style={buttonStyle} onClick={onClick}>{text}</button>
};


export const Button = () => {
    return (
        <div style={{padding:'20px'}}>
            <h1>Custom Buttons</h1>
            <ButtonFunction text = 'Button1' color= 'pink'/>
            <ButtonFunction text = 'Button2' color= 'blue'/>
        </div>
    )
};

