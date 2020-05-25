import axios from 'axios'
import { createMessage, returnErrors } from './messages'
import { tokenConfig } from './auth'

import { GET_COURSE_GROUP, PUT_COURSE_GROUP, DELETE_COURSE_GROUP, ADD_COURSE_GROUP } from './types'

export const getCoursgroup = () => (dispatch, getState) => {
    axios
        .get('/api/coursegroup/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_COURSE_GROUP,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

export const deleteCoursgroup = id => (dispatch, getState) => {
    axios
        .delete('/api/coursegroup/' + id + "/", tokenConfig(getState))
        .then(res => {
            dispatch({
                type: DELETE_COURSE_GROUP,
                payload: id
            })
        }).catch(err => console.log(err))
}

export const putCoursgroup = coursegroup => (dispatch, getState) => {
    axios
        .put('/api/coursegroup/' + coursegroup.id + "/", coursegroup, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: PUT_COURSE_GROUP,
                payload: coursegroup.id
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

export const addCoursgroup = coursegroup => (dispatch, getState) => {
    axios
        .post('/api/coursegroup/', coursegroup, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: ADD_COURSE_GROUP,
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