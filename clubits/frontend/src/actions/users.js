import axios from 'axios'
import { createMessage } from './messages'
import { tokenConfig } from './auth'

import { GET_USERS } from './types'

export const getUsers = () => (dispatch, getState) => {
    axios
        .get('/api/users/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_USERS,
                payload: res.data
            })
        }).catch(err => console.log(err))
}