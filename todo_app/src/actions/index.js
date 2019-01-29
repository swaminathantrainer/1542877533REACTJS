import { ADD_TODO, COMPLETE_TODO, GET_ALL, HIDE_LOADING, SHOW_LOADING } from './ActionTypes';

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

const showLoading = () => {
    return {
        type: SHOW_LOADING
    }
}

const hideLoading = () => {
    return {
        type: HIDE_LOADING
    }
}

// action creator
export const addTodo = ({ name, description, time }) => {
    return (dispatch) => {
        const body = {
            completed: false,
            content: name,
            due: {
                date: time
            }
        }

        dispatch(showLoading());

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
            const todo = {
                name: json.content,
                description: "",
                time
            }
            dispatch(addTodoAction(todo));
            dispatch(hideLoading());
        }).catch((err) => {
            console.log(err);
            dispatch(hideLoading());
        });
    }
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