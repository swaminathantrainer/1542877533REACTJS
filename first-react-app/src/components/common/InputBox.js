import React from 'react';

const InputBox = ({ placeholder, onChangeEventHandler }) => {
    return (
        <form>
            <input
                type='text'
                placeholder={placeholder}
                value=''
                onChange={(onChangeEventHandler)}
            />
        </form>
    )
};

export default InputBox;