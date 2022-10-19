import React,{memo} from "react";


const Child = ({funFunction,val}) =>{
    console.log("Child Component Called...."+val);
    funFunction();
    return (
        <>
         <h2>This is Child Component</h2>
         
        </>
    )
}

export default memo(Child);