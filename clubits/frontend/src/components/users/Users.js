import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getUsers } from '../../actions/users'
import { getStudents } from '../../actions/students'
import { getPersons } from '../../actions/persons'
import { MDBDataTable } from 'mdbreact'

import RegisterStaff from '../users/RegisterStaff'

export class Users extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            username: '',
            email: '',
            date_joined: '',
            editModalShow: false
        }
    }

    componentDidMount() {
        this.props.getUsers()
        this.props.getStudents()
        this.props.getPersons()
    }

    static propTypes = {
        users: PropTypes.array.isRequired,
        students: PropTypes.array.isRequired,
        persons: PropTypes.array.isRequired,
        getPersons: PropTypes.func.isRequired,
        getUsers: PropTypes.func.isRequired,
        getStudents: PropTypes.func.isRequired
    }

    render() {
        const { id, username, email, date_joined } = this.state
        const datau = {
            columns: [
                {
                    label: 'Номер',
                    field: 'id',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Логин',
                    field: 'name',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Email',
                    field: 'email',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'Дата регистрации',
                    field: 'date_joined',
                    sort: 'asc',
                    width: 200
                }
            ],
            rows: this.props.users.map(u => ({
                id: u.id,
                name: <a
                    className="font-weight-bold"
                    data-toggle="modal" data-target="#modalInfoFormU"
                    onClick={() => this.setState({ editModalShow: true, id: u.id, username: u.username, email: u.email, date_joined: u.date_joined })}
                >
                    {u.username}
                </a>,
                email: u.email,
                date_joined: u.date_joined.substring(0, 11)
            }))
        }
        return (
            <Fragment>
                <RegisterStaff />
                <div className="text-right">
                    <a className="btn btn-dark btn-rounded mb-4" data-toggle="modal" data-target="#modalRegStaffForm">Добавить сотрудника</a>
                </div>
                <div className="my-5 mb-5 pb-5">
                    <div className="modal fade" id="modalInfoFormU" role="dialog" aria-labelledby="myModalLabel"
                        aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header text-center">
                                    <h4 className="modal-title w-100 font-weight-bold">{username}</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <form>
                                    <div className="modal-body mx-3">
                                        <div className="md-form mb-5 input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text md-addon" id="material-addon3">ID: </span>
                                            </div>
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="id"
                                                value={id}
                                                disabled

                                            />
                                        </div>
                                        <div className="md-form mb-5 input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text md-addon" id="material-addon3">Логин: </span>
                                            </div>
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="username"
                                                value={username}
                                                disabled

                                            />
                                        </div>
                                        <div className="md-form mb-5 input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text md-addon" id="material-addon3">Email: </span>
                                            </div>
                                            <input
                                                className="form-control"
                                                type="email"
                                                name="email"
                                                value={email}
                                                disabled

                                            />
                                        </div>
                                        <div className="md-form mb-5 input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text md-addon" id="material-addon3">Дата регистрация: </span>
                                            </div>
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="date_joined"
                                                value={date_joined.substring(0, 11)}
                                                disabled

                                            />
                                        </div>
                                        <h3>Ссылка на студента</h3>
                                        <table className="table table-striped border">
                                            <thead>
                                                <tr>
                                                    <th>Номер</th>
                                                    <th>ФИО</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.props.students.filter(s => s.user == id).map(usr => (
                                                    <tr key={usr.id}>
                                                        <td>{usr.id}</td>
                                                        <td>{usr.second_name + " " + usr.name + " " + usr.last_name} </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <h3>Ссылка на физическое лицо</h3>
                                        <table className="table table-striped border">
                                            <thead>
                                                <tr>
                                                    <th>Номер</th>
                                                    <th>ФИО</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.props.persons.filter(s => s.user == id).map(usr => (
                                                    <tr key={usr.id}>
                                                        <td>{usr.id}</td>
                                                        <td>{usr.second_name + " " + usr.name + " " + usr.last_name} </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <MDBDataTable
                        striped
                        bordered
                        small
                        noBottomColumns
                        data={datau}
                    />
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users.users,
    students: state.students.students,
    persons: state.persons.persons
})

export default connect(mapStateToProps, { getUsers, getStudents, getPersons })(Users)
