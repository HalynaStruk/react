import React from 'react';
import {useDispatch, useSelector} from "react-redux";



const App = () => {

    let state = useSelector(state => state); // тут ми дістаємось
    // до повертаймого значення reducer, який буде символізувати поточний стан
    let dispatch = useDispatch() // за допомогою useDispatch() ми запихаємо всі значення в action
    //  завдяки useDispatch, useSelector ми можемо в будь якій компоненті використовувати
    //  функції( в даному випадку це reducer())

    return (
        <div>
            <h1>state is - {state}</h1>
          <button onClick={()=>{
              dispatch({type:'INC',payload: 1})
              // dispatch викликає reducer
              // {type, payload} це наш обєкт action
          }}>increment</button>

          <button onClick={()=>{
              dispatch({type:'DEC',payload: 1})
          }}>decrement</button>

          <button onClick={()=>{
              dispatch({type:'RESET',payload: 0})
          }}>reset</button>
        </div>
    );
};

export default App;