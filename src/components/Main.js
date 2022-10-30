import React, { Component } from 'react';

// import react router  6
import { Routes, Route } from "react-router-dom";

// importing of react bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


// import json file that contains dictionary, image paths and alphabet
import Data from '../data.json';

// component import
import Draw from './Draw';
import Board from './Board';
import Used from './Used';
import Help from './Help';

//custom css import
import '../css/custom.css'

// storing json data in variable arrays
const words = Data.dictionary;
const image = Data.images;
const lettButton = Data.alphabet;

// stores letters that have been used
let usedLet = [];

// Main componet is stateful using class
class Main extends Component {
    constructor(props) {
        super(props);

        this.state ={randWord:'', wordArr:'', hiddenArr:'', drawState: 0, selection: '', used: ''}

        this.gameStart = this.gameStart.bind(this);
        this.letterSelect = this.letterSelect.bind(this);

    }

    // event handler when letter is clicked
    letterSelect(event){

        const select = event.target.value.toLowerCase();
        const wordArr = this.state.wordArr;
        const hiddenArr = this.state.hiddenArr;
        let drawState = this.state.drawState;
        
        // updates array on which letter has been used
        usedLet.push(select);
        // array is updated into state
        this.setState({used: usedLet});

        // if statment looks for the letter selected in the wordArr 
            if (wordArr.includes(select)){
                //if true then map fuction is used to update hidden array state with correct letters in thier place
                wordArr.map((char , index) =>{

                    if (char == select){
                       hiddenArr[index] = select;
                       this.setState({hiddenArr: hiddenArr}) 
                    }
                    
                }) ;

            // else drawState gets increased and image will change to next drawing
            }else{
                drawState += 1;
                this.setState({drawState: drawState})
            }


        // user selection is stored as state
        this.setState({selection: event.target.value});
        
    }

    // event handler is trigged when user clicks start
    gameStart(event){

        // random number is genterate by the length of the words array from json file
        const randNum = Math.floor(Math.random() * (words.length - 0 + 1) + 0);
        
        // random word is select from word array using random number as index for array
        const randW = words[randNum].toLowerCase();
        
        // random word is converted into an array using slit
        const wordArr = randW.split('');
        
        // this arry is genterated for board, it shows the user how mant letters there are in the word
        let hiddenArr = [];
        for (let i=0; i<wordArr.length; i++) {
            hiddenArr[i] = '_ ';
        }

        // storing variables into state
        this.setState({randWord: randW});
        this.setState({wordArr: wordArr});
        this.setState({hiddenArr: hiddenArr});
        // state are reset when the button is clicked
        this.setState({drawState: 0});
        this.setState({used: []});
        usedLet = [];
        
    }

    

    render(){
        
        return(
            <>

            <Container>
                <Row>
                    <Col>
                        {/*Dispays the component Board and all its required properties*/}
                        <Board  hiddenArr={this.state.hiddenArr} drawState= {this.state.drawState} wordArr={this.state.wordArr} word={this.state.randWord}/>
                    </Col>
                    <Col>
                        {/*Dispays the component Draw and all its required properties*/}
                        <Draw drawState= {this.state.drawState}/>
                    </Col>

                </Row>
                <Row>
                    <Col md="5">
                    {/*Map function is used to make alphabet input keys from json file, each key has an onclick event*/}
                    {lettButton.map((lett, index)=>
                            
                        <Button className='cus-btn' key={index} as="input" type={lett} value={lett} size="sm" onClick={this.letterSelect}/>
                            
                    )}
                    <h4>Used letters</h4>
                    {/*Displays used letters*/}
                    <Used used={this.state.used}/>
                        
                    </Col>
                    <Col md="6">
                    {/*Button fires event handler to start or reset game*/}
                    <Button variant="primary"   onClick={this.gameStart}>Start/Reset</Button>
                        
                    {/*Displays help info by using routes*/}
                    <div>  
                        <Button variant="primary" href='/help'>Help</Button>
                    </div>
                    
                    <Routes>
                        <Route path='/help' element={<Help/>}/>
                    </Routes>

                        {/*Uncomment these lines to test functionality - below will show stored state*/}
                        {/*
                        <h3>States</h3>
                        <p>Random word: {this.state.randWord}</p>
                        <p>word array: {this.state.wordArr}</p>
                        <p>hidden array: {this.state.hiddenArr}</p> 
                        <p>letter selection: {this.state.selection}</p>
                        <p>drawState: {this.state.drawState}</p>
                        <p>used letters: {this.state.used}</p>
                        */}
                    </Col>
                    
                </Row>
            </Container>
            
            </>
        )
    }
}

export default Main;