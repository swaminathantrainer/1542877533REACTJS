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
        const isLoading = this.props.isLoading;

        return (
            <div style={{
                margin: '16px'
            }}>
                {isLoading && <p>Loading...</p>}
                <TodoInputBox
                    addTodoHandler={(todoTxt) => {
                        this.addTodoHandler(todoTxt);
                    }}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading
    }
}


export default connect(mapStateToProps, { addTodo })(AddTodoPage);