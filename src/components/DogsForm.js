import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import {actionsDog} from "../redux/slices";

const DogsForm = () => {
    const [nameDog, setNameDog] = useState();
    const dispatch = useDispatch();

    const saveDog = () => {
        dispatch(actionsDog.addDog({nameDog}));
        setNameDog('');
    }
    return (
        <div>
            <label>Dog name: <input type="text" onChange={({target})=>setNameDog(target.value)} value={nameDog}/></label>
            <button onClick={saveDog}>Save</button>
        </div>
    );
};

export {DogsForm};