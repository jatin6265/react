import React ,{useState}from 'react'
import {useTodo} from '../contexts/index';


function TodoForm() {

    const [input, setInput] = useState('');
    const {createTodo} = useTodo();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!input) return;
        createTodo(input);
        setInput('');
    }

    return (
        <form onSubmit={handleSubmit} className="flex">
            <input
                value={input}
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

