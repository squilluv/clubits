import { GET_COURSE_GROUP, PUT_COURSE_GROUP, DELETE_COURSE_GROUP, ADD_COURSE_GROUP } from '../actions/types.js'

const initialState = {
    courseGroup: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_COURSE_GROUP:
            return {
                ...state,
                courseGroup: action.payload
            }
        case DELETE_COURSE_GROUP:
            return {
                ...state,
                courseGroup: state.courseGroup.filter(student => student.id !== action.payload)
            }
        case PUT_COURSE_GROUP:
            return {
                ...state,
                courseGroup: state.courseGroup
            }
        case ADD_COURSE_GROUP:
            return {
                ...state,
                courseGroup: [...state.courseGroup, action.payload]
            }
        default:
            return state
    }
}