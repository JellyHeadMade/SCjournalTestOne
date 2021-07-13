import React from 'react';

import Comment from './Comment';

class Comments extends React.Component {
    render() {
        return (
            <div>
                this will be the whole list of comments
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        )
    }
}

export default Comments;