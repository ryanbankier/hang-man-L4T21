import React, {Component} from 'react';

// react boostrap imports
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import  Form  from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// json file contains image paths for the different states of the hangman, dictionary and alphabet
import Data from '../data.json';

// places the image paths from json into a array variable
const images = Data.images;

// this component uses the recived props from the Main component to display a hangman image based on the array index number.

function Draw (props){
    const drawState = props.drawState;

    // if statment makes sure the final image stays inplace if drawState goes beyond10
    if (drawState < 10){
        return <>
        <img src={images[drawState]}></img>
        </>
    }else{
        return<>
        <img src={images[10]}></img>
        </>
    }

    
}

export default Draw;