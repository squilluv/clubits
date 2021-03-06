import axios from 'axios'
import { createMessage, returnErrors } from './messages'
import { tokenConfig } from './auth'

import { GET_TEACHPLAN, ADD_TEACHPLAN, DELETE_TEACHPLAN, PUT_TEACHPLAN, GET_ERRORS } from './types'

export const getTeachplan = () => (dispatch, getState) => {
    axios
        .get('/api/teachplan/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_TEACHPLAN,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

export const deleteTeachplan = id => (dispatch, getState) => {
    axios
        .delete('/api/teachplan/' + id + "/", tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteStudent: "Удаление успешно" }))
            dispatch({
                type: DELETE_TEACHPLAN,
                payload: id
            })
        }).catch(err => console.log(err))
}

export const putTeachplan = teachplan => (dispatch, getState) => {
    axios
        .put('/api/teachplan/' + teachplan.id + "/", teachplan, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ putStudent: "Изменение успешно" }))
            dispatch({
                type: PUT_TEACHPLAN,
                payload: teachplan.id
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

export const addTeachplan = teachplan => (dispatch, getState) => {
    axios
        .post('/api/teachplan/', teachplan, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addStudent: "Создание успешно" }))
            dispatch({
                type: ADD_TEACHPLAN,
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