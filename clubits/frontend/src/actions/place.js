import axios from 'axios'
import { createMessage, returnErrors } from './messages'
import { tokenConfig } from './auth'

import { GET_PLACE, ADD_PLACE, DELETE_PLACE, PUT_PLACE, GET_ERRORS } from './types'

export const getPlace = () => (dispatch, getState) => {
    axios
        .get('/api/place/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_PLACE,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

export const deletePlace = id => (dispatch, getState) => {
    axios
        .delete('/api/place/' + id + "/", tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteStudent: "Удаление успешно" }))
            dispatch({
                type: DELETE_PLACE,
                payload: id
            })
        }).catch(err => console.log(err))
}

export const putPlace = place => (dispatch, getState) => {
    axios
        .put('/api/place/' + place.id + "/", place, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ putStudent: "Изменение успешно" }))
            dispatch({
                type: PUT_PLACE,
                payload: place.id
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

export const addPlace = place => (dispatch, getState) => {
    axios
        .post('/api/place/', place, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addStudent: "Создание успешно" }))
            dispatch({
                type: ADD_PLACE,
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