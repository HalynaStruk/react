import React, {useState} from 'react';

import {CarForm} from "./components";
import {Cars} from "./components/Cars/Cars";

const App = () => {
    const [newCar, setNewCar] = useState(null);
    return (
        <div>
            <CarForm setNewCar={setNewCar}/>
            <hr/>
            <Cars newCar={newCar}/>
        </div>
    );
};

export default App;