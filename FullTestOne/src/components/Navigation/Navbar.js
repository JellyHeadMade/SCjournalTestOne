import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <div className='navbar-wrapper'>
                <div className='logo'>
                    <img src='https://via.placeholder.com/100' />
                </div>
                <div className='home-nav-link'>
                    Home
                </div>
                <div className='about-nav-link'>
                    About
                </div>
                <div className='login-nav-link'>
                    Login
                </div>
                <div className='register-nav-link'>
                    Register
                </div>

            </div>
        )
    }
}

export default Navbar;