import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'

import Dashboard from '../users/Dashboard'
import Header from '../layout/Header'

import { logout } from "../../actions/auth"

import { Provider } from 'react-redux'
import store from '../../store'

export class Admin extends Component {

    render() {

        return (
            <Provider store={store}>
                <Fragment>

                    <Header />

                    <Dashboard />
                </Fragment>
            </Provider>
        )
    }
}

export default Admin
