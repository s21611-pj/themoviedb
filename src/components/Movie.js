import { useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import * as Constants from '../constants/constants.js';
import * as Utils from '../utils/utils.js';
import { StyledMovie } from './styles/Movie.styled.js';

export function Movie() {

    const [movie, setMovie] = useState({})
    const [credit, setCredit] = useState({})
    const location = useLocation();
    let navigate = useNavigate();

    const fetchMovieData = () => {
        fetch(`${Constants.API_URL}movie/${location.state.id}${Constants.API_KEY}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setMovie(data)
            })
    }
    useEffect(() => { fetchMovieData() }, [])

    const fetchCreditData = () => {
        fetch(`${Constants.API_URL}movie/${location.state.id}/credits${Constants.API_KEY}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setCredit(data)
            })
    }
    useEffect(() => { fetchCreditData() }, [])

    const movieStyle = {
        zIndex: 999,
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        marginTop: '-50px',
        fontSize: '15px',
        color: 'white',
    }

    return (
        <div style={movieStyle} >
            {
                movie.genres ?
                    <StyledMovie>
                        <br></br>
                        <p style={{ fontSize: '25px', color: 'orange' }}>{movie.title}</p>
                        <p>
                            <img src={`${Constants.POSTER_URL}${movie.poster_path}`} alt="Poster Unavailable" width="150"></img>
                        </p>
                        <p>{movie.overview}</p>
                        <p>Release date: <br></br>{movie.release_date}</p>
                        <p>Movie genre: <br></br>{movie.genres[0].name}</p>
                        <p>Vote average: <br></br>{movie.vote_average}</p>
                        <p>Vote count: <br></br>{movie.vote_count}</p>
                        {
                            credit.crew ?
                            <p>Director: <br></br>{Utils.getMovieDirector(credit.crew)}</p>
                            : null
                        }
                        {
                            credit.cast ?
                            <p>Actors: <br></br>{Utils.getMovieMainActors(credit.cast)}</p>
                            : null
                        }
                        <p><a href={Constants.TMDB_MOVIE_URL + movie.id}>Click here to show movie info in TMDB</a></p>
                        <p>
                            <button type="button" onClick={() => navigate(-1)} style={{ background: 'yellow' }}>Return to searching</button>
                        </p>
                    </StyledMovie>
                    : null
            }
        </div>
    )
}
