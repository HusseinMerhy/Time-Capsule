import React from "react";
import "./styles.css";

const Input = ({ label, name, type = 'text', placeholder, value, onChangeListener, required = false }) => {
    return (
        <div className="input-wrapper">
            <label className="input-label label-text" htmlFor={name}>
                {label}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                className="input-field"
                placeholder={placeholder}
                value={value}
                onChange={onChangeListener}
                required={required}
            />
        </div>
    );
};

export default Input;
