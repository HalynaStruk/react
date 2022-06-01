import React, {useReducer} from 'react';

const init = (initCount) => {
    return{count1:initCount, count2:initCount} //initCount при старті будуть 0
}

const reducer = (state, action) => { // action це змінна яка відповідає за обєкт, який ми передали в dispatch({})
    switch (action.type) {
        case 'inc':
            return {...state, count1:state.count1+1}
        case 'dec':
            return {...state, count1:state.count1-1}

        case 'reset':
            return {...state, count1:0}

        case 'set':
            return {...state, count1: action.payload}
    }
}


const App = () => {
    const [state, dispatch] = useReducer(reducer, 0, init); // initCount буде проініціалізовано саме другим параметром тобто 0
    // state це значення яке в ньому лежить як в useState
    // dispatch буде змінювати значення state за допомогою якиходь команд

    // const inc = () => {
    //   dispatch({type:'inc'})
    // }

    return (
        <div>
            <div>
                {state.count1}
                <button onClick={()=> dispatch({type:'inc'})}>inc</button>
                <button onClick={()=> dispatch({type:'dec'})}>dec</button>
                <button onClick={()=> dispatch({type:'reset'})}>reset</button>
                <button onClick={()=> dispatch({type:'set', payload:10})}>set</button>
            </div>
        </div>
    );
};

export default App;