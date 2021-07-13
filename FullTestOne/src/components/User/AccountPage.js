import React from 'react';

import PostBoard from '../Posts/PostBoard';
import AccountInfo from './AccountInfo';

class AccountPage extends React.Component {
    render() {
        return (
            <div className='account-page-container'>
                ||auth token of some sort|| 
                profile pic
                username,
                post count,
                <AccountInfo />
                recent post
                <PostBoard />
            </div>
        )
    }
}

export default AccountPage;