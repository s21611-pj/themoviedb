import React, { useEffect, useState } from "react";
import * as Constants from '../constants/constants.js';
import * as Utils from '../utils/utils.js';

import { useForm } from 'react-hook-form';

export const RateMovieForm = (props) => {


    const [sessionId, setSessionId] = useState("")
    const [rateMovie, setRateMovie] = useState({})

    const fetchSessionIdData = () => {
        fetch(`${Constants.API_URL}authentication/guest_session/new${Constants.API_KEY}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data.guest_session_id)
                setSessionId(data.guest_session_id)
            })
    }
    useEffect(() => { fetchSessionIdData() }, [])


    console.log(props.movieId)

    const onSubmit = (data) => {

        console.log(Utils.formatMovieRate(data.movieRate));

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ value: `${Utils.formatMovieRate(data.movieRate)}` })
        };

        fetch(`${Constants.API_URL}movie/${props.movieId}/rating${Constants.API_KEY}&guest_session_id=${sessionId}`, requestOptions)
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data)
                setRateMovie(data)
            })
    } 

    const { register, handleSubmit, formState: { errors } } = useForm();


    const inputStyle = {
        color: 'yellow',
        fontSize: '20px',
        background: 'black',
    }

    const errorStyle = {
        color: 'red'
    }


    return (
        <div>
            <form style={inputStyle} onSubmit={handleSubmit(onSubmit)}>
                <input
                    style={inputStyle}
                    name="movieRate" { ...register("movieRate", {
                            validate: {
                                first: v => Utils.checkIfIsNumberMovieRate(v) || "Value is not a number",
                                second: v => Utils.checkNotEmptyMovieRate(v) || "Empty value provided",
                                third: v => Utils.checkInRangeMovieRate(v) || "Value must be in range 0.5-10",
                                fourth: v => Utils.checkMultiplyOfHalfMovieRate(v) || "Value must be multiplication of 0.5"
                            }
                        })
                    }
                />
                {errors.movieRate?.type === "first" && <p style = {errorStyle}>Value is not a number</p>}
                {errors.movieRate?.type === "second" && <p style = {errorStyle}>Empty value provided</p>}
                {errors.movieRate?.type === "third" && <p style = {errorStyle}>Value must be in range 0.5-10</p>}
                {errors.movieRate?.type === "fourth" && <p style = {errorStyle}>Value must be multiplication of 0.5</p>}
                <input style={inputStyle} type="submit"/>
            </form>
        </div>
    );

}