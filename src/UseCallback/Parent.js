import React ,{useCallback, useState} from 'react';
import Child from './Child';

const Parent = () =>{
    const [num,setNum] = useState(0);
    const [numtwo,setNumTwo] = useState(0);

    function numHandler(){
        setNum(num+1);
    }

    // let fun = ()=>{
    //     console.log('Shivam Mukati');
    // }

    let fun = useCallback(()=>{
         console.log('Shivam Mukati');
    },[numtwo]);

    return (
        <>
         <Child val={numtwo} funFunction={fun} />
         <button onClick={numHandler}>Click{num}</button>
         <button onClick={()=>{setNumTwo(numtwo+1)}}>Click{numtwo}</button>
        </>
    )
}

export default Parent;