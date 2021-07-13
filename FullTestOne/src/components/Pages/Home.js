import React from 'react';

import PostBoard from '../Posts/PostBoard';

class Home extends React.Component {
    render() {
        return (
            <div className='home-container'>
                this is a Home!!!!
                <PostBoard />
            </div>
        )
    }
}

export default Home;