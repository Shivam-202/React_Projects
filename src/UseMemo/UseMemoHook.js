import React, { useMemo, useState } from "react";


let UseMemoHook = () => {

    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    let countHandler = () => {
        setCountOne(countOne + 1);
    }


    const isEven = useMemo(()=>{
        console.warn("Function Run.....");
        let i=0;
        while(i<2000000000)
          i++;

        return countOne % 2 == 0;
        
    },[countOne]);

    // const isEven = () => {
    //     let i=0;
    //     while(i<2000000000)
    //       i++;

    //     return countOne % 2 == 0;
    // }

    let countTwoHandler = () => {
        setCountTwo(countTwo + 1);
    }

    return (
        <>
            <br />
            <button onClick={countHandler} >CountOne {countOne}</button>
            <span>{isEven ? 'Even' : 'Odd'}</span>
            <button onClick={countTwoHandler} >CountTwo {countTwo}</button>
        </>
    );
}

export default UseMemoHook;