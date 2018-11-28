import React from 'react';
import LoginPage from './LoginPage';

const App = () => {
    const { root } = styles;
    return (
        <div style={root}>
            <LoginPage />
        </div>
    )
};

const styles = {
    root: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundColor: '#0574e3'
    }
}

export default App;