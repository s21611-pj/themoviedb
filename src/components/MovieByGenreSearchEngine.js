import React, { useEffect, useState } from "react";
import * as Constants from '../constants/constants.js';
import { useNavigate } from "react-router-dom";
import { SearchBar } from './SearchBar.js';
import { PopularMovies } from './PopularMovies.js';
import { MovieGenreSelector } from './MovieGenreSelector.js';

export const MovieByGenreSearchEngine = () => {

    let navigate = useNavigate();


    const movieStyle = {
        zIndex: 999,
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        marginTop: '-50px',
        fontSize: '15px',
        color: 'white',
        background: '#072F7F',
        overflowY: 'scroll',
        overflowX: 'hidden',
    }

    return (
        <div style={movieStyle}>
            
            <button type="button" onClick={() => navigate(-1)} style={{ background: 'yellow', marginTop: '20px' }}>Return to main page</button>

            <MovieGenreSelector />

            {/* <PopularMovies /> */}

        </div>
    )

}