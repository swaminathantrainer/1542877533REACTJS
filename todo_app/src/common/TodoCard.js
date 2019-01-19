import React from 'react';

const TodoCard = ({ title, description, time }) => {
    const {
        rootStyle,
        titleStyle,
        titleContainer,
        descriptionStyle,
        timeStyle
    } = styles;

    return (
        <div style={rootStyle}>
            <div style={titleContainer}>
                <p style={titleStyle}>{title}</p>
                <p style={timeStyle}>{time}</p>
            </div>
            <p style={descriptionStyle}>{description}</p>
        </div>
    )
};

const styles = {
    rootStyle: {
        background: '#f7f7f7',
        borderRadius: 5,
        padding: 4,
        margin: 8,
        boxShadow: '1px 1px 4px #888888'
    },

    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 8
    },

    titleStyle: {
        fontWeight: 'bold',
        fontSize: 32,
        flex: 2,
        margin: 8
    },

    descriptionStyle: {
        padding: 8,
        fontSize: 24,
        margin: 8
    },

    timeStyle: {
        fontSize: 18,
        flex: 1,
        textAlign: 'right',
        margin: 8
    }
}

export default TodoCard;