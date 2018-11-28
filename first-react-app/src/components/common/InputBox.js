import React from 'react';

const InputBox = ({ placeholder, onChangeEventHandler, style = {} }) => {
    const { input, formStyle } = styles;

    console.log(style);

    return (
        <form style={formStyle}>
            <input
                style={{ ...input, ...style }}
                type='text'
                placeholder={placeholder}
                value=''
                onChange={(onChangeEventHandler)}
            />
        </form>
    )
};

const styles = {
    formStyle: {
        display: 'flex',
        flex: 1
    },

    input: {
        flex: 1,
        borderColor: '#d3d3d3',
        borderRadius: 5,
        padding: 5
    }
};

export default InputBox;