import React, {Component} from 'react';

//react bootstrap
import { Container } from 'react-bootstrap';

// displays the heading of the application
function Head (props){
    const drawState = props.drawState;

    return <header className='header-container'>
        <Container fluid>
            <h1>Hang-Man Game</h1>
        </Container>
    </header>

    
}

export default Head;