import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Link, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import PropTypes from "prop-types";

import { Provider } from 'react-redux'
import store from '../../store'

import { getPersons } from '../../actions/persons'
import { getContract } from '../../actions/contract'
import { getEmployers } from '../../actions/employee'

import FirstOpen from './FirstOpen'
import DefaultOpen from './DefaultOpen'

export class Student extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
        getPersons: PropTypes.func.isRequired,
        persons: PropTypes.array.isRequired,
        getContract: PropTypes.func.isRequired,
        contract: PropTypes.array.isRequired,
        getEmployers: PropTypes.func.isRequired,
        employee: PropTypes.array.isRequired
    }

    state = {
        loading: true,
        userId: ""
    };

    componentDidMount() {
        this.props.getPersons()
        this.props.getContract()
        this.props.getEmployers()
        setTimeout(() => this.setState({ loading: false }), 300);
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;
        try {
            try {
                this.setState({ userId: user.id })
            } catch { }
        } catch {

        }
        const { loading } = this.state;
        if (loading) {
            return (
                <div style={{ width: "100%", height: "100%", top: 0, left: 0, position: "fixed", backgroundColor: "white", zIndex: "9999" }}>
                    <img src="../../static/frontend/src/loader.gif" className="img-fluid rounded-circle" style={{ position: "absolute", zIndex: "9999", opacity: "1", top: "50%", left: "50%", width: 400, height: 400, margin: "-200px 0 0 -200px", backgroundColor: "black" }} />
                </div>
            )
        } else {
            if (this.props.employee.filter(ef => ef.user == this.state.userId).map(e => e.id) != "") {
                return <Redirect to="/admin" />
            } else {
                return (
                    <Provider store={store}>
                        <Fragment>
                            {this.props.persons.filter(pf => pf.user == this.state.userId).map(p => this.props.contract.filter(cf => cf.person == p.id).map(c => c.price)) == "" ? <FirstOpen /> : <DefaultOpen />}
                        </Fragment>
                    </Provider>
                )
            }
        }
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    persons: state.persons.persons,
    contract: state.contract.contract,
    employee: state.employee.employee
})

export default connect(mapStateToProps, { getPersons, getContract, getEmployers })(Student)
