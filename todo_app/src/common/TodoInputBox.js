import React, { Component } from 'react';

class TodoInputBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ''
        }
    }

    render() {
        const { inputValue } = this.state;
        const { addTodoHandler } = this.props;

        return (
            <div style={{
                display: 'flex',
                flex: '1 auto',
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <input
                    style={{
                        flex: '1 auto',
                        margin: '12px',
                        borderRadius: '5px',
                        borderColor: '#000',
                        height: '80px',
                        padding: '8px'
                    }}
                    placeholder='Add Todo'
                    value={inputValue}
                    onChange={(e) => {
                        this.setState({ inputValue: e.target.value });
                    }}
                >
                </input>
                <button
                    style={{
                        margin: '12px',
                        background: '#3CB371',
                        borderRadius: '5px',
                        borderColor: '#000',
                        height: '40px',
                        width: '80px'
                    }}
                    onClick={() => {
                        addTodoHandler(inputValue);
                    }}
                >
                    Add Todo
                    </button>
            </div>
        )
    }

};

export default TodoInputBox;