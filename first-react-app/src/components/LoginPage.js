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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    }
}

export default LoginPage; 