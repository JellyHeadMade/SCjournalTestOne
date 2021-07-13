import React from 'react';

import PostHeaderData from './PostHeaderData';

class Post extends React.Component {
    render() {
        return (
            <div className='post-container'>
                this is a post!!!!
                <PostHeaderData />
            </div>
        )
    }
}

export default Post;