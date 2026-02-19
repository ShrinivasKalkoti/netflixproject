import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/auth/login', { email, pwd });
            // In a real app, store the token/user info in context or local storage
            console.log(response.data);
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.error || 'Login failed');
        }
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-box">
                <h1 className="auth-title">Sign In</h1>
                {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email or phone number"
                        className="auth-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="auth-input"
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                        required
                    />
                    <button type="submit" className="auth-btn">Sign In</button>
                </form>
                <div className="auth-switch">
                    New to Netflix? <Link to="/register"><span>Sign up now.</span></Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
