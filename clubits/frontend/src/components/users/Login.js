import React, { Component, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../actions/auth'
import { getEmployers } from '../../actions/employee'
import { getUsers } from '../../actions/users'

export class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    static propTypes = {
        login: PropTypes.func.isRequired,
        getEmployers: PropTypes.func.isRequired,
        employee: PropTypes.array.isRequired,
        getUsers: PropTypes.func.isRequired,
        users: PropTypes.array.isRequired,
        isAuthenticated: PropTypes.bool
    }

    componentDidMount() {
        this.props.getUsers()
        this.props.getEmployers()
    }

    onSubmit = e => {
        e.preventDefault()
        this.props.login(this.state.username, this.state.password)
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })

    render() {
        if (this.props.isAuthenticated) {
            var userId = String(this.props.users.filter(u => u.username == this.state.username).map(usr => usr.id))
            var finalId = String(this.props.employee.filter(e => e.user == userId).map(emp => emp.user))
            if (userId == finalId) {
                return <Redirect to="/student" />
            } else {
                return <Redirect to="/student" />
            }
        }
        const { username, password } = this.state
        return (
            <Fragment>


                <div className="modal fade" id="modalLoginForm" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h4 className="modal-title w-100 font-weight-bold">Вход</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onSubmit={this.onSubmit}>
                                <div className="modal-body mx-3">
                                    <div className="md-form mb-5">
                                        <input
                                            className="form-control validate"
                                            type="text"
                                            name="username"
                                            onChange={this.onChange}
                                            value={username}
                                        />
                                        <label data-error="wrong" data-success="right">ФИО</label>
                                    </div>

                                    <div className="md-form mb-4">
                                        <input
                                            className="form-control validate"
                                            type="password"
                                            name="password"
                                            onChange={this.onChange}
                                            value={password}
                                        />
                                        <label data-error="wrong" data-success="right">Пароль</label>
                                    </div>

                                </div>

                                <div className="modal-footer d-flex justify-content-center" data-toggle="modal" data-target="#modalLoginForm">
                                    <button className="btn btn-dark" type="submit">Войти</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
/* {username == "lolicon" && <Link to="/admin">sfsdf</Link>}
{username == "lolicom" && <Link to="/gesr">sfsdf</Link>} */
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    employee: state.employee.employee,
    users: state.users.users
})

export default connect(mapStateToProps, { login, getEmployers, getUsers })(Login)
