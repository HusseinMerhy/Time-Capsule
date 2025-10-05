import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '../../../shared/Button';
import Input from '../../../shared/Input';
const SignUpForm = ({ toggle }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async () => {
        console.log("Attempting to sign up with:", { name, email, password });
        try {
            // const response = await axios.post('YOUR_REGISTER_API_ENDPOINT', { name, email, password });
            // if (response.data.success) {
            //     navigate("/dashboard");
            // } else {
            //     alert(response.data.message || 'Registration failed!');
            // }
            alert('Simulating API call... Navigating to dashboard.');
            navigate("/dashboard");
        } catch (error) {
            console.error("Sign up API call failed:", error);
            alert('An error occurred during sign up. Please try again.');
        }
    };

    return (
        <div className="auth-form-content">
            <div className="auth-form-header">
                <h1 className="h1">Create Account</h1>
                <p className="subtitle">Begin your journey through time.</p>
            </div>
            
            <div className="auth-form-inputs">
                 <Input 
                    name="name" 
                    label="Full Name"
                    placeholder="Enter your name" 
                    value={name}
                    onChangeListener={(e) => setName(e.target.value)}
                    required={true} 
                />
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
                    placeholder="Create a strong password" 
                    value={password}
                    onChangeListener={(e) => setPassword(e.target.value)}
                    required={true} 
                />
                <Button 
                    text="Create Account" 
                    variant="primary" 
                    onClickListener={handleSignUp}
                    className="w-full" 
                    style={{height: '56px'}} 
                />
            </div>

            <p className="auth-form-switch">
                Already have an account?
                <button 
                    onClick={toggle} 
                    className="auth-form-switch-link"
                >
                    Sign In
                </button>
            </p>
        </div>
    );
};

export default SignUpForm;
