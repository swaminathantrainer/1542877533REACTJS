import React from 'react';
import LoginCard from './LoginCard';

const LoginPage = () => {
    const { root } = styles;

    return (
        <div style={root}>
            <LoginCard />
        </div>
    );
};

const styles = {
    root: {
    }
}

export default LoginPage; 