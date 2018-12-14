import React, { Component } from 'react';
import TodoListingPage from './pages/TodoListingPage';
import AddTodoPage from './pages/AddTodoPage';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './common/NavBar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
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
      ]
    }
  }

  getTodos() {
    return this.state.todos;
  }

  addTodos(todo) {
    // copy the old array
    const todosCopy = this.state.todos.slice();

    // push to the copy
    todosCopy.push(todo);

    this.setState({
      todos: todosCopy
    })
  }

  render() {
    const { todos } = this.state;

    console.log(todos);

    return (
      <BrowserRouter>
        <div style={{
          position: 'fixed',
          left: 0,
          right: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <NavBar />
          <div style={{
            position: 'absolute',
            marginTop: '75px',
            width: '100%',
            padding: 8,
          }}>
            <Route path='/' exact component={TodoListingPage} />
            <Route path='/add_todo' render={() => {
              return (
                <AddTodoPage
                  addTodos={(todoTxt) => {
                    const todo = {
                      id: Math.floor(Math.random() * 1000),
                      title: todoTxt,
                      description: todoTxt,
                      time: ''
                    };
                    this.addTodos(todo);
                  }}
                />
              )
            }} />
          </div>
        </div>
      </BrowserRouter >
    )
  }
};

export default App;
