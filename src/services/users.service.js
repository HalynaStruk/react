import {constants} from '../constants'

export const usersService = {
    getAllUsers: () => fetch(constants.apiURL + 'users').then(value => value.json())
}