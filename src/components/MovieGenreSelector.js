import { StyledMovieGenreSelector } from './styles/MovieGenreSelector.styled.js';
import React, { useEffect, useState } from "react";
import * as Constants from '../constants/constants.js';
import { useNavigate } from "react-router-dom";
import { SearchBar } from './SearchBar.js';
import { PopularMovies } from './PopularMovies.js';
import { Card, Container, Row } from 'react-bootstrap';

export const MovieGenreSelector = () => {


    const [movies, setMovies] = useState([])
    // const [sortedMovies, setSortedMovies] = useState([])

    const [value, setValue] = useState([])

    let navigate = useNavigate();

    const fetchData = () => {
        fetch(`${Constants.API_URL}discover/movie${Constants.API_KEY}&with_genres=${value}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data.results)
                setMovies(data.results)
            })
    }

    const cardStyle = {
        padding: '1rem',
        width: '15rem',
        color: 'white',
        background: '#001C54',
        borderRadius: '8px',
        cursor: 'pointer',
    }

    const cardImgStyle = {
        borderRadius: '8px',
        width: '80',
        height: '150',
        background: '#001C54'
    }

    const routeChange = (movieId) => {
        let path = '/movie';
        navigate(path, {
            state: {
                id: movieId
            }
        });
    };

    function comparator(a, b) {
        const bandA = a.release_date;
        const bandB = b.release_date;

        let comparison = 0;
        if (bandA > bandB) {
            comparison = 1;
        } else if (bandA < bandB) {
            comparison = -1;
        }
        return comparison;
    }

    const moviesComponent = movies?.map(movie => {
        return <Card onClick={() => { routeChange(movie.id) }} style={cardStyle} className="m-2" key={movie.id}>
            <Card.Img variant="top" src={`${Constants.POSTER_URL}${movie.poster_path}`} style={cardImgStyle} />
            <Card.Body style={{ background: '#001C54' }}>
                <Card.Title style={{ background: '#001C54' }}>{movie.original_title} </Card.Title>
                <Card.Text style={{ background: '#001C54' }}>{movie.release_date}</Card.Text>
            </Card.Body>
        </Card>
    })

    function handleSort() {
        const sortedMovies = [...movies].sort((a, b) => {
            return a.release_date > b.release_date ? 1 : -1
        })
        setMovies(sortedMovies)
    }


    return (
        <StyledMovieGenreSelector>
            <select id="movieGenres"
                onChange={(e) => setValue(e.target.value)}>
                <option selected disabled>Choose movie genre</option>
                <option value="28">Action</option>
                <option value="12">Adventure</option>
                <option value="16">Animation</option>
                <option value="35">Comedy</option>
                <option value="80">Crime</option>
                <option value="99">Documentary</option>
                <option value="18">Drama</option>
                <option value="10751">Family</option>
                <option value="14">Fantasy</option>
                <option value="36">History</option>
                <option value="27">Horror</option>
                <option value="10402">Music</option>
                <option value="9648">Mystery</option>
                <option value="10749">Romance</option>
                <option value="878">Science Fiction</option>
                <option value="10770">Thriller</option>
                <option value="10752">War</option>
                <option value="37">Western</option>
            </select>
            <h4>Selected Genre Id: {value}</h4>

            <button type="button" style={{ background: 'salmon', marginTop: '20px' }} onClick={fetchData}>Search movie by genre</button>

            <div>
                <button type="button" style={{ background: 'salmon', marginTop: '20px' }} onClick={handleSort}>Sort</button>
                <Container className='p-4'>
                    <Row>
                        {moviesComponent}
                    </Row>
                </Container>
            </div>
        </StyledMovieGenreSelector>
    )
}