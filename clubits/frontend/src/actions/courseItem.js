import axios from 'axios'
import { createMessage, returnErrors } from './messages'

import { GET_COURSE_ITEM, PUT_COURSE_ITEM, DELETE_COURSE_ITEM, ADD_COURSE_ITEM } from './types'

export const getCourseitem = () => dispatch => {
    axios
        .get('/api/courseitem/')
        .then(res => {
            dispatch({
                type: GET_COURSE_ITEM,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

export const deleteCourseitem = id => dispatch => {
    axios
        .delete('/api/courseitem/' + id + "/")
        .then(res => {
            dispatch({
                type: DELETE_COURSE_ITEM,
                payload: id
            })
        }).catch(err => console.log(err))
}

export const putCourseitem = courseitem => dispatch => {
    axios
        .put('/api/courseitem/' + courseitem.id + "/", courseitem)
        .then(res => {
            dispatch({
                type: PUT_COURSE_ITEM,
                payload: courseitem.id
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

export const addCourseitem = courseitem => dispatch => {
    axios
        .post('/api/courseitem/', courseitem)
        .then(res => {
            dispatch({
                type: ADD_COURSE_ITEM,
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