import axios from 'axios'
import { createMessage, returnErrors } from './messages'
import { tokenConfig } from './auth'

import { GET_PERSONS, ADD_PERSONS, DELETE_PERSONS, PUT_PERSONS, GET_ERRORS } from './types'

export const getPersons = () => (dispatch, getState) => {
    axios
        .get('/api/persons/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_PERSONS,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

export const deletePerson = id => (dispatch, getState) => {
    axios
        .delete('/api/persons/' + id + "/", tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteStudent: "Удаление успешно" }))
            dispatch({
                type: DELETE_PERSONS,
                payload: id
            })
        }).catch(err => console.log(err))
}

export const putPerson = person => (dispatch, getState) => {
    axios
        .put('/api/persons/' + person.id + "/", person, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ putStudent: "Изменение успешно" }))
            dispatch({
                type: PUT_PERSONS,
                payload: person.id
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

export const addPerson = person => (dispatch, getState) => {
    axios
        .post('/api/persons/', person, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addStudent: "Создание успешно" }))
            dispatch({
                type: ADD_PERSONS,
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