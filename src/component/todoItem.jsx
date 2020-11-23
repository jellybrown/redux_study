import React, { memo } from 'react';

const TodoItem = memo(({ todo, onToggle, onDelete }) => {
    return (
        <div>
        <li 
        style={{
            textDecoration : todo.done ? 'line-through' : 'none'
        }}
        onClick={() => onToggle(todo.id)}
        >
            <span>{todo.text}</span>
            
        </li>
        <button onClick={() => onDelete(todo.id)}>삭제하기</button>
        </div>
    )
});

export default TodoItem;