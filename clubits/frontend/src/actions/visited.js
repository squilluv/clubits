import axios from 'axios'
import { createMessage, returnErrors } from './messages'
import { tokenConfig } from './auth'

import { GET_VISITED, ADD_VISITED, DELETE_VISITED, PUT_VISITED, GET_ERRORS } from './types'

export const getVisited = () => (dispatch, getState) => {
    axios
        .get('/api/visited/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_VISITED,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

export const deleteVisited = id => (dispatch, getState) => {
    axios
        .delete('/api/visited/' + id + "/", tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteStudent: "Удаление успешно" }))
            dispatch({
                type: DELETE_VISITED,
                payload: id
            })
        }).catch(err => console.log(err))
}

export const putVisited = visited => (dispatch, getState) => {
    axios
        .put('/api/visited/' + visited.id + "/", visited, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ putStudent: "Изменение успешно" }))
            dispatch({
                type: PUT_VISITED,
                payload: visited.id
            })
        }).catch(err => {
            dispatch(createMessage({ notPut: "Не удалось изменить" }))
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

export const addVisited = visited => (dispatch, getState) => {
    axios
        .post('/api/visited/', visited, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addStudent: "Создание успешно" }))
            dispatch({
                type: ADD_VISITED,
                payload: res.data
            })
        }).catch(err => {
            dispatch(createMessage({ notAdd: "Не удалось добавить" }))
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