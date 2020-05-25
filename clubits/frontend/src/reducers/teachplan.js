import { GET_TEACHPLAN, PUT_TEACHPLAN, DELETE_TEACHPLAN, ADD_TEACHPLAN } from '../actions/types.js'

const initialState = {
    teachplan: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TEACHPLAN:
            return {
                ...state,
                teachplan: action.payload
            }
        case DELETE_TEACHPLAN:
            return {
                ...state,
                teachplan: state.teachplan.filter(student => student.id !== action.payload)
            }
        case PUT_TEACHPLAN:
            return {
                ...state,
                teachplan: state.teachplan
            }
        case ADD_TEACHPLAN:
            return {
                ...state,
                teachplan: [...state.teachplan, action.payload]
            }
        default:
            return state
    }
}