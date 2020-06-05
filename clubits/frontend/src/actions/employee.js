import axios from 'axios'
import { createMessage, returnErrors } from './messages'
import { tokenConfig } from './auth'

import { GET_EMPLOYERS, ADD_EMPLOYER, DELETE_EMPLOYER, PUT_EMPLOYER, GET_ERRORS } from './types'

export const getEmployers = () => (dispatch, getState) => {
    axios
        .get('/api/employee/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_EMPLOYERS,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

export const deleteEmployer = id => (dispatch, getState) => {
    axios
        .delete('/api/employee/' + id + "/", tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteStudent: "Удаление успешно" }))
            dispatch({
                type: DELETE_EMPLOYER,
                payload: id
            })
        }).catch(err => console.log(err))
}

export const putEmployer = employee => (dispatch, getState) => {
    axios
        .put('/api/employee/' + employee.id + "/", employee, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ putStudent: "Изменение успешно" }))
            dispatch({
                type: PUT_EMPLOYER,
                payload: employee.id
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

export const addEmployer = employee => (dispatch, getState) => {
    axios
        .post('/api/employee/', employee, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addStudent: "Создание успешно" }))
            dispatch({
                type: ADD_EMPLOYER,
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