import styled from 'styled-components';

export const StyledMovie = styled.div`
    position: absolute;
    top: 5%;
    left: 33%;
    margin-top: -50px;
    margin-left: -50px;
    width: 700px;
    /* height: 100px; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p {
        color: yellow;
        border-radius: 10px;
        margin: 3px;
        background-color: #001C54;
        padding-right: 10px;
        padding-left: 10px;
    }

    p > a {
        color: white;
        text-decoration: none;
        font-size: 20px;
        background-color: #001C54;
    }
`