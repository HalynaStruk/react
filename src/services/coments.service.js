import {constants} from '../constants'

export const commentsService = {
    getAllComments: () => fetch(constants.apiURL + 'comments').then(value => value.json())
}