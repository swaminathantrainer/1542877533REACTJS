import React, { Component } from 'react';
import TodoInputBox from '../common/TodoInputBox';

class AddTodoPage extends Component {

    addTodoHandler(todoTxt) {
        const { addTodos } = this.props;
        addTodos(todoTxt);
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

export default AddTodoPage;