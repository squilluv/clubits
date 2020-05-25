import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { register, logout } from '../../actions/auth'
import { createMessage } from "../../actions/messages"

export class Register extends Component {

    state = {
        username: "",
        email: "",
        password: "",
        password2: "",
        isChecked: false
    }

    toggleChange = () => {
        this.setState({
            isChecked: !this.state.isChecked,
        });
        console.log("!" + this.state.isChecked)
    }

    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }

    onSubmit = e => {
        e.preventDefault();
        const { username, email, password, password2 } = this.state
        if (password !== password2) {
            this.props.createMessage({ passwordNotMatch: "Пароли не совпадают" })
        } else if (this.state.isChecked == false) {
            this.props.createMessage({ CheckTrue: "Лучше бы тебе согласится на обработку персональных данных" })
        }
        else {
            const newUser = {
                username,
                password,
                email
            }
            this.props.register(newUser);
            this.props.logout
            this.setState({
                username: "",
                email: "",
                password: "",
                password2: "",
                isChecked: false
            })
        }
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { username, email, password, password2 } = this.state;
        return (
            <Fragment>
                <h3 className="black-text text-center py-4 font-weight-bold">РЕГИСТРАЦИЯ</h3>
                <div className="card-body px-lg-5">

                    <form className="text-center" onSubmit={this.onSubmit}>

                        <div className="md-form mt-2">
                            <input type="text" id="materialRegisterFormText" className="form-control" name="username" onChange={this.onChange} value={username} />
                            <label>Логин</label>
                        </div>

                        <div className="md-form mt-2">
                            <input type="email" id="materialEmailFormText" className="form-control" name="email" onChange={this.onChange} value={email} />
                            <label>E-mail</label>
                        </div>

                        <div className="md-form mt-2">
                            <input type="password" id="materialRegisterFormPassword" className="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock" name="password" onChange={this.onChange} value={password} />
                            <label>Пароль</label>
                        </div>

                        <div className="md-form mt-2">
                            <input type="password" id="materialRegisterFormPassword2" className="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock" name="password2" onChange={this.onChange} value={password2} />
                            <label>Подтвердите пароль</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="materialRegisterFormNewsletter" checked={this.state.isChecked}
                                onChange={this.toggleChange} />
                            <label className="form-check-label" htmlFor="materialRegisterFormNewsletter">Соглашаюсь на обработку персональных данных</label>
                        </div>
                        <button className="btn btn-outline-black btn-rounded  my-4 waves-effect z-depth-0" type="submit">Регистрация</button>
                    </form>

                </div>

            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { register, createMessage })(Register)
