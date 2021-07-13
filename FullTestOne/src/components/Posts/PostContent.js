import React from 'react';

import Comments from './Comments';

class PostContent extends React.Component {
    render() {
        return (
            <div className='post-content-container'>
                <div className='post-content'>
                    long story goes here which could be up to 3200 characters long.
                </div>
                <div className='post-content-comments'>
                    <Comments />
                </div>
            </div>
        )
    }
}

export default PostContent;