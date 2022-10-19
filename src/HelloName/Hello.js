import React, { useState } from 'react';
import './Hello.css';

const Hello = () => {

    const [name, setName] = useState("");
    const [fullName, setfullName] = useState("");


    let getNameChange = (event) =>{
        setName(event.target.value);
    }

    let onSubmitFunc = (event) =>{
        event.preventDefault();
        setfullName(name);

        setName("");
    }

    return (
        <>
            <div className="namingContainer">
                <h1 className="nameheading">Hello {fullName}</h1>
                <form onSubmit={onSubmitFunc}>
                    <input type="text" value={name} onChange={getNameChange} className="inputfield" />
                    <button type="submit" className="clickmebtn">Click Me</button>
                </form>
            </div>
        </>
    );
}

export default Hello;