import React, { useState } from "react";
import * as Constants from '../constants/constants.js';
import '../App.css';


export function SearchBar({ setFiltredMovies }) {
    const [query, setQuery] = useState("");

    const onChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
        let dataQuery = e.target.value == 0 ?
            `${Constants.API_URL}${Constants.POPULAR_MOVIES_ENDPOINT}${Constants.API_KEY}` :
            `${Constants.API_URL}${Constants.MOVIE_SERACH_ENDPOINT}${Constants.API_KEY}&query=${e.target.value}`;
        fetch(
            dataQuery
        )
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    setFiltredMovies(data.results);
                }
            });
    };

    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input
                            className="my-form"
                            type="text"
                            placeholder="Search for a movie"
                            value={query}
                            onChange={onChange}
                            style={{ background: '#001C54', color: 'white', outline: 'none' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
