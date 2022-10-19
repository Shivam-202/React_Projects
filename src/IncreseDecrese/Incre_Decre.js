import React, { useState } from 'react';
import './Incre_Decre.css';


const Incre_Decre = () => {
  
    let [num,setNum] = useState(0);

    let increment = () => {
        setNum(num+1);
    } 

    let decrement = () => {
        if(num <= 0){
          if(num==0){
           alert("You are less then 0");
           setNum(num-1);
          }
          else{
            setNum(num-1);
          }
        }
        else{
          setNum(num-1);
        }
    } 

    return (
        <>
            <div className="main">
                <p>{num}</p>
                <div className='btns'>
                    <button className='decrement' onClick={decrement}><i class="fa-solid fa-minus"></i></button>
                    <button className='increment' onClick={increment}><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
        </>
    );
}

export default Incre_Decre;