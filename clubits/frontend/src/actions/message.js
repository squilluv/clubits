import axios from 'axios'
import { createMessage, returnErrors } from './messages'
import { tokenConfig } from './auth'

import { GET_MESSAGE, ADD_MESSAGE, GET_ERRORS } from './types'

export const getMessage = () => (dispatch, getState) => {
    axios
        .get('/api/messages/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_MESSAGE,
                payload: res.data
            })
        }).catch(err => console.log(err))
}

export const addMessage = message => (dispatch, getState) => {
    axios
        .post('/api/messages/', message, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addPlace: "Место добавлено" }))
            dispatch({
                type: ADD_MESSAGE,
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