import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";


const root = ReactDOM.createRoot(document.getElementById('root'));

function reducer(state = 0, action) {
    // state це початковий стан
    switch (action.type) {
        case 'INC':
            return state + action.payload
        case 'DEC':
            return state - action.payload
        case 'RESET':
            return state = action.payload
        default:
            return state;
    }
}

let store = createStore(reducer) // createStore() це функція яка має доступ до
// загального сховища але змінювати його не може


root.render(
    <Provider store={store}>
        <App/>
    </Provider>
    )