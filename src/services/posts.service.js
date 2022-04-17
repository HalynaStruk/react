import {constants} from '../constants';

export const postsService = {
    getAllPosts: () => fetch(constants.apiURL + 'posts').then(value => value.json())
}