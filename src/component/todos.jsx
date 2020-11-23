import React, { useState } from 'react';
import TodoList from './todoList';

const Todos = ({ todos, onCreate, onToggle, onDelete }) => {
    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onCreate(text);
        setText('');
    }
 
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={text} onChange={onChange}/>
                <button type="submit">추가하기</button>
            </form>
            <TodoList 
            todos={todos} 
            onToggle={onToggle}
            onDelete={onDelete}
            />
        </div>
    )
};

export default Todos;