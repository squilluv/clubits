import { GET_COURSES, PUT_COURSE, DELETE_COURSE, ADD_COURSE } from '../actions/types.js'

const initialState = {
    course: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_COURSES:
            return {
                ...state,
                course: action.payload
            }
        case DELETE_COURSE:
            return {
                ...state,
                course: state.course.filter(student => student.id !== action.payload)
            }
        case PUT_COURSE:
            return {
                ...state,
                course: state.course
            }
        case ADD_COURSE:
            return {
                ...state,
                course: [...state.course, action.payload]
            }
        default:
            return state
    }
}