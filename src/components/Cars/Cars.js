import React, {useEffect, useState} from 'react';

import {carService} from "../../services";
import {Car} from "../Car/Car";

const Cars = ({newCar, setCarForUpdate, updatedCar}) => {
    const [cars, setCars] = useState([]);
    const [deleteCarId, setDeleteCarId] = useState(null);

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

    useEffect(() => {
        if (deleteCarId) {
            setCars(cars.filter(car => car.id !== deleteCarId));
        }
    }, [deleteCarId])

    useEffect(() => {
        if (updatedCar) {
            const car = cars.find(car => car.id === updatedCar.id)
            Object.assign(car, updatedCar) // assign поєднує поля, якщо ми оновили ключ model то це встановиться в updatedCar і його значення буде в пріорітеті тоді в car model перезапишеться
            setCars([...cars])
        }
    }, [updatedCar])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate}
                                  setDeleteCarId={setDeleteCarId}/>)}
        </div>
    );
};

export {Cars};