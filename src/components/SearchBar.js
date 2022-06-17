import React, { useState, useEffect } from "react";
import * as Constants from '../constants/constants.js'
import '../App.css';
import { ResultCard } from "./ResultCard.js";


export function SearchBar() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const onChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
        fetch(
            `${Constants.API_URL}${Constants.MOVIE_SERACH_ENDPOINT}${Constants.API_KEY}&query=${e.target.value}`
        )
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    setResults(data.results);
                } else {
                    setResults([]);
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
                            style={{background: '#001C54', color: 'white', outline: 'none'}}
                        />
                    </div>
                    {
                        results.length > 0 && (
                            <ul className="results">
                                {results.map((movie) => (
                                    <li key={movie.id}>
                                        <ResultCard movie={movie} />
                                    </li>
                                ))}
                            </ul>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
