import {axiosService} from "./axios.service";
import {urls} from "../constants";

const carService = {
    getAll: ()=> axiosService.get(urls.cars), // get витягуємо інформацію з сервера
    getById: (id)=> axiosService.get(`${urls.cars}/${id}`), // `${urls.cars}/${id}` це те саме = urls.cars + '/' + id
    create: (car)=> axiosService.post(urls.cars, car), // post записуємо інформацію на сервер, car це дані що пересилатимуться на сервер
    deleteById: (id)=> axiosService.delete(`${urls.cars}/${id}`)
}

export {
    carService
};