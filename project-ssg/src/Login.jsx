import React, { useState } from 'react';
import './Login.css'; 
import image from '../src/assets/login.jpg'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Username:", username);
        console.log("Password:", password);
        console.log("Remember Me:", rememberMe);
    };

    return (
        <div className="container">
            <div className="form-container">
                <h2>Welcome!</h2>
                <h4>Sign in to your account</h4>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">User name</label>
                    <input
                        type="username"
                        placeholder="Enter your user name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className="remember-me">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <button type="submit">Login</button>
                    <a href="#">Forgot Password?</a>
                </form>
                <div className='register'>
                    <div>
                    <p>Don't have an account? </p>
                    </div>
                    <div><a href="">Register</a></div>
                </div>
                
            </div>
            <div className="image-container">
            <img src={image}></img>
            </div>
        </div>
    );
};

export default Login;
