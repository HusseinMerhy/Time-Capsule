import React from "react";
import "./styles.css";

const Button = ({ variant = 'primary', text, onClickListener, type = 'button', className = '', children }) => {
    
    const buttonClasses = `btn label-text btn-${variant} ${className}`;

    return (
        <button
            type={type}
            className={buttonClasses}
            onClick={onClickListener}
        >
            {children} {/* For icons, rendered before text */}
            {text}
        </button>
    );
};

export default Button;
