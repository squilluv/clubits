import axios from 'axios'
import { createMessage, returnErrors } from './messages'

import { GET_COURSE_LITER, PUT_COURSE_LITER, DELETE_COURSE_LITER, ADD_COURSE_LITER } from './types'

export const getCourseliter = () => dispatch => {
    axios
        .get('/api/courseliter/')
        .then(res => {
            dispatch({
                type: GET_COURSE_LITRA,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

export const deleteCourseliter = id => dispatch => {
    axios
        .delete('/api/courseliter/' + id + "/")
        .then(res => {
            dispatch({
                type: DELETE_COURSE_LITRA,
                payload: id
            })
        }).catch(err => console.log(err))
}

export const putCourseliter = courseliter => dispatch => {
    axios
        .put('/api/courseliter/' + courseliter.id + "/", courseliter)
        .then(res => {
            dispatch({
                type: PUT_COURSE_LITRA,
                payload: courseliter.id
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

export const addCourseliter = courseliter => dispatch => {
    axios
        .post('/api/courseliter/', courseliter)
        .then(res => {
            dispatch({
                type: ADD_COURSE_LITRA,
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