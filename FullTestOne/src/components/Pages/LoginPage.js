import React from 'react';

import LoginForm from '../LoginOrRegister/LoginForm';
import RegisterForm from '../LoginOrRegister/RegisterForm';

class LoginPage extends React.Component {
    render() {
        return (
            <div className='login-page-container'>
                <LoginForm />
                <RegisterForm />
            </div>
        )
    }
}

export default LoginPage;