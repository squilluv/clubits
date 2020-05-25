import axios from 'axios'
import { createMessage, returnErrors } from './messages'
import { tokenConfig } from './auth'

import { GET_VISITEDSTUDENTS, ADD_VISITEDSTUDENTS, DELETE_VISITEDSTUDENTS, PUT_VISITEDSTUDENTS, GET_ERRORS } from './types'

export const getVisitedstudents = () => (dispatch, getState) => {
    axios
        .get('/api/visitedstudents/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_VISITEDSTUDENTS,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

export const deleteVisitedstudents = id => (dispatch, getState) => {
    axios
        .delete('/api/visitedstudents/' + id + "/", tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteVisitedstudents: "Место удалено" }))
            dispatch({
                type: DELETE_VISITEDSTUDENTS,
                payload: id
            })
        }).catch(err => console.log(err))
}

export const putVisitedstudents = visitedstudents => (dispatch, getState) => {
    axios
        .put('/api/visitedstudents/' + visitedstudents.id + "/", visitedstudents, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ putVisitedstudents: "Место изменено" }))
            dispatch({
                type: PUT_VISITEDSTUDENTS,
                payload: visitedstudents.id
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

export const addVisitedstudents = visitedstudents => (dispatch, getState) => {
    axios
        .post('/api/visitedstudents/', visitedstudents, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addVisitedstudents: "Место добавлено" }))
            dispatch({
                type: ADD_VISITEDSTUDENTS,
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