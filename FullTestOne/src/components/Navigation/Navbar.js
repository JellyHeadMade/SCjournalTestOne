import React from 'react';
import { NavLink } from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return (
            <div className='nav-logo'>
                <img src='https://via.placeholder.com/100' />

                <NavLink exact to="/">Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/login'>Login/Register</NavLink>
                <NavLink to='/account'>Account</NavLink>
            </div>
        )
    }
}

export default Navbar;