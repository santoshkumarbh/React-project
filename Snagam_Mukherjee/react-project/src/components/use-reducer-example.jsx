import { useReducer } from "react";


export default function UseReducerExample(){

    const initialState={
        showTextFlag:false,
        changeTextStylesFlag:false,
    }
    
    // const HIDE_TEXT='HIDE_TEXT';
    // const SHOW_TEXT='SHOW_TEXT';
    // const CHANGE_EXT_STYLE='CHANGE_TEXT_STYLE';
    

    function reducer(state,action){
        switch (action.type) {
            case 'HIDE_TEXT':
       
                return {
                    ...state,
                    showTextFlag:false
                };
            

            case 'SHOW_TEXT':
                return {
                    ...state,
                    showTextFlag:true
                };

            
            case 'CHANGE_TEXT_STYLE':
                return {
                    ...state,
                    changeTextStylesFlag:!state.changeTextStylesFlag
                };
        
            default:
                return state;
        }
    }


    
    const [state,dispatch] = useReducer(reducer,initialState);
    console.log(state);
    
    return(
        
        <div>
            {
                state?.showTextFlag ? <h2 style={{backgroundColor:state?.changeTextStylesFlag ? 'red' :'blue'}}>Use Reducer Hook Example</h2>:null
            }
            
            <button onClick={()=>dispatch({type:'HIDE_TEXT'})}>Hide Text</button>
            <button onClick={()=>dispatch({type:'SHOW_TEXT'})}>Show Text</button>
            <button onClick={()=>dispatch({type:'CHANGE_TEXT_STYLE'})}>Toggle Text</button>
        </div>
    );
}
