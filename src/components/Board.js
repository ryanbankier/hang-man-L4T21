import React, {Component} from 'react';

// Bootstrap components
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import  Form  from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// this conponent displays win or lose depening on the value of the props recieved.
function Msg(props){
    const drawState = props.drawState;
    const board = props.board;
    
    if(drawState >= 10){
        return<>
        <h2>You Lose!</h2>
        <p>The word was: {props.word}</p>
        </>
    }

    if(!board.includes('_ ') &&  board.length > 0 ){
        return<>
        <h2>You win!</h2>
        </>
    }
   
    
}

// this is component displays the hidden array and updates as the user guess the letters.
function Board (props){
    const board = props.hiddenArr;
    const drawState = props.drawState;
    const word = props.word;
   
    if(word == ''){
        return <>
        <div className='board'>
        <h2>Press Start to play</h2>
        </div>
        </>
        
    }
    else{
        return <>
        <div className='board'>
            <h1>{board}</h1>
            <Msg drawState={drawState} board={board} word={word}/>
        </div>
        
    </>
    }
    
}

export default Board;