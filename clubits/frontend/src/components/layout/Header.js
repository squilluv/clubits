import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from "../../actions/auth"

import { getEmployers } from '../../actions/employee'
import { getUsers } from '../../actions/users'

export class Header extends Component {

    state = {
        loading: true
    };

    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired,
        getEmployers: PropTypes.func.isRequired,
        employee: PropTypes.array.isRequired,
        getUsers: PropTypes.func.isRequired,
        users: PropTypes.array.isRequired,
    }

    componentDidMount() {
        this.props.getUsers()
        this.props.getEmployers()
        setTimeout(() => this.setState({ loading: false }), 300);
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;
        if (!isAuthenticated) {
            return <Redirect to="/" />
        }
        const { loading } = this.state;
        if (loading) {
            return (
                <div style={{ width: "100%", height: "100%", top: 0, left: 0, position: "fixed", backgroundColor: "#ffc0cb", zIndex: "9999" }}>
                    <img src="../../static/frontend/src/bitch.gif" className="img-fluid rounded-circle" style={{ position: "absolute", zIndex: "9999", opacity: "1", top: "50%", left: "50%", width: 400, height: 400, margin: "-200px 0 0 -200px"}} />
                </div>
            )
        } else {
            if (this.props.employee.filter(ef => ef.user == user.id).map(e => e.id) != "") {
                return (

                    <nav className="navbar navbar-expand-sm fixed-top white mb-5">
                        <div className="collapse navbar-collapse" id="basicExampleNav">

                            <ul className="nav nav-tabs mr-auto" role="tablist">
                                <li className="nav-item">
                                    <a className="navbar-brand active  black-text" data-toggle="tab" href="#panel10gl" role="tab"><strong>{user ? `ClubITS ${user.username}` : ""}</strong></a>
                                </li>

                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                                    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>


                                <li className="nav-item">
                                    <a className="nav-link black-text" data-toggle="tab" href="#panel5gl" role="tab">Пользователи</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link black-text" data-toggle="tab" href="#panel6gl" role="tab">Посещение</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link black-text" data-toggle="tab" href="#panel7gl" role="tab">Дополнительно</a>
                                </li>
                            </ul>
                            <button
                                onClick={this.props.logout}
                                className="nav-link btn btn-black btn-sm text-light"
                            >
                                Logout
                  </button>
                        </div>

                    </nav>
                )
            } else {
                return <Redirect to="/student" />
            }
        }
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    employee: state.employee.employee,
    users: state.users.users
})

export default connect(mapStateToProps, { logout, getEmployers, getUsers })(Header)