import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getPersons, putPerson, deletePerson } from '../../actions/persons'
import { getUsers } from '../../actions/users'

import { MDBDataTable } from 'mdbreact'

export class Persons extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            second_name: '',
            last_name: '',
            date_birth: '',
            adress: '',
            document_type: '',
            gender: '',
            status: '',
            phone: '',
            inn: '',
            seria: '',
            numberp: '',
            given: '',
            user: '',
            editModalShow: false
        }
    }

    static propTypes = {
        persons: PropTypes.array.isRequired,
        getPersons: PropTypes.func.isRequired,
        users: PropTypes.array.isRequired,
        getUsers: PropTypes.func.isRequired,
        putPerson: PropTypes.func.isRequired,
        deletePerson: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getPersons(),
            this.props.getUsers()
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })

    onSubmit = e => {
        e.preventDefault();
        const { id, name, second_name, last_name, date_birth, adress, document_type, gender, phone, inn, seria, numberp, given, user, status } = this.state
        const person = { id, name, second_name, last_name, date_birth, adress, document_type, gender, phone, inn, seria, numberp, given, user, status }
        this.props.putPerson(person)
        setTimeout(() => {
            this.updateTable()
        }, 500);
    }

    updateTable() {
        this.props.getPersons()
    }

    render() {
        const { id, name, second_name, last_name, date_birth, adress, document_type, gender, phone, inn, seria, numberp, given, user, status } = this.state
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
            rows: this.props.persons.map(u => ({
                id: u.id,
                name: <a
                    className="font-weight-bold"
                    data-toggle="modal" data-target="#modalInfoFormP"
                    onClick={() => this.setState({ editModalShow: true, id: u.id, name: u.name, second_name: u.second_name, last_name: u.last_name, date_birth: u.date_birth, adress: u.adress, document_type: u.document_type, gender: u.gender, phone: u.phone, inn: u.inn, seria: u.seria, numberp: u.numberp, given: u.given, user: u.user, status: u.status })}
                >
                    {u.name}
                </a>,
                second_name: u.second_name,
                last_name: u.last_name,
                putbut:
                    <Fragment>
                        <a
                            className="text-secondary font-weight-bold"
                            data-toggle="modal" data-target="#modalPutFormP"
                            onClick={() => this.setState({ editModalShow: true, id: u.id, name: u.name, second_name: u.second_name, last_name: u.last_name, date_birth: u.date_birth, adress: u.adress, document_type: u.document_type, gender: u.gender, phone: u.phone, inn: u.inn, seria: u.seria, numberp: u.numberp, given: u.given, user: u.user, status: u.status })}
                        >PUT</a>
                    </Fragment>
                ,
                delbut: <a
                    onClick={this.props.deletePerson.bind(this, u.id)}
                    className="text-danger font-weight-bold"
                >DEL
                </a>
            }))
        }
        return (
            <Fragment>
                <div className="text-right">
                    <a className="btn btn-dark btn-rounded mb-4" data-toggle="modal" data-target="#modalLoginFormP">Добавить</a>
                </div>
                <div className="modal fade" id="modalPutFormP" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h4 className="modal-title w-100 font-weight-bold">Изменить данные физ. лица</h4>
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
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Дата Рождения: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="date"
                                            name="date_birth"
                                            onChange={this.onChange}
                                            value={date_birth}
                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Адрес: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="adress"
                                            onChange={this.onChange}
                                            value={adress}
                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Документ: </span>
                                        </div>
                                        <select
                                            className="browser-default custom-select lis"
                                            name="document_type"
                                            onChange={this.onChange}
                                            value={document_type}
                                        >
                                            <option value="" disabled>Выберите тип документа</option>
                                            <option value="Водительское удостоверение">Водительское удостоверение</option>
                                            <option value="Паспорт">Паспорт</option>
                                            <option value="Свидетельство о рождении">Свидетельство о рождении</option>
                                            <option value="СНИЛС">СНИЛС</option>
                                        </select>
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Гендер: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="gender"
                                            onChange={this.onChange}
                                            value={gender}
                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Телефон: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="phone"
                                            onChange={this.onChange}
                                            value={phone}
                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">ИНН: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="inn"
                                            onChange={this.onChange}
                                            value={inn}
                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Статус: </span>
                                        </div>
                                        <select
                                            className="browser-default custom-select lis"
                                            name="status"
                                            onChange={this.onChange}
                                            value={status}
                                        >
                                            <option value="" disabled>Выберите статус</option>
                                            <option value="Родитель">Родитель</option>
                                            <option value="Сотрудник">Сотрудник</option>
                                            <option value="Ученик">Ученик</option>
                                            <option value="Кандидат">Кандидат</option>
                                            <option value="Представитель контр агента">Представитель контр агента</option>
                                        </select>
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Серия: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="seria"
                                            onChange={this.onChange}
                                            value={seria}
                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Номер: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="numberp"
                                            onChange={this.onChange}
                                            value={numberp}
                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Выдан: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="given"
                                            onChange={this.onChange}
                                            value={given}
                                        />
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
                                <div className="modal-footer d-flex justify-content-center" data-toggle="modal" data-target="#modalPutFormP">
                                    <button className="btn btn-dark" type="submit">Изменить</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="modalInfoFormP" role="dialog" aria-labelledby="myModalLabel"
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
                                            <span className="input-group-text md-addon" id="material-addon3">Дата рождения: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="date_birth"
                                            onChange={this.onChange}
                                            value={date_birth}
                                            disabled

                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Адрес: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="adress"
                                            onChange={this.onChange}
                                            value={adress}
                                            disabled

                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Тип документ: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="document_type"
                                            onChange={this.onChange}
                                            value={document_type}
                                            disabled

                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Гендер: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="gender"
                                            onChange={this.onChange}
                                            value={gender}
                                            disabled

                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Телефон: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="phone"
                                            onChange={this.onChange}
                                            value={phone}
                                            disabled

                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">ИНН: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="inn"
                                            onChange={this.onChange}
                                            value={inn}
                                            disabled

                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Статус: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="status"
                                            onChange={this.onChange}
                                            value={status}
                                            disabled

                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Серия: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="seria"
                                            onChange={this.onChange}
                                            value={seria}
                                            disabled

                                        />
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Номер: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="numberp"
                                            onChange={this.onChange}
                                            value={numberp}
                                            disabled

                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Выдан: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="given"
                                            onChange={this.onChange}
                                            value={given}
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
    persons: state.persons.persons,
    users: state.users.users,
})

export default connect(mapStateToProps, { getPersons, putPerson, deletePerson, getUsers })(Persons)
