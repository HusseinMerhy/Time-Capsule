import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button'; 
import Logo from '../Logo';
import './styles.css'; 

const Navbar = ({ user }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    
    const loggedOutView = (
        <Link to="/auth" onClick={closeMenu}>
            <Button text="Create Account" variant="primary" className="w-full" />
        </Link>
    );

    const loggedInView = (
        <div className="navbar-user-section">
            <button className="navbar-notification-btn" aria-label="Notifications">
                🔔
            </button>
            <Link to="/profile" onClick={closeMenu}>
                <img 
                    src={user?.avatarUrl || `https://placehold.co/40x40/A78BFA/0D0D12?text=${user?.name?.charAt(0) || 'A'}`} 
                    alt="User Avatar" 
                    className="navbar-user-avatar"
                />
            </Link>
        </div>
    );

    return (
        <header className="navbar-wrapper">
            <nav className="navbar">
                <Link to="/" className="navbar-logo-link" onClick={closeMenu}>
                    <Logo />
                </Link>

                <div className="navbar-links-desktop label-text">
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/public-wall">Public Wall</Link>
                    <Link to="/create-capsule">Create Capsule</Link>
                </div>

                <div className="navbar-user-section">
                    {user ? loggedInView : loggedOutView}
                </div>

                {/* Mobile menu button */}
                <button 
                    className="navbar-mobile-menu-btn" 
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    <span className="menu-icon">
                        {isMenuOpen ? '✖' : '☰'}
                    </span>
                </button>

                {/* Dropdown menu */}
                <div className={`navbar-dropdown ${isMenuOpen ? 'open' : ''}`}>
                    <div className="navbar-dropdown-links">
                        <Link to="/dashboard" onClick={closeMenu}>Dashboard</Link>
                        <Link to="/public-wall" onClick={closeMenu}>Public Wall</Link>
                        <Link to="/create-capsule" onClick={closeMenu}>Create Capsule</Link>
                    </div>
                    <div className="navbar-dropdown-footer">
                         {user ? loggedInView : loggedOutView}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
