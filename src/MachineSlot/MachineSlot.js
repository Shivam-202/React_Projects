import React from 'react';
import SlotMatch from './SlotMatch';


const MachineSlot = () => {
   let constainer = {
    height: '450px',
    width: '300px',
    border: '2px solid rgb(131, 119, 119)',
    textAlign: 'center',
    padding: '0.8rem',
   
    position: 'absolute',
    top:0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto'
   }

    return (
        <>
            <div style={constainer}>
                <SlotMatch x={"😄"} y={"😄"} z={"😄"} /><hr />
                <SlotMatch x={"😬"} y={"🍎"} z={"😄"} /><hr />
                <SlotMatch x={"🍎"} y={"🍎"} z={"🍎"} /><hr />
                <SlotMatch x={"🍏"} y={"🍌"} z={"🍎"} /><hr />
            </div>
        </>
    );
}

export default MachineSlot;