import { ADD_TODO, COMPLETE_TODO } from '../actions/ActionTypes';

export const rootReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            const todosCopy = state.todos.slice();
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
            return {};
    }
}