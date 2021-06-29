import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './TodoForm'; //sample component
import TodoList from './TodoList'; //sample component
 
const App = () => {
    const [todos, setTodos] = useState([]);

    const handleFormSubmit = e => {
        e.preventDefault();

        setTodos([...todos, e.target.elements.todo.value]);
        e.target.elements.todo.value = "";
    };

    return(
        <>
            <div>
                <TodoForm handleFormSubmit={handleFormSubmit} />
                <TodoList todos={todos} />
            </div>
        </>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));