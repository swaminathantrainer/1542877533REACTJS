import React, { Component } from 'react';
import TodoInputBox from '../common/TodoInputBox';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodoPage extends Component {

    addTodoHandler(todoTxt) {
        const { addTodo } = this.props;

        const body = {
            completed: false,
            content: todoTxt,
            due: {
                date: Date.now()
            }
        }

        fetch('https://beta.todoist.com/API/v8/tasks', {
            method: 'post',
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer bd89273b72759178c3e8fc8b1745eb6003279612"
            },
            body: JSON.stringify(body)
        }).then((response) => {
            return response.json();
        }).then((json) => {
            console.log(json);
        }).catch((err) => {
            console.log(err);
        });
        // addTodo({ name: todoTxt, description: "", time: Date.now() });
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