import { GET_PERSONS, ADD_PERSONS, DELETE_PERSONS, PUT_PERSONS } from '../actions/types.js'

const initialState = {
    persons: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PERSONS:
            return {
                ...state,
                persons: action.payload
            }
        case DELETE_PERSONS:
            return {
                ...state,
                persons: state.persons.filter(person => person.id !== action.payload)
            }
        case PUT_PERSONS:
            return {
                ...state,
                persons: state.persons
            }
        case ADD_PERSONS:
            return {
                ...state,
                persons: [...state.persons, action.payload]
            }
        default:
            return state
    }
}