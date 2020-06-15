import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { addContract } from '../../actions/contract'
import { addTeachgroupstudent } from '../../actions/teachgroupstudent'
import { getStudents } from '../../actions/students'
import { getTeachgroup } from '../../actions/teachgroup'
import { getPersons } from '../../actions/persons'
import { getCourse } from '../../actions/course'

export class Form extends Component {

    state = {
        date: '',
        status: '',
        student: '',
        person: '',
        teach_group: '',
        start: '',
        end: '',
        price: '',
        user: '',
        teach_groop: ''
    }

    static propTypes = {
        addContract: PropTypes.func.isRequired,
        addTeachgroupstudent: PropTypes.func.isRequired,
        students: PropTypes.array.isRequired,
        getStudents: PropTypes.func.isRequired,
        persons: PropTypes.array.isRequired,
        getPersons: PropTypes.func.isRequired,
        teachgroup: PropTypes.array.isRequired,
        getTeachgroup: PropTypes.func.isRequired,
        course: PropTypes.array.isRequired,
        getCourse: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getStudents()
        this.props.getPersons()
        this.props.getTeachgroup()
        this.props.getCourse()
        setTimeout(() => {
            this.df()
        }, 300);
        this.GetNowDate()
    }

    df() {
        if (this.props.userId == "") {

        } else {
            this.setState({ user: this.props.userId })
            this.setState({ person: String(this.props.persons.filter(pf => pf.user == this.props.userId).map(p => p.id)), status: "Не оплачен", price: 0 })
        }
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { date, status, student, person, teach_group, start, end, price } = this.state
        const contract = { date, status, student, person, teach_group, start, end, price }
        this.props.addContract(contract)
        if (this.state.user == "") {

        } else {
            var teach_groop = teach_group
            const TGS = { student, teach_groop }
            this.props.addTeachgroupstudent(TGS)
        }
        this.setState({
            date: '',
            status: '',
            student: '',
            person: '',
            teach_group: '',
            teach_groop: '',
            start: '',
            end: '',
            price: ''
        });
    };

    GetNowDate() {
        const date = new Date()
        this.setState({ date: date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2) })
    }

    render() {
        const { date, status, student, person, teach_group, start, end, price, user } = this.state
        return (
            <div className="modal fade" id="modalLoginFormCon" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h4 className="modal-title w-100 font-weight-bold">Формирование нового договора</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form onSubmit={this.onSubmit}>
                            <div className="modal-body mx-3">
                                <div className="md-form mb-5 input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text md-addon" id="material-addon3">Дата: </span>
                                    </div>
                                    <input
                                        className="form-control validate name"
                                        type="date"
                                        name="date"
                                        onChange={this.onChange}
                                        value={date}
                                        disabled
                                    />
                                </div>
                                <div className="md-form mb-5 input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text md-addon" id="material-addon3">Статус: </span>
                                    </div>
                                    <input
                                        className="form-control validate name"
                                        type="text"
                                        name="status"
                                        onChange={this.onChange}
                                        value={status}
                                        disabled
                                    />
                                </div>
                                <div className="md-form mb-5 input-group">
                                    <div className="input-group-prepend">
                                        <select name="student" className="browser-default custom-select lis" searchable="Search here.."
                                            onChange={this.onChange}
                                            value={student} >
                                            <option value="" disabled>Выберите студента</option>
                                            {this.props.students.filter(sf => sf.user == user).map(u => (
                                                <option key={u.id} value={u.id}>{u.second_name + " " + u.name + " " + u.last_name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="md-form mb-5 input-group">
                                    <div className="input-group-prepend">
                                        <select name="person" className="browser-default custom-select lis" searchable="Search here.." disabled
                                            onChange={this.onChange}
                                            value={person} >
                                            <option value="" disabled>Выберите физ лицо</option>
                                            {this.props.persons.map(u => (
                                                <option key={u.id} value={u.id}>{u.second_name + " " + u.name + " " + u.last_name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="md-form mb-5 input-group">
                                    <div className="input-group-prepend">
                                        <select name="teach_group" className="browser-default custom-select lis" searchable="Search here.."
                                            onChange={this.onChange}
                                            value={teach_group} >
                                            <option value="" disabled>Выберите учебную группу</option>
                                            {this.props.teachgroup.map(u => (
                                                <option key={u.id} value={u.id}>{this.props.course.filter(cf => cf.id == u.course).map(c => c.name)}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="md-form mb-5 input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text md-addon" id="material-addon123">Начало: </span>
                                    </div>
                                    <input
                                        className="form-control"
                                        type="date"
                                        name="start"
                                        onChange={this.onChange}
                                        value={start}


                                    />
                                </div>
                                <div className="md-form mb-5 input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text md-addon" id="material-addon123">Конец: </span>
                                    </div>
                                    <input
                                        className="form-control"
                                        type="date"
                                        name="end"
                                        onChange={this.onChange}
                                        value={end}


                                    />
                                </div>

                            </div>

                            <div className="modal-footer d-flex justify-content-center" data-toggle="modal" data-target="#modalLoginFormCon">
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
    students: state.students.students,
    persons: state.persons.persons,
    teachgroup: state.teachgroup.teachgroup,
    course: state.course.course
})

export default connect(mapStateToProps, { addTeachgroupstudent, addContract, getPersons, getStudents, getTeachgroup, getCourse })(Form)
