import axios from 'axios'
import { createMessage, returnErrors } from './messages'
import { tokenConfig } from './auth'

import { GET_TEACHGROUPSTUDENT, ADD_TEACHGROUPSTUDENT, DELETE_TEACHGROUPSTUDENT, PUT_TEACHGROUPSTUDENT, GET_ERRORS } from './types'

export const getTeachgroupstudent = () => (dispatch, getState) => {
    axios
        .get('/api/teachgroupstudent/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_TEACHGROUPSTUDENT,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

export const deleteTeachgroupstudent = id => (dispatch, getState) => {
    axios
        .delete('/api/teachgroupstudent/' + id + "/", tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteTeachgroupstudent: "Место удалено" }))
            dispatch({
                type: DELETE_TEACHGROUPSTUDENT,
                payload: id
            })
        }).catch(err => console.log(err))
}

export const putTeachgroupstudent = teachgroupstudent => (dispatch, getState) => {
    axios
        .put('/api/teachgroupstudent/' + teachgroupstudent.id + "/", teachgroupstudent, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ putTeachgroupstudent: "Место изменено" }))
            dispatch({
                type: PUT_TEACHGROUPSTUDENT,
                payload: teachgroupstudent.id
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

export const addTeachgroupstudent = teachgroupstudent => (dispatch, getState) => {
    axios
        .post('/api/teachgroupstudent/', teachgroupstudent, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addTeachgroupstudent: "Место добавлено" }))
            dispatch({
                type: ADD_TEACHGROUPSTUDENT,
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