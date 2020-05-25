import { GET_TEACHGROUPSTUDENT, DELETE_TEACHGROUPSTUDENT, PUT_TEACHGROUPSTUDENT, ADD_TEACHGROUPSTUDENT } from '../actions/types.js'

const initialState = {
    teachgroupstudent: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TEACHGROUPSTUDENT:
            return {
                ...state,
                teachgroupstudent: action.payload
            }
        case DELETE_TEACHGROUPSTUDENT:
            return {
                ...state,
                teachgroupstudent: state.teachgroupstudent.filter(teachgroupstudent => teachgroupstudent.id !== action.payload)
            }
        case PUT_TEACHGROUPSTUDENT:
            return {
                ...state,
                teachgroupstudent: state.teachgroupstudent
            }
        case ADD_TEACHGROUPSTUDENT:
            return {
                ...state,
                teachgroupstudent: [...state.teachgroupstudent, action.payload]
            }
        default:
            return state
    }
}