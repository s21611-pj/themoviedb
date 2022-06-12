import { Card, Button } from 'react-bootstrap';
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
            {movies.map(movie =>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="../logo192.png" width="100" height="200" />
                    <Card.Body>
                        <Card.Title>{movie.original_title}</Card.Title>
                        <Card.Text>
                            {movie.overview}
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}
        </div>
    )
}
