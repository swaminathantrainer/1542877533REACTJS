import React from 'react';

const Button = ({ title, buttonClickHandler, style = {} }) => {
    const { buttonStyle } = styles;

    return (
        <button
            onClick={buttonClickHandler}
            style={{ ...buttonStyle, ...style }}
        >
            {title}
        </button>
    );
};

const styles = {
    buttonStyle: {
        borderRadius: 5,
        height: 40
    }
}

export default Button;