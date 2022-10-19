import React, { useState } from 'react';
import RemoveItm from './RemoveItm';
import './ToDoList.css';

const ToDoList = () => {
    const [item, setItem] = useState("");
    const [itmlist, setItmList] = useState([]);

    let itemChangeHandler = (event) => {
        setItem(event.target.value);
    }

    let itemClickHandler = () => {
        if (item.length > 0) {
            setItmList((olddata) => {
                return ([...olddata, item]);
            })
        }

        setItem('');
    }

    let deleteItem = (id) => {
        setItmList(itmlist.filter((val, index) => {
            return (id !== index);
        }));
    }

    // let onSelect = (id) => {
    //     setItmList(itmlist.filter((val, index) => {
    //         return (id !== index);
    //     }));
    // }

    return (
        <>
            <div className='todocontainer'>
                <div>
                    <input type="text" value={item} onChange={itemChangeHandler} placeholder="Add New" className='todoinputfield' />
                    <button className='plusbtn' onClick={itemClickHandler} ><i class="fa-solid fa-plus"></i></button>
                </div><br />

                <ul>


                    {
                        itmlist.map((value, index) => {
                            return (
                                <RemoveItm
                                    key={index}
                                    id={index}
                                    itemData={value}
                                    onSelect={deleteItem} />


                                // or we can also do this.....


                                //   <div className='itm'>
                                //         <button onClick={() => {
                                //             onSelect(index);
                                //         }} className='rembtn'>x</button>
                                //         <li>{value}</li>
                                //     </div>


                            );
                        })
                    }

                </ul>

            </div>
        </>
    );
}

export default ToDoList;