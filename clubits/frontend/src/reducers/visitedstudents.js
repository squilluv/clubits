import { GET_VISITEDSTUDENTS, ADD_VISITEDSTUDENTS, DELETE_VISITEDSTUDENTS, PUT_VISITEDSTUDENTS } from '../actions/types.js'

const initialState = {
    visitedstudents: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_VISITEDSTUDENTS:
            return {
                ...state,
                visitedstudents: action.payload
            }
        case DELETE_VISITEDSTUDENTS:
            return {
                ...state,
                visitedstudents: state.visitedstudents.filter(student => student.id !== action.payload)
            }
        case PUT_VISITEDSTUDENTS:
            return {
                ...state,
                visitedstudents: state.visitedstudents
            }
        case ADD_VISITEDSTUDENTS:
            return {
                ...state,
                visitedstudents: [...state.visitedstudents, action.payload]
            }
        default:
            return state
    }
}