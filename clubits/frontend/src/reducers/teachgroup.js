import { GET_TEACHGROUP, ADD_TEACHGROUP, DELETE_TEACHGROUP, PUT_TEACHGROUP } from '../actions/types.js'

const initialState = {
    teachgroup: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TEACHGROUP:
            return {
                ...state,
                teachgroup: action.payload
            }
        case DELETE_TEACHGROUP:
            return {
                ...state,
                teachgroup: state.teachgroup.filter(teachgroup => teachgroup.id !== action.payload)
            }
        case PUT_TEACHGROUP:
            return {
                ...state,
                teachgroup: state.teachgroup
            }
        case ADD_TEACHGROUP:
            return {
                ...state,
                teachgroup: [...state.teachgroup, action.payload]
            }
        default:
            return state
    }
}