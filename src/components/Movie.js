import { useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import * as Constants from '../constants/constants.js';
import * as Utils from '../utils/utils.js';
import { StyledMovie } from './styles/Movie.styled.js';
import { Card, Container, Row } from 'react-bootstrap';
import YouTube from 'react-youtube';

export function Movie() {

    const [movie, setMovie] = useState({})
    const [credit, setCredit] = useState({})
    const [images, setImages] = useState([])
    const [trailer, setTrailer] = useState([])
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

    const fetchImageData = () => {
        fetch(`${Constants.API_URL}movie/${location.state.id}/images${Constants.API_KEY}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data)
                setImages(data)
            })
    }
    useEffect(() => { fetchImageData() }, [])

    const fetchTrailerData = () => {
        fetch(`${Constants.API_URL}movie/${location.state.id}/videos${Constants.API_KEY}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data.results)
                setTrailer(data)
            })
    }
    useEffect(() => { fetchTrailerData() }, [])


    const movieStyle = {
        zIndex: 999,
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        marginTop: '-50px',
        fontSize: '15px',
        color: 'white',
    }

    // styledGallery
    const galleryStyle = {
        position: 'absolute',
        left: '35%',
        top: '3%',
        width: '1200px'
    }

    const galleryImgStyle = {
        width: '200px',
        height: '100px',
        background: '#001C54',
        margin: '10px'
    }
    const cardStyle = {
        width: '16rem',
        background: '#072F7F',
        border: 'none',
    }

    const trailerStyle = {
        position: 'absolute',
        left: '45%',
        top: '35%',
        width: '700px',
    }

    const opts = {
        height: '450px',
        width: '720px',
        playerVars: {
            autoplay: 0,
        }
    }

    return (
        <div style={movieStyle} >
            {
                movie.genres ?
                    <StyledMovie>
                        <br></br>
                        <p style={{ fontSize: '25px', color: 'orange' }}>{movie.title}</p>
                        <p>
                            <img
                                src={`${Constants.POSTER_URL}${movie.poster_path}`}
                                alt={`${movie.title} Poster`}
                                width="150"
                            />
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

            <div style={galleryStyle}>
                <h5>Gallery</h5>
                <Container >
                    <Row>
                        {
                            images.backdrops && images.backdrops.length > 0 ?
                            images.backdrops.slice(0, 8).map(image =>
                                    <Card key={image.width} style={cardStyle}>
                                        <Card.Img variant="top" src={`${Constants.POSTER_URL}${image.file_path}`} style={galleryImgStyle} />
                                    </Card>
                                )
                                : null
                        }
                    </Row>
                </Container>
            </div>

            <div style={trailerStyle}>
                <h5>Trailer</h5>
                {
                    trailer.results ?
                        <YouTube
                            videoId={Utils.getMovieTrailerId(trailer.results)}
                            opts={opts}
                        />
                    : null
                }

            </div>

        </div>
    )
}
