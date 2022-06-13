import { Card, Container, Col, Row } from 'react-bootstrap';
import React, { useEffect, useState } from "react"
import * as Constants from '../constants/constants.js'
import { withTheme } from 'styled-components';

export const PopularMovies = () => {

    const [movies, setMovies] = useState([])

    const fetchData = () => {
        fetch(`${Constants.API_URL}${Constants.POPULAR_MOVIES_ENDPOINT}${Constants.API_KEY}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setMovies(data.results)
                console.log(data.results)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])


    console.log(movies)

    const cardStyle = {
        padding: '1rem',
        width: '15rem',
        color: 'white',
        background: '#001C54',
        borderRadius: '8px',
    }

    const cardImgStyle = {
        borderRadius: '8px',
        width: '100',
        height: '200'
    }

    return (
        <div>
            <Container className='p-4'>
                    <Row>
                        {movies.map(movie =>
                            <Card style={ cardStyle } className="m-2">
                                <Card.Img variant="top" src={ `${Constants.POSTER_URL}${movie.poster_path}` } style={ cardImgStyle } />
                                <Card.Body>
                                    <Card.Title>{movie.original_title}</Card.Title>
                                </Card.Body>
                            </Card>
                        )}
                    </Row>
            </Container>
        </div >
    )
}
