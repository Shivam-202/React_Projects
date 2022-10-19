import React, { useState, createContext } from 'react';
import {
  Route,
  Routes
} from "react-router-dom";

import './App.css';
import Incre_Decre from './IncreseDecrese/Incre_Decre';
import MachineSlot from './MachineSlot/MachineSlot';
import Hello from './HelloName/Hello';
import ToDoList from './ThapaToDoList/ToDoList';
import ConA from './UseContext/ConA';
import EffectHook from './UseEffect/EffectHook';
import Header from './Header';
import UseRefHook from './UseRef/UseRefHook';
import UseReduceHook from './UseReducer/UseReducerHook';
import UseMemoHook from './UseMemo/UseMemoHook';
import Parent from './UseCallback/Parent';
import Car from './ClassComponents/Car';

const MyInformation = createContext();
const MyFunction = createContext();

// Arrow Function
const App = () => {

  const [num, setNum] = useState(5);

  function abc() {
    setNum(15);
    return (num);
  }

  return (
    <>

      {/* ****************** First Mini-Project  ********************* */}

      {/*             
      <h1>🎰 Welcome to Slot Machine Game... 🎰</h1>
      <div className="container">
          <SlotMatch x={"😄"} y={"😄"} z={"😄"}/>
          <SlotMatch x={"😬"} y={"🍎"} z={"😄"}/>
          <SlotMatch x={"🍎"} y={"🍎"} z={"🍎"}/>
          <SlotMatch x={"🍏"} y={"🍌"} z={"🍎"}/>
        </div>
     */}


      {/* ****************** Second Mini-Project  ********************* */}


      {/*       
      <h1>+ Increment Decrement... -</h1>
      <Incre_Decre />
     */}

      {/* ****************** Name Mini-Project  ********************* */}

      {/* <Hello /> */}

      {/* ****************** Thapa TodoList Mini-Project  ********************* */}

      {/* <ToDoList /> */}


      {/* ****************** useContext  ********************* */}

      {/* <FirstName.Provider value={"Shivam"}>
        <LastName.Provider value={abc}>
          <ConA />
        </LastName.Provider>
      </FirstName.Provider> */}

      {/* ****************** useEffect  ********************* */}

      {/* <EffectHook /> */}

   
      <Header />

      <Routes>
        <Route path='/' element={<Hello />} />
        <Route path='/increasedecrease' element={<Incre_Decre />} />
        <Route path='/machineslot' element={<MachineSlot />} />
        <Route path='/todolist' element={<ToDoList />} />
        <Route path='/ueseffect' element={<EffectHook />} />
        <Route path='/usecontext' element={<MyInformation.Provider value={["Shivam","Mukati",20,80.5]}>
                                              <MyFunction.Provider value={abc}>
                                                <ConA />
                                              </MyFunction.Provider>
                                            </MyInformation.Provider>
                                          }/>
         <Route path='/useref' element={<UseRefHook />} />
         <Route path='/usereduce' element={<UseReduceHook />} />
         <Route path='/usememo' element={<UseMemoHook />} />
         <Route path='/usecallback' element={<Parent />} />
         <Route path='/car' element={<Car secondCarColor="Yellow" totalCar={2} />} />

      </Routes>

    </>
  );
}

export default App;

export { MyInformation, MyFunction }; 