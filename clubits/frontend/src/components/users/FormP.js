import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addPerson } from '../../actions/persons'
import { getUsers } from '../../actions/users'

import InputMask from 'react-input-mask'

export class Form extends Component {

    state = {
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
    }

    componentDidMount() {
        this.props.getUsers()
        setTimeout(() => {
            this.df()
        }, 300);
    }

    static propTypes = {
        users: PropTypes.array.isRequired,
        addPerson: PropTypes.func.isRequired,
        getUsers: PropTypes.func.isRequired,
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { name, second_name, last_name, date_birth, adress, document_type, gender, phone, inn, seria, numberp, given, user, status } = this.state
        const person = { name, second_name, last_name, date_birth, adress, document_type, gender, phone, inn, seria, numberp, given, user, status }
        if (user == "") {
            user = "Строка способная убить"
        } else {
            this.props.addPerson(person)
        }
        this.setState({
            name: "",
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
        });
    };

    df() {
        if (this.props.userId == "") {

        } else {
            this.setState({ user: this.props.userId })
        }
    }

    render() {

        const { name, second_name, last_name, date_birth, adress, document_type, gender, phone, inn, seria, numberp, given, user, status } = this.state
        return (
            <div className="modal fade" id="modalLoginFormP" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h4 className="modal-title w-100 font-weight-bold">Добавление новое физ. лицо</h4>
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
                                    <InputMask className="form-control" mask="+7 (999) 999-99-99" type="text" name="phone" value={phone} onChange={this.onChange} />
                                </div>
                                <div className="md-form mb-5 input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text md-addon" id="material-addon3">ИНН: </span>
                                    </div>
                                    <InputMask className="form-control" mask="9999999999" type="text" name="inn" value={inn} onChange={this.onChange} />
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
                                    <InputMask className="form-control" mask="99 99" type="text" name="seria" value={seria} onChange={this.onChange} />
                                </div>
                                <div className="md-form mb-5 input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text md-addon" id="material-addon3">Номер: </span>
                                    </div>
                                    <InputMask className="form-control" mask="999 999" type="text" name="numberp" value={numberp} onChange={this.onChange} />
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

                            <div className="modal-footer d-flex justify-content-center" data-toggle="modal" data-target="#modalLoginFormP">
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
    users: state.users.users
})

export default connect(mapStateToProps, { getUsers, addPerson })(Form)
