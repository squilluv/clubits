import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addStudent } from '../../actions/students'
import { getUsers } from '../../actions/users'
import { getPlace } from '../../actions/place'
import { getPersons } from '../../actions/persons'

import InputMask from 'react-input-mask'

export class Form extends Component {

    state = {
        name: '',
        second_name: '',
        last_name: '',
        date_bitrh: '',
        phone: '',
        category: 'Школьник',
        place_life: '',
        documentp: '',
        place: '',
        user: '',
    }

    componentDidMount() {
        this.props.getUsers()
        this.props.getPlace()
        setTimeout(() => {
            this.df()
        }, 300);
    }

    df() {
        if (this.props.userId == "") {

        } else {
            this.setState({ user: this.props.userId })
            this.setState({
                second_name: new String(this.props.persons.filter(pf => pf.user == this.props.userId).map(p => p.second_name)),
                place_life: new String(this.props.persons.filter(pf => pf.user == this.props.userId).map(p => p.adress))
            })
        }
    }

    static propTypes = {
        users: PropTypes.array.isRequired,
        addStudent: PropTypes.func.isRequired,
        getUsers: PropTypes.func.isRequired,
        getPlace: PropTypes.func.isRequired,
        place: PropTypes.array.isRequired,
        getPersons: PropTypes.func.isRequired,
        persons: PropTypes.array.isRequired
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { name, user, second_name, last_name, date_bitrh, phone, category, place_life, documentp, place } = this.state
        const student = { name, user, second_name, last_name, date_bitrh, phone, category, place_life, documentp, place }
        if (user == "") {
            user = "Строка способная убить"
        } else {
            this.props.addStudent(student)
        }
        this.setState({
            name: "",
            second_name: '',
            last_name: '',
            date_bitrh: '',
            phone: '',
            category: '',
            place_life: '',
            documentp: '',
            place: '',
            user: '',
        });
    };

    render() {
        const { name, user, second_name, last_name, date_bitrh, phone, category, place_life, documentp, place } = this.state
        return (
            <div className="modal fade" id="modalLoginFormS" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h4 className="modal-title w-100 font-weight-bold">Добавление нового пользователя</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form onSubmit={this.onSubmit}>
                            <div className="modal-body mx-3">
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
                                    <InputMask className="form-control" mask="+7 (999) 999-99-99" type="text" name="phone" value={phone} onChange={this.onChange} />
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
                                        disabled
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

                            <div className="modal-footer d-flex justify-content-center" data-toggle="modal" data-target="#modalLoginFormS">
                                <button className="btn btn-dark" type="submit">Добавить</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    users: state.users.users,
    place: state.place.place,
    persons: state.persons.persons
})

export default connect(mapStateToProps, { getUsers, getPlace, addStudent, getPersons })(Form)
