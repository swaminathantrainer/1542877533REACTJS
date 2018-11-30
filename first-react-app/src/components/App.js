import React from 'react';
import LoginPage from './LoginPage';

const App = () => {
    const { appStyle } = styles;
    return (
        <div style={appStyle}>
            <LoginPage />
        </div>
    )
};

const styles = {
    appStyle: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundColor: '#0574e3'
    }
}

export default App;