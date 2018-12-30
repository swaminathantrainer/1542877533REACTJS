import React, { Component } from 'react';
import TodoList from '../components/TodoList';
import { connect } from 'react-redux';
import { getAllTodos } from '../actions';

class TodoListingPage extends Component {

    render() {
        const { rootStyle, titleStyle, todoListStyle } = styles;
        const { allTodos } = this.props;

        return (
            <div style={rootStyle}>
                <p style={titleStyle}>List of TODO's</p>
                <div style={todoListStyle}>
                    <TodoList
                        data={allTodos}
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

const mapStateToProps = (state) => {
    console.log(state);
    return {
        allTodos: state.todos
    }
}

export default connect(mapStateToProps, { getAllTodos })(TodoListingPage);