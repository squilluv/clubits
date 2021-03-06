import axios from 'axios'
import { createMessage, returnErrors } from './messages'
import { tokenConfig } from './auth'

import { GET_STUDENTS, ADD_STUDENT, DELETE_STUDENT, PUT_STUDENT, GET_ERRORS } from './types'

export const getStudents = () => (dispatch, getState) => {
    axios
        .get('/api/students/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_STUDENTS,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

export const deleteStudent = id => (dispatch, getState) => {
    axios
        .delete('/api/students/' + id + "/", tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteStudent: "Удаление успешно" }))
            dispatch({
                type: DELETE_STUDENT,
                payload: id
            })
        }).catch(err => console.log(err))
}

export const putStudent = student => (dispatch, getState) => {
    axios
        .put('/api/students/' + student.id + "/", student, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ putStudent: "Изменение успешно" }))
            dispatch({
                type: PUT_STUDENT,
                payload: student.id
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

export const addStudent = student => (dispatch, getState) => {
    axios
        .post('/api/students/', student, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addStudent: "Создание успешно" }))
            dispatch({
                type: ADD_STUDENT,
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