import axios from 'axios'
import { createMessage, returnErrors } from './messages'

import { GET_COURSE_PO, PUT_COURSE_PO, DELETE_COURSE_PO, ADD_COURSE_PO } from './types'

export const getCoursepo = () => dispatch => {
    axios
        .get('/api/coursepo/')
        .then(res => {
            dispatch({
                type: GET_COURSE_PO,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

export const deleteCoursepo = id => dispatch => {
    axios
        .delete('/api/coursepo/' + id + "/")
        .then(res => {
            dispatch({
                type: DELETE_COURSE_PO,
                payload: id
            })
        }).catch(err => console.log(err))
}

export const putCoursepo = coursepo => dispatch => {
    axios
        .put('/api/coursepo/' + coursepo.id + "/", coursepo)
        .then(res => {
            dispatch({
                type: PUT_COURSE_PO,
                payload: coursepo.id
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

export const addCoursepo = coursepo => dispatch => {
    axios
        .post('/api/coursepo/', coursepo)
        .then(res => {
            dispatch({
                type: ADD_COURSE_PO,
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