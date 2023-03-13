//I contain an example of topics. Each topic is an object containing a committee name, id, title, date created, created by, reply number, last reply datetime fields as well as an array of replies.
//this is an example for display purposes only, will not be used in final production.
//each TOPIC DISPLAYS all replies!

import {replies} from './Replies';

const Topics = {
    topic_one: {
    committee_name: 'GENCOM',
    id: 1,
    title: 'Title of a topic',
    date_created: Date.now(),
    created_by: 'agenericusername',
    num_replies: 12,
    last_reply: Date.now(),
    replies: [...replies]
    //SHOULD be an array of all objects. Note: These are not ORDERED here, they are ordered when DISPLAYED.
    },

    topic_two: {
    committee_name: 'SOCCOM',
    id: 2,
    title: 'Some bullshit idk',
    date_created: Date.now(),
    created_by: 'newUser15',
    num_replies: 12,
    last_reply: Date.now(),
    replies: []
    },
}