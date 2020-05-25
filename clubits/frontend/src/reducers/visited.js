import { GET_VISITED, ADD_VISITED, DELETE_VISITED, PUT_VISITED } from '../actions/types.js'

const initialState = {
    visited: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_VISITED:
            return {
                ...state,
                visited: action.payload
            }
        case DELETE_VISITED:
            return {
                ...state,
                visited: state.visited.filter(student => student.id !== action.payload)
            }
        case PUT_VISITED:
            return {
                ...state,
                visited: state.visited
            }
        case ADD_VISITED:
            return {
                ...state,
                visited: [...state.visited, action.payload]
            }
        default:
            return state
    }
}