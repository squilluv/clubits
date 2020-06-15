import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getStudents, putStudent, deleteStudent } from '../../actions/students'
import { getUsers } from '../../actions/users'
import { getPlace } from '../../actions/place'

import { MDBDataTable } from 'mdbreact'

export class Students extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            second_name: '',
            last_name: '',
            date_bitrh: '',
            phone: '',
            category: '',
            place_life: '',
            documentp: '',
            place: '',
            user: '',
            editModalShow: false
        }
    }

    static propTypes = {
        students: PropTypes.array.isRequired,
        getStudents: PropTypes.func.isRequired,
        users: PropTypes.array.isRequired,
        getUsers: PropTypes.func.isRequired,
        place: PropTypes.array.isRequired,
        getPlace: PropTypes.func.isRequired,
        putStudent: PropTypes.func.isRequired,
        deleteStudent: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getStudents(),
            this.props.getUsers()
        this.props.getPlace()
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })

    onSubmit = e => {
        e.preventDefault();
        const { id, name, user, second_name, last_name, date_bitrh, phone, category, place_life, documentp, place } = this.state
        const student = { id, name, user, second_name, last_name, date_bitrh, phone, category, place_life, documentp, place }
        this.props.putStudent(student)
        setTimeout(() => {
            this.updateTable()
        }, 500);
    }

    updateTable() {
        this.props.getStudents()
    }

    render() {
        const { id, name, user, second_name, last_name, date_bitrh, phone, category, place_life, documentp, place } = this.state
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
            rows: this.props.students.map(u => ({
                id: u.id,
                name: <a
                    className="font-weight-bold"
                    data-toggle="modal" data-target="#modalInfoFormS"
                    onClick={() => this.setState({ editModalShow: true, id: u.id, name: u.name, second_name: u.second_name, last_name: u.last_name, date_bitrh: u.date_bitrh, place_life: u.place_life, phone: u.phone, category: u.category, documentp: u.documentp, place: u.place, user: u.user })}
                >
                    {u.name}
                </a>,
                second_name: u.second_name,
                last_name: u.last_name,
                putbut:
                    <Fragment>
                        <a
                            className="text-secondary font-weight-bold"
                            data-toggle="modal" data-target="#modalPutFormS"
                            onClick={() => this.setState({ editModalShow: true, id: u.id, name: u.name, second_name: u.second_name, last_name: u.last_name, date_bitrh: u.date_bitrh, place_life: u.place_life, phone: u.phone, category: u.category, documentp: u.documentp, place: u.place, user: u.user })}
                        >PUT</a>
                    </Fragment>
                ,
                delbut: <a
                    onClick={this.props.deleteStudent.bind(this, u.id)}
                    className="text-danger font-weight-bold"
                >DEL
                </a>
            }))
        }
        return (
            <Fragment>
                <div className="text-right">
                    <a className="btn btn-dark btn-rounded mb-4" data-toggle="modal" data-target="#modalLoginFormS">Добавить</a>
                </div>
                <div className="modal fade" id="modalPutFormS" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h4 className="modal-title w-100 font-weight-bold">Изменить данные ученика</h4>
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
                                            name="date_bitrh"
                                            onChange={this.onChange}
                                            value={date_bitrh}


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
                                            <span className="input-group-text md-addon" id="material-addon3">Адрес проживания: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="place_life"
                                            onChange={this.onChange}
                                            value={place_life}


                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Категория: </span>
                                        </div>
                                        <select
                                            className="browser-default custom-select lis"
                                            name="category"
                                            onChange={this.onChange}
                                            value={category}
                                        >
                                            <option value="Школьник" disabled selected>Школьник</option>
                                        </select>
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Паспорт/свидетельство: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="documentp"
                                            onChange={this.onChange}
                                            value={documentp}


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

                                    <div className="md-form mb-4">
                                        <select
                                            className="browser-default custom-select lis"
                                            name="place"
                                            onChange={this.onChange}
                                            value={place}
                                        >
                                            <option value="" disabled>Выберите место учебы/работы</option>
                                            {this.props.place.map(plc => (
                                                <option key={plc.id} value={plc.id}>{plc.name}</option>
                                            ))}
                                        </select>
                                    </div>

                                </div>
                                <div className="modal-footer d-flex justify-content-center" data-toggle="modal" data-target="#modalPutFormS">
                                    <button className="btn btn-dark" type="submit">Изменить</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="modalInfoFormS" role="dialog" aria-labelledby="myModalLabel"
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
                                            <span className="input-group-text md-addon" id="material-addon3">Дата Рождения: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="date_bitrh"
                                            onChange={this.onChange}
                                            value={date_bitrh}
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
                                            <span className="input-group-text md-addon" id="material-addon3">Адрес проживания: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="place_life"
                                            onChange={this.onChange}
                                            value={place_life}
                                            disabled

                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Категория: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="category"
                                            onChange={this.onChange}
                                            value={category}
                                            disabled

                                        />
                                    </div>
                                    <div className="md-form mb-5 input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text md-addon" id="material-addon3">Паспорт/свидетельство: </span>
                                        </div>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="documentp"
                                            onChange={this.onChange}
                                            value={documentp}
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
                                    <h3>Ссылка на место учебы/работы</h3>
                                    <table className="table table-striped border">
                                        <thead>
                                            <tr>
                                                <th>Номер</th>
                                                <th>Название</th>
                                                <th>Телефон</th>
                                                <th>Директор</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.props.place.filter(p => p.id == place).map(plc => (
                                                <tr key={plc.id}>
                                                    <td>{plc.id}</td>
                                                    <td>{plc.name}</td>
                                                    <td>{plc.phone}</td>
                                                    <td>{plc.director}</td>
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
    students: state.students.students,
    users: state.users.users,
    place: state.place.place
})

export default connect(mapStateToProps, { getStudents, putStudent, deleteStudent, getUsers, getPlace })(Students)
