import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
    const [formData, setFormData] = useState({
        uname: '',
        email: '',
        pwd: '',
        phoneno: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/auth/register', formData);
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.error || 'Registration failed');
        }
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-box">
                <h1 className="auth-title">Sign Up</h1>
                {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        name="uname"
                        placeholder="Username"
                        className="auth-input"
                        value={formData.uname}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        className="auth-input"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="pwd"
                        placeholder="Password"
                        className="auth-input"
                        value={formData.pwd}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="phoneno"
                        placeholder="Phone Number"
                        className="auth-input"
                        value={formData.phoneno}
                        onChange={handleChange}
                    />
                    <button type="submit" className="auth-btn">Sign Up</button>
                </form>
                <div className="auth-switch">
                    Already have an account? <Link to="/"><span>Sign in now.</span></Link>
                </div>
            </div>
        </div>
    );
}

export default Register;
