import React, { Component, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from "../../actions/auth"

import { getStudents } from '../../actions/students'

import { getPersons } from '../../actions/persons'
import { getContract } from '../../actions/contract'

import FormPU from '../users/FormPU'
import FormSU from '../users/FormSU'
import FormS from './Form'
import FormCon from '../users/FormCon'

export class FirstOpem extends Component {

    state = {
        userId: ""
    }

    static propTypes = {
        auth: PropTypes.object.isRequired,
        getPersons: PropTypes.func.isRequired,
        persons: PropTypes.array.isRequired,
        getContract: PropTypes.func.isRequired,
        contract: PropTypes.array.isRequired
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;
        try {
            this.setState({ userId: user.id })
        } catch { }
        return (
            <Fragment>
                <div className="modal fade" id="modalMap" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true" style={{ background: "transparent" }}>
                    <div className="modal-dialog modal-fluid" role="document" style={{ background: "transparent" }}>
                        <br /><br /><br />
                        <div className="modal-content" style={{ background: "transparent" }}>
                            <div className="modal-body mx-3" style={{ background: "transparent" }}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d571.4420775608806!2d60.11054112928883!3d55.047275398773166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c53e3330d03d73%3A0xb1ecfc3624e8279c!2z0YPQuy4g0KDQvtC80LDQvdC10L3QutC-LCA1MNCxLCDQnNC40LDRgdGBLCDQp9C10LvRj9Cx0LjQvdGB0LrQsNGPINC-0LHQuy4sIDQ1NjMwMA!5e0!3m2!1sru!2sru!4v1584005564106!5m2!1sru!2sru" style={{ width: "100%", height: 650 }}></iframe>
                            </div>
                            <button type="button" className="close black" data-dismiss="modal" aria-label="Close">
                                ЗАКРЫТЬ
                                            </button>
                        </div>
                    </div>
                </div>
                <FormPU userId={this.state.userId} />
                <FormSU userId={this.state.userId} />
                <FormS userId={this.state.userId} />
                <FormCon userId={this.state.userId} />
                <div className="container">
                    <br /><br /><br /><a className="navbar-brand black-text"><strong>{user ? `Здравствуйте ${user.username}, для продолжения регистрации вы должны следовать следующим этапам` : ""}</strong></a><br /><br /><br /><br />
                    <table className="table table-striped table-sm border mt-5">
                        <tbody>
                            <tr>
                                <td>Этап 1:</td>
                                <td><div className="text-left">
                                    <a className="btn btn-white" data-toggle="modal" data-target="#modalLoginFormP">Заполнить данные о себе</a>
                                </div></td>
                            </tr>
                            <tr>
                                <td>Этап 2:</td>
                                <td><div className="text-left">
                                    <a className="btn btn-white" data-toggle="modal" data-target="#modalLoginFormS">Заполнить данные о своём ребенке</a>
                                </div></td>
                            </tr>
                            <tr>
                                <td>Этап 3:</td>
                                <td><div className="text-left">
                                    <a className="btn btn-white" data-toggle="modal" data-target="#modalLoginFormCon">Сформировать договор</a>
                                </div></td>
                            </tr>
                            <tr>
                                <td>Этап 5:</td>
                                <td><div className="text-left">
                                    <h4><a className="black-text">Ожидайте подтверждение заявки</a></h4>
                                </div></td>
                            </tr>
                        </tbody>
                    </table>
                    <br /><br /><br />
                    <strong>Если у вас возникли какие трудности, звоните по номеру <a href="tel:83513555777">(3513) 555-777</a> или обращ к нам по адресу <a href="blue-text" role="button" data-toggle="modal" data-target="#modalMap">Челябинская область, г. Миасс
ул. Романенко, 50б, 4й этаж</a></strong>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    persons: state.persons.persons,
    contract: state.contract.contract
})

export default connect(mapStateToProps, { getPersons, getContract })(FirstOpem)