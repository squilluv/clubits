import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getEmployers, putEmployer, deleteEmployer } from '../../actions/employee'
import { getUsers } from '../../actions/users'

import { MDBDataTable } from 'mdbreact'

export class Employee extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            second_name: '',
            last_name: '',
            position: '',
            work: '',
            user: '',
            editModalShow: false
        }
    }

    static propTypes = {
        employee: PropTypes.array.isRequired,
        getEmployers: PropTypes.func.isRequired,
        users: PropTypes.array.isRequired,
        getUsers: PropTypes.func.isRequired,
        putEmployer: PropTypes.func.isRequired,
        deleteEmployer: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getEmployers(),
            this.props.getUsers()
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })

    onSubmit = e => {
        e.preventDefault();
        const { id, name, second_name, last_name, position, work, user } = this.state
        const employee = { id, name, second_name, last_name, position, work, user }
        this.props.putEmployer(employee)
        setTimeout(() => {
            this.updateTable()
        }, 500);
    }

    updateTable() {
        this.props.getEmployers()
    }

    render() {
        const { id, name, second_name, last_name, position, work, user } = this.state
        let editModalClose = () => this.setState({ editModalShow: false })
        const datas = {
            columns: [
                {
                    label: 'Номер',
                    field: 'id',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'Имя',
                    field: 'name',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Фамилия',
                    field: 'second_name',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Отчество',
                    field: 'last_name',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: '',
                    field: 'putbut',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: '',
                    field: 'delbut',
                    sort: 'asc',
                    width: 200
                }
            ],
            rows: this.props.employee.map(u => ({
                id: u.id,
                name: <a
                    className="font-weight-bold"
                    data-toggle="modal" data-target="#modalInfoFormE"
                    onClick={() => this.setState({ editModalShow: true, id: u.id, name: u.name, second_name: u.second_name, last_name: u.last_name, position: u.position, work: u.work, user: u.user })}
                >
                    {u.name}
                </a>,
                second_name: u.second_name,
                last_name: u.last_name,
                putbut:
                    <Fragment>
                        <a
                            className="text-secondary font-weight-bold"
                            data-toggle="modal" data-target="#modalPutFormE"
                            onClick={() => this.setState({ editModalShow: true, id: u.id, name: u.name, second_name: u.second_name, last_name: u.last_name, position: u.position, work: u.work, user: u.user })}
                        >PUT</a>
                    </Fragment>
                ,
                delbut: <a
                    onClick={this.props.deleteEmployer.bind(this, u.id)}
                    className="text-danger font-weight-bold"
                >DEL
                </a>
            }))
        }
        return (
            <Fragment>
                <div className="text-right">
                    <a className="btn btn-dark btn-rounded mb-4" data-toggle="modal" data-target="#modalLoginFormE">Добавить</a>
                </div>
                <div className="modal fade" id="modalPutFormE" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h4 className="modal-title w-100 font-weight-bold">Изменить данные пользователя</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onSubmit={this.onSubmit}>
                                <div className="modal-body mx-3">
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">ID: </span>
                                        </div>
                                        <input
                                            className="form-control validate"
                                            type="text"
                                            name="id"
                                            onChange={this.onChange}
                                            value={id}
                                            disabled

                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Имя: </span>
                                        </div>
                                        <input
                                            className="form-control validate name"
                                            type="text"
                                            name="name"
                                            onChange={this.onChange}
                                            value={name}
                                        />
                                    </div>

                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Фамилия: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="second_name"
                                            onChange={this.onChange}
                                            value={second_name}


                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Отчество: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="last_name"
                                            onChange={this.onChange}
                                            value={last_name}


                                        />
                                    </div>

                                    <div className="md-form mb-5">
                                        <select
                                            className="browser-default custom-select lis"
                                            name="position"
                                            onChange={this.onChange}
                                            value={position}
                                        >
                                            <option value="" disabled>Выберите должность</option>
                                            <option value="Администратор">Администратор</option>
                                            <option value="Методист">Методист</option>
                                            <option value="Менеджер">Менеджер</option>
                                            <option value="Преподаватель">Преподаватель</option>
                                            <option value="Ученик">Ученик</option>
                                        </select>
                                    </div>
                                    <div className="md-form mb-5">
                                        <select
                                            className="browser-default custom-select lis"
                                            name="work"
                                            onChange={this.onChange}
                                            value={work}
                                        >
                                            <option value="1">Да</option>
                                            <option value="0">Нет</option>
                                        </select>
                                    </div>

                                    <div className="md-form mb-4">
                                        <select
                                            className="browser-default custom-select lis"
                                            name="user"
                                            onChange={this.onChange}
                                            value={user}
                                        >
                                            <option value="" disabled>Выберите пользователя</option>
                                            {this.props.users.map(u => (
                                                <option key={u.id} value={u.id}>{u.username}</option>
                                            ))}
                                        </select>
                                    </div>

                                </div>
                                <div className="modal-footer d-flex justify-content-center" data-toggle="modal" data-target="#modalPutFormE">
                                    <button className="btn btn-dark" type="submit">Изменить</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="modalInfoFormE" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h4 className="modal-title w-100 font-weight-bold">{second_name + " " + name + " " + last_name}</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onSubmit={this.onSubmit}>
                                <div className="modal-body mx-3">
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">ID: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="id"
                                            onChange={this.onChange}
                                            value={id}
                                            disabled

                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Фамилия: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="second_name"
                                            onChange={this.onChange}
                                            value={second_name}
                                            disabled

                                        />
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Имя: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="name"
                                            onChange={this.onChange}
                                            value={name}
                                            disabled

                                        />
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Отчество: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="last_name"
                                            onChange={this.onChange}
                                            value={last_name}
                                            disabled

                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Должность: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="position"
                                            onChange={this.onChange}
                                            value={position}
                                            disabled

                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Работает: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="work"
                                            onChange={this.onChange}
                                            value={work}
                                            disabled

                                        />
                                    </div>
                                    <h3>Ссылка на пользователя</h3>
                                    <table className="table table-striped border">
                                        <thead>
                                            <tr>
                                                <th>Номер</th>
                                                <th>Логин</th>
                                                <th>Email</th>
                                                <th>Дата регистрация</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.props.users.filter(u => u.id == user).map(usr => (
                                                <tr key={usr.id}>
                                                    <td>{usr.id}</td>
                                                    <td>{usr.username}</td>
                                                    <td>{usr.email}</td>
                                                    <td>{usr.date_joined.substring(0, 19)}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <MDBDataTable
                        striped
                        bordered
                        small
                        data={datas}
                    />
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    employee: state.employee.employee,
    users: state.users.users,
})

export default connect(mapStateToProps, { getEmployers, putEmployer, deleteEmployer, getUsers })(Employee)
