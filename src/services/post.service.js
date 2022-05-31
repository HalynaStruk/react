import {axiosService} from "./axios.service";
import {urls} from "../constants";

const PostService = {
    getAll:(page, _limit=2)=>axiosService.get(urls.posts,  {
        params:{
            _start:(page-1)*_limit, // тут вказали скільки постів пропустити
            _limit:_limit // оскільки кллюч і значення співпадають то можливий такий запис : _limit
        }
    }),
    getById:(id)=>axiosService.get(`${urls.posts}/${id}`),
    getByUserId:(id)=>axiosService.get(`${urls.users}/${id}/posts`)
}
export {PostService};