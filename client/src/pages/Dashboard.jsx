import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('http://localhost:5000/movies');
                setMovies(response.data);
            } catch (err) {
                console.error('Failed to fetch movies', err);
            }
        };
        fetchMovies();
    }, []);

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <div className="dashboard">
            <nav className="navbar">
                <div className="logo">NETFLIX</div>
                <button onClick={handleLogout} className="logout-btn">Sign Out</button>
            </nav>

            <div className="hero">
                <h1>Welcome to Netflix</h1>
            </div>

            <div className="movie-row-title">Trending Now</div>
            <div className="movie-row">
                {movies.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <img src={movie.thumbnail} alt={movie.title} className="movie-poster" />
                        <div className="movie-title">{movie.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
