import { GET_PLACE, ADD_PLACE, DELETE_PLACE, PUT_PLACE } from '../actions/types.js'

const initialState = {
    place: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PLACE:
            return {
                ...state,
                place: action.payload
            }
        case DELETE_PLACE:
            return {
                ...state,
                place: state.place.filter(student => student.id !== action.payload)
            }
        case PUT_PLACE:
            return {
                ...state,
                place: state.place
            }
        case ADD_PLACE:
            return {
                ...state,
                place: [...state.place, action.payload]
            }
        default:
            return state
    }
}