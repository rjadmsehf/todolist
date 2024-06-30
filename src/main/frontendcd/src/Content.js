import { useContext } from "react";
import { DarkModeContext } from "./App";
import TodoList from "./TodoList";
import './ccc.css'
function Content(){

    const context = useContext(DarkModeContext);

    const {isDark} = context;
    return (

        <div
            className="content"
            style={{
                backgroundColor: isDark ? 'lightgray' : 'white',
                color: isDark ? 'black' : 'black'
            }}>
            <TodoList/>
        </div>


)
    ;
}

export default Content;