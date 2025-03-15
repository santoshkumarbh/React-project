import { createContext, useState } from "react";
//useContext is used to overcome propDrilling

//create the context
export const GlobalContext=createContext(null);

//create the global state that receive components as a children
function GlobalState({children}){
    const [theme,setTheme]=useState('light');

    function handleChangeThemeOnButtonClick(){
        setTheme(theme==="light"?"dark":"light");
    }

    return <GlobalContext.Provider value={{theme,handleChangeThemeOnButtonClick}}>
        {children}
        </GlobalContext.Provider>
}

export default GlobalState;

//next got to root file(main.jsx) wrap the <App.js/> with <GlobalContext><GlobalContext/>