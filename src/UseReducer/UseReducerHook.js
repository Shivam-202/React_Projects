import React, { useReducer, useState } from "react";


let UserReduceHook = () => {

    // const [count,setCount] = useState(0);

    const reducer = (state,action) => {
       switch(action.type){
        case 'INCREMENT':
            console.log("You Clicked Increment Button........");
            return state+1;
        case 'DECREMENT':
            console.log("You Clicked Decrement Button........");
            return state-1;
        case 'RESET':
            console.log("You Clicked Reset Button........");
            return state=0;
        default:
            throw Error('Unexpected action');
        
       }
    }

    let initialVal=0;

    const [state, dispatch] = useReducer(reducer,initialVal);

    return(
        <>
           <br/><br />
           <h1 style={{color:'black'}}>{state}</h1>
           <button onClick={()=>{ dispatch({type:'INCREMENT'})} }>Click Me to Increment</button>
           <button onClick={()=>{ dispatch({type:'DECREMENT'})} }>Click Me to Decrement</button>
           <button onClick={()=>{ dispatch({type:'RESET'})} }>Click Me to Reset</button>
        </>
    );
}

export default UserReduceHook;