import React from "react";
import style from "./Button.module.css";

function Button({text, onCLick}){
    return (
        <>
        
        <button onClick={onCLick} className={style.Button}>
            {text}
        </button>
        
        </>
    );
}
export default Button;