import React from 'react';
import InputBox from './common/InputBox';

const LoginCard = () => {
    return (
        <div>
            <h1>Log In To App</h1>

            <p>Don't have an account? Sign up</p>

            <InputBox
                placeholder='Email'
                onChangeEventHandler={(event) => console.log(event.target.value)} />

            <InputBox
                placeholder='Password'
                onChangeEventHandler={(event) => console.log(event.target.value)} />

            <button onClick={() => {
                console.log('Login button is clicked');
            }}>LOG IN</button>

            <p>Forgot password?</p>
        </div>
    );
};

export default LoginCard;