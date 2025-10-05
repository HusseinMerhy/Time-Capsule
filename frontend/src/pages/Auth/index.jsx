import React, { useState } from 'react';
import LoginForm from '../../components/content/auth/LoginForm';
import SignUpForm from '../../components/content/auth/SignUpForm';
import Logo from '../../components/shared/Logo';
import './styles.css';
import '../../styles/index.css';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    const switchForm = () => {
        setIsLogin(prevState => !prevState);
    };
    const loginImageUrl = "/Login.png";
    const registerImageUrl = "/Register.jpeg";
    return (
        <div className="auth-page-container">
        
            <div className={`auth-form-column ${isLogin ? 'order-1' : 'order-2'}`}>
                <Logo />
                <div className="auth-form-center">
                    <div key={isLogin ? 'login' : 'register'}>
                        {isLogin ? (
                            <LoginForm toggle={switchForm} />
                        ) : (
                            <SignUpForm toggle={switchForm} />
                        )}
                    </div>
                </div>
            </div>

            <div 
                className={`auth-image-column ${isLogin ? 'order-2' : 'order-1'}`}
                style={{ backgroundImage: `url(${isLogin ? loginImageUrl : registerImageUrl})` }}
            >
            </div>
        </div>
    );
};

export default Auth;