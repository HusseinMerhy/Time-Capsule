import React from 'react';
import './styles.css'; // Import the component's own styles

const CapsuleCard = ({ emoji, location, title, message, footerText }) => {
    return (
        <div className="capsule-card">
            <div className="card-glow"></div>
            
            <div className="card-top">
                <div className="card-emoji">{emoji}</div>
                <p className="card-location label-text">{location}</p>
            </div>

            <div className="card-body">
                <h3 className="card-title h3">{title}</h3>
                <p className="card-message body-text">{message}</p>
            </div>

            <div className="card-footer">
                <p className="card-footer-text label-text">{footerText}</p>
            </div>
        </div>
    );
};

export default CapsuleCard;
