import React from 'react';
import TodoCard from '../common/TodoCard';

/*
data structure 
{
    id: int,
    title: string,
    description: stirng,
    time: string
}
 */

const TodoList = ({ data }) => {
    return (
        <div>
            {
                data.map((d) => {
                    return (
                        <TodoCard
                            title={d.name}
                            description={d.description}
                            time={d.time}
                        />
                    );
                })
            }
        </div>
    );
};

export default TodoList;