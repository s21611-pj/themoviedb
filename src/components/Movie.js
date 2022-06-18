import React from "react";
import { useNavigate } from "react-router-dom";

export function Movie() {

    const movieStyle = {
        zIndex: 999,
        background: 'green',
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        marginTop: '-50px',
    }

    let navigate = useNavigate(); 

    return (
        <div style={movieStyle} onClick={() => navigate(-1)}>
            Hello from Movie component
        </div>
    )
}
