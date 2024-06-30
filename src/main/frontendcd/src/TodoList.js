import {useContext, useEffect, useState} from "react";
import TodoItems from "./TodoItems";
import './TodoList.css';
import { DarkModeContext } from "./App";


function TodoList() {
    const [todos, setTodos] = useState([
    ]);

    const context = useContext(DarkModeContext);
    const {isDark ,setIsDark} = context;


    useEffect(() => {
        const data2 = localStorage.getItem('data');
        if (data2) {
            const path = JSON.parse(data2);
            setTodos(path);
        }
    }, []);

    // useEffect to save todos to localStorage whenever todos change
    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(todos));
    }, [todos]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(3);

    const onChangeHandler = e => setInputText(e.target.value);

    const onClickHandler = () => {
        const newTodo = {
            id: nextId,
            description: inputText,
            isDone: false,
            isModify: false
        };

        setTodos([...todos, newTodo]);
        setInputText('');
        setNextId(nextId + 1);
    }

    const onKeyPressHandler = e => {
        if (e.key === 'Enter') {
            onClickHandler();
        }
    }

    return (
        <div className="todo-list1">
            <h3>ToDo-List {new Date().toLocaleDateString()}</h3>
            <div className="todo-list"
                 style={{
                     backgroundColor: isDark? 'gray' :  'white',
                     color: isDark? 'white' : 'black'
                 }}>
                <TodoItems todos={todos} setTodos={setTodos} />
            </div>
            <div className="append-list">
                <input
                    type="text"
                    value={inputText}
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPressHandler}
                    style={{backgroundColor: isDark? 'lightgray' :  'white'}}
                />
                <button onClick={onClickHandler}>추가하기</button>
            </div>
        </div>
    );
}

export default TodoList;
