import React, {Component} from 'react';

// component displays how to play the game when the help button is clicked.
function Help (props){
    const drawState = props.drawState;

    return<>
    <h2>How to play</h2>
    <h3>The Rules</h3>
    <p>Hangman is a classic word game in which you must guess the secret word one letter at a time.</p>
    <ul>
        <li>Guess one letter at a time to reveal the secret word. </li>
        <li>Each incorrect guess adds another part to the hangman. You only get 10 incorrect guesses. </li>
        <li>Reset the game at anytime</li>
    </ul>
    </>

    
}

export default Help;