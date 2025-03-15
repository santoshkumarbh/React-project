import { useReducer } from "react";


export default function UseReducerExample(){

    const initialState={
        showTextFlag:false,
        changeTextStylesFlag:false,
    }
    
    

    function reducer(state,action){
        switch (action.type) {
            case value:
                
               return state;
        
            default:
                return state;
        }
    }

    const HIDE_TEXT='HIDE_TEXT';
    const SHOW_TEXT='SHOW_TEXT';
    
    const [state,dispatch] = useReducer(reducer,initialState);
    // console.log(state);
    
    return(
        <div>
            <h2>Use Reducer Hook Example</h2>
            <button onClick={()=>dispatch({type:'HIDE_TEXT'})}>Hide Text</button>
            <button>Show Text</button>
            <button>Toggle Text</button>
        </div>
    );
}
