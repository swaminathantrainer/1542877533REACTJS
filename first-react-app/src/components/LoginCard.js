import React, { Component } from 'react';
import InputBox from './common/InputBox';
import Button from './common/Button';

class LoginCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: ''
        }
    }

    checkPassword(password) {
        if (password.length >= 8) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        const { root, titleStyle, signUpPlaceholder, signUpText, forgotPassword, errorStyle } = styles;
        const { error, password } = this.state;

        return (
            <div style={root}>
                <p style={titleStyle}>Log In To App</p>

                <p style={signUpPlaceholder}>Don't have an account?
            <span style={signUpText} onClick={() => {
                        console.log('Signup clicked.');
                    }}>Sign Up Free!</span>
                </p>

                <div style={{ width: '80%' }}>
                    <InputBox
                        style={{ margin: 8, height: 30 }}
                        placeholder='Email'
                        onChangeEventHandler={(event) => console.log(event.target.value)} />

                    <InputBox
                        style={{ margin: 8, height: 30 }}
                        placeholder='Password'
                        onChangeEventHandler={(event) => this.setState({ password: event.target.value })} />

                    <Button
                        title='Log In'
                        buttonClickHandler={() => {
                            this.setState({ error: '' });

                            const passwordCheck = this.checkPassword(password);
                            if (!passwordCheck) {
                                this.setState({ error: 'The password is invalid' });
                            }
                        }}
                        style={{
                            background: '#0574e3',
                            color: '#fff',
                            width: '100%',
                            margin: '8px'
                        }}
                    />
                </div>

                <p style={forgotPassword}>Forgot password?</p>

                {
                    error ? <p style={errorStyle}>{error}</p> : null
                }

            </div>
        );
    }
};

const styles = {
    root: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '40%',
        height: '40%',
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
    },

    errorStyle: {
        color: '#FF0000',
        fontSize: 15
    }
}

export default LoginCard;