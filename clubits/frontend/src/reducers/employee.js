import { GET_EMPLOYERS, ADD_EMPLOYER, DELETE_EMPLOYER, PUT_EMPLOYER } from '../actions/types.js'

const initialState = {
    employee: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_EMPLOYERS:
            return {
                ...state,
                employee: action.payload
            }
        case DELETE_EMPLOYER:
            return {
                ...state,
                employee: state.employee.filter(student => student.id !== action.payload)
            }
        case PUT_EMPLOYER:
            return {
                ...state,
                employee: state.employee
            }
        case ADD_EMPLOYER:
            return {
                ...state,
                employee: [...state.employee, action.payload]
            }
        default:
            return state
    }
}