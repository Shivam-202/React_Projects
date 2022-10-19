import React, { useEffect, useState } from 'react';

let EffectHook = () => {

    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);
   
   
   useEffect(()=>{
    alert("You are inside useEffect Hook");
   },[num])
   
    return (
        <>
          <br />
           <button onClick={()=> setNum(num+1)}>You Click Me {num} times</button>

           <br />
           <button onClick={()=> setNums(nums+1)}>You Click Me {nums} times</button>
        </>
    );
}

export default EffectHook;