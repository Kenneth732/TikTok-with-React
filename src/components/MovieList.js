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


    );
};

export default MovieList;

