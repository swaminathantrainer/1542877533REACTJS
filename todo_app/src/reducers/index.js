import { ADD_TODO, COMPLETE_TODO, GET_ALL, SHOW_LOADING, HIDE_LOADING } from '../actions/ActionTypes';

const initialState = {
    todos: [],
    isLoading: false
}

export const rootReducer = (state = initialState, action) => {
    let todosCopy;

    switch (action.type) {
        case ADD_TODO:
            todosCopy = state.todos.slice();
            const todo = {
                id: Math.floor(Math.random() * 1000),
                name: action.name,
                description: action.description,
                time: action.time,
                isCompleted: false
            }

            todosCopy.push(todo);

            return {
                todos: todosCopy
            };
        case COMPLETE_TODO:
            // get the todo object that matches the give id
            todosCopy = state.todos.slice();
            const matchedTodo = state.todosCopy.filter((todo) => todo.id === action.id);
            matchedTodo.isCompleted = true;

            return {
                todos: todosCopy
            };

        case GET_ALL:
            return { todos: state.todos };

        case HIDE_LOADING:
            return { ...state, isLoading: false }

        case SHOW_LOADING:
            return { ...state, isLoading: true }

        default:
            return state;
    }
}