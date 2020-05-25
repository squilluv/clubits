import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from "../../actions/auth"

import Chat from '../users/Chat'
import Calendar from '../main/Calendar'
import ContractUser from '../users/ContractUser'

import { getEmployers } from '../../actions/employee'
import { getUsers } from '../../actions/users'

export class DefaultOpen extends Component {

    state = {
        userId: ""
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;
        try {
            this.setState({ userId: user.id })
        } catch { }
        return (
            <div className="container">
                <br /><br /><br /><a className="navbar-brand black-text"><strong>{user ? `ClubITS - ${user.username}` : ""}</strong></a><br /><br /><br /><br />

                <div className="row">
                    <div className="col-md-12 col-lg-12 mx-auto mb-5">

                        <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">

                            <div className="card border-top border-bottom-0 border-left border-right border-light">

                                <div className="card-header border-bottom border-light" role="tab" id="headingOne1">
                                    <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                                        aria-controls="collapseOne1">
                                        <h5 className="black-text font-weight-normal mb-0">
                                            Раписание
                        </h5>
                                    </a>
                                </div>
                                <div id="collapseOne1" className="collapse show" role="tabpanel" aria-labelledby="headingOne1"
                                    data-parent="#accordionEx">
                                    <div className="card-body">
                                        <Calendar />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="card-header border-bottom border-light" role="tab" id="headingTwo2">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
                                aria-expanded="false"
                                aria-controls="collapseTwo2">
                                <h5 className="black-text font-weight-normal mb-0">
                                    Чат
                                </h5>
                            </a>
                        </div>
                        <div id="collapseTwo2" className="collapse" role="tabpanel" aria-labelledby="headingTwo2"
                            data-parent="#accordionEx">
                            <div className="card-body">
                                <Chat userId={this.state.userId} />
                            </div>
                        </div>
                        <hr />
                        <div className="card-header border-bottom border-light" role="tab" id="headingTwo3">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo3"
                                aria-expanded="false"
                                aria-controls="collapseTwo3">
                                <h5 className="black-text font-weight-normal mb-0">
                                    Договор
                                </h5>
                            </a>
                        </div>
                        <div id="collapseTwo3" className="collapse" role="tabpanel" aria-labelledby="headingTwo3"
                            data-parent="#accordionEx">
                            <div className="card-body">
                                <ContractUser userId={this.state.userId} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
})

export default connect(mapStateToProps, { logout })(DefaultOpen)