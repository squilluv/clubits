import axios from 'axios'
import { createMessage, returnErrors } from './messages'
import { tokenConfig } from './auth'

import { GET_SECTIONS, ADD_SECTIONS, DELETE_SECTIONS, PUT_SECTIONS, GET_ERRORS } from './types'

export const getSections = () => (dispatch, getState) => {
    axios
        .get('/api/sections/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_SECTIONS,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

export const deleteSections = id => (dispatch, getState) => {
    axios
        .delete('/api/sections/' + id + "/", tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteStudent: "Удаление успешно" }))
            dispatch({
                type: DELETE_SECTIONS,
                payload: id
            })
        }).catch(err => console.log(err))
}

export const putSections = sections => (dispatch, getState) => {
    axios
        .put('/api/sections/' + sections.id + "/", sections, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ putStudent: "Изменение успешно" }))
            dispatch({
                type: PUT_SECTIONS,
                payload: sections.id
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

export const addSections = sections => (dispatch, getState) => {
    axios
        .post('/api/sections/', sections, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addStudent: "Создание успешно" }))
            dispatch({
                type: ADD_SECTIONS,
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