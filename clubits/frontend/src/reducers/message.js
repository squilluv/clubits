import { GET_MESSAGE, ADD_MESSAGE } from '../actions/types.js'

const initialState = {
    message: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MESSAGE:
            return {
                ...state,
                message: action.payload
            }
        case ADD_MESSAGE:
            return {
                ...state,
                message: [...state.message, action.payload]
            }
        default:
            return state
    }
}