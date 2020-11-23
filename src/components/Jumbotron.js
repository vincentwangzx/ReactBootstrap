import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Poster from '../assets/Poster.jpg';

const Styles = styled.div `
    .jumbo {
        background: url(${Poster}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        height: 350px;
        position: relative; 
        z-index: -2; 
        align-content: center;
    }

    .overlay {
        background-color: #000;
        opacity: 0.5;
        position: absolute; 
        top: 0;
        left: 0;
        bottom: 0; 
        right: 0;
        z-index: -1; 
    }

    .container {
        text-align: center;
        justify-items: center; 
        align-items: center;
        padding-top: 50px;

    }
`;
export const Jumbotron = () => {

    return (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container className="container">
                <h1> It's Time You Save </h1>
                <p>Come rain or shine, we'll be on time.</p>
            </Container>
        </Jumbo>
    </Styles>
    )
};