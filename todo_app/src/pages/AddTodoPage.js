import React, { Component } from 'react';
import TodoInputBox from '../common/TodoInputBox';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodoPage extends Component {

    addTodoHandler(todoTxt) {
        const { addTodo } = this.props;
        addTodo({ name: todoTxt, description: "", time: Date.now() });
    }

    render() {
        return (
            <div style={{
                margin: '16px'
            }}>
                <TodoInputBox
                    addTodoHandler={(todoTxt) => {
                        this.addTodoHandler(todoTxt);
                    }}
                />
            </div>
        );
    }
}

export default connect(null, { addTodo })(AddTodoPage);