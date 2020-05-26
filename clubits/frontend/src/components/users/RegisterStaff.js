import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { registerStaff, logout } from '../../actions/auth'
import { createMessage } from "../../actions/messages"

export class RegisterStaff extends Component {

    state = {
        username: "",
        password: "",
        password2: ""
    }

    static propTypes = {
        registerStaff: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }

    onSubmit = e => {
        e.preventDefault();
        const { username, password, password2 } = this.state
        const newUser = {
            username,
            password
        }
        this.props.registerStaff(newUser);
        this.props.logout
        this.setState({
            username: "",
            password: "",
            password2: ""
        })
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { username, password, password2 } = this.state;
        return (
            <Fragment>
                <div className="modal fade" id="modalRegStaffForm" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h4 className="modal-title w-100 font-weight-bold">Регистрация сотрудника</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onSubmit={this.onSubmit}>
                                <div className="modal-body mx-3">


                                    <div className="md-form mt-2">
                                        <input type="text" id="materialRegisterFormText" className="form-control" name="username" onChange={this.onChange} value={username} />
                                        <label>Логин</label>
                                    </div>

                                    <div className="md-form mt-2">
                                        <input type="password" id="materialRegisterFormPassword" className="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock" name="password" onChange={this.onChange} value={password} />
                                        <label>Пароль</label>
                                    </div>

                                    <div className="md-form mt-2">
                                        <input type="password" id="materialRegisterFormPassword2" className="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock" name="password2" onChange={this.onChange} value={password2} />
                                        <label>Подтвердите пароль</label>
                                    </div>

                                </div>

                                <div className="modal-footer d-flex justify-content-center" data-toggle="modal" data-target="#modalRegStaffForm">
                                    <button className="btn btn-dark" type="submit">Зарегистрировать</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { registerStaff, createMessage })(RegisterStaff)
