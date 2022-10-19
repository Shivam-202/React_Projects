import React, { useRef, useState } from "react";


let UseRefHook = () => {

    const inputReference = useRef(null);
    const [green,setGreen] = useState(false);

    const inputHandler = () => {
        console.log(inputReference.current.value);
        inputReference.current.style.color='red';
        inputReference.current.focus();

        (green==false) ?  setGreen(true) :  setGreen(false);
       
    }

    return(
        <>
          <br />
          <input type="text" style={{color: (green) ? 'blue' : 'red'}} ref={inputReference}/><br/><br />
          <button onClick={inputHandler} >Click Me👍</button>
        </>
    );
}

export default UseRefHook;