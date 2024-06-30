import { useContext } from "react";
import { DarkModeContext } from "./App";

function Header() {

    const context = useContext(DarkModeContext)    
    const {isDark} = context;

    return(
        <header 
            className ="header" 
            style={{ backgroundColor: isDark? 'black' : 'lightgray',
            color: isDark?  'white' : 'black'
            }
        }
        >
                <h1>오늘 할일</h1>

        </header>   

    );

}

export default Header;