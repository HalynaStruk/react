import {axiosService} from "./axios.service";
import {urls} from "../constants";

const carService = {
    getAll: ()=> axiosService.get(urls.cars), // get витягуємо інформацію з сервера
    getById: (id)=> axiosService.get(`${urls.cars}/${id}`), // `${urls.cars}/${id}` це те саме = urls.cars + '/' + id
    create: (car)=> axiosService.post(urls.cars, car), // post записуємо інформацію на сервер, car це дані що пересилатимуться на сервер
    updateById: (id, newCar) => axiosService.put(`${urls.cars}/${id}`, newCar), //  patch для оновлення одного з полів, put оновлює всі поля, newCar - нові дані якими оновлюємо обєкт по id
    deleteById: (id)=> axiosService.delete(`${urls.cars}/${id}`)
}

export {
    carService
};