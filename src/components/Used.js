import React, {Component} from 'react';



//Component displays the letters the user has already guessed 
function Used (props){
    const used = props.used;

    if (used < 1){
        return;
    }else{
        return<>
        <ul className='used'>
        {used.map((lett, index)=>{
            return(
                <li key={index}>{lett}</li>
            )

        })}</ul>

    </>
    }
    

    
}

export default Used;