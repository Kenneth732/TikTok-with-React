import React, { useEffect, useState } from 'react';
import './MovieList.css'
import Sidebar from './SideBar';
const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/movies')
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className='Movie-Flex'>
            <div className='Sidebar-Flex'>
                <Sidebar />
            </div>
            <div class="movie-container">
                {movies.map(movie => (
                    <div class="movie" key={movie.id}>
                        <div className='movie-flex-wrow'>
                            <div className='image-text-desc'>
                                <img src={movie.image} className='movie-img' />
                                <h2 class="movie-title">{movie.title}</h2>
                            </div>
                            <button className='btn-primary' type='submit'>Follow</button>
                        </div>
                        <p class="movie-info">Genre: {movie.genre}</p>
                        <video class="movie-video" controls>
                            <source src={process.env.PUBLIC_URL + movie.movieFile} type="video/mp4" />
                        </video>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default MovieList;

