import React from 'react';
import * as Constants from '../constants/constants.js';



export const ResultCard = ({ movie }) => {
    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {movie.poster_path ? (
                    <div style={{color: 'white', background: 'green'}}>
                    <img
                        src={`${Constants.POSTER_URL}${movie.poster_path}`}
                        alt={`${movie.title} Poster`}
                    />
                    <p>{movie.title}</p>
                    </div>
                ) : (
                    <div className="filler-poster" />
                )}
            </div>
        </div>
    )
}