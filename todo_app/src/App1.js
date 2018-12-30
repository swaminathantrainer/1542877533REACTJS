import React, { Component } from 'react';
import TodoListingPage from './pages/TodoListingPage';
import AddTodoPage from './pages/AddTodoPage';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './common/NavBar';
import { createStore } from 'redux';
import { rootReducer } from './reducers';
import { Provider } from 'react-redux';

// const defaultState = {
//     todos: []
// }
const store = createStore(rootReducer);

class App extends Component {

    render() {
        return (
            <Provider store={store}>
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
                                            console.log(todoTxt);
                                        }}
                                    />
                                )
                            }} />
                        </div>
                    </div>
                </BrowserRouter >
            </Provider>
        );
    }
}

export default App;