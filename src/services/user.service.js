import {axiosService} from "./axios.service";
import {urls} from "../constants";

const userService = {
    getAll:()=>axiosService.get(urls.users),
    getByUserId:(id)=>axiosService.get(`${urls.users}/${id}`)
}

export {userService};