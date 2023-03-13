//EACH reply contains an id, topic, user, date created, and body

const replies = {
    reply_one: {
        id: 1,
        topic: 'topic_one',
        created_by: 'anotherUserName!',
        date_created: Date.now(),
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries of bullshit...'
    },

    reply_two: {
        id: 2,
        topic: 'topic_one',
        created_by: 'a_third_user',
        date_created: Date.now(),
        body: '... but also the great merge request distaster of 2022.'

    },

    reply_tree: {
        id: 1,
        topic: 'topic_two',
        created_by: 'a_third_user',
        date_created: Date.now(),
        body: 'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. .'

    }
}

export default replies;