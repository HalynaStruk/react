import React, {useState} from 'react';

import {CarForm} from "./components";
import {Cars} from "./components/Cars/Cars";

const App = () => {
    const [newCar, setNewCar] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);
    return (
        <div>
            <CarForm setNewCar={setNewCar} carForUpdate={carForUpdate}/>
            <hr/>
            <Cars newCar={newCar} setUserForUpdate={setCarForUpdate}/>
        </div>
    );
};

export default App;