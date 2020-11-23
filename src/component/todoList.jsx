import React from 'react';
import todos from '../modules/todos';
import TodoItem from './todoItem';

const TodoList = ({ todos, onToggle, onDelete }) => {
    return (
        <ul>
            {todos.map(todo => 
                <TodoItem 
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            )}
        </ul>
    )
};

export default TodoList;