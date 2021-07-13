import React from 'react';

import PostContent from './PostContent';

class PostHeaderData extends React.Component {
    render() {
        return (
            <div className='post-header-info'>
                profile pic,
                post title,
                tags,
                date added
                <PostContent />
            </div>
        )
    }
}

export default PostHeaderData;