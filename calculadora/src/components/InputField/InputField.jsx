import React from "react";
import style from "./InputField.module.css";

function InputField({label, value, onChange}){
    return (
        <>
             <div className={style.container}>
                <label>{label}</label>
                <input type="number" value={value} onChange={onChange} />
            </div>
        </>
    );
}
export default InputField;