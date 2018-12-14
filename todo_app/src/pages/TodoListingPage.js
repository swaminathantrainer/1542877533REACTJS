import React, { Component } from 'react';
import TodoList from '../components/TodoList';

class TodoListingPage extends Component {

    render() {
        const { rootStyle, titleStyle, todoListStyle } = styles;

        return (
            <div style={rootStyle}>
                <p style={titleStyle}>List of TODO's</p>
                <div style={todoListStyle}>
                    <TodoList
                        data={[]}
                    />
                </div>
            </div>
        )
    }
}

const styles = {
    rootStyle: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    titleStyle: {
        fontSize: 48
    },

    todoListStyle: {
        width: 800,
        height: 800,
    }
};

export default TodoListingPage;