import React from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './Pages/Home';
import About from './Pages/About';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';

import Navbar from './Navigation/Navbar';

class Layout extends React.Component {
    render() {
        return (
            <div className='layout-container'>
                <Router>
                    <Navbar />

                    <Switch>
                        <Route exact path='/' Component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/login' component={LoginPage} />
                        <Route path='/register' component={RegisterPage} />
                    </Switch>
                    <Home />
                </Router>
            </div>
        )
    }
}

export default Layout;