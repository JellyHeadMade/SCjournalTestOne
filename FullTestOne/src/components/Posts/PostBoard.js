import React from 'react';

import Post from './Post';

class PostBoard extends React.Component {
    render() {
        return(
            <div className='post-board-container'>
                overall post container, for multilple post
                <Post />
            </div>
        )
    }
}

export default PostBoard;