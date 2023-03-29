//I DISPLAY all topics.

//TODO: CREATE A DATE FORMATTER GOD DAMN IT!!!
//IT IS IN THE UTILS DIRECTORY UNDER SOURCE

import dateFinal from '../utils/dateFormatter';
import {Topics} from './Topics';
import {useState, useEffect, useRef} from 'react';

function Commitee () {
    const [topics, setTopics] = useState(Topics); //I can TECHNICALLY be set to an empty array, but react will complain that Topics, above, is an unused variable. But if you comment that import statement out, you cannot display topics, below. WHAT ??? Is my computer HAUNTED???
    //So the compiler whines, but somehow the browser is able to figure it out. HUH ???

    const fetch = useRef(()=>{}); //I NEED to be initialized as an anon function which yields an empty object! Because of the way we will be using fetch, below...

    fetch.current = ()=> {
        //api call here!
        //... in example case, we need only set the topics into state.
        setTopics([...topics ]);
       
    }

    useEffect(()=>{
        fetch.current();
    }, [])
    return (
        <div className='Committee'>
            <h1>I am the GENCOM - general discussion etc etc.</h1>
            {topics.map((topic)=>{ 
                return <div className='topics-wrapper' key={topic.id}>
                
                <h2 className='topic-title'>{topic.title}</h2>
                <p>Date created: {dateFinal()}</p>
                <p>Created by: {topic.created_by}</p>
                <p>Last updated: {dateFinal()}</p>
                <p>Number of replies: {topic.num_replies}</p>
                </div>
            })}
        </div>
    )
}

export default Commitee;