import { ADD_TODO, COMPLETE_TODO, GET_ALL } from './ActionTypes';

/*
Sample TODO Object
{
    id: int,
    title: string,
    description: string,
    time: string
}
*/

const addTodoAction = ({ name, description, time }) => {
    // real action that is an object
    return {
        type: ADD_TODO,
        name,
        description,
        time
    };
}

// action creator
export const addTodo = ({ name, description, time }) => {
    const body = {
        completed: false,
        content: name,
        due: {
            date: time
        }
    }

    // TODO: needs some work
}

export const getAllTodos = () => {
    return {
        type: GET_ALL
    }
}

export const completeTodo = (id) => {
    return {
        type: COMPLETE_TODO,
        id
    }
}