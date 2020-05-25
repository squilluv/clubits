import axios from 'axios'
import { createMessage, returnErrors } from './messages'
import { tokenConfig } from './auth'

import { GET_CONTRACT, PUT_CONTRACT, DELETE_CONTRACT, ADD_CONTRACT } from './types'

export const getContract = () => (dispatch, getState) => {
    axios
        .get('/api/contract/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_CONTRACT,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

export const deleteContract = id => (dispatch, getState) => {
    axios
        .delete('/api/contract/' + id + "/", tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteStudent: "Удаление успешно" }))
            dispatch({
                type: DELETE_CONTRACT,
                payload: id
            })
        }).catch(err => console.log(err))
}

export const putContract = contract => (dispatch, getState) => {
    axios
        .put('/api/contract/' + contract.id + "/", contract, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ putStudent: "Изменение успешно" }))
            dispatch({
                type: PUT_CONTRACT,
                payload: contract.id
            })
        }).catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            })
        })
}

export const addContract = contract => (dispatch, getState) => {
    axios
        .post('/api/contract/', contract, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addStudent: "Создание успешно" }))
            dispatch({
                type: ADD_CONTRACT,
                payload: res.data
            })
        }).catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            })
        })
}