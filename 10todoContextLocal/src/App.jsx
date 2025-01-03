import { useState, useEffect } from 'react';
import './App.css';
import { TodoForm, TodoItem } from './components';
import { TodoProvider } from './contexts';

function App() {
    const [todos, setTodos] = useState(() => {
        // Load initial data from localStorage (runs only once)
        try {
            const savedTodos = localStorage.getItem('todos');
            return savedTodos ? JSON.parse(savedTodos) : [];
        } catch (error) {
            console.error('Error loading todos from localStorage:', error);
            return [];
        }
    });

    const createTodo = (title) => {
        setTodos((prev) => [...prev, { id: Date.now(), title, completed: false }]);
    };

    const updateTodo = (id, title) => {
        setTodos((prev) =>
            prev.map((todo) => (todo.id === id ? { ...todo, title } : todo))
        );
    };

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    const toggleTodo = (id) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    useEffect(() => {
        // Save todos to localStorage whenever they change
        try {
            localStorage.setItem('todos', JSON.stringify(todos));
        } catch (error) {
            console.error('Error saving todos to localStorage:', error);
        }
    }, [todos]);

    return (
        <TodoProvider value={{ todos, createTodo, updateTodo, deleteTodo, toggleTodo }}>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">
                        Manage Your Todos
                    </h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.length > 0 ? (
                            todos.map((todo) => (
                                <div key={todo.id} className="w-full">
                                    <TodoItem todo={todo} />
                                </div>
                            ))
                        ) : (
                            <div>No todos found!</div>
                        )}
                    </div>
                </div>
            </div>
        </TodoProvider>
    );
}

export default App;
