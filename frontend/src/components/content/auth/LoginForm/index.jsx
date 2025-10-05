import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '../../../shared/Button';
import Input from '../../../shared/Input';

const LoginForm = ({ toggle }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        console.log("Attempting to log in with:", { email, password });
        try {
            // const response = await axios.post('YOUR_LOGIN_API_ENDPOINT', { email, password });
            // if (response.data.success) {
            //     navigate("/dashboard");
            // } else {
            //     alert(response.data.message || 'Login failed!');
            // }
            alert('Simulating API call... Navigating to dashboard.');
            navigate("/dashboard");
        } catch (error) {
            console.error("Login API call failed:", error);
            alert('An error occurred during login. Please try again.');
        }
    };

    return (
        <div className="auth-form-content">
            <div className="auth-form-header">
                <h1 className="h1">Welcome Back</h1>
                <p className="subtitle">Unlock your timeline.</p>
            </div>
            
            <div className="auth-form-inputs">
                <Input 
                    name="email" 
                    label="Email Address"
                    placeholder="Enter your email" 
                    value={email}
                    onChangeListener={(e) => setEmail(e.target.value)}
                    required={true} 
                />
                <Input 
                    name="password" 
                    type="password"
                    label="Password"
                    placeholder="Enter your password" 
                    value={password}
                    onChangeListener={(e) => setPassword(e.target.value)}
                    required={true} 
                />
                <Button 
                    text="Login" 
                    variant="primary" 
                    onClickListener={handleLogin}
                    className="w-full" 
                    style={{height: '56px'}} 
                />
            </div>

            <p className="auth-form-switch">
                Don't have an account?
                <button 
                    onClick={toggle} 
                    className="auth-form-switch-link"
                >
                    Sign Up
                </button>
            </p>
        </div>
    );
};

export default LoginForm;
