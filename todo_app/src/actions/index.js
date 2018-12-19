import { ADD_TODO, COMPLETE_TODO } from './ActionTypes';

// action creator
export const addTodo = ({ name, description, time }) => {
    // real action that is an object
    return {
        type: ADD_TODO,
        name,
        description,
        time
    };
}

export const completeTodo = (id) => {
    return {
        type: COMPLETE_TODO,
        id
    }
}