import { StyledHeader } from "./styles/Header.styled";
import React from "react";
import { useNavigate } from "react-router-dom";

export function Header() {

    let navigate = useNavigate();

    const routeChange = () => {
        let path = '/movieByGenre';
        navigate(path);
    };

    const routeStyle = {
        cursor: 'pointer',
        background: 'yellow',
        color: 'black',
        paddingLeft: '3px',
        paddingRight: '3px',
    }

    

    return (
        <StyledHeader>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                    </div>
                    <ul className="nav-links">
                        <li>
                            <div style={routeStyle} onClick={routeChange}>Search movie by genre</div>
                        </li>
                    </ul>
                </div>
            </div>
        </StyledHeader>
    )
}