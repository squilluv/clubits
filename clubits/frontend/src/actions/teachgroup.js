import axios from 'axios'
import { createMessage, returnErrors } from './messages'
import { tokenConfig } from './auth'

import { GET_TEACHGROUP, ADD_TEACHGROUP, DELETE_TEACHGROUP, PUT_TEACHGROUP, GET_ERRORS } from './types'

export const getTeachgroup = () => (dispatch, getState) => {
    axios
        .get('/api/teachgroup/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_TEACHGROUP,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

export const deleteTeachgroup = id => (dispatch, getState) => {
    axios
        .delete('/api/teachgroup/' + id + "/", tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteStudent: "Удаление успешно" }))
            dispatch({
                type: DELETE_TEACHGROUP,
                payload: id
            })
        }).catch(err => console.log(err))
}

export const putTeachgroup = teachgroup => (dispatch, getState) => {
    axios
        .put('/api/teachgroup/' + teachgroup.id + "/", teachgroup, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ putStudent: "Изменение успешно" }))
            dispatch({
                type: PUT_TEACHGROUP,
                payload: teachgroup.id
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

export const addTeachgroup = teachgroup => (dispatch, getState) => {
    axios
        .post('/api/teachgroup/', teachgroup, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addStudent: "Создание успешно" }))
            dispatch({
                type: ADD_TEACHGROUP,
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