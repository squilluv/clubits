import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addEmployer } from '../../actions/employee'
import { getUsers } from '../../actions/users'

export class Form extends Component {

    state = {
        name: '',
        second_name: '',
        last_name: '',
        position: '',
        work: '',
        user: ''
    }

    componentDidMount() {
        this.props.getUsers()
    }

    static propTypes = {
        users: PropTypes.array.isRequired,
        addEmployer: PropTypes.func.isRequired,
        getUsers: PropTypes.func.isRequired,
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { name, second_name, last_name, position, work, user } = this.state
        const employer = { name, second_name, last_name, position, work, user }
        if (user == "") {
            user = "Строка способная убить"
        } else {
            this.props.addEmployer(employer)
        }
        this.setState({
            name: '',
            second_name: '',
            last_name: '',
            position: '',
            work: '',
            user: '',
        });
    };

    render() {
        const { name, second_name, last_name, position, work, user } = this.state
        return (
            <div className="modal fade" id="modalLoginFormE" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h4 className="modal-title w-100 font-weight-bold">Добавление нового сотрудника</h4>
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

                                <div className="md-form mb-5 input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text md-addon" id="material-addon3">Работает: </span>
                                    </div>
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

                            <div className="modal-footer d-flex justify-content-center" data-toggle="modal" data-target="#modalLoginFormE">
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

export default connect(mapStateToProps, { getUsers, addEmployer })(Form)
