import React from 'react';
import InputBox from './common/InputBox';
import Button from './common/Button';

const LoginCard = () => {
    const { root, titleStyle, signUpPlaceholder, signUpText, forgotPassword } = styles;

    return (
        <div style={root}>
            <p style={titleStyle}>Log In To App</p>

            <p style={signUpPlaceholder}>Don't have an account?
            <span style={signUpText}>Sign Up Free!</span>
            </p>

            <div style={{ width: '80%' }}>
                <InputBox
                    style={{ margin: 8 }}
                    placeholder='Email'
                    onChangeEventHandler={(event) => console.log(event.target.value)} />

                <InputBox
                    style={{ margin: 8 }}
                    placeholder='Password'
                    onChangeEventHandler={(event) => console.log(event.target.value)} />
            </div>

            <Button
                title='Log In'
                buttonClickHandler={() => {
                    console.log('Login button is clicked');
                }}
                style={{
                    background: '#0574e3',
                    color: '#fff'
                }}
            />

            <p style={forgotPassword}>Forgot password?</p>
        </div>
    );
};

const styles = {
    root: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '30%',
        height: '30%',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        margin: 10,
        boxShadow: '2px 2px #0000'
    },

    titleStyle: {
        color: '#003366',
        fontSize: 36,
        marginTop: 0,
        marginBottom: 0
    },

    signUpPlaceholder: {
        color: '#888888',
        fontSize: 15,
        marginTop: 5,
        marginBottom: 5
    },

    signUpText: {
        color: '#0574e3',
        fontSize: 15
    },

    forgotPassword: {
        color: '#0574e3',
        fontSize: 15
    }
}

export default LoginCard;