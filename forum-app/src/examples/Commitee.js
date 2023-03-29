//I DISPLAY all topics.

import {useState, useEffect, useRef} from 'react';

function Commitee () {
    const [topics, setTopics] = useState([]);
    //REMEMBER we must use useRef with useEffect!
    return (
        <div className='Committee'>
            <h1>I am the GENCOM - general discussion etc etc.</h1>
            {topics.map(()=>{ //...do something here, lol.
                
                <div className='topics'>{topics}</div>
            })}
        </div>
    )
}