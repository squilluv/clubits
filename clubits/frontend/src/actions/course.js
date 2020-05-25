import axios from 'axios'
import { createMessage, returnErrors } from './messages'
import { tokenConfig } from './auth'

import { GET_COURSES, PUT_COURSE, DELETE_COURSE, ADD_COURSE } from './types'

export const getCourse = () => (dispatch, getState) => {
    axios
        .get('/api/course/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_COURSES,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

export const deleteCourse = id => (dispatch, getState) => {
    axios
        .delete('/api/course/' + id + "/", tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteStudent: "Удаление успешно" }))
            dispatch({
                type: DELETE_COURSE,
                payload: id
            })
        }).catch(err => console.log(err))
}

export const putCourse = course => (dispatch, getState) => {
    axios
        .put('/api/course/' + course.id + "/", course, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ putStudent: "Изменение успешно" }))
            dispatch({
                type: PUT_COURSE,
                payload: course.id
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

export const addCourse = course => (dispatch, getState) => {
    axios
        .post('/api/course/', course, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addStudent: "Создание успешно" }))
            dispatch({
                type: ADD_COURSE,
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