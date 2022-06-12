import { Card, Container, Col, Row } from 'react-bootstrap';
import React, { useEffect, useState } from "react"
import * as Constants from '../constants/constants.js'

export const MovieCard = () => {

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

    return (
        <div>
            <Container className='p-4'>
                    <Row>
                        {movies.map(movie =>
                            <Card style={{ width: '15rem' }} className="m-2">
                                <Card.Img variant="top" src={ `${Constants.POSTER_URL}${movie.poster_path}` } width="100" height="200" />
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
