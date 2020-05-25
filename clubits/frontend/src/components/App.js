import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import Admin from './main/Admin'
import Student from './main/Student'
import Site from './main/Site'
import PrivateRoute from './common/PrivateRoute'
import Alerts from "./layout/Alerts"

import { Provider } from 'react-redux'
import store from '../store'
import { loadUser } from '../actions/auth'

const alertOption = {
    timeout: 3000,
    position: "bottom center"
}

class App extends Component {

    componentDidMount() {
        store.dispatch(loadUser())
    }

    render() {

        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOption}>
                    <Router>
                        <Fragment>
                            <Alerts />
                            <Switch>
                                <Route exact path="/" component={Site} />
                                <Route path="/student" component={Student} />
                                <Route path="/admin" component={Admin} />
                            </Switch>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));