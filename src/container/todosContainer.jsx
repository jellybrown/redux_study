import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todos from '../component/todos';
import { addTodo, deleteTodo, toggleTodo } from '../modules/todos';

const TodosContainer = () => {
    const todos = useSelector(state => state.todos);

    const dispatch = useDispatch();
    const onToggle = useCallback(id => dispatch(toggleTodo(id)),[dispatch]);
    const onCreate = useCallback(text => dispatch(addTodo(text)),[dispatch]);
    const onDelete = useCallback( id => dispatch(deleteTodo(id)),[dispatch]);
    return (
        <>
        <Todos 
            todos={todos}
            onToggle={onToggle}
            onCreate={onCreate}
            onDelete={onDelete}
        />
        </>
    )
};

export default TodosContainer;