import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import {actionsCat} from "../redux/slices";

const CatsForm = () => {
const [name, setName] = useState('');
const dispatch = useDispatch();

const saveCat = () => {
    dispatch(actionsCat.addCat({name}))
    setName(''); // очищає форму після заповнення
}
    return (
        <div>
            <label>Cat name: <input type="text" onChange={({target})=>setName(target.value)} value={name}/></label>
            <button onClick={saveCat}>Save</button>
        </div>
    );
};

export {CatsForm};