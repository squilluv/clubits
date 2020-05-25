import { GET_CONTRACT, PUT_CONTRACT, DELETE_CONTRACT, ADD_CONTRACT } from '../actions/types.js'

const initialState = {
    contract: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CONTRACT:
            return {
                ...state,
                contract: action.payload
            }
        case DELETE_CONTRACT:
            return {
                ...state,
                contract: state.contract.filter(student => student.id !== action.payload)
            }
        case PUT_CONTRACT:
            return {
                ...state,
                contract: state.contract
            }
        case ADD_CONTRACT:
            return {
                ...state,
                contract: [...state.contract, action.payload]
            }
        default:
            return state
    }
}