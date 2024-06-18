import { useState } from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';

const initialTodos = [
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Walk the dog", completed: true },
    { id: 3, text: "Read a book", completed: false },
    { id: 4, text: "Call mom", completed: true },
    { id: 5, text: "Finish project", completed: false }
];

export default function TodoList() {
    const [todos, setTodos] = useState(initialTodos);

    const removeTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.id !== id);
        });
    }

    const toggleTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                } else {
                    return todo;
                }
            });
        });
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map(todo => (
                <TodoItem
                    todo={todo}
                    key={todo.id}
                    remove={() => removeTodo(todo.id)}
                    toggle={() => toggleTodo(todo.id)} 
                />
            ))}
        </List>
    )
}