import axios from 'axios';
import { createMessage, returnErrors } from './messages';

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    REGISTERSTAFF_FAIL,
    REGISTERSTAFF_SUCCESS
} from './types';

export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });

    axios
        .get('/api/auth/user', tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: USER_LOADED,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR,
            });
        });
};

export const login = (username, password) => (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = JSON.stringify({ username, password });

    axios
        .post('/api/auth/login', body, config)
        .then((res) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: LOGIN_FAIL,
            });
        });
};

export const register = ({ username, password, email }) => (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = JSON.stringify({ username, email, password });

    axios
        .post('/api/auth/register', body, config)
        .then((res) => {
            dispatch(createMessage({ register: "Вы были успешно зарегистрированы" }))
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: REGISTER_FAIL,
            });
        });
};

export const registerStaff = ({ username, password, email }) => (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = JSON.stringify({ username, email, password });

    axios
        .post('/api/auth/registerstaff', body, config)
        .then((res) => {
            dispatch(createMessage({ register: "Сотрудник зарегистрирован" }))
            dispatch({
                type: REGISTERSTAFF_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: REGISTERSTAFF_FAIL,
            });
        });
};

export const logout = () => (dispatch, getState) => {
    axios
        .post('/api/auth/logout/', null, tokenConfig(getState))
        .then((res) => {
            dispatch({ type: 'CLEAR_LEADS' });
            dispatch({
                type: LOGOUT_SUCCESS,
            });
        })
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
        });
};

export const tokenConfig = (getState) => {
    const token = getState().auth.token;

    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    return config;
};