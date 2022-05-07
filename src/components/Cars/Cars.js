import React, {useEffect, useState} from 'react';

import {carService} from "../../services";
import {Car} from "../Car/Car";

const Cars = ({newCar}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, []) // цей useEffect виконується один раз після return

    useEffect(() => {
        if (newCar) {
            // setCars([...cars, newCar]); тут react свариться що cars не вписали в dependency
            // або другий варіант запису
            setCars(prevState => [...prevState, newCar]);
            // prevState це є попередній стан тобто це cars
        }
    }, [newCar]) // цей useEffect виконується кожен раз коли оновлюється newCar

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};