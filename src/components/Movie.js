import { useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import * as Constants from '../constants/constants.js';

export function Movie() {

    const [movie, setMovie] = useState({})
    const location = useLocation();
    let navigate = useNavigate();

    const fetchData = () => {
        fetch(`${Constants.API_URL}movie/${location.state.id}${Constants.API_KEY}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setMovie(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])


    const movieStyle = {
        zIndex: 999,
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        marginTop: '-50px',
        fontSize: '20px',
        color: 'white',
    }

    return (
        <div style={movieStyle} >
            {
                movie.genres ?
                    <div>
                        <br></br>
                        <p>{movie.title}</p>
                        <img src={`${Constants.POSTER_URL}${movie.poster_path}`} width="150"></img>
                        <p>{movie.overview}</p>
                        <p>{movie.release_date}</p>
                        <p>{movie.genres[0].name}</p>
                        {/* <p>{movie.title}</p>
                        <p>{movie.title}</p>
                        <p>{movie.title}</p>
                        <p>{movie.title}</p>
                        <p>{movie.title}</p> */}
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            style={{ background: 'yellow' }}
                        >Return to searching</button>
                    </div>
                    : null

            }


        </div>
    )
}
