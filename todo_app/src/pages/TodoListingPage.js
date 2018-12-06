import React, { Component } from 'react';
import TodoList from '../components/TodoList';

const todos = [
    {
        id: 1,
        title: 'Todo 1',
        description: 'ABC',
        time: '00:00'
    },
    {
        id: 2,
        title: 'Todo 2',
        description: 'XYZ',
        time: '10:00'
    }
];

class TodoListingPage extends Component {

    render() {
        const { rootStyle, titleStyle, todoListStyle } = styles;

        return (
            <div style={rootStyle}>
                <p style={titleStyle}>List of TODO's</p>
                <div style={todoListStyle}>
                    <TodoList
                        data={todos}
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