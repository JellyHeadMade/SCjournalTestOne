import React from 'react';

class AccountInfo extends React.Component {
    render() {
        return (
            <div className='account-info-bar'>
                email address,
                password(hide it to start),
                edit button(unhide the password)
            </div>
        )
    }
}

export default AccountInfo;