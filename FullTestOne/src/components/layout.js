import React from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './Pages/Home';
import About from './Pages/About';
import LoginPage from './Pages/LoginPage';
import AccountPage from './User/AccountPage';

import Navbar from './Navigation/Navbar';

class Layout extends React.Component {
    render() {
        return (
            <div className='layout-container'>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/login' component={LoginPage} />
                        <Route path='/account' component={AccountPage} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Layout;