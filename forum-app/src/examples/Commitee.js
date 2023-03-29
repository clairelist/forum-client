//I DISPLAY all topics.

import {Topics} from './Topics';
import {useState, useEffect, useRef} from 'react';

function Commitee () {
    const [topics, setTopics] = useState([]);
    //REMEMBER we must use useRef with useEffect!

    const fetch = useRef(()=>{}); //I NEED to be initialized as an anon function which yields an empty object! Because of the way we will be using fetch, below...

    fetch.current = ()=> {
        //api call here!
        //... in example case, we need only set the topics into state.
        setTopics(Topics);
    }

    useEffect(()=>{
        fetch.current();
    }, [])
    return (
        <div className='Committee'>
            <h1>I am the GENCOM - general discussion etc etc.</h1>
            {topics.map(()=>{ //...do something here, lol.
                
                <div className='topics'>{topics.title}</div>
            })}
        </div>
    )
}